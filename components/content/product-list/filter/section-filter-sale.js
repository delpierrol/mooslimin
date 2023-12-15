import { Accordion, Form } from "react-bootstrap";

export default function SectionFilterSale() {
    return (
        <Accordion defaultActiveKey="filter-sale" alwaysOpen>
            <Accordion.Item>
                <Accordion.Header>SALE</Accordion.Header>
                <Accordion.Body className="p-0 align-items-center">
                    <Form>
                        <div className="my-2">
                            <Form.Check style={{ alignItems: "center" }}
                                type={"checkbox"}
                                id={`sale`}
                                label={"Sedang Sale"}
                            />
                        </div>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}