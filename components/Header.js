import Image from 'next/image';
import styled from "styled-components";
import logo from '../public/images/logo.png';

const Wrap = styled.div`
  display: flex;
  height: 8vh;
  align-items: center;
  padding: 0 0 0 30px;
`

const Logo = styled.div`
  width: 50px;
  height: 30px;
  background-color: blue;
`

const Menu = styled.div`
  position: absolute;
  display: flex;
  width: 13vw;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  align-items: center;
  justify-content: space-between;
  right: 30px;
`

const LoginBtn = styled.button`
  height: 30px;
  padding: 0 10px 0 10px;
  background-color: #FFEBEC;
  color: #F95B4F;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`

export default function Header() {
    return (
        <Wrap>
            <Image src={logo} width={55} height={18} layout='intrinsic' />
            <Menu>
              <p>공구참여</p>
              <p>공연공구란?</p>
              <LoginBtn>로그인</LoginBtn>
            </Menu>
        </Wrap>
    )
}