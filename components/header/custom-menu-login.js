import React, { useState } from "react";
import { Container, Dropdown, FormControl, Nav, NavDropdown, Row } from "react-bootstrap";
import styles from "../header/custom-menu-login.module.css";


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="a"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value)
                    )}
                </ul>
            </div>
        );
    }
);


export default function CustomMenuLogin() {
    return (
        <Nav>
            <NavDropdown align={"end"}
                title={
                    <img className={styles.personIcon} alt="" src="/images/component/navigation/person.svg" />
                } id="basic-nav-dropdown">

                <Container className={styles.container}>
                    <div>Akun Saya</div>

                </Container>
            </NavDropdown>

        </Nav>

    );
};
