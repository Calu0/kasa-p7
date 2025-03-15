"use client"

import "../css/style.css"
import styled from "styled-components"
import { useState } from "react"
import arrow from "../assets/arrow.png"

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
`

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
`

const CollapseTitle = styled.p`
  margin-left: 18px;
  color: white;
  font-weight: 500;
  font-size: 24px;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
    margin-left:12px;
  }
`

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
`

const TextWrapper = styled.div`
  background-color: #f6f6f6;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "1000px" : "0")};
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  
  ${({ visible }) =>
    visible &&
    `
    transition: max-height 0.5s ease-in-out;
  `}
`

const Text = styled.div`
  color: #ff6060;
  line-height: 142.6%;
  font-size: 24px;
  padding: 32px 27px 19px 18px;
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  transition-delay: ${({ visible }) => (visible ? "0.1s" : "0")};
  
  &.text-housing{
    font-size: 18px
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;

    &.text-housing{
      font-size: 12px
    }
  }
`

function Collapse(props) {
  const { title, content, classNameText, classNameTitle, classNameArticle, classNameWrapper } = props
  const [visible, setVisible] = useState(false)

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
        <Arrow src={arrow} alt="arrow" style={{ transform: trans() }} />
      </CollapseWrapper>
      <TextWrapper visible={visible}>
        <Text className={classNameText} visible={visible}>
          {content}
        </Text>
      </TextWrapper>
    </CollapseContainer>
  )
}



export default Collapse

