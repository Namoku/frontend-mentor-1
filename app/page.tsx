import Image from "next/image";
import { Inter } from "@next/font/google";
import { Button } from "../components/Button";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className={styles.buttoncontainer}>
        <Button title="5%" />
        <Button title="10%" />
        <Button title="15%" />
        <Button title="25%" />
        <Button title="50%" />
        <Button title="Custom" />
      </section>
      Bill Select Tip % Number of People Tip Amount / person Total / person
      Reset
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}
