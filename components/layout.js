import Head from 'next/head';
import styles from './layout.module.css';
import {
  Nav,
  Navbar,
  NavDropdown,
  Col,
  Row,
  Container,
  Dropdown,
} from "react-bootstrap";
import React, { useState } from 'react';
import Footer from './footer/footer';
import CustomMenuLogin from './header/custom-menu-login';

const name = 'Errol Widhavian';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {

  const [show, setShow] = useState(false);

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
          content="/images/logo.svg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="fixed-top">
        <div className="text-center bg-mooslimin-primary py-2">
          <div className="container txt-mooslimin-secondary">
            25% launching discount - For orders before 12PM - Diskon spesial  khusus launching (untuk pemesanan sebelum 12.00 WIB)
          </div>
        </div>
        <Navbar bg="light" expand="md" className="navbar-mooslimin">
          <Container>
            <Navbar.Brand href="" className="pe-5">
              <img src="/images/logo.svg" alt="Mooslimin" width="144" height="40" />
            </Navbar.Brand>
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="me-auto mb-2 mb-md-0">
                <Nav.Link href="new-arrivals">Terbaru</Nav.Link>
                <NavDropdown title="Dropdown"
                  id="basic1"
                  className="dropdown-megamenu"
                  show={show}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <Container className="eventsNav pt-0 mt-0">
                    <Row>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>Catering</Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Classes
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider className="d-md-none" />
                      </Col>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>Rentals</Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                      </Col>
                      <Col xs="12" md="4" className="text-left">
                        <Dropdown.Header>
                          Rentals
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                          Seasonal
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Nav.Link href="#home">Home</Nav.Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <div className={styles.componentinputField}>
              <img className="{styles.icon16}" alt="" src="/images/component/navigation/search.svg" />
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Cari..."
                maxLength
                minLength
              />
            </div>
            <div className={styles.componentnavigationheaderMeChild + " mx-4"} />
            <div className={styles.rightIcon}>
              <div className={styles.div}>0</div>
              <CustomMenuLogin />
              <img
                className={styles.localMallIcon}
                alt=""
                src="/images/component/navigation/local_mall.svg"
              />
            </div>
          </Container>
        </Navbar>
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      <Footer />
    </div>
  );
}