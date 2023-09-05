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
import Piaget from "../../../Assets/Jean-Piaget.png";
import { useState } from "react";

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
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>Os Estágios do Desenvolvimento do Conhecimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Jean Piaget" src={Piaget} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Sensório motor</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Do nascimento até, aproximadamente, 2 anos de idade. O contato com o mundo é focado na atividade da ação sem estabelecer relações de causa e efeito.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span> Não manifesta qualquer sinal aparente de uma conscientização "do seu eu nem de uma fronteira estável entre dados do mundo interior e do universo externo" e que esse ''adualismo" dura "até o momento em que a construção desse eu torna-se possível em correspondência e em oposição com os eus dos outros", Piaget e sua equipe demonstraram que, neste mesmo período, a criança "não comporta objetos permanentes até uma época coincidente com esse interesse pela pessoa dos outros, sendo os primeiros objetos dotados de permanência constituídos precisamente por esses personagens".</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Assim nomeado por ser considerado o estágio da "inteligência Prática", onde não há uso da linguagem. É a ação e a percepção que estimulam o desenvolvimento das estruturas mentais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span> A ideia de causalidade se faz presente quando a criança percebe que ela é um objeto no mundo e que ela pode interagir com outros objetos e ainda, que estes objetos interagem e causam efeitos entre si.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Pré-operatório</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em torno de 2 e 7 anos</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estágio da representação, que se entende pela capacidade que a criança adquire, por meio das construções cognitivas, de pensar um objeto através de outro objeto.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A aquisição da linguagem pressupõe duas capacidades cognitivas. A primeira, é que a criança "deve saber distinguir claramente entre signo e significado" e a segunda, é que "determinados signos sempre substituem o mesmo objeto e também o próprio signo é uma espécie de objeto".</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Introdução ao mundo da moralidade, ou seja, nesta fase a criança entra no mundo dos valores, das regras, das virtudes e das noções de certo e errado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Egocentrismo (dificuldades de perceber o ponto de vista do outro).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Irreversibilidade do pensamento (incapacidade de pensar um processo sequencial em ordem inversa).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Animismo, jogo simbólico, imagem mental...</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Operatório Concreto</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Por volta dos 7 a 11 anos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Operação é uma ação interiorizada reversível e coordenada.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Faz uso da capacidade das operações reversíveis apenas em cima de objetos que ela possa manipular, de situações que ela possa vivenciar ou de lembrar a vivencia, ainda não existe, por assim dizer, a abstração.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Desenvolve noção de tempo, espaço, ordem, classificação e causalidade.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Operatório Formal</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Por volta dos 12 anos até o final da vida adulta.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pode realizar operações sobre hipóteses e não somente sobre objetos, ou seja, de agora em diante, a criança pode versar sobre enunciados verbais, isto é, sobre proposições.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span> Abstração - As informações retiradas do objeto de conhecimento pelo sujeito são abstrações empíricas; ao passo que, as informações retiradas das ações do sujeito sobre o objeto são abstrações reflexivas.</span>
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