import Layout from '../components/Layout'

import styles from '../styles/Contact.module.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <Layout title="Contato | Wunjo">
            <section className={styles.contact}>
                <div className={styles.image}>
                    <img src="/images/about1.png" alt=""/>
                </div>
                <div className={styles.infos}>
                    <h1 className={styles.title}>Fale conosco</h1>
                    <a href="">11 9 0000 - 0000</a>
                    <a href="mailto:contato@wunjo.com.br">contato@wunjo.com.br</a>
                    <div className={styles.social}>
                        <FaFacebookF className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaLinkedinIn className="icon"/>
                    </div>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <div>
                            <label for="">Nome</label>
                            <input id="" type="text" name="" value=""/>
                        </div>
                        <div>
                            <label for="">Email</label>
                            <input id="" type="text" name="" value=""/>
                        </div>
                        <div>
                            <label for="">Telefone</label>
                            <input id="" type="text" name="" value=""/>
                        </div>
                        <div>
                            <label for="">Mensagem</label>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className={styles.btn}>
                            <input type="submit" value="Enviar"/>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}