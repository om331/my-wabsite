import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
return (<div className={styles.head}>
<Link href="/about/">About</Link>
<Link href="/contact/" >Contact</Link>
<Link href="/services/">services</Link>
<Link href="/services/">services</Link>

</div>

);
}

export default Header;


