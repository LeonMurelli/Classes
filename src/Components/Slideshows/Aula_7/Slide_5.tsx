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
                  <span>Crise comum ao jovem adulto (entre 21 e 40 anos)</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O indivíduo deve estar pronto para unir a sua identidade a de outra pessoa sem se sentir ameaçado.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Quando o ego não está suficientemente seguro, o indivíduo pode preferir o isolamento em detrimento da intimidade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Precisava estar preparado para a intimidade,  estabelecendo  ligações  afetivas  duradouras  e  com  força  ética  suficiente  para  ser  fiel  a  essas ligações, mesmo que elas imponham compromissos significativos, desenvolvendo a virtude do amor.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O jovem adulto precisa suportar estar sozinho, assim como estar em um relacionamento.</span>
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
                  <span>Conhecida como a fase da meia idade, ocorre entre 40 e 60 anos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O indivíduo deve estar apto para “enfrentar desafios, cuidar dos bens conquistados e fazer a manutenção das relações afetivas”. É nessa etapa que ocorre a construção da  família,  a  expansão  profissional  e  o  envolvimento  e  cuidado  com  uma  nova  geração.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Contudo, à medida que o indivíduo envelhece o seu envolvimento com as novas gerações pode se perder, o que gera o sentimento de estagnação, por não se sentirem mais necessários.</span>
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
                  <span>Oitavo e último estágio, após os 60 anos de idade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O indivíduo reflete sobre sua vida, o que fez e o que deixou de fazer.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A pessoa pode entrar em desespero ao ver que a morte está mais próxima, compreendendo que seu tempo acabou  que  não  pode  fazer  mais  nada  pela  família  e  pela  sociedade,  vivenciando  a  velhice  em  eterna nostalgia e tristeza; ou, a pessoa sente que cumpriu com seu dever, experimentando os sentimentos de dignidade  e  integridade.</span>
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