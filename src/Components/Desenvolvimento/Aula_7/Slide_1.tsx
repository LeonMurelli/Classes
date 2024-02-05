import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  DescriptionContainer3, 
  DescriptionContainer4, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Feto from "../../../Assets/feto.png";
import { useState } from "react";
import YouTubeVideo from "../../Videos";

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
  const handleExpand3 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(!expand3)
    setExpand4(false)
    setExpand5(false)
  };
  
  const handleExpand4 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(false)
    setExpand4(!expand4)
    setExpand5(false)
  };

  const handleExpand5 = () => {
    setExpand1(false)
    setExpand2(false)
    setExpand3(false)
    setExpand4(false)
    setExpand5(!expand5)
  };

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>Gravidez e vida intrauterina</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Feto" src={Feto} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>1 a 9 semanas</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <YouTubeVideo videoUrl={"https://www.youtube.com/embed/J5WGbeVET_I?si=5-1A695VajBa6na9"} />
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Winnicott ressalta que devemos primeiro investigar quando os bebês foram concebidos mentalmente para que depois possamos investigar quando eles foram concebidos biológica ou fisicamente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Fantasia que antecede a existência - Concepção física - Provisão do ambiente corporal materno e o desenvolvimento do próprio feto </span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>10 a 14 semanas</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <YouTubeVideo videoUrl={"https://www.youtube.com/embed/8l31mykN-cE?si=X_3lb81TrnmLcVxt"} />
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O feto estabelece suas primeiras experiências ambientais através do cordão umbilical. A situação nutricional da mãe afeta o feto e seu corpo já começa a se adaptar à disponibilidade de nutrientes em seu ambiente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Stress materno afeta significativamente a produção de leptina, hormônio responsável pelo controle do apetite.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Uma medida saudável de stress durante a gravidez está relacionada a um desenvolvimento cognitivo e motor mais acelerado nos primeiros 2 anos de idade do bebê.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>15 a 20 semanas</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <YouTubeVideo videoUrl={"https://www.youtube.com/embed/mNHDfpt0VxE?si=p-xBZ75yn-Ejn4vD"} />
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span> As excitações emocionais no período pré-natal podem também causar outras reações ao cérebro, afetando o volume da área relacionada à memória.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Com o desenvolvimento do cérebro enquanto órgão em funcionamento começa o armazenamento de memórias corporais vividas ainda em útero, memórias estas que são reunidas para formar um ser humano, cujos movimentos do corpo e momentos de quietude na vida intrauterina não só são significativos como são vividos "de um modo silencioso" (Winnicott, 1990)</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>21 a 27 semanas</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <YouTubeVideo videoUrl={"https://www.youtube.com/embed/THuT0XuqazY?si=Qk7svlfJzNDni_BW"} />
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Inicia-se "a estocagem de experiências; as memórias corporais, que são pessoais, começam a juntar-se para formar um novo ser humano. Existem boas evidências de que os movimentos do corpo na vida intrauterina são significativos, e é plausível que, de modo silencioso, a quietude vivenciada naquele período também o seja" (Winnicott, 1990, p. 38-39)</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Já existe um ser humano capaz de reter experiências, acumular memórias corporais e até mesmo organizar defesas contra possíveis traumas.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand5}>
            <NumberContainer>5</NumberContainer>
            <TextContainer>
              <h3>28 a 37 semanas</h3>
              <DescriptionContainer4 className="topic1" expand5={expand5}>
                <TopicContainer className="subTopic">
                  <YouTubeVideo videoUrl={"https://www.youtube.com/embed/-eOtkgQ98hw?si=LS-X98xWIXNFDPCt"} />
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Muitas das características do bebê também já são conhecidas pela mãe a partir dos movimentos desenvolvidos em seu ventre. Ou seja, no momento do nascimento já houve uma grande soma de experiências, tanto agradáveis quanto desagradáveis, partilhadas por ambos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sentimentos e sensações tais como ansiedade, tristeza, agitação, raiva, entre outras, também serão passadas para o bebê pelos laços que os unem. Se a mãe é bastante agitada, ele provavelmente se acostumará com os seus movimentos tanto no útero como fora dele e tem boas chances de ser um bebê agitado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Após o nascimento, não é incomum que ele tenha necessidade de reatar o contato com as funções fisiológicas da mãe, particularmente a sua respiração. Conforme afirma Winnicott (1990, p. 168), os bebês precisam de contato pele a pele com a mãe, de serem movimentados pelo sobe e desce de sua barriga, de sentirem a respiração materna para diminuírem a acelerada respiração após o nascimento, aproximando-se dos batimentos cardíacos da mãe e aprendendo a brincar de ritmos e contrarritmos em uma relação de mutualidade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S0103-56652016000200003" target="_blank" rel="noopener noreferrer"><h3>Referência adicional</h3></a>
                </TopicContainer>
              </DescriptionContainer4>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;