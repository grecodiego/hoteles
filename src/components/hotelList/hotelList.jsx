import "./hotelList.css";
import { Card } from "../card/card.jsx";

export let HotelList = (props) => {
  return (
    <div className="hotelList">
      {props.newHotelsData.length > 0 ? (
        props.newHotelsData.map((hotel, index) => (
          <Card
            key={index}
            photo={hotel.photo}
            name={hotel.name}
            description={hotel.description}
            city={hotel.city}
            country={hotel.country}
            rooms={hotel.rooms}
            price={hotel.price}
          />
        ))
      ) : (
        <div>
          No hemos encontrados coincidencias en sus filtros con los hoteles
          disponibles.
        </div>
      )}
    </div>
  );
};
