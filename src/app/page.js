import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

import Landing from "./components/Landing";
import WorkWme from "./components/WorkWme";
import Contacts from "./components/Contacts";

import Portofolio from "./components/Portofolio";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Landing />

        <Portofolio />
        <Contacts />
      </div>
    </main>
  );
}
