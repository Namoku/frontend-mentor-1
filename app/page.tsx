import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import Foot from "./Foot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          <section className={styles.container}>
            <TextInput placeholder="0" icon="dollar" title="Bill" />
            <div>
              Select Tip %
              <div className={styles.buttonContainer}>
                <Button title="5%" />
                <Button title="10%" />
                <Button title="15%" />
                <Button title="25%" />
                <Button title="50%" />
                <Button title="Custom" />
              </div>
            </div>
            <TextInput placeholder="0" icon="person" title="Number of People" />
          </section>
          <section className={styles.actionContainer}>
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
