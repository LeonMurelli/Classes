import { 
  Container,
  ContentContainer, 
  PdfViwer, 
  TopicListContainer
} from "../Aula_1/styles";
import { useState } from "react";
import '@react-pdf-viewer/core/lib/styles/index.css';
import PDF from "../../../Assets/murelli.pdf";

function SlideI() {
  const [ expand1, setExpand1 ] = useState(false);

  const handleExpand1 = () => {
    setExpand1(!expand1)    
  };
  
  return(
    <Container>
      <h1>Psicodiagnóstico</h1>
      <h2>Definição</h2>
      <ContentContainer>
        <TopicListContainer>
          <embed src="/Assets/murelli.pdf" height={500} width={1000}/>

        </TopicListContainer>
      </ContentContainer>
    </Container>
  );
};

export default SlideI;