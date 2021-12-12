import "./card.css";
import { alertReserve } from "../../utils/utilscard.js";

export let Card = (props) => {
  let quantyDolars = ["", ""];
  function calcDolars(whiteDolars) {
    for (let step = 0; step < whiteDolars; step++) {
      quantyDolars[0] = quantyDolars[0] + "$";
    }
    let tempGreyQuanty = 4 - whiteDolars;
    for (let step = 0; step < tempGreyQuanty; step++) {
      quantyDolars[1] = quantyDolars[1] + "$";
    }
    return quantyDolars;
  }
  calcDolars(props.price);
  return (
    <div className="card generalFont">
      <img src={props.photo} alt="img-hotel" width="100%" />
      <p className="name">{props.name}</p>
      <p className="description ">{props.description}</p>
      <div className="boxLocateAndRooms">
        <div className="boxIcon">
          <img
            className="svgCardLocate"
            src="./assets/svg/svgLocate.svg"
            height="20"
            alt="locate"
          />
        </div>
        <div className="boxText">
          {props.city}, {props.country}
        </div>
      </div>
      <div className="boxLocateAndRooms">
        <div className="boxIcon">
          <img
            className="svgCardLocate"
            src="./assets/svg/svgCardRooms.svg"
            height="15"
            alt="locate"
          />
        </div>
        <div className="boxText">{props.rooms} Habitaciones</div>
      </div>
      <div className="price">
        <span className="whiteDolars">{quantyDolars[0]}</span>
        <span className="greyDolars">{quantyDolars[1]}</span>
      </div>
      <button className="card-button" onClick={alertReserve}>
        Reservar
      </button>
    </div>
  );
};
