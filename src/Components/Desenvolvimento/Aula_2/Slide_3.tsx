import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  DescriptionContainer3, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Time from "../../../Assets/time-passing.jpg";
import { useState } from "react";

function SlideIII() {
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
      <h2>A História da Psicologia do Desenvolvimento: Evolução da Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Binet" src={Time} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>1920 - 1939</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <p><span className="italicText">Society for research in Child Development</span> - Sociedade de Pesquisa em Desenvolvimento Infantil (1933)</p>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Foco no desenvolvimento intelectual das crianças.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Crítica ao modelo descritivo, que objetiva levantar uma série de informações sobre determinados fenômenos e descrever suas características.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Interesse crescente no modelo explicativo longitudinal, que visam à identificação de fatores que contribuem para a ocorrência de determinados fenômenos em um determinado período de tempo (em geral alguns anos) e analisam as mudanças ocorridas no fenômeno provocadas também pela passagem do tempo.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>1940 - 1959</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Segunda guerra mundial e a falta de investimento em pesquisas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pesquisas exploratórias com métodos correlacionais que pretendem criar maior familiaridade com o problema de pesquisa, tendo como objetivo torná-lo mais explícito ou construir hipóteses sobre o mesmo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O estudo das relações entre as variáveis é um estudo descritivo, sem manipulação da variáveis e, consequentemente, sem estabelecer relações causais entre elas.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>1960 - 1989</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Retorno dos investimentos em pesquisa</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Preponderância das pesquisas sobre desenvolvimento nas áreas do Comportamentalismo (John B. Watson e B. F. Skinner), do Sociointeracionismo (L. S. Vygotsky) e da Psicologia Genética (Jean Piaget) </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Revolução cognitiva - diferentes elementos da cognição passam a ser estudados e investigados.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pesquisas exploratórias de cunho experimental - buscam identificar, controlar e manipular variáveis e seus efeitos sobre um objeto de estudo.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>1990 aos dias de hoje</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Os estudos sobre o desenvolvimento humano se expandem para as outras fases de seu ciclo vital, passando a estudar os fenômenos que se expressam desde o nascimento até a morte.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Reconhecimento da interdisciplinaridade da Psicologia do Desenvolvimento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Surgimento de novos paradigmas.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideIII;