"use client";
import { Button } from "./Button";
import { Container } from "./Container";
import styles from "./ButtonContainer.module.css";
import { MouseEventHandler } from "react";

export const ButtonContainer = () => {
  const handleClick = (event: MouseEventHandler) => {
    console.log(event);
  };
  return (
    <Container>
      Select Tip %
      <div className={styles.buttonContainer}>
        <Button title="5%" onClick={handleClick} />
        <Button title="10%" onClick={handleClick} />
        <Button title="15%" onClick={handleClick} />
        <Button title="25%" onClick={handleClick} />
        <Button title="50%" onClick={handleClick} />
        <Button title="Custom" onClick={handleClick} />
      </div>
    </Container>
  );
};
