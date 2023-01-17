import { ReactElement } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  children: Array<ReactElement | string> | ReactElement | string;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
