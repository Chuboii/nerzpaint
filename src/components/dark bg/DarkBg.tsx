'use client'
import { GlobalStyles } from '@/app/globalStyles';
import { Container } from './DarkBg.style'

type DarkBgType = {
    disableNavbar: (arg0 : boolean) => void;
}

const DarkBg = ({disableNavbar} : DarkBgType) => {

const closeMobileNavbar = () => disableNavbar(false)

    return (
        <>
            <GlobalStyles overflow="hidden"/>
        <Container onClick={closeMobileNavbar}>
                
        </Container>
        </>
    )
}

export default DarkBg