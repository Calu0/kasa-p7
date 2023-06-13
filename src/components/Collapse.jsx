import "../css/style.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Collaps } from "react-collapse";
import arrow from "../assets/arrow.png";

const CollapseContainer = styled.article`
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 31px auto;
  width: 70%;
`;

const CollapseWrapper = styled.div`
  background-color: #ff6060;
  border-color: transparent;
  height: 47px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const CollapseTitle = styled.p`
  margin-left: 18px;
  color: white;
  font-weight: 500;
  font-size: 24px;
`;

const Arrow = styled.img`
  width: 24px;
  margin-right: 33px;
  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-property: -webkit-transform;
  -moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;
  transition-property: transform;
`;

const Text = styled.p`
  margin: 0px;
  background-color: #f6f6f6;
  color: #ff6060;
  padding: 27px 27px 19px 18px;
  max-width: fit-content;
  border-radius: 5px;
  width: 100%;
`;

function Collapse(props) {
    const { title, content } = props;
    const [visible, setVisible] = useState(false);

    function trans(){
        if(visible){
            return "rotate(-0.5turn)"
        }
            return "rotate(0turn)"
    }

    
    return (
        <CollapseContainer>
            <CollapseWrapper onClick={() => setVisible(!visible)}>
                <CollapseTitle>{title}</CollapseTitle>
                <Arrow src={arrow} alt="arrow" style={{ transform : trans() }} />
            </CollapseWrapper>
            {visible && <Text>{content}</Text>}
        </CollapseContainer>
    );
}

export default Collapse;
