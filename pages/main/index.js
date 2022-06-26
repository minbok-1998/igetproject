import Image from 'next/image';
import styled from "styled-components";

// SectionOne 이미지
import list1 from '../../public/images/list1.png';
import list2 from '../../public/images/list2.png';
import list3 from '../../public/images/list3.png';
import list4 from '../../public/images/list4.png';

import Review from '../../components/review';

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

export default function MainPage() {
    return (
        <>
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
        
              <Review />
            </SectionTwo>
        </>
    )
}