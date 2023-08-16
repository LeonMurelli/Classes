import { 
  Container,
  ContentContainer, 
  DescriptionContainer, 
  DescriptionContainer1, 
  Dot, 
  Image, 
  ImageContainer, 
  NumberContainer, 
  TextContainer, 
  TopicContainer, 
  TopicListContainer
} from "./styles";
import ChildImage from "../../../Assets/child_labor.jpeg"
import { useState } from "react";

export const SlideI = () => {
  const [ expand1, setExpand1 ] = useState(false);
  const [ expand2, setExpand2 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
    setExpand2(false)

  }
  const handleExpand2 = () => {
    setExpand2(!expand2)
    setExpand1(false)
  }

  return(
    <Container>
      <h1>Psicologia do Desenvolvimento: Infância e Adolescência</h1>
      <h2>A História da Psicologia do Desenvolvimento: A ideia de infância</h2>
      <ContentContainer>
        <ImageContainer>
          <Image alt="Trabalho infantil" src={ChildImage} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>A infância na Bíblia</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"Quando entrar na terra que o Senhor, teu Deus. te der, não aprenderás a fazer conforme as abominações daqueles povos. Não se achará entre ti quem faça passar pelo fogo o seu filho ou sua filha..." (Deuteronômio, cap. 18, ver. 9-12)</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"Qual dentre vós é o homem que, se por ventura o filho lhe pedir pão, lhe dará pedra? Ou se, lhe pedir um peixe, lhe dará uma cobra? Ora, se vós que são maus, sabeis dar boas dádivas aos vossos filhos, quanto mais vosso Pai, que está nos céus, dará boas coisas aos que lhe pedirem?" (Mateus, cap. 7, ver. 9-11)</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"Lembra-te do dia de sábado, para o santificar, seis dias trabalhará e farás toda a tua obra. Mas o sétimo dia é o sábado do Senhor, teu Deus; não farás nenhum trabalho, nem tu, o teu filho, nem a tua filha, nem o teu servo..." (Êxodo, cap.20, ver. 8-10)</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Jean Jackes Rousseau e a formação do homem natural</h3>
              <DescriptionContainer1 className="topic2" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"Os filhotes de ursos e de cães mostram sua tendência natural; os homens, porém, metendo-se desde logo em hábitos, preconceitos, leis, mudam ou se mascaram facilmente". [MONTAIGNE(1991), p. 74]. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"ao pensarmos na formação do homem, que tem início com o seu nascimento, pensamos, na verdade, no que pode ser compreendido como homem natural. É este que terá de se fazer do seu nascimento até a adolescência, quando passa a adquirir as qualidades que o permitem inserir-se na coletividade dos homens, abrindo espaço para a construção da sua cidadania"</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"podemos afirmar ser somente possível o exercício da cidadania plena mediante a preparação do homem para a sua condição de cidadão, o que não ocorrerá se, antes, o indivíduo não for devidamente preparado para se firmar como homem, simplesmente, o que guarda neste simplesmente a sua condição natural de ser. Deste modo, antes de pensarmos no desenvolvimento do intelecto, havermos de pensar no desenvolvimento de todos os aspectos físicos que constituem o indivíduo como homem, no seu sentido mais natural que se possa imaginar no seio da sociedade que conhecemos."</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>"A educação primeira é a que mais importa, e essa primeira educação cabe incontestavelmente às mulheres: se o Autor da natureza tivesse querido que pertencesse aos homens, ter-lhes-ia dado leite para alimentarem as crianças. Falarei portanto às mulheres, de preferência, em vossos tratados de educação; pois além de terem a possibilidade de para isso atentar mais de perto que os homens, e de nisso influir cada vez mais, o êxito as interessa também muito mais, porquanto em sua maioria as viúvas se acham quase à mercê de seus filhos e que então precisam sentir, em bem ou mal, o resultado da maneira pela qual os educaram. As leis, sempre tão preocupadas com os bens e tão pouco com as pessoas por terem como objetivo a paz e não a virtude, não outorgam suficiente autoridade às mães" (ROUSSEAU, Emílio ou da educação, nota 1, p. 9-10.)</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Disponível em: https://www.unicamp.br/~jmarques/cursos/2001rousseau/mdn.htm</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
            <a href="https://biblioteca-a.read.garden/viewer/9786556903224/10" target="_blank">
              <h3>Desenvolvimento humano: infância, adolescência e vida adulta de Tiago Cortinaz</h3>
            </a>
            </TextContainer>
          </TopicContainer>
        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};
 
export const SlideII = () => {
  return(
    <div>
      <h1>Aula 2</h1>
    </div>
  );  
};
