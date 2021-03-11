import styles from '../styles/Service.module.css'

export default function Layout({type, service, description, image}) {
    return(
        <div className={styles.service}>
            <div className={styles.image}>
                <img src={image} alt={service}/>
            </div>
            <div className={styles.description}>
                <p className={styles.type}>{type}</p>
                <h2 className={styles.title}>{service}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}




