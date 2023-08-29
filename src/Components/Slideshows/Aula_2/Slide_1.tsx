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
import Research from "../../../Assets/Binet4.jpg"
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
      <h2>A História da Psicologia do Desenvolvimento: Nascimento da Psicologia do Desenvolvimento</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Pesquisa Binet" src={Research} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3><span className="italicText">Die Seele des Kindes</span> - A mente das crianças (William Thierry Preyer, 1882)</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Considerado o marco inicial da psicologia do desenvolvimento, trata-se de um rigoroso estudo de caso escrito sobre o desenvolvimento de sua própria filha, incluindo notas detalhadas de suas observações.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3><span className="italicText">Child Research Institute at Clark University</span> - Instituto de Pesquisas sobre a Criança </h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Um primeiro programa de pesquisa cooperativa em psicologia do desenvolvimento foi estabelecido nos estudos do questionário de Clark. O programa não pretendia ser autônomo, mas elaborar uma concepção evolutiva do desenvolvimento infantil sintetizada a partir de achados de diversas áreas científicas. O programa de curta duração teve algumas falhas graves, mas um exame de seus trabalhos de pesquisa sugere que produziu alguns trabalhos valiosos. Os pesquisadores do estudo infantil coletaram informações sobre as reações sociais e emocionais das crianças em ambientes cotidianos; eles elaboraram uma visão sócio-biológica significativa do desenvolvimento infantil. </span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3><span className="italicText">La Société libre pour l'étude psychologique de l'enfant</span> - A Sociedade Livre para o Estudo Psicológico da Criança.</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É uma associação criada em 1899 por Ferdinand Buisson. Foi o laboratório de pesquisa psicopedagógica do psicólogo Alfred Binet antes de se tornar um dos locais de desenvolvimento da pesquisa psicopedagógica na França. Continua hoje suas atividades para promover a memória e a obra de Alfred Binet, bem como a promoção de pesquisas na história da psicologia e nas ciências da educação sob o nome de Société Binet-Simon.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Publicação do <span className="italicText">L'Année Psychologique</span> - O Anuário Psicológico, por Alfred Binet</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Primeiro jornal de Psicologia Experimental francês. Fundado em 1899 e a fonte das principais publicações sobre desenvolvimento humano realizados na França.</span>
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