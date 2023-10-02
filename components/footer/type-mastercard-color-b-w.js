import { useMemo } from "react";
import styles from "./type-mastercard-color-b-w.module.css";
const TypeMastercardColorBW = ({
  dimension,
  typeMastercardColorBWPosition,
  masterCardIconWidth,
  masterCardIconHeight,
}) => {
  const typeMastercardColorBWStyle = useMemo(() => {
    return {
      position: typeMastercardColorBWPosition,
    };
  }, [typeMastercardColorBWPosition]);

  const masterCardIconStyle = useMemo(() => {
    return {
      width: masterCardIconWidth,
      height: masterCardIconHeight,
    };
  }, [masterCardIconWidth, masterCardIconHeight]);

  return (
    <div
      className={styles.typemastercardColorbw}
      style={typeMastercardColorBWStyle}
    >
      <img
        className={styles.masterCardIcon}
        alt=""
        src={dimension}
        style={masterCardIconStyle}
      />
    </div>
  );
};

export default TypeMastercardColorBW;
