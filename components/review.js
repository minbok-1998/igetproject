import Image from 'next/image';
import styled from "styled-components";
import img from '../public/images/profile_best.png';

const Wrap = styled.div`
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
    margin: 10px 0 10px 0;
  }
`

const Img = styled.div`
  position: relative;
  margin: -25px 0 0 0;
`

export default function Review() {
    return (
        <Wrap>
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
        </Wrap>
    )
}