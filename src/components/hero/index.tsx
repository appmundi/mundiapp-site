import styles from './style.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id='home'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>MUNDI</h1>
          <p>
            <b>MUNDI</b> é um aplicativo fácil e prático que irá te conectar a
            diversos serviços quando precisar e onde estiver, o buscador de
            serviços 24 horas que te ajudará em emergências e também no seu dia
            a dia, fazendo com que não perca os melhores profissionais!
          </p>
          <button className={styles.cta}>Saiba Mais</button>

          {/*<div className={styles.dots}>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
          </div>*/}
        </div>
      </div>
    </section>
  );
}
