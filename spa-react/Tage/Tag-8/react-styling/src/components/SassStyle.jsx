import styles from '../styles/SassStyle.module.scss'
import MyStyle from './MyStyle'

const SassStyle = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sass ile Stil</h1>
      <p className={styles.description}>Bu bir Sass örneğidir.</p>
      <button className={styles.btn}>Klick mich</button>
      <MyStyle>
        <p>Hallo Welt</p>
      </MyStyle> 
    </div>
  )
}

export default SassStyle