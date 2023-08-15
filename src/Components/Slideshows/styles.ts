import styled from "styled-components";
import UDFbg from "../../Assets/UDF-fachada.jpeg"

export const Container = styled.div`
  width:100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .IntroContainer{
    flex-direction: column;
  };
`;

export const Slide = styled.div`
  width:100%;
  height: 100%;
  
`;

export const BackButton = styled.div`
  min-width: 70px;
  max-width: 70px;
  min-height: 70px;
  height: 80%;
  border-radius: 0 100px 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }; 
`;

export const NextButton = styled.div`
  min-width: 70px;
  max-width: 70px;
  min-height: 70px;
  height: 80%;
  border-radius: 100px 0 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  };
`;

export const ButtonIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0.05;
  
  ${NextButton}:hover & {
    opacity: 0.6;
  };

  ${BackButton}:hover & {
    opacity: 0.6;
  };
`;

export const ContentContainer = styled.div`
  width:90%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 350px;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Image = styled.img`
  width: 200px;
  size: inherit;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  font-size: 20px;
  padding-left: 20px;
  background-color: aliceblue;
`;