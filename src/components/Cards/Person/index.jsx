import React from "react";
import Styled from "styled-components";
import { data } from "../../../data/data";

const PersonCard = Styled.div`
background: #f1f1f1;
height: fit-content;
padding: 2rem 4rem;
border-radius: 8px;;
`;
const Image = Styled.div`
  background-image: ${(props) =>
    props.image ? `url(/assets/images/person/${props.image})` : "#fff"};
    background-size: cover;
    background-position: center;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 50%;
    margin:auto;
    border: 7px double #d6ba4f;
    box-shadow: -2px 2px 8px 7px rgba(145, 108, 34, 0.7);
    -webkit-box-shadow: -2px 2px 8px 7px rgba(145, 108, 34, 0.7);
    -moz-box-shadow: -2px 2px 8px 7px rgba(145, 108, 34, 0.7);
`;

const Details = Styled.h1`
    color: #000;
    font-size: 32px;
    font-weight: 500;
    font-family: 'HappyBirthday';
    text-align: center;
    margin-top: 1rem;
`;

const Dob = Styled.p`
    color: #000;
    font-size:18px;
    font-weight: 500;
    font-family: 'HappyBirthday';
    text-align: center;
    margin-top: 1rem;
`;
const Author = Styled.p`
    color: #000;
    font-size:18px;
    font-weight: 500;
      font-family: "Helvetica Neue";
    text-align: center;
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
`;

const Person = () => {
  const { person = {}, author = {} } = data || {};
  const { name, dob, age, image } = person;
  return (
    <PersonCard>
      <Image image={image}></Image>
      <Details>{name}
        <br />HappyBirthday
      </Details>
      <Dob>
        {dob} ({age} Yrs)
      </Dob>
      {/* <Author>- {author.name}</Author> */}
    </PersonCard>
  );
};

export default Person;
