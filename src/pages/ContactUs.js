import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import telegram from "../img/telegram2.jpeg";
import instagram from "../img/instagram2.png";
import whatsapp from "../img/whatsapp2.png";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff", textAlign:"center"}}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
      <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={telegram} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={instagram} />
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={whatsapp} />
            </div>
          </Card>
        </Cards>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 3rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 10%;
  width: 1rem;
  height: 1rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const Card = styled.div`
  flex-basis: 1rem;
  .icon {
    display: flex;
    align-items: center;  
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 300px) {
    justify-content: center;
  }
`;

export default ContactUs;
