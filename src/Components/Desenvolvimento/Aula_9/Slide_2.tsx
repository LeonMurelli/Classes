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
import Adolescente from "../../../Assets/Adolescente.jpg";
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
      <h2>O desenvolvimento na Adolescência</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Amamentação" src={Adolescente} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O Desenvolvimento cognitivo</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Com a entrada no estágio Operatório Formal e a aquisição de estruturas lógicas mais elaboradas, o adolescente passa a reconhecer a realidade como a possibilidade que se concretizou entre várias outras possíveis. Com isso, quando deparado com uma situação, consegue pensar além do que há de concreto nela e considerar as várias possibilidades, circunstâncias e perspectivas que a envolvem.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Esse desenvolvimento cognitivo é atribuído, por Piaget, à maturação cerebral e à ampliação das possibilidades ambientais (indissociavelmente). Por isso a escola e o âmbito cultural têm papéis de extrema importância no desenvolvimento cognitivo.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A escola possibilita a difusão do conhecimento, não apenas dentro da dinâmica acadêmica. É o local onde os adolescentes formam grupos e convivem. Onde experimentará identificação entre pares, esforços de pertencimento grupal, emancipação e a criação de novos habitos. É assim o ambiente propício para se intervir nestes processos para promover uma integração positiva à sociedade.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Para considerar que o adolescente atingiu a maturidade cognitiva, ele deve demonstrar que tem raciocínio dedutivo para compreender os resultados das ações efetua-das sobre a realidade. Deve ser capaz de entender o valor de cada hipótese levantada, comprovando a obtenção do esquema de controle de variáveis.</span>
                </TopicContainer> 
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento psicossocial</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
              <TopicContainer className="subTopic">
                  <Dot />
                  <span>Identidade: “um conceito coerente de si mesmo, composto por objetivos, valores e crenças com os quais o indivíduo está socialmente comprometido” (MARTORELL, 2014, p. 312).<br /> “A aquisição de um sentimento de identidade coeso e harmônico resulta do reconhecimento e da elaboração das distintas identificações parciais que, desde os primórdios de seu desenvolvimento, foram se incorporando ao sujeito pela introjeção de código de valores dos pais e da sociedade” (ZIMERMAN, 2008, p. 203).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>É comum que, nas vezes em que quer ser criança, os adultos cobrem do indivíduo que seja adulto, e quando quer ser adulto, a sociedade lhe diga que ainda é criança.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Apesar de a legislação brasileira ditar a idade de 18 anos como sendo o ingresso na vida adulta, o sentimento de ser adulto só emerge quando são resolvidos alguns desafios da adolescência e se constrói uma identidade adulta: “a escolha de uma profissão ou ocupação, a adoção dos valores pelos quais se guiará pela vida e o desenvolvimento de uma identidade sexual que satisfaça”.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Raça ou etnia e aspectos culturais costumam ser relevantes para os jovens que pertencem a grupos minoritários.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em função das dificuldades encontradas no ambiente social, entre gays, lésbicas e bissexuais, “a identificação e a expressão de sua identidade sexual é mais complexa do que para heterossexuais” (MARTORELL, 2014, p. 315).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Os pais, que eram idealizados na infância, passam a ser vistos de outra forma, e a família, que ocupava papel central, vê o círculo interpessoal mudar e outras pessoas serem incluídas. O conflito com os pais, suas ideias, regras e padrões é uma etapa necessária para a quebra de identificações infantis e a criação de outras mais maduras.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Amigos se tornam objeto de identificações horizontais em um movimento de aceitação e pertencimento. Professores, artistas e demais ídolos tornam-se modelos para identificações verticais que podem se intensificar ao ponto de parecer tentarem assumir suas identidades.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento motor</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O desenvolvimento das capacidades físicas nesse período ocorrem por meio de evoluções na coordenação e no controle motor, levando ao favorecimento da aprendizagem de habilidades mais complexas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Essas mudanças impactam consideravelmente nas relações intra e interpessoais. As inevitáveis comparações entre seus pares atribuem ao desenvolvimento motor um aspecto cultural e social indissociavel ao biológico.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em meio a essas comparações, as diferenças entre meninos e meninas começam a tornar-se evidentes.</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
              <h3>O Desenvolvimento Moral</h3>
              <DescriptionContainer3 className="topic1" expand4={expand4}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O primeiro estágio (aproximadamente dos 2 aos 7 anos, correspondendo ao estágio pré-operatório) é baseado em obediência rígida à autoridade. Visto que as crianças pequenas são egocêntricas, elas não conseguem imaginar mais de uma forma de examinar uma questão moral. Elas acreditam que as regras não podem ser dobradas ou mudadas, que o comportamento é certo ou errado e que qualquer transgressão merece punição, independentemente da intenção.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O segundo estágio (7 ou 8 anos a 10 ou 11 anos, correspondendo ao estágio operatório-concreto) é caracterizado por crescente flexibilidade. À medida que as crianças interagem com mais pessoas e entram em contato com uma variedade mais ampla de pontos de vista, elas começam a descartar a ideia de que há um único padrão de certo e errado e desenvolvem seu próprio senso de justiça base-ado no tratamento justo ou igual para todos. Visto que elas conseguem considerar mais de um aspecto de uma situação, podem fazer julgamentos morais mais sutis.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Em torno dos 11 ou 12 anos, quando as crianças se tornam capazes de um raciocínio formal, surge o terceiro estágio, do desenvolvimento moral. A crença de que todos devem ser tratados da mesma maneira dá lugar ao ideal de equidade, de levar em consideração as circunstâncias específicas. De acordo com Piaget, uma criança dessa idade poderia dizer que uma criança de 2 anos que derramou tinta na toalha de mesa deve ser responsabilizada em um padrão moral menos exigente do que uma criança de 10 anos que fez a mesma coisa. Com a idade, há um foco aumentado não apenas no que aconteceu, mas nas intenções do autor.</span>
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