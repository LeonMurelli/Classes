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
import Breastfeeding from "../../../Assets/breastfeeding.png";
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

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>O desenvolvimento na primeira infância</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Amamentação" src={Breastfeeding} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O que é a primeira infância?</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Segundo o Ministério da Cidadania, “estudos científicos de diversas áreas, como neurociência, psicologia do desenvolvimento e sobre os impactos de políticas públicas voltadas para a infância, têm apontado que o período de maiores possibilidades para a formação das competências humanas ocorre entre a gestação e o sexto ano de idade”.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O organismo humano tem uma “lógica biológica”, uma organização e um calendário maturativo. É a infra-estrutura em que se assentam nossos processos psíquicos (COLL; MARCHESI; PALACIOS, 2004)</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Aleitamento materno</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estão menos propensos a contrair doenças infecciosas como diarreia, infecções respiratórias, otite média (infecção do ouvido médio) e infecções estafilocócicas, bacterianas e do trato urinário.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apresentam menor risco de síndrome da morte súbita infantil (SIDS) e de morte pós-neonatal.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apresentam menor risco de doença inflamatória intestinal.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apresentam melhor acuidade visual, desenvolvimento neurológico e saúde car-diovascular de longo prazo, incluindo níveis de colesterol.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estão menos propensos a desenvolver obesidade, asma, eczema, diabetes, linfoma, leucemia infantil e doença de Hodgkin.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Têm menos cáries e estão menos propensos a precisar de aparelhos dentários. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Estão menos propensos a apresentar retardo motor ou na linguagem.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apresentam pontuações mais altas em testes cognitivos na idade escolar no começo da vida adulta.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Além de todos os benefícios que a nutrição de qualidade proporciona ao desenvolvimento biológico e cognitivo. O ato de amamentar estimula o vínculo afetivo, trazendo grandes benefícios psicológicos.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>A estrutura do cérebro</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <iframe
                  className="external"
                  src="https://www.brainfacts.org/3d-brain#intro=false&focus=Brain" 
                  title="External Page"
                  />                
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O hemisfério esquerdo é o centro da linguagem e do pensamento lógico.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O hemisfério direito processa informações ambientais e espaciais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Corpo Caloso é uma estrutura rígida que une e comunica os dois hemisférios.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Lobo Frontal é responsável pela personalidade, o processo de tomada de decisão e controle motor. Organiza informações sobre o ambiente, memórias e emoções.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Lobo Occipital decodifica e direciona estímulos visuais</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Lobo Parietal organiza informações sensoriais para focar a atenção, principalmente os sinais táteis e de propriocepção. Recebe os sinais visuais do Lobo Occipital para organizar uma representação realista do mundo externo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O Lobo Temporal armazena memórias e emoções, além de organizar a linguagem. É chave para reconhecer objetos, lugares e pessoas.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento psicossocial</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Até os 03 meses de idades os bebês estão abertos à estimulação. Demonstram interesse e uma boa dose de curiosidade para tudo que os rodeia.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Dos 03 meses até o 06º mês os bebês podem antecipar certos acontecimentos (expectativa), inclusive podem se decepcionar quando algo não sai do jeito que esperavam; podem ficar zangados.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>De 06 meses até os 09 meses podem demonstrar alegria, medo, raiva e surpresa; nesse período começa despertar um lado mais sociável.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Do 09º mês até um ano de idade  os bebês conseguem demonstrar suas emoções de forma mais clara, há variação no humor (parte subjetiva de sua personalidade), nesse período pode começar surgir as primeiras palavras o que pode ser um estímulo na interação com o meio.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Do 12º até o 18º mês o bebê tende em desenvolver um esboço do seu autoconceito, querem se auto afirmar, nesse período começa desenvolver a segurança tendo por base as pessoas próximas, além de terem um pouco mais de autonomia para poderem explorar e interagir o mundo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Emoção: "São as reações subjetivas à experiência e que estão associadas a mudanças fisiológicas e comportamentais" (Papalia, 2013, p. 208).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>As emoções como tristeza, medo e alegria são elementos básicos da personalidade das pessoas e é na primeira infância que começam se manifestar. Desde o primeiro turbilhão de estímulos fora do útero a criança começa uma complexa interação com o ambiente, que resultará em um incrível desenvolvimento psicossocial que determinará muitas características subjetivas dela.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://edisciplinas.usp.br/pluginfile.php/3329556/mod_resource/content/0/Papalia%2012ed%20cap%206.pdf" target="_blank" rel="noopener noreferrer"><h3>Referência adicional</h3></a>
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