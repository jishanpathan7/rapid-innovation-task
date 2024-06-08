import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: left;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    font-size: 2rem;
    text-align: left;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #67768e;
    font-weight:500;
  }



  @media (max-width: 480px) {
    padding: 10px;

    h2 {
      font-size: 1.5rem;
      text-align: left;
    }

    p {
      font-size: 1rem;
      line-height:30px;
    }
  }
`;

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <CardWrapper>
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </CardWrapper>
  );
};

export default ServiceCard;
