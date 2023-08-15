import { SlideContext } from "../../Contexts/slideContext";
import { BackButton, ButtonIcon, Container, NextButton } from "./styles";
import { useContext, useState } from "react";
import BackIcon from '../../Assets/back-button.png'
import NextIcon from '../../Assets/next-button.png'

const SlidePresentation = () => {
  const { slides } = useContext(SlideContext)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const CurrentSlide = slides[currentSlideIndex];

  return (
    <Container className="slide-container">
      <BackButton onClick={goToPreviousSlide}>
        <ButtonIcon alt="ícone voltar" src={BackIcon} />
      </BackButton>
      <CurrentSlide />   
      <NextButton onClick={goToNextSlide}>
        <ButtonIcon alt="ícone avançar" src={NextIcon} />
      </NextButton>
    </Container>
  );
};

export default SlidePresentation;