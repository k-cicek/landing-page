import Container from "@/components/container/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import PopularShoes from "@/components/PopularShoes";

export default function Home() {
  return (
    <>
      <div className="bg-[#FDF6E3] relative">
        <Container >
          <Header />
          <Hero />
        </Container>
      </div>
      <div className="bg-[#0F172A]">
        <Container>
          <PopularShoes />
        </Container>
      </div>
      <div className="bg-white relative">
        <Container >
          <JoinUs />
        </Container>
      </div>
      <div className="bg-[#0F172A]">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
}
