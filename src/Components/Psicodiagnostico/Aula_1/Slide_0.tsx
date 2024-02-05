import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  Dot, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import { useState } from "react";


function Slide0() {
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
      <h1>Psicodiagnóstico</h1>
      <h2>Orientações</h2>
      <ContentContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Presença</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Chamadas no início da aula e na retomada após o intervalo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Tolerância de 15 minutos a partir do início da aula.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Limite de faltas de 25% da carga horária. O que corresponde a 15 horas aula ou 5 dias em um semestre.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Compensação de faltas só ocorrem mediante apresentação de atestado médico de 15 a 90 dias no sistema da faculdade. Entrando em regime especial de ensino.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No caso de regime especial a entrega das avaliações referentes a A2 poderam ser adiadas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Falta na data da avaliação A1 ...</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Avaliações</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A avaliação A2 será composta por cinco avaliações de um ponto cada:<br/>Roteiro de anamnese;<br/>Descrição da demanda e entrevista;<br/>Descrição do Palográfico;<br/>Descrição do TAT;<br/>Conclusão.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Cada uma destas etapas terá seu prazo de entrega definido e, caso sejam entregues após este prazo, valerá apenas 0,5 pontos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A avaliação regimental (A1) já possui data marcada, que corresponde ao dia da aula da matéria que cai no período marcado no calendário acadêmico para a semana de provas (03/06/2024 a 08/06/2024).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A avaliação regimental será uma prova escrita modelo ENADE, individual, presencial e sem consulta valendo 5 pontos.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Plano de ensino</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Processo em andamento.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default Slide0;