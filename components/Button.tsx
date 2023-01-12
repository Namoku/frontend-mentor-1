import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  type?: "primary" | "secondary";
};
export const Button = ({ title, type = "primary" }: ButtonProps) => {
  const style =
    type === "secondary" ? "primary-background" : "secondary-background";
  return <button className={`${styles.button} ${style}`}>{title}</button>;
};
