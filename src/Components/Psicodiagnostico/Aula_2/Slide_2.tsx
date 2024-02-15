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
      <h2>Primeiros passos</h2>
      <ContentContainer>
        <ImageContainer expand1={expand1} expand2={expand2} expand3={expand3}>
          <Image alt="Anamnese" src={Teste} />
        </ImageContainer>
        <TopicListContainer>
          <TopicContainer onClick={handleExpand1}>
            <NumberContainer>1</NumberContainer>
            <TextContainer>
              <h3>Pensando na demanda</h3>
              <DescriptionContainer className="topic1" expand1={expand1}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Um psicodiagnóstico tem mais chances de ser bem-sucedido quando há uma boa pergunta a ser respondida. Cabe ao psicólogo, nas entrevistas iniciais, investigar a demanda e/ou o encaminhamento para definir a pergunta a ser respondida pelo psicodiagnóstico da melhor forma possível. Muitas vezes redefinindo a demanda quando necessário. </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Boas perguntas são aquelas que auxiliam o profissional a confirmar ou a refutar determinadas hi­póteses – por exemplo, em um caso de uma criança encaminhada para avaliação por estar com dificuldades de leitura e escrita, não conseguindo acompanhar o desempenho da turma.<br/><br/> 
                  Aqui temos boas perguntas a responder:<br/><br/> 
                  Teria ela um transtorno específico de aprendizagem?<br/>
                  Questões emocionais e/ou familiares estariam in­terferindo nos processos de aprendizagem de leitura e escrita?<br/>
                  Haveria alguma questão neu­rológica envolvida? Poderíamos pensar em trans­torno de déficit de atenção/hiperatividade (TDAH)?<br/>
                  Quais demandas psíquicas não estariam sendo atendidas, gerando, consequentemente, o sintoma?</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Concomitantemente à definição do que se está recebendo como demanda, das hipóteses e das estratégias de avaliação, é possível que haja necessidade de avaliações de outros profissionais. Por vezes, só se consegue completar o processo psicodiagnóstico com avaliações de outros profissionais, como fonoaudiólogos, neurologistas e psiquiatras.</span>
                </TopicContainer>
              </DescriptionContainer>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand2}>
            <NumberContainer>2</NumberContainer>
            <TextContainer>
              <h3>Estabelecendo os objetivos</h3>
              <DescriptionContainer1 className="topic1" expand2={expand2}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A avaliação da demanda indicará qual aspecto avaliativo deverá ser priorizado em cada caso, situando-se o objetivo do psicodiagnóstico a partir dessa reflexão inicial. Segundo Cunha (2000), precursora do psicodiagnóstico em nosso meio, os objetivos podem priorizar: <br/>a) a classificação simples; <br/>b) a descrição; <br/>c) a classificação nosológica; <br/>d) o diagnóstico diferencial; <br/>e) a avaliação compreensiva; <br/>e) o entendimento dinâmico; <br/>f) a prevenção; <br/>g) o prognóstico.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>O ato de elencar apropriadamente os objetivos do psicodiagnóstico nos permite estruturar melhor o processo. Escolhando de forma mais adequada as técnicas, métodos e instrumentos que melhor nos auxiliarão a satisfazer a demanda.</span>
                </TopicContainer>
              </DescriptionContainer1>
            </TextContainer>
          </TopicContainer>
          <TopicContainer onClick={handleExpand3}>
            <NumberContainer>3</NumberContainer>
            <TextContainer>
              <h3>Primeiras entrevistas</h3>
              <DescriptionContainer2 className="topic1" expand3={expand3}>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Antes ainda do primeiro encontro, alguns elementos requerem a atenção do avaliador pois interferem no processo. A preparação do ambiente físico é de suma importância. Aspectos como controle de temperatura, controle de ruídos, mobília adequada e disponibilidade/qualidade dos materiais interferem nos procedimentos padronizados e no "setting" da avaliação. Outro ponto importante a se atentar é ao contato telefônico para o agendamento do procedimento.</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A apresentção do profissional é o primeiro passo e merece alguns cuidados. Os assuntos referentes à problemática do indivíduo devem ser sempre abordados dentro do consultório, mas nada impede uma conversa amigável sobre o tempo, trajeto realizado, o dia do paciente ou outros tópicos corriqueiros na recepção ou no caminho ao consultório. Isso pode ser importante tanto para o estabelecimento do rapport como para levantar informações importantes. O nível de contato físico nesse momento é um cuidado a se manter em mente, pois deve respeitar tanto as preferências do avaliador quanto as do avaliado (até então desconhecidas).</span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>A tarefa principal durante as entrevistar é ouvir. Seguindo o fluxo do discurso do paciente se busca informações específicas que nos permita cumprir alguns objetivos:<br/>
                    o esclarecimento da demanda;<br/>
                    a real necessidade da avaliação;<br/>
                    sua competência para realizá-la;<br/>
                    e o histórico pessoal e do adoecimento.
                  </span>
                </TopicContainer>
                <TopicContainer className="subTopic">
                  <Dot />
                  <span>Ao longo dos primeiros encontros, se constrói o contrato de trabalho, em que são ­previstos os papéis de cada parte; a questão de sigilo e privacidade; normas de atraso e faltas; o número aproximado de encontros, incluindo-se as primeiras entrevistas; a bateria de testes que será utilizada, se necessário; as entrevistas de devolução; e a forma como serão pagos os honorários (caso se trate de ­consultas particulares). Esse plano é construído nos primeiros encontros, podendo sofrer variações ao longo do processo.</span>
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