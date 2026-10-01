/**
 * Adapted from Kokonut UI's Beams Background.
 * Copyright (c) 2025 kokonutUI — MIT License.
 * https://kokonutui.com/docs/backgrounds/beams-background
 */
import { useEffect, useRef } from "react";
import "../../beams-background.css";

type BeamIntensity = "subtle" | "medium" | "strong";

interface BeamsBackgroundProps {
  className?: string;
  intensity?: BeamIntensity;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
  color: readonly [number, number, number];
}

const palette = [
  [232, 181, 107],
  [204, 151, 82],
  [178, 163, 112],
  [218, 190, 136],
] as const;

const intensityScale: Record<BeamIntensity, number> = {
  subtle: 0.62,
  medium: 0.82,
  strong: 1,
};

function createBeam(width: number, height: number, index: number): Beam {
  return {
    x: Math.random() * width * 1.35 - width * 0.18,
    y: Math.random() * height * 1.6 - height * 0.3,
    width: 28 + Math.random() * 56,
    length: height * (1.6 + Math.random() * 0.6),
    angle: -36 + Math.random() * 10,
    speed: 10 + Math.random() * 13,
    opacity: 0.085 + Math.random() * 0.095,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.55 + Math.random() * 0.5,
    color: palette[index % palette.length],
  };
}

export default function BeamsBackground({
  className = "",
  intensity = "medium",
}: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let beams: Beam[] = [];
    let frame = 0;
    let lastTime = performance.now();
    let visible = true;
    let width = 1;
    let height = 1;

    const resetBeam = (beam: Beam, index: number) => {
      const replacement = createBeam(width, height, index);
      Object.assign(beam, replacement, {
        x: Math.random() * width * 1.2 - width * 0.1,
        y: height + 80,
      });
    };

    const drawBeam = (beam: Beam) => {
      context.save();
      context.translate(beam.x, beam.y);
      context.rotate((beam.angle * Math.PI) / 180);

      const pulse = 0.82 + Math.sin(beam.pulse) * 0.18;
      const alpha = beam.opacity * pulse * intensityScale[intensity];
      const [red, green, blue] = beam.color;
      const gradient = context.createLinearGradient(0, 0, 0, beam.length);
      gradient.addColorStop(0, `rgba(${red}, ${green}, ${blue}, 0)`);
      gradient.addColorStop(0.18, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.45})`);
      gradient.addColorStop(0.46, `rgba(${red}, ${green}, ${blue}, ${alpha})`);
      gradient.addColorStop(0.72, `rgba(${red}, ${green}, ${blue}, ${alpha * 0.72})`);
      gradient.addColorStop(1, `rgba(${red}, ${green}, ${blue}, 0)`);
      context.fillStyle = gradient;
      context.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      context.restore();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = "lighter";
      context.filter = "blur(24px)";
      beams.forEach(drawBeam);
      context.restore();
    };

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      beams.forEach((beam, index) => {
        beam.y -= beam.speed * delta;
        beam.pulse += beam.pulseSpeed * delta;
        if (beam.y + beam.length < -80) resetBeam(beam, index);
      });
      draw();
      frame = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const start = () => {
      stop();
      draw();
      if (visible && !document.hidden && !reducedMotion.matches) {
        lastTime = performance.now();
        frame = window.requestAnimationFrame(animate);
      }
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, document.documentElement.clientWidth);
      host.style.setProperty("--hero-viewport-width", `${width}px`);
      height = Math.max(1, bounds.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const beamCount = Math.max(12, Math.min(22, Math.round(width / 62)));
      beams = Array.from({ length: beamCount }, (_, index) =>
        createBeam(width, height, index),
      );
      start();
    };

    const handleVisibility = () => start();
    const handleMotionPreference = () => start();
    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      start();
    });

    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionPreference);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      host.style.removeProperty("--hero-viewport-width");
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`hero-beams ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
