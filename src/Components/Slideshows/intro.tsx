import { Container, ContentContainer, Image, ImageContainer, TextContainer } from "./styles";
import UCB from "../../Assets/UCB.png";
import PUCRS from "../../Assets/PUCRS.png";
import Psicologo from "../../Assets/Psicologo-Clinico.jpg";
const Intro = () => {
  return(
    <Container className="IntroContainer">
      <h1>Apresentação</h1>
      <h2>Leon Murelli Silveira</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="UCB" src={UCB} />
        </ImageContainer>
        <TextContainer>
          <span>Graduado em Psicologia pela Universidade Católica de Brasília em 2010 com TCC em avaliação psicológica.</span>
        </TextContainer>
      </ContentContainer>
      <ContentContainer>
        <ImageContainer>
          <Image alt="PUCRS" src={PUCRS} />
        </ImageContainer>
        <TextContainer>
          <span>Mestrado em Ciências Criminais pela Pontifícia Universidade Católica do Rio Grando do Sul em 2013 com dissertação sobre a elaboração de perfil psicológico de autores de homicídios através de elementos da cena do crime.</span>
        </TextContainer>
      </ContentContainer>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Psicólogo Clínico" src={Psicologo} />
        </ImageContainer>
        <TextContainer>
          <span>Psicólogo clínico de abordagem psicodinâmica e ênfase em avaliação psicológica.</span>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default Intro;