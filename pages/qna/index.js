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
                // loadIndex: 5,
                loadAmount: 1
            }
          })
        .then(function(res){
            setData(res.data.data);
        })
        .then(function(err){
            console.log(err);
        })
    },[])

    // console.log(data[0].base[0].title)

    const Title = styled.p``

    const Content = styled.p``

    return (
        <>
        {data.map((test) => {
            return (
                <>
                    <Title>{test.base[0].title}</Title>
                    <Content>{test.base[0].content}</Content>
                </>
            )
        })}
        </>
    )
}