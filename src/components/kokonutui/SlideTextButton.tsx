/** Adapted from Kokonut UI Slide Text Button by kokonut-labs (MIT).
 * https://kokonutui.com/docs/buttons/slide-text-button
 */
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface SlideTextButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  text: string;
  hoverText?: string;
  icon?: ReactNode;
}

export default function SlideTextButton({
  text,
  hoverText = text,
  icon,
  className = "",
  ...props
}: SlideTextButtonProps) {
  return (
    <a className={`button slide-text-button ${className}`} {...props}>
      <span className="slide-text-viewport">
        <span className="slide-text-track">
          <span className="slide-text-line">
            <span>{text}</span>
            {icon}
          </span>
          <span className="slide-text-line" aria-hidden="true">
            <span>{hoverText}</span>
            {icon}
          </span>
        </span>
      </span>
    </a>
  );
}
