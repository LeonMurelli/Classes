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
import Vygotsky from "../../../Assets/vygotsky.jpeg";
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
      <h2>A Teoria Sócio-Histórica de Vygotsky</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Criança" src={Vygotsky} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Origem Sócio-histórica do pensamento humano</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O desenvolvimento humano vai além da maturação das estruturas mentais que se dá naturalmente com o passar do tempo. O desenvolvimento deve ser compreendido em relação ao período histórico, à sociedade e à cultura na qual o indivíduo se insere.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span className="italicText">… aprendizado adequadamente organizado resulta em desenvolvimento mental e põe em movimento vários processos de desenvolvimento que, de outra forma, seriam impossíveis de acontecer. O aprendizado é um aspecto necessário e universal do processo de desenvolvimento das funções psicológicas culturalmente organizadas e especificamente humanas. (Vygotsky, 1984)</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Estudo da linguagem e outras estruturas superiores</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estruturas naturais seriam mecanismos mais elementares, de origem biológica, presentes no ser humano e também nos animais, tais como ações reflexas, reações automatizadas ou processos de associações simples entre eventos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estruturas superiores seriam processos tipicamente humanos como: memória, atenção e lembrança voluntária, memorização ativa, imaginação, capacidade de planejar, estabelecer relações, ação intencional, desenvolvimento da vontade, elaboração conceitual, uso da linguagem, representação simbólica das ações propositadas, raciocínio dedutivo, pensamento abstrato.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Plasticidade cerebral - O funcionamento cerebral é moldado tanto ao longo da história da espécie como no desenvolvimento individual, isto é, a estrutura e o funcionamento do cérebro não são inatos, fixos e imutáveis, mas passam por mudanças no decorrer do desenvolvimento do indivíduo devido a interação do ser humano com o meio físico e social.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O ser humano deve ser compreendido na interação com o mundo, interação mediada por objetos criados por ele, dentre os quais está o signo. O uso do signo para representar as coisas marca o momento em que o sujeito se liberta de seus limites orgânicos e avança na construção simbólica da realidade.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Mediação</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É o processo de intervenção de um elemento intermediário numa relação, que deixa de ser direta e passa a ser mediada por esse elemento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Criança &#8594; Rosa <br/> Criança &#8594; Memória &#8594; Rosa <br/> Criança &#8594; Intervenção da mãe &#8594; Rosa </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ao longo do desenvolvimento do indivíduo, as relações mediadas passam a predominar sobre as relações diretas. Dessa forma, a relação do ser humano com o mundo não é uma relação direta, mas, fundamentalmente, uma ação mediada.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O signo, mediador instrumental para a manipulação de elementos psicológicos, torna-se o meio para organizar e orientar a ação humana. Consequentemente, a linguagem, como o sistema de signos, torna-se a mediadora do desenvolvimento humano.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Zona de Desenvolvimeto Proximal</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A distância entre o nível de desenvolvimento real, determinado pela capacidade de resolver tarefas de forma independente, e o nível de desenvolvimento potencial, determinado por desempenhos possíveis, com ajuda de adultos ou de colegas mais avançados ou mais experientes.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Um problema que não ultrapasse o nível de desenvolvimento real de um indivíduo não promove desenvolvimento pois não há necessidade de expansão da capacidade atual para resolve-lo. Da mesma forma, um problema que ultrapasse o nível de desenvolvimento potencial de um indivíduo não promove desenvolvimento pois os esforços em resolve-lo serão inevitavelmente frustrados.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A qualidade da mediação tem relação direta com a amplitude da zona de desenvolvimento proximal.</span>
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