import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Recruit from "../../../Assets/recruit.jpg";
import { useState } from "react";


function SlideIII() {
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
      <h2>História</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Recrutamento" src={Recruit} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O século XX e a mensuração da inteligência.</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A testagem de tempo de reação, manutenção da atenção e outros traços psicológico observáveis pela psicologia experimental geravam curiosidade da população, mas não passava disso. Isso mudou com o primeiro teste de inteligência.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Alfred Binet publicou seu teste de inteligência em 1905 direcionado para a identificação de retardo mental nos alunos das escolas de Paris.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em 1939, é publicado o teste WAIS em meio a um crescente entusiasmo com a testagem psicológica que já era usada com regularidade em contextos tão diversos quanto escolas, hospitais, clínicas, tribunas, reformatórios e prisões.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Os testes de inteligência grupais surgiram nos Estados Unidos em resposta à necessidade dos militares de um método eficiente de avaliar a capacidade intelectual de recrutas da Primeira Guerra Mundial. Psicólogos voltariam a ser chamados pelo governo para desenvolver testes grupais, administrá-los aos recrutas e interpretar os dados obtidos com o advento da Segunda Guerra Mundial.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>A mensuração da personalidade.</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A Primeira Guerra Mundial trouxe com ela não apenas a necessidade de avaliar o funcionamento intelectual dos recrutas, mas também seu ajustamento geral.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Inventário Psiconeurótico de Woodworth foi a primeira medida de personalidade usada amplamente pela população civil. As pesquisas que levaram a sua criação foram encomendadas pelo governo durante a guerra para suprir essa necessidade de avaliar estabilidade emocional e ajustamento social.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Testes de auto relato e os testes projetivos em Harvard.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Avaliação psicológica e cultura</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Henry H. Goddard iniciou com sua pesquisa, em 1917, a discussão sobre a interferência da linguagem e da cultura nos resultados dos testes psicológicos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>“Se sua mãe o manda até o armazém para comprar uma broa e não há, o que você faz?”</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Testes específicos para cultura vs amostragem representativa.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideIII;