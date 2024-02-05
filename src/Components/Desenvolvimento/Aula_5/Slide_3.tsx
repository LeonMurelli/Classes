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
      <h2>A Epistemologia Genética de Piaget</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Jean Piaget" src={Piaget} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Piaget e o estudo sobre o desenvolvimento humano</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Biólogo de formação que, devido ao seu interesse pela construção do conhecimento, foi levado à psicologia. Construiu sua própria teoria sobre o desenvolvimento humano baseado em pesquisas experimentais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A estrutura básica da teoria piagetiana apoia-se no pressuposto de uma sequência genética de duas formas opostas de intelecção, princípio de realidade e princípio do prazer, estudados anteriormente por Freud.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Para ele os estudos sobre o condicionamento haviam levado ao ensino programado, que segundo o estudioso estava apoiado numa psicologia muito insuficiente e, embora importante do ponto de vista da aprendizagem, questionado no que se refere à invenção (criatividade).</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Teoria da Equilibração</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Todo organismo necessita viver em equilíbrio com o meio. O meio suscita situações novas, desafiadoras e conflitantes nos organismos, causando desequilíbrios que são necessários para o desenvolvimento. Diante do conflito e do desequilíbrio causado pelo mesmo, o organismo recorre a recursos próprios em busca do equilíbrio.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span className="italicText">O desenvolvimento psíquico, que começa quando nascemos e termina na idade adulta, é comparável ao crescimento orgânico: como este se orienta, essencialmente, para o equilíbrio. Da mesma maneira que um corpo está em evolução até atingir um nível relativamente estável,_ caracterizado pela maturidade dos órgãos_, também a vida mental pode ser concebida como evoluindo na direção de uma nova forma de equilíbrio final, representada pelo espírito adulto O desenvolvimento, portanto, é uma equilibração progressiva, uma passagem contínua de um estado de menor equilíbrio para um estado de equilíbrio superior. (Piaget, 1985)</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Assimilação</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Processo de busca e atribuição de significado a situações de conflito/desequilíbrio, sem alterar as suas estruturas mentais, utilizando experiências anteriores.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <p><span className="italicText">"A assimilação não se reduz (...) a uma simples identificação, mas é construção de estruturas ao mesmo tempo que incorporação de coisas a essas estruturas"</span> (PIAGET,1996, p. 364). Em outras palavras, assimilação significa interpretação, ou seja, ver o mundo não é simplesmente olhar o mundo, mas é interpretá-lo, assimilá-lo, tornar seu alguns elementos do mundo, portanto isso implica necessariamente em assimilar algumas informações e deixar outras de lado a cada relação existente entre o sujeito e o objeto.</p>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Acomodação</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Processo de tentar reestabelecer o equilíbrio através da transformação de suas próprias estruturas mentais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A acomodação é uma variação de comportamento e não uma mera reação a determinados estímulos, pois a capacidade de variação das estruturas mentais deixa claro que mesmo as mais simples reações não são processos simplesmente mecânicos; a acomodação é a origem do processo de aprendizagem. Como afirma Piaget: "Que a vida mental seja também acomodação ao meio ambiente, disso não se pode (...) duvidar", portanto também a "assimilação jamais pode ser pura porque, ao incorporar os elementos novos nos esquemas anteriores, a inteligência modifica sem cessar esses últimos para ajustá-los aos novos dados." (1996, p. 13).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Para Piaget "a assimilação e a acomodação são (...) os dois pólos de uma interação entre o organismo e o meio, a qual é a condição de todo funcionamento biológico e intelectual" (1996, p. 309). Nesta interação com o meio as estruturas mentais, ou seja, a organização que a pessoa tem para conhecer o mundo, são capazes de se modificarem para atender e se adequar às necessidades e singularidades do objeto.  O conhecimento é sempre um processo de assimilação e acomodação. </span>
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