import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.copyright}>©copyright</p>
        <p className={styles.info}>Made with 💖 by Me! <span className={styles.version}>V2.0.0</span></p>
    </footer>
  )
}

export default Footer