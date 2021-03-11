import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'

import Post from '../components/PostList'

function Home() {
  return (
    <Layout title="Home | Wunjo">
      <section className={styles.about}> 
        <h1 className={styles.aboutTitle}>Um H1 forte para SEO</h1>
        <p>Avocado is your guide to food health and happiness. We offer a unique approach to nutrition and aim to free you from food obsessions so that you can lead a happy, well-fed life and where you care for your body and soul as one.</p>
      </section>

      <section className={styles.services}>
        <ServiceLeft 
          type="Online"
          service="Serviço 1"
          description="Get started on your clean eating routine. Start your detox and feel healthier, lighter and cleansed in days. You'll also enjoy delicious, healthy, nutrient-filled juices."
          image="/images/service1.png"
        />
        <ServiceRight 
          type="Presencial"
          service="Serviço 2"
          description="Get started on your clean eating routine. Start your detox and feel healthier, lighter and cleansed in days. You'll also enjoy delicious, healthy, nutrient-filled juices."
          image="/images/service2.png"
        />
      </section>
      <section className={styles.blog}>
        <h2>Blog</h2>
        <div className={styles.list}>
          <Post 
            image="/images/post1.png"
            title="Post Title"
            summary="Not all foods are created equal. Choose the ones that are right for you and your body."
            link=""
          />
          <Post 
            image="/images/post2.png"
            title="Post Title"
            summary="Not all foods are created equal. Choose the ones that are right for you and your body."
            link=""
          />
        </div>
      </section>
    </Layout>
  )
}

export default Home