import { sliderContent } from "content";
import {
  ButtonWrapper,
  Container,
  Content,
  ContentWrapper,
  NavButton,
  SliderButton,
  SliderLink,
  SliderNav,
} from "./style";
import { useNav } from "hooks/useNav";

const AboutSlider = () => {
  const { activeSlide, nextSlide, prevSlide, goToSlide } = useNav();
  return (
    <>
      <Container>
        <ButtonWrapper>
          <SliderButton onClick={prevSlide}>&lt;</SliderButton>
          <SliderButton onClick={nextSlide}>&gt;</SliderButton>
        </ButtonWrapper>
        <ContentWrapper>
          {sliderContent.map((slide, index) => {
            return (
              <div
                key={index}
                className={index === activeSlide ? "slide-active" : "slide"}
              >
                {index === activeSlide && <Content>{slide}</Content>}
              </div>
            );
          })}
          <SliderLink>Ver más...</SliderLink>
        </ContentWrapper>
        <SliderNav>
          <NavButton onClick={() => goToSlide(0)}>Bienvenida</NavButton>
          <NavButton onClick={() => goToSlide(1)}>Sobre Nosotros</NavButton>
          <NavButton onClick={() => goToSlide(2)}>Franquicias</NavButton>
          <NavButton onClick={() => goToSlide(3)}>Experiencia Buller</NavButton>
        </SliderNav>
      </Container>
    </>
  );
};

export default AboutSlider;
