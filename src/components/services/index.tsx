import styles from './style.module.css';

const services = [
  {
    title: 'Eletricista',
    description: `Busque eletricistas em sua região a qualquer momento, n seja para urgência em sua casa, ou para reformas e construções. Com a Mundi você tem profissionais qualificados para te ajudar!`,
    icon: '/images/worker.jpg', // imagem local ou URL externa
  },
  {
    title: 'Diarista',
    description:
      'Busque diaristas em sua região a qualquer momento, para ajudar na limpeza doméstica, seu comércio ou escritório comercial. Com a Mundi você tem profissionais qualificados para te ajudar!',
    icon: '/images/diarista.jpg',
  },
  {
    title: 'Carreto',
    description:
      'Busque carretos em sua região a qualquer momento, seja para fazer um frete comum, mudanças ou transporte de cargas. Com a Mundi você tem profissionais qualificados para te ajudar!',
    icon: '/images/box.jpg',
  },
];

export function ServicesSection() {
  return (
    <section className={styles.services} id='service'>
      <h2 className={styles.title}>
        MELHORES<span> PROFISSIONAIS</span>
      </h2>
      <p className={styles.subtitle}>
        Faça agendamento, consulte preço, prazo de atendimento, formas de
        pagamentos e avaliação de cada profissional. Todos cadastrados são
        préavaliados, e os próprios usuários fornecem feedback ao final de cada
        serviço prestado.
      </p>

      <div className={styles.cards}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.circle}
              style={{ backgroundImage: `url(${service.icon})` }}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
