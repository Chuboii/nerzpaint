'use client'
import styled from "styled-components";

export const Container = styled.section`
  @media screen and (max-width:768px){
  }
`
export const Title = styled.h1`
    font-size:55px;
        display: flex;
        text-transform: capitalize;
        flex-direction: column;
        line-height: 65px;
        margin-top: 1rem;
`
export const Text = styled.p`
       font-weight: 700;
       text-transform: uppercase;
        color: #4E5CC4;
        letter-spacing: 1px;
`
export const SubText = styled.p`
    color:#727695;
    margin-top: 1rem;
    text-transform: capitalize;
    font-family: 'Kanit', sans-serif;
`
export const Wrap = styled.div`

`
export const Bold = styled.span`
        font-weight:800;
        font-size:50px;
`

export const Span = styled.span`
     font-weight: 200;
     font-size:35px;
`