import Image from 'next/image'
import ControlledAccordions from '@/components/faq/Accordion'
import {Container,ImageBoxFaq,Ul,Icon, List,Title,WrapImage, ImageBox2,LineImage ,Wrapper, WrapText,IconBox, ImageBox, Text,SubTitle} from './About.style'
import ScrollToTop from '@/components/scroll to top/ScrollToTop'


const imageStyle = {
    borderRadius: "50px 50px 0 100px"
}

const AboutPage = () => {
    return (
        <>            
            <ScrollToTop />
        <meta name="about nerzpaints" content="view all the paint products" />
        <meta property="og:all products" content="My Open Graph Title" />
        <meta property="og:view all paint products - nerzpaints" content="view all nerzpaint paint products" />
        <meta name="keywords" content="paints paint product home comfort painting painter" />
        <title>About Nerzpaints - nerzpaints</title>

            <Container>
                <Wrapper>

                <WrapText>
                    <Title>Painting the future</Title>
               <SubTitle>We create unique futuristic paint products</SubTitle>
               <LineImage>
                            <Image fill src="/area-line.png" alt="underline"/>
                        </LineImage>
                        <Text>Nerzpaints emerges as a dynamic force within the paint industry, offering a comprehensive range of solutions tailored for diverse needs. Specializing in interior and exterior paints, alongside a dedicated line of Marine paints, our company stands at the forefront of innovation and quality craftsmanship. With a commitment to excellence and customer satisfaction, Nerzpaint sets a new standard of reliability and performance in every brushstroke, making spaces come alive with vibrant colors and enduring beauty.</Text>    
                        <Ul>
                            <List>
                              <IconBox>
                              <Icon className="fa fa-check" aria-hidden="true"></Icon> </IconBox>
                                We deliver quality and durable products</List>
                            <List>
                            <IconBox>
                            <Icon className="fa fa-check" aria-hidden="true"></Icon> </IconBox>
                                New and enhanced formulars for better use</List>
                            <List>
                            <IconBox>
                            <Icon className="fa fa-check" aria-hidden="true"></Icon> </IconBox>
                                Cheap and affordable</List>
                            <List>
                            <IconBox>
                            <Icon className="fa fa-check" aria-hidden="true"></Icon> </IconBox>
                                Turn your place into your desired taste using varieties of colors</List>
                   </Ul>
                    </WrapText>    
                    <WrapImage>
                    <ImageBox>
                    <Image style={imageStyle} src="/WhatsApp Image 2024-02-20 at 15.01.38_0c1b61a3.jpg" alt="nerzpaint about image" fill/>
                        </ImageBox>

                        <ImageBox2>
                            <Image src="/about-layer_2.png" alt="about layer" fill/>
                        </ImageBox2>
                    </WrapImage>
                </Wrapper>

                <Wrapper>
                    <ImageBoxFaq>
                        <Image style={imageStyle} src="/WhatsApp Image 2024-02-20 at 15.01.37_a710a663.jpg" alt="nerzpaints questions about image" fill />
                    </ImageBoxFaq>

                    <WrapText>
                        <Title>FAQS</Title>
                        <SubTitle>Get your answers to your questions here.</SubTitle>
                        <LineImage>
                            <Image fill src="/area-line.png" alt="underline"/>
                        </LineImage>
                        
                        <Text>Get acquainted with our company and offerings through our FAQ section, designed to address common queries.</Text>    
                   
                    <ControlledAccordions/>
                    </WrapText>
                </Wrapper>
    </Container>
    </>
  )
}

export default AboutPage
