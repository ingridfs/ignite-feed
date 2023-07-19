import styles from './Header.module.css'
import igniteLogo from '../assets/icons/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
          <img src={igniteLogo} alt="Ignite Feed logotipo" />
           <strong>Ignite Feed</strong> 
        </header>
    )
}

