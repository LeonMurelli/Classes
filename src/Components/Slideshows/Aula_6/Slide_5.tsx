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
import Erikson from "../../../Assets/Erik.jpg";
import { useState } from "react";

function SlideV() {
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
      <h2>Os Estágios do Desenvolvimento Psicossocial</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Erik Erikson" src={Erikson} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Identidade versus Confusão de Papéis</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Aborda a crise de identidade vivenciada durante a adolescência.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Essa etapa é marcada por transformações físicas e psicológicas requerendo do adolescente segurança para passar por todas elas. Essa segurança vem da integração realizada pelo ego na forma da identidade do ego</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A confusão de identidade tem início com a necessidade de encontrar um papel social, o que faz o adolescente mudar sua atitude muitas vezes e  remodelar  sua  personalidade  em  um curto  período  de  tempo,buscando  integração  em  algum grupo de seu interesse.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span className="italicText">[...]  o  sentimento  de  identidade  do  ego, então  firma  certeza  de  que  coerência  e  continuidade interiores elaborados no passado alicerçam e equivalem á coerência e á continuidade do próprio significado  de  si  mesmo  para  a  cultura,  o  que  se  evidencia,  por  exemplo,  na  escolha  de  uma carreira.(Carpigiani, 2010)</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Intimidade versus Isolamento</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ocorre entre os primeiros 18 meses de vida e os 03 anos de idade. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A criança está com maior mobilidade,iniciando o desenvolvimento do senso de independência e/ou autonomia.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Necessita de orientação dos pais para evitar que a criança vivencie sucessivos fracassos gerando um sentimento de vergonha (raiva de si  mesmo)  e  dúvida  ao  invés  do  autocontrole  e  autovalor.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A criança começa a assimilar regras sociais compreendendo alguns privilégios, obrigações e limitações, aprendendo a se controlar.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É necessãrio equilíbrio  entre experimentações  positivas  e  negativas  para  o  desenvolvimento  saudável  do  ego.    É esperado que nessa etapa a criança desenvolva a força básica da vontade.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Generatividade versus Estagnação</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Se  dá  entre  os  03  e  06  anos  de  idade,  quando  a crianças  ingressa  na  escola.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Unindo  confiança  e  autonomia  a  criança desenvolve a determinação, imprescindível para o senso de iniciativa. Amplia também sua capacidade de planejamento e organização, desenvolvendo como virtude o propósito.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Quando seus planos não se concretizam a criança tende a direcionar sua energia para a fantasia, tentando compensar,de algum modo,a culpa por não realizá-los. Na fase adulta essa frustração poderesultar em patologias ou serexpressa pela somatização dos conflitos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A criança, ao se sentir culpada pode também desenvolver ansiedade por atividades futuras. </span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Integridade do Ego versus Desespero</h3>
              <DescriptionContainer3 className="topic4" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ocorre  entre  os  06  anos  de  idade  e  a puberdade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Aprende o que é valorizado no mundo adulto, e tenta se adaptar a  ele,  projetando-se  no  futuro.  Assim,  ela  desenvolve  a  ideia  de  perseverança,  compreendendo  que podem existir recompensas em longo prazo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Começa a se interessar pelo trabalho, realizando diferentes tarefas e sentindo que adquiriu habilidade quando consegue fazer com competência e sentindo prazer por tal. É essa sensação de prazer que impede o ego de regredir ou se sentir inferior.</span>
                </TopicContainer>
              </DescriptionContainer3>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideV;