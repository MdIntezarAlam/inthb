import React from "react";
import { Candle, SliderImage, BirthdayCake } from "../../assets/images";

import "./styles.css";

const SliderScreen = ({ handleClick }) => {
  return (
    <div className="slider__screen">
      <div className="container">
        <div className="burn__button scale-up-center" onClick={handleClick}>
          <img src={BirthdayCake} alt="candle" className="easeinout-cake" />
        </div>
      </div>
    </div>
  );
};

export default SliderScreen;
