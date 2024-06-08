import React from "react";
import styled from "styled-components";
import { featureData } from "../data/constant";

const FeaturesWrapper = styled.section`
  padding: 60px;

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 0 20px;
  }

  .feature {
    text-align: left;
    padding: 0 20px;
    border-radius: 8px;

    img {
      width: 50px;
      height: 50px;
    }

    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: #67768e;
      font-weight: 500;
    }
  }
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <div className="features-grid">
        {featureData.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.imgSrc} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </FeaturesWrapper>
  );
};

export default Features;
