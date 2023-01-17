import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick?: (event: MouseEventHandler) => void;
  type?: "primary" | "secondary";
  selected?: boolean;
};
export const Button = ({
  title,
  onClick,
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
    >
      {title}
    </button>
  );
};
