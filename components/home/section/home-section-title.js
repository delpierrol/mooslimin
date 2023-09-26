import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./home-section-title.module.css";

const HomeSectionTitle = ({ title, subtitle }) => {
  return (
    <Container>
      <Row>
        <Col xs="6" md="6" className="text-left">
          <div className={styles.title}>
            <div className={styles.newArrivalsProduk}>{title}</div>
            <div className={styles.checkOutWhats}>{subtitle}</div>
          </div>
        </Col>
        <Col xs="6" md="6" className="text-right">
          <Button variant="outline-primary">Shop new arrival Belanja produk baru</Button>{' '}
          {/* <div className={styles.componentnavigationbutton}>
            <div className={styles.secondaryMedium}>
              
            </div>
          </div> */}
        </Col>
      </Row>
      {/* <div className={styles.header}>


      </div> */}
    </Container>
  );
};

export default HomeSectionTitle;
