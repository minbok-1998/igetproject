import Head from 'next/head';
import Image from 'next/image';
import styled from "styled-components";

// Header
const Header = styled.div`
  display: flex;
  height: 8vh;
  background-color: pink;
  align-items: center;
`

const Logo = styled.div`
  width: 50px;
  height: 30px;
  background-color: blue;
`

const Menu = styled.div`
  display: flex;
  width: 13vw;
  background-color: red;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
`

const LoginBtn = styled.button`
  height: 30px;
  padding: 0 10px 0 10px;
  background-color: #FFEBEC;
  color: red;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`

// SectionOne

export default function Home() {
  return (
    <>
      <Header>
        <Logo></Logo>
        <Menu>
          <p>공구참여</p>
          <p>공연공구란?</p>
          <LoginBtn>로그인</LoginBtn>
        </Menu>
      </Header>

      <SectionOne>
        <h1></h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SectionOne>
    </>
  )
}
