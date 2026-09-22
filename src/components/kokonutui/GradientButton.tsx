/** Adapted from Kokonut UI Gradient Button by dorianbaffier (MIT).
 * https://kokonutui.com/r/gradient-button.json
 * Native anchor semantics, amber layers and 160ms transitions.
 */
import type { ComponentProps } from "react";
export default function GradientButton({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a className={`button gradient-button ${className}`} {...props}>
      <span className="gradient-button-base" aria-hidden="true" />
      <span className="gradient-button-overlay" aria-hidden="true" />
      <span className="button-content">{children}</span>
    </a>
  );
}
