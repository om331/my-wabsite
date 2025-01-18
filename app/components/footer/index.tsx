import styles from './styles.module.css';

function Footer() {
  return (
    
  <div className={styles.footer}>
  <div className={styles.socialLinks}>
  <a href="#" target="_blank" rel="#">
  <i className="fa-brands fa-instagram"></i>
  </a>
  <a href="#" target="_blank" rel="#">
  <i className="fa-brands fa-linkedin"></i>
  </a>
  <a href="#" target="_blank" rel="#">
  <i className="fa-brands fa-whatsapp"></i>
  </a>
  <a href="#" target="_blank" rel="#">
  <i className="fa-solid fa-envelope"></i>
  </a>
  </div>
  <p className={styles.copyright}> 2023 Your Company. All rights reserved.</p>
  </div>
  );
  }
  export default Footer;