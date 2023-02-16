import styles from "./layoutHome.module.css"

export default function LayoutHome({children})
{
    console.log(children)
    return <div className={styles.container}>{children}</div>
}