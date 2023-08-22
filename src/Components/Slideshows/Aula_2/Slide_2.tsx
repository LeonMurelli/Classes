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
import Research1 from "../../../Assets/kid-research.jpg"
import { useState } from "react";

function SlideII() {
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
      <h2>A História da Psicologia do Desenvolvimento: Nascimento da Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Criança" src={Research1} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>A Psicobiologia</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estuda as bases biológicas relacionadas ao funcionamento do sistema nervoso central e, mais especificamente, ao comportamento e aos processos psíquicos; dentre os tópicos estudados pela psicobiologia, pode-se destacar a aprendizagem, a estimulação sensorial e as doenças mentais.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>A Psicologia da Personalidade </h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estuda experiências subjetivas internas; contribui, por exemplo, para a identificação de sistemas neurais/biológicos que influenciam a personalidade e ajuda a explicar dife-renças significativas entre as pessoas. Ao mesmo tempo, especialmente em seus estudos mais recentes, busca entender, também, como os contextos nos quais as pessoas vivem podem influenciar a forma como elas dão sentido ou atribuem significados a eventos cotidianos.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>O Desenvolvimento Cognitivo</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estuda o processamento de informações pelo cérebro, os recursos conceituais e as habilidades perceptivas mentais, entre outros aspectos. O desenvolvimento cognitivo pesquisa a capacidade dos indivíduos de pensar e compreender e estuda questões relativas à lingua-gem, à coordenação motora, ao desenvolvimento afetivo/emocional, entre outros. O desenvolvimento cognitivo também considera fatores externos aos indivíduos em suas análises, pois considera que os sujeitos desenvolvem respostas cada vez mais complexas ao meio.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideII;