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
  ImageDisplay, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Teste from "../../../Assets/testing.jpg";
import Entrevistas from "../../../Assets/entrevista.png"
import { useState } from "react";
import Modalidades from "../../../Assets/Modalidades.png"

function SlideIV() {
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
      <h2>Entrevistas</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Entrevistas iniciais</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Entrevistas com o autor do encaminhamento para esclarecimento da demanda.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Entrevistas com pais/responsáveis para acolhimento, esclarecimentos e formação de vínvulo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O primeiro contato com o paciente possibilitará a confirmação ou não daquelas primeiras impressões surgidas no momento do encaminhamento. É bom iniciar com esclarecimentos sobre o processo do psicodiagnóstico, o trabalho do psicólogo e o motivo da avalição.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>De forma geral, essas primeiras entrevistas com crianças ocorrem em formato de Hora do Jogo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic imageContainer">
                  <ImageDisplay src={Entrevistas}/>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Objetivos iniciais</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Delineamento do plano de avaliação: <br/><br/>Que técnicas e testes podem ser utilizados com esse paciente? <br/>Qual o seu nível de compreensão? <br/>Qual sua capacidade de comunicação? <br/>O paciente faz uso de lentes ou de aparelho auditivo? <br/>Tem algum problema de visão ou alguma dificuldade motora? <br/>É destro ou canhoto? <br/>Qual sua escolaridade? <br/>É alfabetizado?</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Investigação da demanda: <br/><br/>Desde quando os sintomas se manifestam? <br/>Existe algum fator desencadeante? <br/>Qual a intensidade? <br/>Em que ambientes eles ocorrem? <br/>Como o paciente percebe esses sintomas? <br/>Qual a influência dos sintomas na vida diária? <br/>Quais os prejuízos que eles vêm trazendo para a vida do paciente? <br/>Em que áreas da vida (social, familiar, educacional/laboral) os sintomas/problemas trazem prejuízos? <br/>Como a família, os amigos e outras pessoas que convivem com o paciente observam o problema?</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Investigação da realidade atual do paciente: <br/><br/>Que tipo de suporte (social, familiar, financeiro) ele tem para lidar com o problema? <br/>Com quem vive e quem o auxilia em suas dificuldades? <br/>Ele já passou por algum tipo de atendimento profis­sional antes? <br/>Quais profissionais o acompanham?</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Risco de suicídio</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pacientes que verbalizem em algum momento o desejo de se matar devem ser escutados. Esse desejo nem sempre é abordado diretamente pelo paciente. Em várias ocasiões eles verbalizam dicas sutis no intuito de testar a receptividade do tema por parte do avaliador. Frases que indicam um desejo de fugir, desaparecer, silêncio, um final, etc. podem ser uma forma cautelosa de tentar abordar uma ideação suicida como tópico de conversa. Isso deve ser investigado pelo avaliador.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O risco de suicídio deve ser avaliado quanto a sua intensidade. Algumas informações são impressindíveis para isso: <br/><br/>O paciente tem planos de suicídio? <br/>Já pensou de que forma e com que meios colocaria esses planos em prática? <br/>Existe alguma data prevista para isso? <br/>Realizou algum ato preparatório? <br/>Já realizou tentativas anteriores?</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pesquisas apontam fatores associados a um risco elevado de suicídio: <br/><br/>Diagnóstico de transtornos do humor ou esquizofrenia; <br/>contato com a realidade prejudicado; <br/>o uso de substâncias psicoativas, como álcool e drogas; <br/>fatores psicológicos, como vivências de perda (perdas recentes de emprego ou de pessoas significativas); <br/>questões ­sociodemográficas (é mais comum entre pessoas do sexo ­masculino com idades entre 15 e 35 anos e acima de 75 anos);  condições clínicas incapacitantes; <br/>rede de apoio social insuficiente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Na evidência de risco de suicídio, não se pode liberar um paciente para que saia sozinho do atendimento. Deve-se informar o paciente sobre a necessidade de entrar em contato com os familiares ou amigos mais próximos, que deverão ser orientados a não deixá-lo só em nenhum momento, em função do risco existente, e a impedir o acesso a meios que possibilitem o suicídio (medicamentos, armas, cordas, etc.). Dependendo da intensidade do risco a indicação de tratamento requer internação psiquiátrica.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Tipos de entrevista</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic imageContainer">
                  <ImageDisplay src={Modalidades}/>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideIV;