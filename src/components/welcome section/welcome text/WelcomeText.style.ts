'use client'
import styled from "styled-components";

export const Container = styled.section`
position: relative;
  @media screen and (max-width:768px){
  }
`
export const Title = styled.h1`
    font-size:55px;
        display: flex;
        text-transform: capitalize;
        flex-direction: column;
        line-height: 65px;
        position: relative;
        z-index:13;
        margin-top: 1rem;
        color:white;
`
export const Text = styled.p`
       font-weight: 700;
       position: relative;
       text-transform: uppercase;
        color: #4E5CC4;
        letter-spacing: 1px;
        z-index:1;
`
export const SubText = styled.p`
    color:white;
    margin-top: 1rem;
    position: relative;
    text-transform: capitalize;
    z-index:1;
    font-family: 'Kanit', sans-serif;
`
export const Wrap = styled.div`

`
export const Bold = styled.span`
        font-weight:800;
        z-index:1;
        font-size:50px;
`

export const Span = styled.span`
     font-weight: 200;
     z-index:1;
     font-size:35px;
`