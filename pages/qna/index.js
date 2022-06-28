import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Qna() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `/api/qna`,
            params: {
                // loadIndex: 0,
                loadAmount: 10
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

    // console.log(data)

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
        padding: 0;
        margin: 0;
    `

    const Title = styled.div`
        background-color: #FFF;
        padding: 20px 30px;

        input {
            /* display: none; */
        }

        label {
            font-size: 18px;
            font-weight: 700;
            cursor: pointer;
        }
    `

    const Content = styled.div`
        p {
            margin: 0;
            padding: 10px 30px;
            background-color: #F6F6F6;
        }
    `

    return (
        <Wrap>
        <h1>자주 묻는 질문</h1>
        <Cont>
            {data.map((test) => {
                return (
                    <Question>
                        <Title>
                            <label>{test.base[0].title}
                                <input type="radio" name="qna"/>
                            </label>
                        </Title>
                        <Content>
                            <p>{test.base[0].content}</p>
                        </Content>
                    </Question>
                )
            })}
        </Cont>
        </Wrap>
    )
}