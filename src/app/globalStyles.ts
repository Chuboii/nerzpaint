'use client'

import { createGlobalStyle } from "styled-components"

type GlobalStylesType = {
    overflow: string;
}
export const GlobalStyles = createGlobalStyle<GlobalStylesType>`
  body{
    overflow:${({overflow}) => overflow};
    
  }
`