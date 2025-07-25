import styles from './style.module.css';

export const NewsletterSection = () => {
  return (
    <section className={styles.newsletterSection} id='news'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <img src='/images/img.png' alt='Logo Mundi' className={styles.logo} />
          <p className={styles.description}>
            Mundi, o mundo na palma da sua mão!
          </p>
          {/*<div className={styles.subscribe}>
            <input type='email' placeholder='Your email' />
            <button>SUBSCRIBE</button>
          </div>*/}
        </div>
      </div>
    </section>
  );
};
