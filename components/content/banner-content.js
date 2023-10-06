import { Container, Row } from "react-bootstrap";

export default function BannerContent({ title, subtitle }) {
    return (
        <div className="py-5 text-center ">
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
        </div>
    );
}