import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
  FiRotateCcw,
} from "react-icons/fi";
import { scIaScenes } from "../../data/scIaArchitecture";
import ScIaArchitectureDiagram from "./ScIaArchitectureDiagram";

type PlaybackStatus = "idle" | "playing" | "paused" | "completed";

interface PlaybackState {
  status: PlaybackStatus;
  sceneIndex: number;
}

const lastSceneIndex = scIaScenes.length - 1;

export default function ScIaFlowStory() {
  const reducedMotion = useReducedMotion();
  const [playback, setPlayback] = useState<PlaybackState>({
    status: "idle",
    sceneIndex: 0,
  });
  const storyRef = useRef<HTMLDivElement>(null);
  const activeScene = scIaScenes[playback.sceneIndex];

  useEffect(() => {
    if (playback.status !== "playing" || reducedMotion) return;

    const timeout = window.setTimeout(() => {
      setPlayback((current) => {
        if (current.sceneIndex >= lastSceneIndex) {
          return { ...current, status: "completed" };
        }

        return { status: "playing", sceneIndex: current.sceneIndex + 1 };
      });
    }, 3200);

    return () => window.clearTimeout(timeout);
  }, [playback.sceneIndex, playback.status, reducedMotion]);

  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPlayback((current) =>
            current.status === "playing"
              ? { ...current, status: "paused" }
              : current,
          );
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(story);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setPlayback((current) =>
          current.status === "playing"
            ? { ...current, status: "paused" }
            : current,
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const selectScene = (sceneIndex: number) => {
    setPlayback({ status: "paused", sceneIndex });
  };

  const move = (direction: -1 | 1) => {
    setPlayback((current) => ({
      status: "paused",
      sceneIndex: Math.min(
        lastSceneIndex,
        Math.max(0, current.sceneIndex + direction),
      ),
    }));
  };

  const togglePlayback = () => {
    if (reducedMotion) return;

    setPlayback((current) => {
      if (current.status === "playing") {
        return { ...current, status: "paused" };
      }

      if (current.status === "completed") {
        return { status: "playing", sceneIndex: 0 };
      }

      return { ...current, status: "playing" };
    });
  };

  const reset = () => setPlayback({ status: "idle", sceneIndex: 0 });

  return (
    <div className="scia-story" ref={storyRef}>
      <div className="scia-story-steps" aria-label="Pasos del funcionamiento de SC-IA">
        {scIaScenes.map((scene, index) => {
          const selected = playback.sceneIndex === index;
          return (
            <button
              type="button"
              key={scene.id}
              aria-current={selected ? "step" : undefined}
              onClick={() => selectScene(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {scene.title}
            </button>
          );
        })}
      </div>

      <ScIaArchitectureDiagram
        variant="overview"
        activeScene={activeScene.id}
        motionEnabled={playback.status === "playing"}
        showLegend
      />

      <div className="scia-story-panel">
        <div className="scia-story-copy">
          <p className="eyebrow">
            PASO {playback.sceneIndex + 1} / {scIaScenes.length}
          </p>
          <h3>{activeScene.title}</h3>
          <p>{activeScene.description}</p>
          <div className="tags">
            {activeScene.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          {playback.status === "playing" && (
            <span className="sr-only" aria-live="polite">
              Mostrando paso {playback.sceneIndex + 1}: {activeScene.title}
            </span>
          )}
        </div>

        <div className="scia-story-controls" aria-label="Controles del recorrido">
          <button
            type="button"
            className="scia-control-button scia-control-icon"
            onClick={() => move(-1)}
            disabled={playback.sceneIndex === 0}
            aria-label="Paso anterior"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="scia-control-button scia-control-primary"
            onClick={togglePlayback}
            disabled={Boolean(reducedMotion)}
          >
            {playback.status === "playing" ? (
              <FiPause aria-hidden="true" />
            ) : (
              <FiPlay aria-hidden="true" />
            )}
            {playback.status === "playing"
              ? "Pausar"
              : playback.status === "completed"
                ? "Repetir recorrido"
                : "Reproducir recorrido"}
          </button>
          <button
            type="button"
            className="scia-control-button scia-control-icon"
            onClick={() => move(1)}
            disabled={playback.sceneIndex === lastSceneIndex}
            aria-label="Paso siguiente"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
          <button
            type="button"
            className="scia-control-button scia-control-reset"
            onClick={reset}
          >
            <FiRotateCcw aria-hidden="true" /> Reiniciar
          </button>
        </div>
      </div>

      {reducedMotion && (
        <p className="scia-motion-note">
          El movimiento automático está desactivado por tu preferencia del
          sistema. Todos los pasos siguen disponibles mediante los controles.
        </p>
      )}

      <ol className="scia-story-transcript">
        {scIaScenes.map((scene) => (
          <li key={scene.id}>
            <strong>{scene.title}</strong>
            <span>{scene.description}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
