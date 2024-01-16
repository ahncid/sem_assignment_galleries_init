import styles from "./layout.module.css"

export default function AssignmentsLayout({ children }) {
    return <section className={styles.layout}>
        <div className={styles.navigation}>
            <div className={styles.navContainer}>
                navigation - links
            </div>
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </section>
}