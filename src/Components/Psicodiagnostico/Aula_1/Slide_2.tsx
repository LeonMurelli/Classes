import { 
  BottomContainer,
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  DescriptionContainer3, 
  Dot, 
  EigthItem, 
  FifthItem, 
  FirstItem, 
  FourthItem, 
  Image, 
  ImageContainer, 
  ImageDisplay, 
  NumberContainer, 
  SecondItem, 
  SeventhItem, 
  SixthItem, 
  TableContainer, 
  TextContainer, 
  ThirdItem, 
  TopContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Malleus from "../../../Assets/Malleus.jpg";
import MtcGraph from "../../../Assets/TeoriaMTC.jpeg";
import MtcTable from "../../../Assets/TabelaMTC.png";
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

  const [isHovered, setIsHovered] = useState(false);
  
  return(
    <Container>
      <h1>Psicodiagnóstico</h1>
      <h2>História</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Malleus Maleficarum" src={Malleus} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Testes e programas de testagem na china por volta de 2200 a.C.</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <ImageDisplay 
                    alt="GraficoMtc" 
                    src={isHovered ? MtcTable : MtcGraph}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}>
                  </ImageDisplay>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Outras atividades desenvolvidas na antiguidade</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sacerdotes egípcios desenvolveram técnicas para identificar e tratar acometimentos físicos e mentais. Dentre essas estava inclusa a interpretação de sonhos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Gregos e romanos fizeram tentativas de elaborar categorizações de tipos de personalidade ligando traços cognitivos, emocionais e comportamentais a exageros e deficiencias de fluidos corporais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Cláudio Galeno foi um cirurgião e filósofo romano que, por volta do ano 200 a.C., estruturou uma classificação de personalidade e tipos físicos conhecida até os dias de hoje.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <TableContainer>
                    <TopContainer>
                      <FirstItem>
                        <h3>Sanguíneos</h3>
                      </FirstItem>
                      <SecondItem>
                        <h3>Coléricos</h3>
                      </SecondItem>
                      <ThirdItem>
                        <h3>Fleumáticos</h3>
                      </ThirdItem>
                      <FourthItem>
                        <h3>Melancólicos</h3>
                      </FourthItem>
                    </TopContainer>
                    <BottomContainer>
                      <FifthItem>
                        <span>Aparência avermelhada</span>
                        <span>Bem humorados</span>
                        <span>Motivados pelos</span>
                        <span>prazeres dos sentidos</span>
                      </FifthItem>
                      <SixthItem>
                        <span>Magros</span>
                        <span>Secos e de pele</span>
                        <span>amarelada</span>
                        <span>Aprendem com</span>
                        <span>facilidade</span>
                        <span>Irascíveis</span>
                        <span>Espertos</span>
                        <span>Impetuosos</span>
                        <span>Ambiciosos</span>
                        <span>Orgulhosos</span>
                      </SixthItem>
                      <SeventhItem>
                        <span>Preguiçosos</span>
                        <span>Fracos</span>
                        <span>Estatura pequena</span>
                        <span>Obesos</span>
                        <span>Pouca vocação para os</span>
                        <span>estudos</span>
                        <span>Sedentários</span>
                        <span>Dormem bastante</span>
                        <span>Sentidos amortecidos</span>
                        <span>Semblante pálido</span>
                      </SeventhItem>
                      <EigthItem>
                        <span>Vocacionados para os</span>
                        <span>estudos</span>
                        <span>Maldosos</span>
                        <span>Tristes</span>
                        <span>Calados</span>
                        <span>Discretos</span>
                        <span>Invejosos</span>
                        <span>Avaros</span>
                        <span>Tímidos</span>
                        <span>Dormem pouco</span>
                        <span>Pele escurecida</span>
                      </EigthItem>
                    </BottomContainer>
                  </TableContainer>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Idade média e a inquisição</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Na idade média, o impeto de descobrir formas de categorizar os indivíduos para inferir traços internos através de traços observáveis continuou. 
                    os monges dominicanos Henry Kramer e James Sprenger, autores do livro Malleus Maleficarum, obtiveram autorização papal documentada
                    com o selo de Inocêncio VIII para a publicação de seu texto, o que o marcava como uma obra da igreja católica e de Deus. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Mulher idosa<br/>
                    Em situação precária<br/>
                    Mora na periferia das cidades<br/>
                    Possui conhecimento de ervas medicinais<br/>
                    “Espírito Familiar” (demônio na forma de animais de estimação)<br/>
                    “Marca do demônio” (mancha sem sensibilidade na pele, cicatriz ou marca de nascença)<br/>
                    Mora sozinha<br/>
                    Não possui filhos<br/>
                    Rouba o vigor dos homens causando impotência nas áreas adjacentes<br/>
                    Sofre sintomas de doença mental (alucinações auditivas ou visuais)<br/>
                    Coleta um grande número de membros masculinos (pênis) e guarda-os em uma jaula de pássaro ou em uma caixa
                  </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Entre as questões “diagnósticas” mais críticas durante a Idade Média estava “Quem está em aliança com o Diabo?”. Qual é uma das questões diagnósticas mais críticas hoje?</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Nascimento da psicologia</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Charles Darwin: Hereditariedade e seleção natural</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Francis Galton: testagem de características e capacidades físicas e psicológicas através de testes de correlação produto-momento (atribuido a Pearson), propondo eugenia.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Cesare Lombroso: frenologia e a tentativa de prever tendências e comportamentos criminais através de traços físicos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Wilhelm Wundt: psicologia experimental com intuito formular uma descrição geral das capacidades humanas. Propôs a padronização dos procedimentos para minimizar interferências individuais e/ou situacionais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>James McKeen Cattel: Cunhou o termo testagem psicológica e se empenhou em estudar uma aplicação prática da psicologia.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Charles Spearman: Introduziu a ideia de fidedignidade e a base matemática para a análise fatorial.</span>
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