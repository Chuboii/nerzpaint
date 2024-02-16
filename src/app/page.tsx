import ContactSection from "@/components/contact/contact section/ContactSection";
import Reviews from "@/components/reviews/Reviews";
import WelcomeSection from "@/components/welcome section/WelcomeSection";
import Image from "next/image";
import { ImageBox, Container, ImageBox2, ImageBox3 } from "./HomeStyles.style";
import QualitySection from "@/components/quality section/QualitySection";
import WhoWeAreSection from "@/components/who we are/WhoWeAreSection";
import HomePaintProducts from "@/components/home paint products/HomePaintProducts";
import MarinePaintProducts from "@/components/marine paint products/MarinePaintProducts";

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
      <HomePaintProducts />
      <MarinePaintProducts/>
      <WhoWeAreSection/>
      <Reviews />
      <ContactSection/>
    </Container>
  );
}
