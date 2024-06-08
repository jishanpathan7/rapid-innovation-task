import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { footerLinks } from "../data/constant";

const FooterWrapper = styled.footer`
  background-color: #23282d;
  color: #ccc;
  padding: 40px 20px;

  .footer-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    padding: 0 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      text-align: left;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 10px 0;

        a {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    width: 95%;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 20px;

      a {
        color: #fff;
        font-size: 1.5rem;
        text-decoration:underline &:hover {
          color: #fff;
        }
      }
    }
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        {footerLinks.map((section, index) => (
          <ul key={index}>
            {section.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="company-logo">WORDPRESS.ORG</div>
        <div className="social-icons">
          <a href="#facebook">
            <Facebook />
          </a>
          <a href="#twitter">
            <Twitter />
          </a>
          <a href="#instagram">
            <Instagram />
          </a>
          <a href="#linkedin">
            <Linkedin />
          </a>
          <a href="#youtube">
            <Youtube />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
