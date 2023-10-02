import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../home-section-title";
import styles from "./blog-content.module.css";
export default function BlogContent() {
  const rows = [];
  for (let i = 0; i < 4; i++) {
    rows.push(<Row className="my-3">
      <Col xs="3" md="3">
        <img className={styles.imageChidrend} alt="" src="/image-12@2x.png" />
      </Col>
      <Col xs="9" md="9">
        <div>
          <div className={styles.minsRead}>6 MINS READ</div>
          <div className={styles.titleChildren}>
            Lorem ipsum dolor sit amet
          </div>
          <div className={styles.info}>
            <div className={styles.moosliminTeam}>Mooslimin team</div>
            <div className={styles.infoChild} />
            <div className={styles.moosliminTeam}>01 Jan 2022</div>
          </div>
        </div>
      </Col>
    </Row>);
  }
  return (
    <Container fluid style={{ backgroundColor: "var(--fill-background-bg-mute-primary)" }}>
      <SectionTitle title={'Read our latest articles Baca artikel terbaru Mooslimin'} subtitle={'Browse article Telusuri artikel'} />
      <Container>
        <Row className="py-5">
          <Col md="6">
            <div className={styles.blogLarge}>
              <img className={styles.image} alt="" src="/image-10@2x.png" />
              <div className={styles.title}>
                <div className={styles.minsRead}>6 MINS READ</div>
                <div
                  className={styles.fashionMuslimPilihan}
                >{`Fashion Muslim Pilihan Terlengkap & Produk Terbaru`}</div>
                <div className={styles.info}>
                  <div className={styles.moosliminTeam}>Mooslimin team</div>
                  <div className={styles.infoChild} />
                  <div className={styles.moosliminTeam}>01 Jan 2022</div>
                </div>
              </div>
              <div className={styles.content}>
                It is a long established fact that a reader will be distracted by the
                readable content of a page It is a long established fact that a reader
                will be distracted by the readable content of a page w...
              </div>
              <div className={styles.badge}>
                <div className={styles.moosliminTeam}>HIGHLIGHT</div>
              </div>
            </div>
          </Col>
          <Col md="6">
            {rows}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
