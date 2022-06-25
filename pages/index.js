import Head from 'next/head';
import Image from 'next/image';
import styled from "styled-components";
import img from '../public/images/profile_best.png';

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
  position: absolute;
  display: flex;
  width: 13vw;
  background-color: #F95B4F;
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
  color: red;
  font-weight: 700;
  border: none;
  border-radius: 5px;
`

// SectionOne
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

  img {
    width: 30px;
    height: 30px;
    background-color: red;
    margin: 0 10px 0 10px;
  }

  p {
    font-size: 14px;
    color: #000;
  }
`

// SectionTwo
const SectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;

  h2 {
    text-align: center;
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
  background-color: aqua;
`

const Img = styled.div`
  position: relative;
  background-color: red;
`

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
        <h1>
        <span>
          공연공구,
        </span>
          왜 참여해야하죠?
        </h1>
        <Box>
          <img src="" alt="" />
          <p>최고 배우들의 엄선된 공연</p>
        </Box>
        <Box>
          <img src="" alt="" />
          <p>매진 걱정없는 선예매</p>
        </Box>
        <Box>
          <img src="" alt="" />
          <p>시야공유 서비스에서 인증된 좋은좌석</p>
        </Box>
        <Box>
          <img src="" alt="" />
          <p>공구 취소시 100% 환불</p>
        </Box>
      </SectionOne>

      <SectionTwo>
        <h2><span>이미 많은 분들이</span>공연공구에 참여하고 있습니다.</h2>

        <Review>
          <Img>
            <Image src={img} width={50} height={50} layout='intrinsic'/>
          </Img>
          <p>이름</p>
          <div>별점</div>
          <p>리뷰 내용</p>
        </Review>
      </SectionTwo>
    </>
  )
}
