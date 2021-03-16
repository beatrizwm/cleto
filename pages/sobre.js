import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

function About() {
  return (
    <Layout title="Sobre | Wunjo">
        <section className="container">
          <div className={styles.about}>
            <img  className={styles.image} src="/images/cleto.jpeg" alt=""/>
            <div className={styles.text}>
              <h1 className={styles.title}>Quem sou</h1>
              <p>Cleto Luiz Rodrigues Correa</p>
              <p>Engenheiro Mecanico formado em 1972</p>
              <p>Desde adolescente católico, fui inclinado a saber de rituais e sua motivação, caminhando neste sentido procurei outras inclinações religiosas e saber porque as pessoas davam preferência uma ou outra tendência e principalmente porque substituíam suas crenças.</p>
              <p>Em 1972 fundei um dos primeiros espaços exotéricos com várias atividades diferentes taro, runas cristais, pirâmide acupuntura, astrologia, radiestesia e radiônica, teatro, centro de estudos, cursos e livraria através de minha formação e trabalho, consegui fazer uma serie de observações e comprovações.</p>
              <p>Na época em que trabalhava em manutenção de equipamentos de grande porte e funcionamento continuo, devido ao fato de não haver comutadores o monitoramento era feito por um operador cuja função era observar o funcionamento destes equipamentos, sendo que se revezavam por turno devido a natureza do serviço.</p>
            </div>
          </div>
          <div className={styles.philosophy}>
            <div className={styles.text}>
              <p>Acompanhando estes relatórios percebi que independente do dia ou horário o equipamento apresentava certo tipo de defeito com a mesma pessoa. Solicitei a colegas que fizessem este acompanhamento em maquinas de funcionamento continuo mesmo de natureza serem diferentes dos que observava um outro ponto mesmo que tivesse dois equipamentos iguais o comportamento deles era diferente se tivessem sido instalados em solo que houvesse cavernas subterrâneas.</p>
              <p>Levei estas pesquisas ao meu centro de estudos para que debatêssemos a respeito.</p>
              <p>Esta experiência me levou a estudar frequências mais sutis partindo da espectrometria de massa a vibração do pensar constante do ser humano.</p>
              <p>Desta data em diante me dediquei a trabalhar com as frequências do pensar  e sua influência no meio,  porque conclui que como a poeira e o DNA, impregnam pessoas, lugares e empresas, sendo que as energias densas com por exemplo a poeira por ser visível é possível ser limpa por meios convencionais, já energias que não são visíveis no nosso espectro visual a meios específicos para que sejam transformadas</p>
            </div>
            {/*<img className={styles.image} src="/images/about2.png" alt=""/>*/}
          </div>
        </section>
        {/*<section className={styles.aboutServices}>
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
        </section>*/}
    </Layout>
  )
}

export default About