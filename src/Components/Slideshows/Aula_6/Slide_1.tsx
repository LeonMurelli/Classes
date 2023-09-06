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
import Iceberg from "../../../Assets/Iceberg.png";
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
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>As Teorias Psicanalíticas e a Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Teorias" src={Iceberg} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Primeira Tópica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consciente: Inclui tudo o que estamos cientes num  dado momento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pré-consciente: É uma parte do inconsciente que  pode tornar-se consciente com facilidade; são as  porções acessíveis da memória.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Inconsciente: Nele concentram-se elementos  instintivos, que não são acessíveis à consciência. Aí,  estão as fontes de energia psíquica e pulsões ou  instintos.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>O Id</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O inconsciente, como instância psíquica, virtualmente coincide com o id, o qual é considerado o pólo psicobiológico da personalidade e primeira instância a se fazer presente na psicodinâmica humana.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Id é a um só tempo um reservatório e uma fonte de energia psíquica (Libido).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É regido pelo princípio do prazer.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>O Ego</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Instância do aparelho psíquico responsáveis pelas funções conscientes como percepção, pensamento, memória, atenção, antecipação, discriminação, juízo crítico, ação motora, entre outras. Emprega estas funções para relacionar-se adaptativamente com a realidade do mundo exterior.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sede e fonte de um conjunto de funções mais complexas, na sua maior parte inconsciente, como é o caso da produção de angústias, mecanismos de defesa, fenômenos de identificações e formação de símbolos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sede de representações que determinam a imagem que o sujeito tem de si mesmo e que estruturam o seu sentimento de identidade e de auto-estima.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Nascido e regido pelo princípio da realidade.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>O Superego</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Internalização dos valores, das proibições, das metas, dos limites e da autoridade; formando o aspecto da moral a partir da punição e o ideal do eu a partir dos elogios.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Controla e inibe os impulsos do Id exercendo uma força oposta, geralmente, pelos sentimentos de culpa e vergonha.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Induz e pressiona o Ego a agir de acordo e em busco do ideal do eu.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;