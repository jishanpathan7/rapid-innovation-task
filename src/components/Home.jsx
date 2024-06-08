import React from "react";
import styled from "styled-components";
import Header from "./Header";

const MainWrapper = styled.div`
  background: linear-gradient(
    35deg,
    rgb(6, 0, 151) 0%,
    rgb(130, 4, 255) 73%,
    rgb(193, 15, 255) 100%
  );
  min-height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 90%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroWrapper = styled.section`
  display: grid;
  place-items: left;
  text-align: left;
  padding: 60px 0;
  width: 50%;
  color: #fff;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 30px;
      font-weight: 500;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  .cta-button {
    padding: 20px;
    border: none;
    background-color: #ffcd57;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.2rem;
    width: 200px;
    border-radius: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Home = () => {
  return (
    <MainWrapper>
      <Header />
      <ContentWrapper>
        <HeroWrapper>
          <h2>Your Idea Matters!</h2>
          <p>
            Pulvinar enim ac tortor nulla facilisi tristique facilisi elementum
            sollicitudin eget lorem
          </p>
          <button className="cta-button">Make a Website</button>
        </HeroWrapper>
        <HeroImage
          src="https://wp-themes.com/wp-content/themes/astra/inc/assets/images/starter-content/hero-img.svg"
          alt="hero-img"
        />
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Home;
