import { Fragment } from "react";
import "./filter.css";

export let Filter = (props) => {
  return (
    <div className="filter">
      <DateInFilter
        availableFrom={props.availableFrom}
        handlerAvailableFrom={props.handlerAvailableFrom}
      />
      <DateOutFilter
        availableTo={props.availableTo}
        handlerAvailableTo={props.handlerAvailableTo}
      />
      <CountryFilter
        country={props.country}
        handlerCountry={props.handlerCountry}
      />
      <PriceFilter price={props.price} handlerPrice={props.handlerPrice} />
      <SizeFilter size={props.size} handlerSize={props.handlerSize} />
      <ButtonReset onReset={props.onReset} />
    </div>
  );
};
function DateInFilter(props) {
  return (
    <label className="filter-label">
      <img src="./assets/svg/svgIngreso.svg" height="15" alt="svg-ingreso" />
      <input
        className="filter-input-date"
        type="date"
        onChange={props.handlerAvailableFrom}
        value={props.availableFrom}
      />
    </label>
  );
}
function DateOutFilter(props) {
  return (
    <label className="filter-label">
      <img src="./assets/svg/svgEgreso.svg" height="15" alt="svg-Egreso" />
      <input
        className="filter-input-date"
        type="date"
        onChange={props.handlerAvailableTo}
        value={props.availableTo}
      />
    </label>
  );
}
function CountryFilter(props) {
  return (
    <label className="filter-label">
      <img src="./assets/svg/svgWorld.svg" height="15" alt="svg-ingreso" />
      <select
        className="filter-select"
        value={props.country}
        onChange={props.handlerCountry}
      >
        <option value="todos" disabled>
          Seleccione el país
        </option>
        <option value="todos">Todos los países</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </label>
  );
}
function PriceFilter(props) {
  return (
    <label className="filter-label">
      <img
        className="imgDolar"
        src="./assets/svg/svgDolar.svg"
        height="15"
        alt="svg-ingreso"
      />
      <select
        className="filter-select"
        value={props.price}
        onChange={props.handlerPrice}
      >
        <option value="todos" disabled>
          Seleccione el precio
        </option>
        <option value="todos">Cualquier precio</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4"> $$$$</option>
      </select>
    </label>
  );
}
function SizeFilter(props) {
  return (
    <Fragment>
      <label className="filter-label" htmlFor="idRooms">
        <img src="./assets/svg/svgRooms.svg" height="15" alt="svg-size" />

        <select
          id="idRooms"
          className="filter-select"
          value={props.size}
          onChange={props.handlerSize}
        >
          <option value="todos" disabled>
            Seleccione el tamaño
          </option>
          <option value="todos">Cualquier tamaño</option>
          <option value="pequeños">Hotel pequeño</option>
          <option value="medianos">Hotel mediano</option>
          <option value="grandes">Hotel grande</option>
        </select>
      </label>
    </Fragment>
  );
}
function ButtonReset(props) {
  return (
    <button className="button buttonReset" onClick={props.onReset}>
      Clear Filters
    </button>
  );
}
