import Layout from '../components/Layout'

import ServiceLeft from '../components/ServiceLeft'
import ServiceRight from '../components/ServiceRight'

import styles from '../styles/Services.module.css'

export default function Services() {
    return (
        <Layout title="Serviços | Wunjo">
            <section className="container">
                <div className={styles.services}>
                    <h1>Serviços</h1>
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
                </div>
            </section>
        </Layout>
    )
}