import { Accordion, Form } from "react-bootstrap";

export default function SectionFilterBrand({ datas }) {
    return (
        <Accordion alwaysOpen>
            <Accordion.Item>
                <Accordion.Header>BRAND</Accordion.Header>
                <Accordion.Body className="p-0">
                    <Form>
                        {datas?.map((item, index) =>
                            <div className="my-2">
                                <Form.Check
                                    type={"checkbox"}
                                    id={item.id}
                                    value={item}
                                    label={item.name}
                                    checked={datas[index] == item}
                                    onChange={(e) => onAddingItem(e, item, index)}
                                />
                            </div>

                        )}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}