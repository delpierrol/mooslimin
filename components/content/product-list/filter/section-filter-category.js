import { Accordion, Badge, Col, Form, Row } from "react-bootstrap";

export default function SectionFilterCategory({ datas }) {
    return (
        <Accordion alwaysOpen>
            <Accordion.Item>
                <Accordion.Header>SETELAN</Accordion.Header>
                <Accordion.Body className="p-0">
                    <Form>
                        {datas?.map((item, index) =>
                            <Row className="my-2">
                                <Col className="text-start">{item.name}</Col>
                                <Col className="text-end"><Badge bg="secondary" className="align-self-end">{item.total}</Badge></Col>
                            </Row>
                        )}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}