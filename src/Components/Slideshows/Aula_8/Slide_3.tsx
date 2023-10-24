import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  DescriptionContainer2, 
  Dot, 
  Image, 
  ImageContainer, 
  ImageDisplay, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import Motor from "../../../Assets/evolucao-dos-bebes.jpg";
import Scheme from "../../../Assets/esquema motor.png";
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
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>O desenvolvimento na primeira infância</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Amamentação" src={Motor} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento Cognitivo</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"O período que se estende do nascimento a aquisição da linguagem é marcado por um extraordinário desenvolvimento da mente. Sua importância é algumas subestimada por não ser acompanhada de palavras que permita acompanhar, passo a passo, o progresso da inteligência e das emoções, como acontece depois. No entanto, o desenvolvimento mental que ocorre nesse período determina o curso inteiro da evolução psicológica..." (PIAGET apud WADSWORTH, 1996, p. 40).</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Subestágios do Sensório-motor</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio do Reflexo (0 a 1 mês) predominam-se os comportamentos reflexos, sendo os principais: sugar, agarrar, chorar e excretar, ou seja, quando o bebê é estimulado, seus reflexos respondem.Nesta fase qualquer objeto que for apresentado ao bebê lhe será um objeto para chupar, para agarrar ou para olhar. Não há noção de causalidade nem sentimentos, sendo o afeto ligado às reações de prazer e desprazer.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio das Reações Circulares Primárias (1 a 4 meses) a criança começa a desenvolver a coordenação entre as sensações e comportamentos. Neste período que começa a desenvolver a coordenação entre a audição e a visão. A questão afetiva é totalmente voltada para as próprias atividades e para o próprio corpo. O bebê não diferencia ainda o eu como um objeto distinto dos outros objetos do ambiente</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio das Reações Circulares Secundárias (4 a 8 meses) o comportamento da criança se orienta para outros objetos além do seu próprio corpo. Durante esse período, a criança começa a apresentar um comportamento já iniciado com um objetivo final. As intenções da criança se estabelecem somente durante as repetições do comportamento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio da Coordenação De Esquemas Secundários (8 a 12 meses) o bebê começa a fazer uso de meios para alcançar fins. Ele começa a antecipar acontecimentos, o que demonstra a formação de planos simples. Por exemplo, começa a procurar por objetos que vê desaparecer ou por objetos que podem ser fontes de atividade (causalidade). Os sentimentos começam a ter um papel na determinação dos meios usados para alcançar os fins. Percebem a permanencia de objetos e experimentam fracassos e sucessos estabelecendo preferências.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio das Reações Cirdulares Terciárias (12 a 18 meses) a criança desenvolve novos meios para alcançar os fins através da experimentação e não da aplicação de esquemas habituais previamente formados. A criança passa a compreender deslocamentos em sequência, mas apenas deslocamentos visiveis. Experimenta novas formas de interagir com objetos na expectativa de novos resultados.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>No subestágio das Combinações Mentais (18 a 24 meses) a criança torna-se apta a representar internamente (mentalmente) objetos e eventos e subsequentemente torna-se capaz de resolver problemas através da representação. Podem usar símbolos, conseguem prever alguns acontecimentos futuros e inferir alguns acontecimentos passados pela representação. Além disso, as crianças tornam-se capazes de investir afeto em outras pessoas.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento Motor</h3>
              <DescriptionContainer2 className="topic3" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Instintivamente, vão surgindo as primeiras habilidades, tais como agarrar, engatinhar e andar. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>À medida que o sistema nervoso central, os músculos e os ossos se desenvolvem e o bebê encontra em seu ambiente possibilidades de explorar os espaços, mais habilidades vão sendo adquiridas.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <ImageDisplay alt="Esquema" src={Scheme}/>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A partir do segundo ano, a criança já consegue subir escadas, evoluindo de um pé após o outro para, posteriormente, conseguir alterná-los. Nessa fase, também é comum vê-las correndo e pulando</span>
                </TopicContainer>
              </DescriptionContainer2>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand4}>
            <NumberContainer>4</NumberContainer>
            <TextContainer>
                <a href="https://multivix.edu.br/wp-content/uploads/2018/09/revista-dimensao-academica-v02-n01-artigo-05.pdf" target="_blank" rel="noopener noreferrer"><h3>Referência adicional</h3></a>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideIII;