import styles from "./page.module.css";
import DevIcons from "@/components/icons/icons";
export default async function Page() {
  return (
    <main className={styles.page}>
      Icons
      <DevIcons></DevIcons>
    </main>
  );
}
