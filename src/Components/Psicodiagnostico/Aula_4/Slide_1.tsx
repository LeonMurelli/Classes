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
import Teste from "../../../Assets/testing.jpg";
import { useState } from "react";

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
  
  return(
    <Container>
      <h1>Psicodiagnóstico</h1>
      <h2>Etapas finais</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Conclusão</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Espera-se que o psicólogo apresente evidências das constatações feitas durante o processo de psicodiagnóstico. Para isso, é desejável que ele cite referências técnicas e teóricas, capítulos de livros e artigos científicos que embasem suas afirmações.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Na conclusão, são trazidos dados históricos, desde que sejam importantes para a compreensão do caso.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apresentar sugestões e projetos de intervenção que contemplem a complexidade das variáveis envolvidas no caso.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As informações colhidas por diferentes técnicas podem ser contraditórias. Dessa forma, o profissional que trabalha com psicodiagnóstico deve preocupar-se com a convergência ou a divergência entre as informações colhidas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O diagnóstico nosológico será apresentado no laudo se essa informação for necessária à demanda.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Entrevista devolutiva</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Possui um papel fundamental no processo psicodiagnóstico no sentido de descobrir, organizar e esclarecer a complexidade do que veio à tona a partir do pedido de ajuda inicial.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Processo dialógico que, além de expor os resultados, os itegra. Provocando alterações no documento final quando necessário.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Oportunidade de trabalhar com o paciente as reações manifestadas pelo recebimento das informações da avaliação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Necessita preparo técnico/teórico para esclarecer dúvidas sobre o processo e sobre as conclusões atingidas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Indicações terapêuticas, prognóstico e trabalho de adesão do tratamento.</span>
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