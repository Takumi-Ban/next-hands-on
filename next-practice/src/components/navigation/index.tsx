import styles from './navigation.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}