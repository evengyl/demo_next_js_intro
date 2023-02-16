import Link from "next/link"
import styles from "./navBar.module.css"

export default function NavBar(){
    return (
        <ul className={styles.navbar}>
            <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/">Home</Link>
            </li>
            <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/authors/me">Author</Link>
            </li>
            <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/posts/post1/first-post">Post 1</Link>
            </li>
            <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/posts/post2/second-post">Post 2</Link>
            </li>
        </ul>
    )
}