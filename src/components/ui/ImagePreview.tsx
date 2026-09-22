import { useEffect, useId, useRef } from "react";
import { FiX } from "react-icons/fi";
interface ImagePreviewProps {
  src: string;
  title: string;
  onClose: () => void;
}
export default function ImagePreview({
  src,
  title,
  onClose,
}: ImagePreviewProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const element = dialog.current;
    const previous =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="image-dialog"
      aria-labelledby={titleId}
      onCancel={onClose}
      onKeyDown={(event) => {
        // The image viewer has one interactive control: keep Tab on its close button.
        if (event.key === "Tab") {
          event.preventDefault();
          event.currentTarget.querySelector("button")?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-heading">
          <h2 id={titleId}>{title}</h2>
          <button
            className="icon-button"
            type="button"
            onClick={onClose}
            aria-label="Cerrar vista ampliada"
            autoFocus
          >
            <FiX />
          </button>
        </div>
        <img src={src} alt={title} />
      </div>
    </dialog>
  );
}
