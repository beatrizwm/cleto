import Layout from '../components/Layout'

import { getAllPostsForHome } from '../lib/api'

import styles from '../styles/Home.module.css'

import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'

import Post from '../components/PostList'

export default function Home({allPosts: {edges}}) {

  return (
    <Layout title="Home | Wunjo">
      <div className={styles.imageHome}>
        <img src="/images/seconhecer2.png" alt=""/>
      </div>
      <section className={styles.about}>
        <h1 className={styles.aboutTitle}>Radiestesia</h1>
        <p>É uma terapia integrativa que utiliza pêndulos e gráficos a fim de detectar e tratar o bloqueio de energia na vida de uma pessoa, também pode ser usado para encontrar pontos que estão desequilibrados em imóveis. Os pontos em desequilíbrio podem ser causados por móveis mal posicionados e até restos de animais ou pessoas, que foram enterrados no terreno há vários séculos. Estas energias são nocivas e causam doenças.</p>
      </section>

      <section className={styles.services}>
        <ServiceLeft 
          type="Online"
          service="Serviço 1"
          description="Get started on your clean eating routine. Start your detox and feel healthier, lighter and cleansed in days. You'll also enjoy delicious, healthy, nutrient-filled juices."
          image="/images/terapia.jpeg"
        />
        <ServiceRight 
          type="Presencial"
          service="Serviço 2"
          description="Get started on your clean eating routine. Start your detox and feel healthier, lighter and cleansed in days. You'll also enjoy delicious, healthy, nutrient-filled juices."
          image="/images/kitradio.jpeg"
        />
      </section>
      <section className={styles.blog}>
        <h2>Blog</h2>
        <div className={styles.list}>
        {edges.map(({ node }) => (
          <Post key={node.id}
            image={node.featuredImage?.node.sourceUrl}
            title={node.title}
            excerpt={node.excerpt}
            slug={node.slug}
          />
        ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: {
      allPosts
    }
  };
}