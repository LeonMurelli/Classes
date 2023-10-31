import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  Divider, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Play from "../../../Assets/brincando.jpg";
import { useState } from "react";

function SlideII() {
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
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>O desenvolvimento na terceira infância</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Amamentação" src={Play} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>O crescimento dos 7 aos 11 anos</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Não há uma modificação tão drástica na forma do corpo como na fase anterior, mas há um crescimento significativo. Ao longo deste período as crianças tendem a dobrar de peso.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O cerebro passa para um desenvolvimento centrado na otimização de seus processos:  as áreas cerebrais vão se especializando em tarefas específicas, aumentando a velocidade e a eficiência e ampliando a capacidade de descarte de informações que não lhe tragam relevância</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento cognitivo</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
              <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Pensamento espacial</h3>
                  <Divider />
                  <span>Daniela pode usar um mapa ou um desenho para auxiliar na procura de um objeto escondido e fornecer as indicações aos outros para que o objeto seja encontrado. Ela é capaz de ir para a escola e voltar, consegue calcular distâncias e avaliar quanto tempo precisaria para ir de um lugar para outro.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Categorização</h3>
                  <Divider />
                  <span>Helena é capaz de classificar objetos em categorias, tais como forma, cor ou ambas. Ela sabe que uma subclasse (rosas) tem menos membros que a classe da qual ela faz parte (flores).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Causa e efeito</h3>
                  <Divider />
                  <span>Douglas sabe quais atributos físicos de objetos de cada lado de uma balança afetarão o resultado (por exemplo, o número de objetos importa, mas a cor deles não). Ele ainda não sabe que fatores espaciais fazem a diferença, tais como posição e localização dos objetos.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Seriação e inferência transitiva</h3>
                  <Divider />
                  <span>Catarina consegue organizar um grupo de varetas, da mais curta para a mais comprida, e pode inserir uma vareta de tamanho médio no lugar certo. Ela sabe que se uma vareta é mais comprida que uma segunda vareta e esta é mais comprida que a terceira, então a primeira vareta é mais comprida que a terceira.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Raciocínios indutivo e dedutivo</h3>
                  <Divider />
                  <span>Beatriz consegue resolver problemas indutivos e dedutivos e sabe que as conclusões indutivas (com base em dados de casos específicos) são mais sussetíveis a erro que as conclusões dedutivas (baseadas em premissas gerais).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Conservação</h3>
                  <Divider />
                  <span>Filipe, aos 7 anos, sabe que se uma bola de barro for enrolada em forma de salsicha, continua tendo a mesma quantidade de barro (conservação de substância). Aos 9, acha que a bola e a salsicha têm o mesmo peso. Só no início da adolescência ele entenderá que elas deslocam a mesma quantidade de líquido se colocadas em um recipiente com água.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <h3 className="thirdTopic">Números e matemática</h3>
                  <Divider />
                  <span>Carolina é capaz de fazer contas de cabeça, pode somar contando em ordem crescente e consegue criar problemas simples.</span>
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
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideII;