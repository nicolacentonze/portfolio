import { Preset} from "xeerpe";
import styles from "./page.module.css";

const background = new Preset('bioluminescence').toStyle()

export default function Home() {
  return (
    <main className={styles.page} style={background}>
      <h1 className={styles.name}>Nicola Centonze</h1>
      <p className={styles.description}>Portfolio and personal website</p>
      <p className={styles.status}>
        The new website is under construction.
      </p>
      <footer className={styles.credit}>
        Background made with{" "}
        <a href="https://xeerpe.io" target="_blank" rel="noopener noreferrer">
          xeerpe
        </a>
      </footer>
    </main>
  );
}
