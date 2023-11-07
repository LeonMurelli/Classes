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
import Adolescente from "../../../Assets/Adolescente.jpg";
import Scheme from "../../../Assets/GnRH.png";
import Dopamine from "../../../Assets/dopamine.jpg";
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
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>Desenvolvimento na Adolescência</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Adolescente" src={Adolescente} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Adolescência e Puberdade</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A puberdade é um fato biológico inerente a todos, que traz as mudanças físicas que transformam um indivíduo infantil em um indivíduo capacitado para a reprodução, maduro sexualmente.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A adolescência é uma fase psicossociológica que não segue um padrão em todas as culturas, cujo final é marcado, geralmente, de forma cultural, pela obtenção da independência emocional e econômica de um jovem quanto a seus pais.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Alterações da Puberdade</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <ImageDisplay alt="Esquema" src={Scheme}/>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ativação das glândulas adrenais entre 6 e 8 anos inicia uma produção de androgênios responsáveis pelo surgimento de pelos púbicos, faciais e axilares, bem como para o desenvolvimento de oleosidade na pele e de odores corporais.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Essa produção aumenta gradativamente até por volta dos 11 anos, quando a maturação dos órgãos sexuais desencadeia um novo surto hormonal responsável pelo desenvolvimento dos ovários e seios nas mulheres e dos testículos nos homens, bem como o surgimento das características sexuais secundárias.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Com os pulsos de GnRH, o corpo passa a produzir hormônios sexuais que não alteram apenas as condições das gônadas, mas também a função comportamental e tornam o cérebro sensível ao interesse sexual.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Desenvolvimento Cerebral</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ocorre a chamada poda sináptica e a reorganização estrutural dos dendritos, que é uma importante parte da maturação cerebral, pois levará à estabilidade cerebral.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Maturação cortical ligada ao desenvolvimento da capacidade de autocontrole, redirecionamento da atenção e a reavaliação emocional.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <ImageDisplay alt="Dopamina" src={Dopamine}/>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Sistema mesolimbocortical é responsável por identificar se uma situação/atividade é praserosa e, se for o caso, secretar dopamina, consequentemente direcionando o lobo frontal a tomar a decisão e emitir o comportamento que obterá esse prazer.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Entre cerca de um terço a metade nos receptores de dopamina nos neurônios do sistema mesolimbocortical serão perdidos na adolescência, resultando em uma redução significativa da sensibilidade para a ativação do sistema de recompensa. Por compensação, cada ativação é mais intensa.</span>
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