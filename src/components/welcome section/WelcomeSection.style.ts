'use client'
import styled from "styled-components"

export const Container = styled.section`
    padding: 1rem 6rem;
    margin-top: 10rem;
    position: relative;
    width: 100%;
    
    @media screen and (max-width:768px){
        padding:.5rem;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
    }
`