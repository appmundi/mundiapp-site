import styles from './style.module.css';

export function SpecialThingsSection() {
  const items = [
    {
      image: '/images/motoboy.jpg',
      title: 'Motoboy',
      text: 'Precisa de motoboy para seu comércio? Com a Mundi, você encontra diversos prestadores de confiança, que irão te ajudar com as entregas diárias e sem burocrácia.',
    },
    {
      image: '/images/make.jpg',
      title: 'Maquiadora',
      text: 'Tem algum evento importante próximo? Com a Mundi você poderá escolher o melhor profissional, agendar e garantir sua maquiagem á tempo! No app você tem diversas opções de profissionais, localidades e preços.',
    },
    {
      image: '/images/guincho.jpg',
      title: 'Guincheiro',
      text: 'Está com uma emergência e não possui seguro? Com a Mundi você pode solicitar um guincho, fazer o orçamento e ler as avaliações do profissional, com o app você terá essas opções 24 horas!',
    },
  ];

  return (
    <section className={styles.section} id='special'>
      <h2 className={styles.title}>
        DIVERSOS<span>SERVIÇOS 24 HORAS</span>
      </h2>
      <p className={styles.subtitle}>
        Em poucos segundos listamos os profissionais adequados e disponíveis
        próximos do local de atendimento, e você tem a liberdade para escolher
        se prefere o mais barato, com menor prazo de chegada ou o melhor
        avaliado. Além disso são diversas opções de serviços, podendo buscar
        todos os serviços que precisar!!!
      </p>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            {index % 2 === 0 ? (
              <>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.text}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.text}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
