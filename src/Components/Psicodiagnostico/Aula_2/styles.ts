import styled from "styled-components";
import { IContainerProps } from "../../../@types/menu";

export const Container = styled.div`
  width:100vw;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width:90%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ImageContainer = styled.div<IContainerProps>`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  display: ${({ expand1, expand2, expand3, expand4, expand5 }) => (expand1 || expand2 || expand3 || expand4 || expand5) ? 'none' : 'block'};
  transition: display 1s ease;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.8);
`;

export const TopicListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PdfViwer = styled.iframe`
  height: 500px;
  width: 500px;
  background-color: aliceblue;
`;

export const TopicContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 50px 50px 50px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px 10px 10px;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  .subTopic{
    width: 95%;
    padding: 20px 0 20px 5px;
    margin-left: 0;
    justify-content: flex-start;
  };
  .thirdTopic{
    min-width: 150px;
  };
  .external{
    width: 100%;
    height: 700px;
    margin-left: 20px;
    margin-right: 20px;
  };
  .spacedText{
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export const ImageDisplay = styled.img`
  width: 50%;
  height: 600px;
  border-radius: 40px;
  transition: transform 0.5s;
  margin-left: 25%;
  &:hover {
    transform: scale(1.05);
}`;

export const NumberContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid aqua;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 5px 0px 10px 3px aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;

export const TextContainer = styled.div`
  width: 95%;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  font-size: 20px;
  margin-right: 50px;
  padding-left: 20px;
  .italicText {
    font-style: italic;
  }
`;

export const DescriptionContainer = styled.div<IContainerProps>`
  width: 100%;
  display: ${({expand1}) => expand1? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 50px 50px ;
`;

export const DescriptionContainer1 = styled.div<IContainerProps>`
  width: 100%;
  display: ${({expand2}) => expand2? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 50px 50px ;
`;
export const DescriptionContainer2 = styled.div<IContainerProps>`
  width: 100%;
  display: ${({expand3}) => expand3? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 50px 50px ;
`;
export const DescriptionContainer3 = styled.div<IContainerProps>`
  width: 100%;
  display: ${({expand4}) => expand4? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 50px 50px ;
`;

export const DescriptionContainer4 = styled.div<IContainerProps>`
  width: 100%;
  display: ${({expand5}) => expand5? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 50px 50px ;
`;

export const Dot = styled.div`
  min-width: 11px;
  min-height: 11px;
  border-radius: 50%;
  border: 4px solid aqua;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 4px 2px aqua;
  margin: 10px 20px 10px 10px;
`;

export const Divider = styled.div`
  height: 100px;
  width: 2px;
  background-color: rgba(0, 0, 0, 1);
  margin: 0 10px;
`;

export const TableContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 50px 0 0;
`;

export const BottomContainer = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 50px 50px;
`;

export const FirstItem = styled.div`
  min-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 5px solid rgba(140, 140, 140, 0.8);
  border-bottom: 5px solid rgba(140, 140, 140, 0.8);
`;

export const SecondItem = styled.div`
  min-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-bottom: 5px solid rgba(140, 140, 140, 0.8);
  border-right: 5px solid rgba(140, 140, 140, 0.8);
`;

export const ThirdItem = styled.div`
  min-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-right: 5px solid rgba(140, 140, 140, 0.8);
  border-bottom: 5px solid rgba(140, 140, 140, 0.8);
`;

export const FourthItem = styled.div`
  min-width: 350px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-bottom: 5px solid rgba(140, 140, 140, 0.8);
`;

export const FifthItem = styled.div`
min-width: 350px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-right: 5px solid rgba(140, 140, 140, 0.8);
border-top: 5px solid rgba(140, 140, 140, 0.8);
`;

export const SixthItem = styled.div`
  min-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-top: 5px solid rgba(140, 140, 140, 0.8);
  border-right: 5px solid rgba(140, 140, 140, 0.8);
`;

export const SeventhItem = styled.div`
  min-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-top: 5px solid rgba(140, 140, 140, 0.8);
  border-right: 5px solid rgba(140, 140, 140, 0.8);
`;

export const EigthItem = styled.div`
  min-width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 5px solid rgba(140, 140, 140, 0.8);
  border-top: 5px solid rgba(140, 140, 140, 0.8);
`;