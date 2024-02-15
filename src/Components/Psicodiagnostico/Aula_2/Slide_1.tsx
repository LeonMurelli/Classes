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


function SlideI() {
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
      <h2>Preparação do avaliador</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Formação acadêmica</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Observando as competências designadas pelo Ministério da Educação (Brasil, 2011, p. 3) em suas Diretrizes Curriculares Nacionais para os cursos de graduação pode-se afirmar que a formação em psicologia seja a que oferece melhor preparação técnica e teórica para a realização do psicodiagnóstico.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Avaliações psicológicas supervisionadas como parte do currículo. Esta deve ser, preferencialmente, uma estratégia de aprendizado que ultrapasse o período acadêmico e se faça presente no início da vida profissional.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Aprimoramento técnico e teórico durante/após a graduação. O curso de psicologia continua expandindo suas áreas e agregando mais informações. Enquanto isso é benéfico para a avaliação psicológica, implica em uma impossibilidade de aprofundamento em uma área específica como a do psicodiagnóstico. O que deverá ser feito além da grade curricular.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Cuidados éticos</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Art. 1º São deveres fundamentais do psicólogo:<br/><br/>
                    b) Assumir responsabilidades profissionais somente
                    por atividades para as quais esteja capacitado pessoal,
                    teórica e tecnicamente;<br/>
                    c) Prestar serviços psicológicos de qualidade, em
                    condições de trabalho dignas e apropriadas à natureza
                    desses serviços, utilizando princípios, conhecimentos
                    e técnicas reconhecidamente fundamentados
                    na ciência psicológica, na ética e na legislação
                    profissional;<br/>
                    f) Fornecer, a quem de direito, na prestação de serviços
                    psicológicos, informações concernentes ao trabalho
                    a ser realizado e ao seu objetivo profissional;<br/>
                    g) Informar, a quem de direito, os resultados decorrentes
                    da prestação de serviços psicológicos, transmitindo
                    somente o que for necessário para a tomada
                    de decisões que afetem o usuário ou beneficiário;<br/>
                    i) Zelar para que a comercialização, aquisição, doação,
                    empréstimo, guarda e forma de divulgação do
                    material privativo do psicólogo sejam feitas conforme
                    os princípios deste Código;
                  </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Art. 2º Ao psicólogo é vedado:<br/><br/>
                    g) Emitir documentos sem fundamentação e qualidade
                    técnico científica;<br/>
                    h) Interferir na validade e fidedignidade de instrumentos
                    e técnicas psicológicas, adulterar seus resultados
                    ou fazer declarações falsas;<br/>
                    k) Ser perito, avaliador ou parecerista em situações
                    nas quais seus vínculos pessoais ou profissionais,
                    atuais ou anteriores, possam afetar a qualidade do
                    trabalho a ser realizado ou a fidelidade aos resultados
                    da avaliação;<br/>
                    q) Realizar diagnósticos, divulgar procedimentos ou
                    apresentar resultados de serviços psicológicos em
                    meios de comunicação, de forma a expor pessoas,
                    grupos ou organizações.<br/>
                  </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Art. 9º É dever do psicólogo respeitar o sigilo profissional a fim de proteger, por meio da confidencialidade, a intimidade das pessoas, grupos ou organizações, a que tenha acesso no exercício profissional.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Art. 18. O psicólogo não divulgará, ensinará, cederá, emprestará ou venderá a leigos instrumentos e técnicas psicológicas que permitam ou facilitem o exercício ilegal da profissão.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://satepsi.cfp.org.br/docs/ResolucaoCFP009-18.pdf" target="_blank" rel="noopener noreferrer"><h3>Resolução CFP nº 9/2018</h3></a>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://site.cfp.org.br/wp-content/uploads/2019/09/Resolução-CFP-n-06-2019-comentada.pdf" target="_blank" rel="noopener noreferrer"><h3>Resolução CFP nº 6/2019</h3></a>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <a href="https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLUÇÃO-Nº-11-DE-11-DE-MAIO-DE-2018.pdf" target="_blank" rel="noopener noreferrer"><h3>Resolução CFP nº 11/2018</h3></a>
                  <span className="spacedText">  e a  </span>
                  <a href="https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-4-2020-dispoe-sobre-regulamentacao-de-servicos-psicologicos-prestados-por-meio-de-tecnologia-da-informacao-e-da-comunicacao-durante-a-pandemia-do-covid-19?origin=instituicao&q=004/2020" target="_blank" rel="noopener noreferrer"><h3>Resolução nº 4/2020</h3></a>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Cuidados pessoais</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Cabe ao psicólogo estar atualizado quanto a questões técnicas e éticas que surgem e são discutidas no âmbito da profissão. Para isso, a participação em eventos e contato com associações da área são recomendados. Bons exemplos de tais associações são o <a href="https://www.ibapnet.org.br/" target="_blank" rel="noopener noreferrer"><span>IBAP</span></a> e a <a href="https://www.asbro.org.br/" target="_blank" rel="noopener noreferrer"><span>ASBRO</span></a>.                    
                  </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span><span className="italicText">"...uma ­prática ética e a atualização profissional só ocorrem com a possibilidade de abertura ao novo, com autocrítica quanto ao fazer diário, refletindo sobre a relação de seus desejos pessoais e suas escolhas profissionais. Tais competências não são aprendidas apenas com leituras ou participações em debates clínicos, mas a partir de um profundo processo de autoconhecimento."</span> (Hutz et. al, 2016)</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;