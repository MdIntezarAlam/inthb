import React from "react";
import { SliderImage } from "../assets/images";
import { GreetingsCard, PersonCard, SliderScreen } from "../components";
import { data } from "../data/data";
import "../styles/birthday.styles.css";

const Birthday = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [showAnimationScreen, setShowAnimationScreen] = React.useState(true);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setShowAnimationScreen(false);
    }, 4000);
  };

  const RenderMainContent = () => {
    return (
      <div
        className="main__content"
        style={{ display: !isClicked ? "none" : "flex" }}
      >
        {showAnimationScreen && (
          <div className="animated__container ">
            <img src={SliderImage} alt="candle" className="slide-top" />
          </div>
        )}
        {showAnimationScreen && (
          <div className="animated__container ">
            <img src={SliderImage} alt="candle" className="slide-top" />
          </div>
        )}
        <div className="left">
          {data &&
            data.leftSideCards &&
            data.leftSideCards.map((_greeting, i) => {
              return (
                <React.Fragment key={_greeting.image + i}>
                  <GreetingsCard greeting={_greeting} />
                </React.Fragment>
              );
            })}
        </div>
        <div className="middle">
          <PersonCard />
        </div>
        <div className="right">
          {data &&
            data.rightSideCards &&
            data.rightSideCards.map((_greeting, i) => {
              return (
                <React.Fragment key={_greeting.image + i}>
                  <GreetingsCard greeting={_greeting} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    );
  };
  return (
    <div className="birthday dashboard__bg">
      <div className="bday__content">
        {!isClicked && <SliderScreen handleClick={handleClick} />}
        {/* {isClicked && <RenderMainContent />} */}
        <RenderMainContent />
      </div>
    </div>
  );
};

export default Birthday;
