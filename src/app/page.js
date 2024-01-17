import BoilerBox from "@/components/boilerplate/boilerbox";
import styles from "./page.module.css";
import { fetchGalleries } from "@/lib/data.service";
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn";

export default async function Page() {
  const galleries = await fetchGalleries();
  return (
    <main className={styles.page}>
      <div className={styles.container}>   <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'} />
 <DevAssignmentsNavBtn link={'/galleries'} title={'Galleries'} /></div>
      <BoilerBox galleries={galleries} />
    </main>
  );
}
