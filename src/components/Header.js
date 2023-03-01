import ReactLogo from '../img/logo.png';
import styles from './Header.modules.css';

export default function Header() {
  return (
    <nav className='header'>
      <div>
        <img src={ReactLogo} alt='ReactJs Logo' className={styles.react_logo} />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}