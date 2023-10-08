import { Row } from "react-bootstrap";
import SectionFilterSale from "./section-filter-sale";
import SectionFilterBrand from "./section-filter-brand";
import SectionFilterCategory from "./section-filter-category";
import SectionFilterType from "./section-filter-type";
import SectionFilterSize from "./section-filter-size";
import SectionFilterColor from "./section-filter-color";
import SectionFilterPrice from "./section-filter-price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
    var brands = [{ id: 1, name: "Brand 1" }, { id: 1, name: "Brand 2" }];
    var categories = [{ id: 1, name: "Category 1", total: 10 }];
    var sizes = [{ id: 1, name: "22" }, { id: 2, name: "23" }, { id: 3, name: "24" }, { id: 4, name: "25" }];
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ width: "15px", marginRight: "5px" }}>
                    <FontAwesomeIcon icon={faSliders} />
                </div>
                <span>Filter</span>
            </div>
            <SectionFilterSale />
            <SectionFilterCategory datas={categories} />
            <SectionFilterBrand datas={brands} />
            <SectionFilterType datas={[]} />
            <SectionFilterSize datas={sizes} />
            <SectionFilterColor datas={[]} />
            <SectionFilterPrice />
        </div>
    );
}