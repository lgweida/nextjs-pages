import Image from "next/image";
import styles from "./page.module.css";
import PersonList from "./components/PersonList"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing
        </p>
      </div>
    </main>
  );
}
