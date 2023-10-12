import { Label } from "@mui/icons-material";
import { Grid, Slider, TextField } from "@mui/material";
import { useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";

export default function SectionFilterPrice() {

    const [value, setValue] = useState([1000, 100000]);

    const minDistance = 1000;

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <Accordion alwaysOpen>
            <Accordion.Item>
                <Accordion.Header>HARGA</Accordion.Header>
                <Accordion.Body className="p-0">
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        step={1000}
                        min={1000}
                        max={100000}
                    //   valueLabelDisplay="auto"
                    //   getAriaValueText={valuetext}
                    />

                    <Grid container className="pb-3">
                        <Grid item xs={6}>
                            <label>IDR {Intl.NumberFormat().format(value[0])}</label>
                        </Grid>
                        <Grid item xs={6} textAlign={"end"}>
                            <label>IDR {Intl.NumberFormat().format(value[1])}</label>
                        </Grid>
                    </Grid>

                    <Grid container className="align-items-center" sx={{
                        '& .MuiTextField-root': { borderRadius: "100px" },
                    }}>
                        <Grid item xs={5}>
                            <TextField id="outlined-basic" variant="outlined" size="small" placeholder="min" />
                        </Grid>
                        <Grid item xs={2} className="text-center">
                            <span> to </span>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField id="outlined-basic" variant="outlined" size="small" placeholder="max"/>
                        </Grid>
                    </Grid>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}