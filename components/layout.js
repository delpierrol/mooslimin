import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

const name = 'Errol Widhavian';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mooslimin - Tempat Belanja Pria yang #LakiBanget"
        />
        <meta
          property="og:image"
          content="/images/logo.svg"/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="fixed-top">
        <div className="text-center bg-mooslimin-primary py-2">
          <div className="container">
            25% launching discount - For orders before 12PM - Diskon spesial  khusus launching (untuk pemesanan sebelum 12.00 WIB)
          </div>
        </div>
        <nav className="navbar navbar-expand-md navbar-light bg-light navbar-mooslimin">
          <Container>
            <a className="navbar-brand pe-5" href="#">
              <img src="/images/logo.svg" alt="" width="144" height="40" />
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#">Link</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </Container>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}