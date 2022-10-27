import React from "react";
import styled from "styled-components";
import "./styles.css";

const GreetCard = styled.div`
  color: ${(props) => props.color || "#000"};
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "DemielaFreeMedium";
  font-size: 5em;
  border-radius: 10px;

  background-color: rgba(0, 0, 0, 0.8);
  &:hover {
    box-shadow: -2px 2px 8px 7px rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: -2px 2px 8px 7px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: -2px 2px 8px 7px rgba(255, 255, 255, 0.2);
  }
  &:before {
    content: "";
    opacity: 0.5;
    background-image: ${(props) =>
      props.image
        ? `url(../../../assets/images/cards/${props.image})`
        : "#fff"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(0.03rem);
    width: 100%;
    height: 30vh;
    content: "";
    position: relative;
    border-radius: 10px;

    box-shadow: -2px 2px 8px 7px rgba(232, 217, 217, 0.3);
    -webkit-box-shadow: -2px 2px 8px 7px rgba(232, 217, 217, 0.3);
    -moz-box-shadow: -2px 2px 8px 7px rgba(232, 217, 217, 0.3);
  }
`;
const Greetings = ({ greeting = {} }) => {
  const { image, message, textColor, type } = greeting;
  const greetMessage = message || "Happy Birthday";
  return (
    <div className="greetings__card">
      <GreetCard
        image={image}
        color={textColor}
        className="greetings__card-item"
      >
        <div className="greetings__content">
          <h4 className="message" title={greetMessage}>
            {greetMessage}
          </h4>
        </div>
        {/* {type && type === "video" && (
          <iframe
            src={`../../../assets/images/cards/${image}`}
            title={image}
            allowfullscreen=""
            controls="0"
            autoplay=""
            frameborder="0"
            scrolling="no"
          ></iframe>
        )} */}
      </GreetCard>
    </div>
  );
};
export default Greetings;
