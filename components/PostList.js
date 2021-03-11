import styles from '../styles/PostList.module.css'
import Link from 'next/link'

export default function Post({image, title, summary, link}) {
    return (
        <div className={styles.post}>
            <img src={image} alt={title}/>
            <h3 className={styles.title}>{title}</h3>
            <p>{summary}</p>

            <Link href={link}>
                <a className={styles.link}>Leia esse post</a>
            </Link>
        </div>
    )
}