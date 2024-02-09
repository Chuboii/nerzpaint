import ContactSection from "@/components/contact/contact section/ContactSection";
import Reviews from "@/components/reviews/Reviews";
import WelcomeSection from "@/components/welcome section/WelcomeSection";
import Image from "next/image";
import { ImageBox, Container, ImageBox2, ImageBox3 } from "./HomeStyles.style";
import QualitySection from "@/components/quality section/QualitySection";
import Products from "@/components/products/Products";

export default function Home() {


  return (
    <Container>
      <ImageBox>
        <Image src='/03.png' fill alt=""/>
      </ImageBox>

      <ImageBox2>
        <Image src='/04.png' fill alt=""/>
      </ImageBox2>

      <ImageBox3>
        <Image src='/03.png' fill alt=""/>
      </ImageBox3>
      <WelcomeSection />
      <QualitySection />
      <Products/>
      <Reviews />
      <ContactSection/>
    </Container>
  );
}
