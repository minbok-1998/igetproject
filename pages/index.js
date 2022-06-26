import Head from 'next/head';
import Image from 'next/image';
import styled from "styled-components";

// Header 이미지
import logo from '../public/images/logo.png';

// SectionOne 이미지
import list1 from '../public/images/list1.png';
import list2 from '../public/images/list2.png';
import list3 from '../public/images/list3.png';
import list4 from '../public/images/list4.png';

// SectionTwo 이미지
import img from '../public/images/profile_best.png';

import review from '../public/db/review';

// Header
const Header = styled.div`
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

// SectionOne
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 10px 0;
  
  h1 {
    font-size: 24px;
    color: #000;
    text-align: center;
  }

  span {
    display: block;
  }
`

const Box =  styled.div`
  display: flex;
  width: 30%;
  background-color: #F7F7F7;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 0 0 0 10px;

  p {
    font-size: 14px;
    font-weight: 700;
    color: #000;
    padding: 0 0 0 10px;
  }
`

// SectionTwo
const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
  padding: 30px 0 30px 0;

  h2 {
    text-align: center;
    margin: 0 0 50px 0;
  }

  span {
    display: block;
  }
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: #FFFFFF;
  -webkit-box-shadow: 3px 2px 15px 1px #C1C1C1; 
  box-shadow: 3px 2px 15px 1px #C1C1C1;
  border-radius: 10px;

  p {
    text-align: center;
  }

  p:nth-child(3) {
    color: #F95B4F;
  }
`

const Img = styled.div`
  position: relative;
  margin: -25px 0 0 0;
`

export default function Home() {

  return (
    <>
      <Header>
        <Image src={logo} width={55} height={18} layout='intrinsic' />
        <Menu>
          <p>공구참여</p>
          <p>공연공구란?</p>
          <LoginBtn>로그인</LoginBtn>
        </Menu>
      </Header>

      <SectionOne>
        <h1>
        <span>
          공연공구,
        </span>
          왜 참여해야하죠?
        </h1>
        <Box>
          <Image src={list1} width={30} height={30} layout='intrinsic' />
          <p>최고 배우들의 엄선된 공연</p>
        </Box>
        <Box>
          <Image src={list3} width={30} height={30} layout='intrinsic' />
          <p>매진 걱정없는 선예매</p>
        </Box>
        <Box>
          <Image src={list4} width={30} height={30} layout='intrinsic' />
          <p>시야공유 서비스에서 인증된 좋은좌석</p>
        </Box>
        <Box>
          <Image src={list2} width={30} height={30} layout='intrinsic' />
          <p>공구 취소시 100% 환불</p>
        </Box>
      </SectionOne>

      <SectionTwo>
        <h2><span>이미 많은 분들이</span>공연공구에 참여하고 있습니다.</h2>

        <Review>
          <Img>
            <Image src={img} width={50} height={50} layout='intrinsic'/>
          </Img>
          <strong>뮤지컬 배우 전병준님</strong>
          <p>★★★★★</p>
          <p>
            잡기 힘든 뮤지컬임에도 <strong>좋은 자리를 선예매로</strong><br /> 
            내자리로 잡을 수 있는데 <strong>할인</strong>까지 됩니다!<br />
            <strong>시야 걱정없이</strong> 편하게 볼 수 있어요.
          </p>
        </Review>
      </SectionTwo>
    </>
  )
}
