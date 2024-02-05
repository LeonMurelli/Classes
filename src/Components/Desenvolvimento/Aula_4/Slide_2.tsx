import { 
  BottomContainer,
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  DescriptionContainer3, 
  Dot, 
  FirstItem, 
  FourthItem, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  SecondItem, 
  TableContainer, 
  TextContainer, 
  ThirdItem, 
  TopContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Skinner from "../../../Assets/img_TT_skinner_lab.jpg"
import { useState } from "react";

function SlideII() {
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
      <h2>A Teoria Comportamental e a Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Criança" src={Skinner} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Comportamento Reflexo ou Sistema Estímulo e Resposta</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Se entende por Estímulos todo fenômeno proveniente do meio externo ou interno que possa provocar uma reação do organismo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Essa reação a um estímulo específico que afeta o organizmo é então chamada de resposta e completa o ciclo do comportamento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Para Watson, reações inatas a estímulos específicos compõem os comportamentos respondentes. Em um nível maior de complexidade estão os comportamentos condicionados pela substituição de seu estímulo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O desenvolvimento humano acontece mediante uma sequência de condicionamentos não planejados que constroem comportamentos progressivamente mais complexos.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Comportamento Operante e o Behaviorismo radical</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Skinner amplia o arcabouço teórico deixado por Watson ao trazer a ideia de que os homems, além da relação paciva de que reage a estímulos do meio, atuam no meio de forma ativa, intencional, a partir de seus próprios esquemas e promovendo mudanças no ambiente em que estão inseridos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O ciclo do comportamento é ampliado, recebendo influência do meio tanto antes quanto depois da resposta. Inclui as consequências da reação como fator relevante e manipulável do comportamento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Experimentos com a caixa de Skinner.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Reforçamento e punição</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <TableContainer>
                    <TopContainer>
                      <FirstItem>
                        <h3>Reforçamento Positivo</h3>
                      </FirstItem>
                      <SecondItem>
                        <h3>Reforçamento Negativo</h3>
                      </SecondItem>
                    </TopContainer>
                    <BottomContainer>
                      <ThirdItem>
                        <h3>Punição Positiva</h3>
                      </ThirdItem>
                      <FourthItem>
                        <h3>Punição Negativa</h3>
                      </FourthItem>
                    </BottomContainer>
                  </TableContainer>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Repertório Comportamental</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Conjunto e padrões de comportamentos aprendidos e fortalecidos pelo reforçamento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O equivalente ao conceito de personalidade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Para Skinner a ideia de uma personalidade neurótica/patológica nada mais é que a inclusão no repertório de comportamentos não adaptativos que, por algum motivo, foram reforçados.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Na realidade as contingências do comportamento não são tão controladas. É comum acontecerem reforçamentos de determinados comportamentos coincidentemente, ao invés de uma ligação funcional com o reforço. Consequentemente, é comum a presença de comportamentos supersticiosos no repertório de cada indivíduo.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideII;