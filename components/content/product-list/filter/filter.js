import { Row } from "react-bootstrap";
import SectionFilterSale from "./section-filter-sale";
import SectionFilterBrand from "./section-filter-brand";
import SectionFilterCategory from "./section-filter-category";
import SectionFilterType from "./section-filter-type";
import SectionFilterSize from "./section-filter-size";
import SectionFilterColor from "./section-filter-color";
import SectionFilterPrice from "./section-filter-price";

export default function Filter() {
    var brands = [{ id: 1, name: "Brand 1" }, { id: 1, name: "Brand 2" }];
    var categories = [{ id: 1, name: "Category 1", total: 10 }];
    var sizes = [{ id: 1, name: "22" }, { id: 2, name: "23" }, { id: 3, name: "24" }, { id: 4, name: "25" }];
    return (
        <Row>
            <div>
                <img src="" width="32" />
                <span>Filter</span>
            </div>
            <SectionFilterSale />
            <SectionFilterCategory datas={categories} />
            <SectionFilterBrand datas={brands} />
            <SectionFilterType datas={[]} />
            <SectionFilterSize datas={sizes} />
            <SectionFilterColor datas={[]} />
            <SectionFilterPrice />
        </Row>
    );
}