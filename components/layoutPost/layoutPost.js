import styles from './layoutPost.module.css'

export default function LayoutPost({children})
{
    return <div className={styles.post_container}>{children}</div>
}