import { ReactElement } from "react";
import styles from "./Container.module.css";

export const Container = ({ children }: { children: ReactElement }) => {
  return <div className={styles.container}>{children}</div>;
};
