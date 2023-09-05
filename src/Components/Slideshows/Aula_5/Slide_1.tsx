import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Cognitive from "../../../Assets/psicologia-cognitiva.jpg";
import { useState } from "react";

function SlideI() {
  const [ expand1, setExpand1 ] = useState(false);
  const [ expand2, setExpand2 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
    setExpand2(false)
  };
  
  const handleExpand2 = () => {
    setExpand1(false)    
    setExpand2(!expand2)
  };

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>As Teorias Cognitivistas e a Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Teorias" src={Cognitive} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Análise dos processos mentais</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A aprendizagem e o desenvolvimento ocorrem quando há uma mudança nas estruturas cognitivas, na forma como se percebem e organizam os acontecimentos, atribuindo-lhes significados.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>O desenvolvimento depende das estruturas cognitivas já existentes</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
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