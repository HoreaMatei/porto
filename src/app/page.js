import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Landing from "./components/Landing";
import WorkWme from "./components/WorkWme";
import Help from "./components/Help";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Landing />

        <WorkWme />

        <Portofolio />
      </div>
    </main>
  );
}
