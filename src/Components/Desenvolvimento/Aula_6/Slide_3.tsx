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
import Freud from "../../../Assets/Freud.jpg";
import { useState } from "react";

function SlideIII() {
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
      <h2>As fases do desenvolvimento psicosexual</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Sigmund Freud" src={Freud} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Fase Oral</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Primeiro ano de vida.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A boca constitui-se como a zona erógena que primacialmente experimenta a libido oral e suas gratificações, como é no ato da amamentação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A finalidade da libido oral, além da gratificação pulsional, também visa à “incorporação”.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Domínio do princípio do prazer.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Fase Anal</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Segundo e terceiro ano de vida</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Controle dos esfíncteres como representação de um tema mais amplo de controle consciente sobre o próprio corpo e sobre elementos da realidade externa.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Domínio de si na aquisição da linguagem, foco em atividades motoras ensaios de individuação e separação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Movimentos iniciais de domínio de objetos externos com o desenvolvimentos das ideias de poder e de posse.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Fase Fálica</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Dos três aos cinco anos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O foco nas diferenças entre o masculino e o feminino desencadeia o Complexo de Édipo, o qual, genericamente, consiste num desejo sexual pelo genitor do sexo oposto, bem como de um desejo de morte pelo do mesmo sexo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Complexo de Édipo abre caminho para a triangulação, ou seja, permite a inclusão de um terceiro (pai) que, ao interpor-se na díade mãe-filho, possibilitará à criança o indispensável processo de renunciar à possessividade onipotente e aceitar as diferenças de sexo, geração e potência, em comparação com os pais, assim como, também, reconhecer que estes são relativamente autônomos e têm os seus próprios espaços.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Determina a formação das identificações</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A exclusão da criança da cena primária pode gerar uma série de sentimentos significativos, dentre eles a angústia de castração.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Fase de Latência</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Dos seis anos até a puberdade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Com a resolução dos conflitos da Fase Fálica há um recalcamento dos desejos sexuais. O que resulta em uma mudança de foco do próprio corpo para atividades externas sem cunho sexual.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand5}>
            <NumberContainer>5</NumberContainer>
            <TextContainer>
              <h3>Fase Genital</h3>
              <DescriptionContainer4 className="topic4" expand5={expand5}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Da puberdade até a morte.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A Libido retorna para os órgãos sexuais mas sua expressão agora é voltada para fora do próprio corpo e converge nos relacionamentos interpessoais.</span>
                </TopicContainer>
              </DescriptionContainer4>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideIII;