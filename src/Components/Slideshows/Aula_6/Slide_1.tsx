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
import Iceberg from "../../../Assets/Iceberg.png";
import { useState } from "react";

function SlideI() {
  const [ expand1, setExpand1 ] = useState(false);
  const [ expand2, setExpand2 ] = useState(false);
  const [ expand3, setExpand3 ] = useState(false);
  const [ expand4, setExpand4 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
    setExpand2(false)
    setExpand3(false)
    setExpand4(false)
  };
  const handleExpand2 = () => {
    setExpand1(false)    
    setExpand2(!expand2)
    setExpand3(false)
    setExpand4(false)
  };
  const handleExpand3 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(!expand3)
    setExpand4(false)
  };
  
  const handleExpand4 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(false)
    setExpand4(!expand4)
  };

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>As Teorias Psicanalíticas e a Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Teorias" src={Iceberg} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Primeira Tópica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consciente: Inclui tudo o que estamos cientes num  dado momento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pré-consciente: É uma parte do inconsciente que  pode tornar-se consciente com facilidade; são as  porções acessíveis da memória.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Inconsciente: Nele concentram-se elementos  instintivos, que não são acessíveis à consciência. Aí,  estão as fontes de energia psíquica e pulsões ou  instintos.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>O Id</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O inconsciente, como instância psíquica, virtualmente coincide com o id, o qual é considerado o pólo psicobiológico da personalidade e primeira instância a se fazer presente na psicodinâmica humana.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Id é a um só tempo um reservatório e uma fonte de energia psíquica (Libido).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É regido pelo princípio do prazer.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>O Ego</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As novas informações que o indivíduo recebe são relacionadas com as estruturas cognitivas já existentes e provocam alterações nelas.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>O Superego</h3>
              <DescriptionContainer1 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As novas informações que o indivíduo recebe são relacionadas com as estruturas cognitivas já existentes e provocam alterações nelas.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;