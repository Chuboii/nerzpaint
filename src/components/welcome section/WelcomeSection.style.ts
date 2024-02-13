'use client'
import styled from "styled-components"

export const Container = styled.section`
    padding: 9rem 6rem;
    position: relative;
    width: 100%;
    height: 100dvh;
    bottom: 2.5rem;
    background-image: url('/painting-job-500x500.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
 

    &::before{
    content: '';
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: .75;
    }

    @media screen and (max-width:768px){
        padding:.5rem;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
    }
`
export const Bg = styled.div`
 /* position: absolute;
 inset:0;
 background:rgba(0,0,0,.1); */
`