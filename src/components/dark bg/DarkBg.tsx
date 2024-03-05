'use client'
import { GlobalStyles } from '@/app/globalStyles';
import { Container } from './DarkBg.style'

type DarkBgType = {
    disableNavbar: (arg0 : boolean) => void | string;
    overflow: string;
}

const DarkBg = ({disableNavbar, overflow} : DarkBgType) => {

const closeMobileNavbar = () => disableNavbar(false)

    return (
        <>
        <GlobalStyles overflow={overflow} />
        <Container onClick={closeMobileNavbar}>
                
        </Container>
        </>
    )
}

export default DarkBg