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
import Aula from "../../../Assets/aula.jpeg";
import { useState } from "react";

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
      <h2>Desenvolvimento na Segunda Infância</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Aula" src={Aula} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O Crescimento dos 3 aos 6 anos</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As crianças crescem rapidamente entre os 3 e 6 anos de idade, mas num ritmo diferente. Com aproximadamente 3 anos, as crianças normalmente começam a perder a forma roliça característica dos bebês e assumem a aparência mais esguia e atlética da infância. À medida que os músculos abdominais se desenvolvem, a barriga grande da criança entre 1 e 3 anos se fortalece. O tronco, os braços e as pernas ficam mais longos. A cabeça ainda é relativamente grande, mas as outras partes do corpo continuam a se amoldar à medida que as proporções corporais se tornam gradualmente mais similares às de um adulto.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Dos 3 aos 6 anos de idade, as áreas de maior crescimento do cérebro são as frontais, responsáveis pelo planejamento e organização de ações. </span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>O Desenvolvimento Social</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Indissociabilidade das ações de cuidado e das ações de educação: emoção como mediadora do aprendizado e da socialização.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Wallon (1995) atribui às emoções, que são essencialmente sociais, a responsabilidade pela sobrevivência da espécie humana, ou seja, as emoções contribuíram para a consolidação da coletividade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"Admirável capacidade humana essa de aprender com os outros da mesma espécie e de se adaptar aos mais variados ambientes e situações. Estranho pensar que ela se funde em nossa extrema imaturidade motora ao nascer, que nos faz depender dos outros por longos anos. Em contraposição, nossa rica expressividade ao nascer, favorece nossa comunicação com os outros. Aqueles que nos cuidam medeiam nossas relações com o mundo" (ROSSETTI-FERREIRA, 2003, p. 10).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As emoções são formas privilegiadas de comunicação da criança. As professoras devem compreender e ler tais expressões, assim como devem saber administrar o fluxo emocional no interior dos espaços pedagógicos infantis.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As práticas de cuidado/educação são ao mesmo tempo atitudes permeadas por aspectos afetivos, subjetivos e por aspectos racionais/objetivos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Criatividade e curiosidade são as expressões mais claras da associação destes dois aspectos e devem ser estimuladas no processo educativo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://anped.org.br/sites/default/files/gt07-1824.pdf" target="_blank" rel="noopener noreferrer"><h3>Referência adicional</h3></a>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;