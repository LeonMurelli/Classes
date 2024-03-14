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
import Teste from "../../../Assets/testing.jpg";
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
      <h1>Psicodiagnóstico</h1>
      <h2>Exame do estado mental</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>A técnica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Avaliação acurada e sis­temática (descrição, identificação, reconheci­men­to e nomeação adequada) de sintomas objetivos (sinais diretamente observáveis) e subjetiv­os (sintomas não observáveis diretamente) dos transtornos mentais, das crises vitais (evolutivas ou acidentais) e condições similares (sem transtorno mental, mas com sintomas presentes) e das condições clínicas de outra natureza (doenças físicas ou somáticas, especialmente neurológicas, efeitos colaterais de medicamentos, etc.). Seus dados são obtidos em entrevistas abertas ou semiestruturadas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                <iframe
                  className="external"
                  src="https://neurologiahu.ufsc.br/files/2012/09/MoCA-Test-Portuguese_Brazil.pdf" 
                  title="External Page"
                  />
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Funções mentais avaliadas</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Consciência:<br/><br/>Avaliar se o paciente está com clareza da cons­ciência, lucidez (acordado, em vigília); <br/>Alterações na consciência do self; <br/>Avaliar o sono, se profundo ou ­superficial com ou sem sonhos ou pesadelos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Atenção: <br/><br/>Função mental de ligação entre o domínio da consciência, percepção e orientação; <br/>Vigilância; <br/>Tenacidade</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sensopercepção: <br/><br/>A percepção é uma função cognitiva que articula as informações obtidas pelas sensações – junto com a atenção – com a área da consciência. Sensação é a área das sensações visuais, auditivas, olfatórias, gustativas e táteis.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Orientação: <br/><br/>Autopsíquica & Alopsíquica.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Memória: <br/><br/>Explícita X Implícita;<br/>Curto prazo X Longo prazo;<br/>Recente X Remota;<br/>Reconhecimento X Recordação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Inteligência: <br/><br/>Capacidade de resolução de problemas - Raciocínio;<br/>Adaptação pela integração de novas informações - Aprendizagem.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Pensamento: <br/><br/>Produção, associação e gerenciamento de ideias.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Funções mentais (continuação)</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Juízo crítico: <br/><br/>Habilidade de chegar a conclusões e julgamentos baseados na integração de informações sobre um objeto.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Funções executivas: <br/><br/>Conjunto de funções mentais ligadas ao gerenciamento da própria vida;<br/>Planejamento, execução e monitaramento de atividades.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Linguagem: <br/><br/>Capacidade de identificar e compreender elementos verbais e não verbais recebidos.<br/>Assim como de escolher e emitir estes mantendo uma dinâmica de comunicação</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Interações sociais: <br/><br/>Habilidade de adequação ou contexto e aos interlocutores;<br/>Empatia.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Afeto: <br/><br/>Sua intensidade, adequação e modulação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Conação: <br/><br/>É a disposição ­para a ação, a partir do desejo e da intenção, da escolha e da decisão.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ação: <br/><br/>Emissão de comportamento constituindo um movimento voluntário, consciente, intencional, organizado, inibido.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideII;