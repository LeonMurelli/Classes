import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IContainerProps } from "../../@types/menu";

export const Container = styled.div<IContainerProps>`
  width: ${({openMenu}) => openMenu? '260px' : '50px'};
  height: auto;
  
`;

export const HeaderContainer = styled.div`
  width: 50px;
  margin: 10px 0px 10px 10px;
  z-index: 7;
  position: fixed;
  
`;

export const MenuIcon = styled.img<IContainerProps>`
  width: 30px;
  opacity: ${({openMenu}) => openMenu? '1' : '0.3'};
  transition: 1s;
  &:hover{
    opacity: 1;
    transform: scale(1.2);
  };
`;

export const MenuContainer = styled.div<IContainerProps>`
  width: ${({openMenu}) => openMenu? '260px' : '55px'};
  height: auto;
  box-sizing: border-box;
  padding: 40px 5px 10px 5px;
  display: ${({openMenu}) => openMenu? 'flex' : 'none'};
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 5px;
  bottom: 5px;
  overflow-y: auto;
  z-index: 5;
  border: 2px solid rgba(240,240, 240, 1);
  border-radius: 0 8px 8px 0;
  background-color: rgba(240, 240, 240, 0.7);
  
  ${Container}:hover & {
    display: flex;
  };
  
  @media(max-width: 414px) {
    left: ${({openMenu}) => openMenu? '0' : '-100px'};
    z-index: 5;
    background-color: #fff;
  }
  
  @media(max-width: 834px) {
    z-index: 5;
    background-color: #fff;
  }
  `;


export const SubMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;
`;

export const MenuTitles = styled.div`
  width: 90%;
  padding: 0 10px;
  margin-bottom: 10px;
  
  span{
    font-weight: 400;
    font-size: 1.1rem;
  }
`;

export const MenuItem = styled.div<IContainerProps>`
  width: 100%;
  min-height: ${({openMenu}) => openMenu? '40px' : '50px'};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
  align-items: center;
  justify-content: ${({openMenu}) => openMenu? 'left' : 'center'};
  padding: 0 5px;
  box-sizing: border-box;
  column-gap: 15px;

  &:hover{
    background-color: ${({theme}) => theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 22px;
`;

export const MenuItemDescription = styled.span<IContainerProps>`
  font-weight: ${({openMenu}) => openMenu? '400' : '300'};
  font-size: ${({openMenu}) => openMenu? '0.9rem' : '0.7rem'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  width: 90%;
  color: ${({theme}) => theme.colors.primary};

  &.active{
    span{
      font-weight: 700;
    }
    div{
      background-color: ${({theme}) => theme.colors.bgColor};
    }
  }
`;