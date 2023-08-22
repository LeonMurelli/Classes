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
import Method from "../../../Assets/method.jpg";
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
      <h2>Métodos da psicologia do desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Método" src={Method} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O método Introspectivo</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Criado pelo psicólogo Wilhelm Wundt.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consiste no conhecimento de fenômenos psicológicos por meio de uma autoanálise relatada pelo próprio indivíduo analisado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O pesquisador foca no consciente ou no processo de tomada de consciência sobre os estados mentais.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>O método Experimental</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Papel de destaque nos estudos comportamentais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consiste na manipulação de um determinado fator ou condição (variáveis independentes) e a observação das consequências dessa manipulação no comportamento em estudo (variáveis dependentes).</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>O método Clínico</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consiste no emprego de técnicas e de estratégias que, numa dupla vertente terapêutica e de investigação, visam compreender de forma global, qualitativa e aprofundada casos individuais (um individuo ou um pequeno conjunto de indivíduos). </span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>O método Psicanalítico</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consiste na investigação de fatores inconscientes que interferem na racionalidade e no contato com a realidade com o emprego de procedimentos próprios:</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Hipnose - Indução de um estado de transe semelhante ao sono mas com características peculiares como a preservação da habilidade de comunicação, alta sugestionabilidade e acesso a conteúdos inconscientes;</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Interpretação dos sonhos - Interpretação de imagens presentes nos sonhos como símbolos de elementos recalcados, angústias e conflitos inconscientes.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Atos Falhos - Lapsos de linguagem ou memória aparentemente insignificantes que podem ser interpretados como interferência inconsciente no contexto em que se manifestam.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Transferência - Atribuição inconsciente de sentimentos de ternura ou hostilidade ao analista que podem ser interpretados como advenientes de outro vínculo significativo da pessoa.</span>
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