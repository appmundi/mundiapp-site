import styles from './style.module.css';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className={styles.container} id='contact'>
      <div className={styles.left}>
        <h2>
          CONTACT <strong>US</strong>
        </h2>
        <div className={styles.info}>
          <div>
            <MapPin size={18} /> 198 West 21th Street, Suite 721 New York
          </div>
          <div>
            <Phone size={18} /> +(84)123456789
          </div>
          <div>
            <Mail size={18} /> cafeinate@cofeee.org
          </div>
          <div>
            <Globe size={18} /> cafeinate@cofeee.org
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
