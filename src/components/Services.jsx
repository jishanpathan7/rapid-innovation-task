import React from "react";
import styled from "styled-components";
import ServiceCard from "./Cards/ServiceCard";
import { serviceData } from "../data/constant";

const ServicesWrapper = styled.section`
  padding: 60px;

  h1 {
    text-align: left;
    margin-bottom: 20px;
    font-size: 2.5rem;
    padding-left: 30px;
  }

  .service-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    .service-cards {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }

    .service-cards {
      gap: 10px;
    }
  }
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <h1>Our Services</h1>
      <div className="service-cards">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </ServicesWrapper>
  );
};

export default Services;
