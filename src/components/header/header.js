import "./header.css";
import {
  hasProp,
  hasAvailableFrom,
  getNaturalMonth,
  hasPrice
} from "../../utils/utilsheader.js";

export let Header = (props) => {
  return (
    <div className="header generalFont">
      <p className="header-title">Hoteles</p>
      <p className="header-date">
        {hasProp(props.price) && <p>{hasPrice(props.price)}&nbsp;</p>}
        {hasAvailableFrom(props.numberDateFrom) && (
          <p>
            desde el &nbsp;
            {props.numberDateFrom} &nbsp;
            {getNaturalMonth(props.numberMonthFrom)} de {props.numberYearFrom}
            &nbsp;
          </p>
        )}
        {hasAvailableFrom(props.numberDateTo) && (
          <p>
            hasta el &nbsp;{props.numberDateTo}&nbsp;
            {getNaturalMonth(props.numberMonthTo)} de {props.numberYearTo}&nbsp;
          </p>
        )}
        {hasProp(props.country) && <p>en {props.country}&nbsp;</p>}
        {hasProp(props.size) && <p>tamaño&nbsp;{props.size}</p>}
        <span></span>
      </p>
    </div>
  );
};
