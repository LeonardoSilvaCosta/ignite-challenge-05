import Link from 'next/link';
import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img alt="logo" src="/logo.svg" />
          </a>
        </Link>
      </div>
    </header>
  );
}
