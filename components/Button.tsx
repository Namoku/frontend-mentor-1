import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  value?: string | number;
  onClick?: (event: Event) => void;
  type?: "primary" | "secondary";
  selected?: boolean;
};
export const Button = ({
  title,
  onClick,
  value,
  type = "primary",
  selected = false,
}: ButtonProps) => {
  const typeBoolean = type === "primary" ? true : false;
  const styleBoolean = selected ? !typeBoolean : typeBoolean;
  const style = styleBoolean ? "secondary-background" : "primary-background";
  return (
    <button
      className={`${styles.button} ${style}`}
      onClick={onClick as unknown as MouseEventHandler}
      value={value}
    >
      {title}
    </button>
  );
};
