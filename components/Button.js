import styles from '../styles/Button.module.scss'

const Button = ({name}) => {

  const handleHover = (e) => {

    e.target.classList.remove('animate');
    e.target.classList.add('animate')
  }
  return (
    <button className={styles.button}>
        {name}
    </button>
  )
}

export default Button