import styled from "styled-components";

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