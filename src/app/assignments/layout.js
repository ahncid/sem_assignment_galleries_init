import DevAssignmentsNavigation from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavigation"
import styles from "./layout.module.css"
import DevAssignmentsNavBtn from "@/components/dev/devAssignmentsNavigation/devAssignmentsNavBtn/devAssignmentsNavBtn"


export default function AssignmentsLayout({ children }) {
    return <section className={styles.layout}>
        <div className={styles.navigation}>
            <div className={styles.navContainer}>
                
            <DevAssignmentsNavigation />
            <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'} />
<DevAssignmentsNavBtn link={'/assignments/icons'} title={'Icons'} />
<DevAssignmentsNavBtn link={'/assignments/data'} title={'Data'} />
<DevAssignmentsNavBtn link={'/assignments/data/authors'} title={'Authors'} />
<DevAssignmentsNavBtn link={'/assignments/data/images'} title={'Images'} />
<DevAssignmentsNavBtn link={'/assignments/data/portfolios'} title={'Portfolios'} />
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </section>
}