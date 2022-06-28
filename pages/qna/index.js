import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import expand from '../../public/images/expand.svg'

const Wrap = styled.div`
display: flex;
height: auto;
flex-direction: column;
align-items: center;
`

const Cont = styled.div`
width: 100%;
height: auto;
`

const Question = styled.div`
background-color: #FFF;
padding: 20px 30px;

input {
    display: none;

    :checked + div {
        height: auto;
    }
}

label {
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
}

div {
    position: relative;
    height: 0;
    overflow: hidden;
    background-color: #F6F6F6;
    margin: 20px 0 0 0;
}

i {
    position: absolute;
    right: 30px;
}
`

export default function Qna() {
    const [data, setData] = useState([]);
      
    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/qna`,
            params: {
                // loadIndex: 0,
                loadAmount: 20
            }
          })
        .then(function(res){
            console.log(res.data.data)
            setData(res.data.data);
        })
        .then(function(err){
            console.log(err);
        })
    },[])

    return (
        <Wrap>
        <h1>자주 묻는 질문</h1>
        <Cont>
            {data.map((test) => {
                return (
                    <Question>
                        <label>
                            {test.base[0].title}
                            <i>
                                <Image src={expand} width={24} height={24} layout='intrinsic' />
                            </i>
                            <input 
                                type="radio" 
                                name="qna"
                            />
                            <div>
                                <p>{test.base[0].content}</p>
                            </div>
                        </label>
                    </Question>
                )
            })}
        </Cont>
        </Wrap>
    )
}