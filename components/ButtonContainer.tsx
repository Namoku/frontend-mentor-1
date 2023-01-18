"use client";
import { Button } from "./Button";
import { Container } from "./Container";
import styles from "./ButtonContainer.module.css";
import { useState } from "react";

export const ButtonContainer = () => {
  const [selected, setSelected] = useState<undefined | string>();

  const handleClick = (event: Event) => {
    const target = event.target as HTMLInputElement;
    setSelected(target.value);
  };

  const Buttons = [
    { title: "5%", value: 5, selected: selected == "5" },
    { title: "10%", value: 10, selected: selected == "10" },
    { title: "15%", value: 15, selected: selected == "15" },
    { title: "25%", value: 25, selected: selected == "25" },
    { title: "50%", value: 50, selected: selected == "50" },
    { title: "Custom" },
  ];

  return (
    <Container>
      Select Tip %
      <div className={styles.buttonContainer}>
        {Buttons.map(({ title, value, selected }, index) => (
          <Button
            key={index}
            title={title}
            value={value}
            selected={selected}
            onClick={handleClick}
          />
        ))}
      </div>
    </Container>
  );
};
