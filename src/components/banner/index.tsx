import styles from './style.module.css';

export default function BannerSection() {
  return (
    <div className={styles.container} id='banner'>
      <div className={styles.right}></div>

      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Quer conhecer a nossa
            <span> plataforma?</span>
          </h1>
          <p className={styles.text}>
            Com nosso buscador você terá diversas opções, podendo contratar de
            diarista á eletricista, sem burocracia!
          </p>
          <button className={styles.button}>Saiba mais!!</button>
        </div>
      </div>
    </div>
  );
}
