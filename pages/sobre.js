import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

function About() {
  return (
    <Layout title="Sobre | Wunjo">
        <section className="container">
          <div className={styles.about}>
            <img  className={styles.image} src="/images/about1.png" alt=""/>
            <div className={styles.text}>
              <h1 className={styles.title}>Quem sou</h1>
              <p>All Avocado nutritionists are accredited with the Academy of Nutrition and Dietetics. All clients will receive personalized plans that take into account personal preferences, health history, and lifestyle goals. </p>
            </div>
          </div>
          <div className={styles.philosophy}>
            <div className={styles.text}>
              <h2 className={styles.title}>Filosofia</h2>
              <p>All Avocado nutritionists are accredited with the Academy of Nutrition and Dietetics. All clients will receive personalized plans that take into account personal preferences, health history, and lifestyle goals. </p>
            </div>
            <img className={styles.image} src="/images/about2.png" alt=""/>
          </div>
        </section>
        <section className={styles.aboutServices}>
          <div className="container">
            <h2>Serviços ou alguma frase mais motivacional</h2>
            <div className={styles.list}>
              <div className={styles.item}>
                <img src="" alt=""/>
                <h3>Serviço 1</h3>
                <p>You'll eat the food that's right for you, your lifestyle and your body. </p>
              </div>
              <div className={styles.item}>
                <img src="" alt=""/>
                <h3>Serviço 2</h3>
                <p>You'll eat the food that's right for you, your lifestyle and your body. </p>
              </div>
              <div className={styles.item}>
                <img src="" alt=""/>
                <h3>Serviço 3</h3>
                <p>You'll eat the food that's right for you, your lifestyle and your body. </p>
              </div>
              <div className={styles.item}>
                <img src="" alt=""/>
                <h3>Serviço 4</h3>
                <p>You'll eat the food that's right for you, your lifestyle and your body. </p>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default About