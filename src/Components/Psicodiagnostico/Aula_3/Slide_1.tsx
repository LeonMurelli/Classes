import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  DescriptionContainer3, 
  DescriptionContainer4, 
  Dot, 
  Image, 
  ImageContainer, 
  ImageDisplay, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Teste from "../../../Assets/testing.jpg";
import { useState } from "react";
import kid1 from "../../../Assets/kid.png";
import teen1 from "../../../Assets/teen.png";
import adult1 from "../../../Assets/adult.png";

function SlideI() {
  const [ expand1, setExpand1 ] = useState(false);
  const [ expand2, setExpand2 ] = useState(false);
  const [ expand3, setExpand3 ] = useState(false);
  const [ expand4, setExpand4 ] = useState(false);
  const [ expand5, setExpand5 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
    setExpand2(false)
    setExpand3(false)
    setExpand4(false)
    setExpand5(false)
  };
  const handleExpand2 = () => {
    setExpand1(false)    
    setExpand2(!expand2)
    setExpand3(false)
    setExpand4(false)
    setExpand5(false)
  };
  const handleExpand3 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(!expand3)    
    setExpand4(false)
    setExpand5(false)
  };
  const handleExpand4 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(false)
    setExpand4(!expand4)
    setExpand5(false)
  };
  const handleExpand5 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(false)
    setExpand4(false)
    setExpand5(!expand5)
  };
  
  return(
    <Container>
      <h1>Psicodiagnóstico</h1>
      <h2>Entrevista de Anamnese</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Investigação sobre a história de vida e demanda.</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Anamnese significa trazer à consciência os fatos relacionados à queixa e à história do avaliando.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Um de seus principais objetivos é a busca de uma possível conexão entre os aspectos da vida do avaliando e o problema apresentado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Tem caráter in­­ves­tigativo, priorizando o levantamento de in­­for­mações cronologicamente organizadas e que guiam a tomada de decisão sobre como prosseguir com a avaliação</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Registro das informações</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Anotações X Evolução X Gravação</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-13-2022-dispoe-sobre-diretrizes-e-deveres-para-o-exercicio-da-psicoterapia-por-psicologa-e-por-psicologo#:~:text=Disp%C3%B5e%20sobre%20diretrizes%20e%20deveres,Art." target="_blank" rel="noopener noreferrer"><h3>Resolução CFP nº 13/2022</h3></a>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Assistente de avaliação</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Especificidades da anamnese com crianças</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic imageContainer">
                  <ImageDisplay 
                    alt="Anamnese Criança" src={kid1}>
                  </ImageDisplay>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Especificidades da anamnese com adolescentes</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic imageContainer">
                  <ImageDisplay 
                    alt="Anamnese Adolescentes" src={teen1}>
                  </ImageDisplay>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand5}>
            <NumberContainer>5</NumberContainer>
            <TextContainer>
              <h3>Especificidades da anamnese com adultos</h3>
              <DescriptionContainer4 className="topic1" expand5={expand5}>
                <TopicContainer className="subTopic imageContainer">
                  <ImageDisplay 
                    alt="Anamnese Adulto" src={adult1}>
                  </ImageDisplay>
                </TopicContainer>
              </DescriptionContainer4>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;