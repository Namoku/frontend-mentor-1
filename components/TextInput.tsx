import styles from "./TextInput.module.css";
import Image from "next/image";

type Icon = "dollar" | "person";

type TextInputProps = {
  placeholder: string;
  title: string;
  icon: Icon;
};

export const TextInput = ({ placeholder, title, icon }: TextInputProps) => {
  const iconPath = {
    dollar: "icon-dollar.svg",
    person: "icon-person.svg",
  };
  return (
    <section className={styles.container}>
      {title}
      <div className={styles.inputContainer}>
        <Image src={iconPath[icon]} alt={icon} width={16} height={24} />
        <input
          className={styles.input}
          type="number"
          placeholder={placeholder}
        />
      </div>
    </section>
  );
};
