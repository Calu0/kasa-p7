import "../css/style.css";
import styled from "styled-components";
import { useState } from "react";
import arrow from "../assets/arrow.png";
import PropTypes from 'prop-types'

const CollapseContainer = styled.article`
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33px auto;
  width: 83%;

  &.article-housing{
    margin: 37px auto;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin:20px auto;

    &.article-housing{
      margin: 0px auto 0px auto;
    }
  }
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
  z-index: 2;

  &.wrapper-housing{
    height: 52px;
  }

  @media only screen and (max-width: 768px) {

      height:30px;

    &.wrapper-housing{
      height: 29.93px;
      margin-top:20px;
    }
  }
`;

const CollapseTitle = styled.p`
  margin-left: 18px;
  color: white;
  font-weight: 500;
  font-size: 24px;

  

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    margin-left:12px;
  }
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

  @media only screen and (max-width: 768px) {

    width: 16px;
    margin-right:12px;

  }
`;

const Text = styled.div`

  margin: -5px 0px 0px 0px;
  background-color: #f6f6f6;
  color: #ff6060;
  padding: 32px 27px 19px 18px;
  max-width: -webkit-fill-available;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  z-index: 1;
  line-height: 142.6%;
  font-size: 24px;

  &.text-housing{
    font-size: 18px
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;

    &.text-housing{
      font-size: 12px
    }
  }

`;

function Collapse(props) {
  const { title, content, classNameText, classNameTitle, classNameArticle, classNameWrapper} = props;
  const [visible, setVisible] = useState(false);

  function trans() {
    if (visible) {
      return "rotate(-0.5turn)"
    }
    return "rotate(0turn)"
  }


  return (
    <CollapseContainer className={classNameArticle}>
      <CollapseWrapper onClick={() => setVisible(!visible)} className={classNameWrapper}>
        <CollapseTitle className={classNameTitle}>{title}</CollapseTitle>
        <Arrow src={arrow} alt="arrow" style={{ transform: trans() }}/>
      </CollapseWrapper>
      {visible && <Text className={classNameText}>{content}</Text>}
    </CollapseContainer>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired
}

export default Collapse;
