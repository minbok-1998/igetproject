import styled from "styled-components";
import Image from "next/image";
import facebook from '../public/images/facebook.png'
import insta from '../public/images/insta.png'
import youtube from '../public/images/youtube.png'
import blog from '../public/images/blog.png'

const Wrap = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    background-color: #343434;
    padding: 70px 100px 70px 100px;
    align-items: center;
    justify-content: space-between;
`

const Textarea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`

const Menu =  styled.div`
    display: flex;
    width: 22vw;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    justify-content: space-between;
`

const Address = styled.div`
    font-size: 14px;
    color: gray;
`

const Copyright = styled.p`
    font-size: 14px;
    color: gray;
`

const Snsarea = styled.div`
    display: flex;
    width: 23vw;
    height: auto;
    justify-content: space-between;

    div {
        display: flex;
        width: 70px;
        height: 70px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }
`

export default function Footer() {
    return (
        <Wrap>
            <Textarea>
                <Menu>
                    <p>회사소개</p>
                    <p>개인정보처리방침</p>
                    <p>서비스이용약관</p>
                </Menu>
                <Address>
                    <p>(주)엔터크라우드 서울특별시 서초구 서초대로 77길 62, S&G타워 8층</p>
                    <p>대표:정주황 사업자 등록번호:220-88-73798 통신판매업신고:제2019-서울서초-2583호 전화번호:1833-5313 이메일:support@entcrowd.com</p>
                </Address>
                <Copyright>
                    Copyright ©2022(주)엔터크라우드.All Rights reserved.
                </Copyright>
            </Textarea>
            <Snsarea>
                <div>
                    <Image src={facebook} width={32} height={32} layout='intrinsic' />
                </div>
                <div>
                    <Image src={insta} width={32} height={32} layout='intrinsic' />
                </div>
                <div>
                    <Image src={youtube} width={32} height={32} layout='intrinsic' />
                </div>
                <div>
                    <Image src={blog} width={32} height={32} layout='intrinsic' />
                </div>
            </Snsarea>
        </Wrap>
    )
}