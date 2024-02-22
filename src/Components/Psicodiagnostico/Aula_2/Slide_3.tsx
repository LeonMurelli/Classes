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


function SlideIII() {
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
      <h2>Vínculo terapêutico</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Empatia e relação terapêutica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Empatia trata de uma sincronia da emoção do observador com a emoção do observado. Além da emoção, é possível que o observador sincronize as expressões faciais, a voz, a postura e os movimentos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ela supõe compaixão, vontade de ajudar, capacidade para inferir estados mentais e se colocar intelectualmente no lugar do outro, a fim de entender a sua visão e de utilizar essa compreensão para resolver possíveis problemas interpessoais, além de conhecer os sentimentos do outro por meio de sua expressão comportamental.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Quanto à perspectiva dos pacientes, o profissional é visto como empático quando eles se sentem aceitos e compreendidos. Para isso, pressupõem-se duas vias: a cognitiva, que envolve a apreensão precisa do ponto de vista do paciente e a habilidade de comunicar isso; e a afetiva, que abarca a capacidade do profissional de proporcionar uma melhora emocional ao paciente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span className="italicText">“O olhar positivo incondicional envolve a aceita­ção em relação à expressão do paciente de senti­mentos negativos, ‘ruins’, dolorosos, ­temores, defensivos, anormais, da mesma forma que envolve a aceitação da expressão de seus sentimentos ‘bons’, positivos, maduros, confiantes, sociais”.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Características do psicólogo e do paciente</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Quanto às características do psicólogo, um estudo demonstrou que as habilidades para transmitir segurança, cuidado, compaixão e empatia foram positivamente associadas à relação terapêutica, assim como a percepção de profissionalismo e qualificação. Além disso, pacientes que perceberam seus psicólogos como tendo aceitação, compreensão, compromisso, compaixão, habilidades empáticas e interpessoais, além de motivos para agir em prol do melhor interesse dos pacientes, estiveram mais comprometidos com seus tratamentos (Holdsworth, Bowen, Brown, & Howat, 2014). Outra revisão da literatura indicou os atributos pessoais do psicólogo que contribuíram positivamente para a relação. São eles: flexibilidade, experiência, honestidade, respeito, ser confiável, confiante, interessado, atento, amigável, caloroso e aberto (Ackerman & Hilsenroth, 2003).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Autoconhecimento para identificar os próprios sentimentos e separar o que é causado pelo paciente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Características do paciente que causam desajuste/sofrimento ou mesmo sintômas presentes tendem a prejudicar o vínculo. Assim como experiências negativas no passado, críticas sobre o adoecimento e o ato de procurar ajuda, falta de motivação, falta de perspectiva ou de relevância do processo avaliativo, as expectativas inadequadas do processo.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>A relação terapêutica no psicodiagnóstico</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Alguns psicólogos tendem a ser mais distantes, por entenderem que é um processo muito curto para se estabelecer um vínculo. Outros não percebem os limites do contexto e estimulam uma proximidade maior do que a necessária.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O objetivo é estabelecer um senso de colaboração e confiança. Isso vai além da construção do setting que potencialize a avaliação e significa assumir o papel de representante da psicologia como profissão na experiência do paciente (facilitando a aderência a um possível tratamento futuro).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Durante o psicodiagnóstico, coletamos diversas informações sobre o paciente, mas nos mantemos focados na demanda/objetivo. Intervenções que porventura sejam realizadas devem considerar os limites da situação de avaliação.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É preciso estar atento às diversas nuanças do comportamento verbal e não verbal dele e às suas próprias emoções. Tais observações, em conjunto com sua experiência (que será adquirida de forma gradual) e seu conhecimento técnico-científico, darão a você a habilidade de perceber o paciente. O “feeling clínico” não diz respeito à habilidade de intuir ou pressentir como o paciente é. Você deve conseguir percebê-lo porque estuda para isso e desenvolve essa habilidade. Não é uma mágica em que não é necessário qualquer esforço. O estabelecimento da confiança não depende apenas de disposição emocional, mas principalmente da competência do profissional e da capacidade do paciente em confiar.</span>
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