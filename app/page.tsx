import { Button } from "../components/Button";
import Foot from "./Foot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          <section>
            Bill Select Tip % Number of People
            <div className={styles.buttonContainer}>
              <Button title="5%" />
              <Button title="10%" />
              <Button title="15%" />
              <Button title="25%" />
              <Button title="50%" />
              <Button title="Custom" />
            </div>
          </section>
          <section>
            Tip Amount / person Total / person
            <Button title="Reset" />
          </section>
        </div>
      </main>
      <footer>
        <Foot />
      </footer>
    </>
  );
}
