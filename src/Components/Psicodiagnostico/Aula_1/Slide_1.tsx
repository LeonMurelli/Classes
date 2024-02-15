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
import Cartilha from "../../../Assets/Cartilha.png";
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
      <h1>Psicodiagnóstico</h1>
      <h2>Definição</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Cartilha de Avaliação Psicológica" src={Cartilha} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Avaliação psicológica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Processo estruturado de investigação de fenômenos psicológicos, composto de métodos, técnicas e instrumentos, com o objetivo de prover informações à tomada de decisão, no âmbito individual, grupal ou institucional, com base em demandas, condições e finalidades específicas.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Avaliação psicológica X Testagem psicológica</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A avaliação psicológica é um processo amplo que envolve a integração de informações provenientes de diversas fontes de informação,.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A testagem psicológica, por sua vez, diz respeito à aplicação dos testes psicológicos e obtenção de informações a partir dessa testagem.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A testagem psicológica é uma etapa da avaliação psicológica.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Avaliação psicológica X Psicodiagnóstico</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A única mensão ao termo "psicodiagnóstico" na cartilha do CFP ocorre na página 51, ligando o termo a uma modalidade de avaliação psicológica ligada ao contexto clínico/médico e, mais especificamente, a uma investigação psicopatológica.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span><span className="italicText">"O psicodiagnóstico é um procedimento científico de investigação e intervenção clínica, limitado no tempo, que emprega técnicas e/ou testes com o propósito de avaliar uma ou mais características psicológicas, visando um diagnóstico psicológico (descritivo e/ou dinâmico), construído à luz de uma orientação teórica que subsidia a compreensão da situação avaliada, gerando uma ou mais indicações terapêuticas e encaminhamentos".</span> (Hutz et. al, 2016)</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <a href="https://site.cfp.org.br/wp-content/uploads/2022/08/cartilha_avaliacao_psicologica1.pdf" target="_blank" rel="noopener noreferrer"><h3>Referência adicional</h3></a>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;