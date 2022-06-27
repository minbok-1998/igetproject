import Image from 'next/image';
import styled from "styled-components";
import bestReviewer from '../public/images/profile_best.png';
import profile1 from '../public/images/profile_1.png'
import profile2 from '../public/images/profile_2.png'
import profile3 from '../public/images/profile_3.png'
import profile4 from '../public/images/profile_4.png'

const Best = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  background-color: #FFFFFF;
  -webkit-box-shadow: 3px 2px 15px 1px #C1C1C1; 
  box-shadow: 3px 2px 15px 1px #C1C1C1;
  border-radius: 10px;
  margin: 0 0 50px 0;

  p {
    text-align: center;
  }
`

const Star = styled.p`
  color: #F95B4F;
  margin: 10px 0 10px 0;
`

const Img = styled.span`
  position: relative;
  margin: -25px 0 0 0;
`

const Wrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    -webkit-box-shadow: 3px 2px 15px 1px #C1C1C1; 
    box-shadow: 3px 2px 15px 1px #C1C1C1;
    border-radius: 10px;
    align-items: center;
    padding: 0 10px 0 10px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    padding: 0 10px 0 10px;
    text-align: center;
  }

  span {
    display: block;
  }
`

export default function Review() {
    return (
      <>
        <Best>
            <Img>
              <Image src={bestReviewer} width={50} height={50} layout='intrinsic'/>
            </Img>
            <strong>뮤지컬 배우 전병준님</strong>
            <Star>★★★★★</Star>
            <p>
              잡기 힘든 뮤지컬임에도 <strong>좋은 자리를 선예매로</strong><br /> 
              내자리로 잡을 수 있는데 <strong>할인</strong>까지 됩니다!<br />
              <strong>시야 걱정없이</strong> 편하게 볼 수 있어요.
            </p>
        </Best>

        <Wrap>
          <div>
            <Img>
              <Image src={profile1} width={50} height={50} layout='intrinsic'/>
            </Img>
            <p>20대 직장인 KSH_***님</p>
            <Star>★★★★★</Star>
            <p>
            회전문 자주 도는데요, 어차피 볼 공연인데 돈 <br/> 
            아끼고 자주 볼 수 있어서 너무 좋아요
            </p>
          </div>

          <div>
            <Img>
              <Image src={profile2} width={50} height={50} layout='intrinsic'/>
            </Img>
            <p>20대 대학생 jjh***님</p>
            <Star>★★★★★</Star>
            <p>
              이 공연에 이 가격에?! 보고 싶으면 공연을<br/> 
              3만원 대에 볼 수 있으니까 가입 안 할 이유가<br/> 
              없어요~
            </p>
          </div>

          <div>
            <Img>
              <Image src={profile3} width={50} height={50} layout='intrinsic'/>
            </Img>
            <p>50대 주부 Yeon****님</p>
            <Star>★★★★★</Star>
            <p>
              친구들이랑, 딸이랑 공연 보면서 좋은 시간<br/>
              보내고 있어요~~
            </p>
          </div>
          
          <div>
            <Img>
              <Image src={profile4} width={50} height={50} layout='intrinsic'/>
            </Img>
            <p>30대 직장인 Mojo***님</p>
            <Star>★★★★★</Star>
            <p>
              공연은 비싸기도 하고, 어떤 공연이<br/>
              재밌는지도 잘 몰랐는데, 이제는 아이겟 믿고<br/>
              봅니다ㅎㅎ
            </p>
          </div>
        </Wrap>
      </>
    )
}