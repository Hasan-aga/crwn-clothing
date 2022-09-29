import "./checkmark.css";

type PredefinedSizeMapType = {
  small: `${number}px`;
  medium: `${number}px`;
  large: `${number}px`;
  xLarge: `${number}px`;
  xxLarge: `${number}px`;
};

const PREDEFINED_SIZE_MAP: PredefinedSizeMapType = {
  small: "16px",
  medium: "24px",
  large: "52px",
  xLarge: "72px",
  xxLarge: "96px",
};

type StyleType = {
  width: PredefinedSizeMapType[keyof PredefinedSizeMapType];
  height: PredefinedSizeMapType[keyof PredefinedSizeMapType];
  "--checkmark-fill-color"?: string;
};

type CheckmarkProps = {
  size: keyof PredefinedSizeMapType;
  color: `#${string}`;
};

export function Checkmark({ size, color }: CheckmarkProps) {
  const computedSize = PREDEFINED_SIZE_MAP[size] || size;
  const style: StyleType = { width: computedSize, height: computedSize };
  if (color) {
    style["--checkmark-fill-color"] = color;
  }

  return (
    <svg
      className="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 52 52"
    >
      <circle
        className="checkmark__circle"
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        className="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
}

Checkmark.defaultProps = {
  size: "large",
};
