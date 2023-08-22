import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Goals from "../../../Assets/goals.png";
import { useState } from "react";

function SlideI() {
  const [ expand1, setExpand1 ] = useState(false);
  const [ expand2, setExpand2 ] = useState(false);
  const [ expand3, setExpand3 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
    setExpand2(false)
    setExpand3(false)
  };
  const handleExpand2 = () => {
    setExpand1(false)    
    setExpand2(!expand2)
    setExpand3(false)
  };
  const handleExpand3 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(!expand3)
  };

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>Objetivos da psicologia do desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Objetivos" src={Goals} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O estudo de como as pessoas mudam ou como ficam iguais desde a concepção até a morte</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Busca compreender como o tempo, a hereditariedade, a fisiologia, experiências de aprendizagem e diferentes contextos (cultural, histórico e social, por exemplo), entre outros fatores, podem influenciar o desenvolvimento humano (BOCK, FURTADO, TEIXEIRA, 2002).</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Objetivos gerais da Psicologia do Desenvolvimento</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Identificar a gênese de aspectos afetivos, cognitivos, motores e sociais do desenvolvimento humano.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Identificar a causa das mudanças de aspectos afetivos, cognitivos, motores e sociais do desenvolvimento humano.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Distinguir os estágios ou fases do desenvolvimento humano.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Princípios gerais do desenvolvimento humano</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É composto por estágios/fases distintas que apresentam um conjunto de características próprias.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É um processo sequencial de passos interdependentes.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ocorre de aspectos mais gerais para aspectos mais específicos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ainda que o ritmo/velocidade varie entre os indivíduos. Há uma constância do desenvolvimento físico-motor ao cognitivo.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;