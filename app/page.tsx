import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { ResultField } from "../components/ResultField";
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
            <Container>
              Select Tip %
              <div className={styles.buttonContainer}>
                <Button title="5%" />
                <Button title="10%" />
                <Button title="15%" />
                <Button title="25%" />
                <Button title="50%" />
                <Button title="Custom" />
              </div>
            </Container>
            <TextInput placeholder="0" icon="person" title="Number of People" />
          </section>
          <section className={styles.actionContainer}>
            <article className={styles.container}>
              <ResultField title="Tip Amount" subtitle="person" amount={0} />
              <ResultField title="Total" subtitle="person" amount={0} />
            </article>
            <Button title="Reset" type="secondary" />
          </section>
        </div>
      </main>
      <footer>
        <Foot />
      </footer>
    </>
  );
}
