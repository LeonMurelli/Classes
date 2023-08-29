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
import Research2 from "../../../Assets/bobo-doll-albert-bandura.jpg";
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
      <h2>A Teoria Comportamental e a Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Bandura" src={Research2} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Modelagem</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Bandura não nega a importância do reforço direto, mas para ele a maior parte do aprendizado humano se dá por observação ou por exemplo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em muitas situações, como ao aprender a nadar ou dirigir, o condicionamento operante é um método ineficiente e até perigoso.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Compreendemos uma ampla gama de comportamentos cotidianos observando pessoas e moldando nosso comportamento de acordo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ressalta o efeito da espectativa do reforço/punição (Reforçamento Vicariante).</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Estudo com o João-bobo</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Modelagem - Técnica de modificação do comportamento que envolve observar o comportamento de um modelo e com ele tomar parte no desempenho do comportamento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Possibilidade de estabalecer diversos modelos de várias fontes de observação, incluindo as várias mídias de comunicação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Desinibição - Enfraquecimento de inibições ou constrangimentos por meio da observação do comportamento de um modelo.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Características da situação de modelagem</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As características dos modelos - Quanto mais semelhante de nós o modelo for maior a probabilidade de imitação e consequente modelagem do comportamento (idade mais próxima, mesmo sexo, maior status ou prestígio).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As características dos observadores - Pessoas com autoestima e autoconfiança baixas tem uma tendência maior a imitar comportamento que pessoas com essas características mais desenvolvidas. Adicionalmente, pessoas que já foram reforçadas por imitar um comportamento tendem a ser mais suscetíveis à influência de modelos.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Autorreforço</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Autorreforço é a administração de recompensas ou punições a si mesmo por satisfazer ou frustrar as próprias expectativas ou padrões (tangígeis ou emocionais).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A partir da observação de modelos formaremos um padrão inicial de comportamento contra o qual iremos comparar nosso desempenho. Então passamos a comparar nosso desempenho atual com nosso desempenho passado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A partir dessa comparação entre o padrão e o desempenho modula-se o padrão para adequar-se ao nível de desempenho atual e a expectativa.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand5}>
            <NumberContainer>5</NumberContainer>
            <TextContainer>
              <h3>Autoeficácia</h3>
              <DescriptionContainer4 className="topic5" expand5={expand5}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Medida do quão bem nós satisfazemos nossos padrões de comportamentos atuais. Se expressa em sentimentos de adequação e competência para lidar com a vida.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A falha em satisfazer os próprios padrões gera uma baixa autoeficácia. O que é descrito como um pessimismo que pode chegar a níveis debilitantes.</span>
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