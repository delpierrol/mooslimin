'use client'

import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

export default function SectionFilterSize({ datas }) {
    const [selecteds, setSelecteds] = useState([]);

    const handleChange = (e) => {
        console.log("CEK ONCHANGE " + e)
        const clickedId = +e.target.value;
        if (selecteds.includes(clickedId)) {
            setSelecteds(selecteds.filter((id) => id !== clickedId));
        } else {
            setSelecteds([...selecteds, clickedId]);
        }
    };

    const isChecked = (id) => {
        selecteds.includes(id);
    };

    return (
        datas != null && datas != "" && <Accordion alwaysOpen>
            <Accordion.Item>
                <Accordion.Header>UKURAN</Accordion.Header>
                <Accordion.Body className="p-0">
                    <Form>
                        {datas?.map((item, index) =>
                            <div className="my-2">
                                <Form.Check
                                    type={"checkbox"}
                                    id={item.id}
                                    value={item}
                                    label={item.name}
                                    checked={isChecked(item.id)}
                                    onChange={handleChange}
                                />
                            </div>

                        )}
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}