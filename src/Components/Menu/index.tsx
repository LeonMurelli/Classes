import { Container, Divider, HeaderContainer, MenuContainer, MenuIcon } from "./styles";
import Desenvolvimento from "./containers/desenvolvimento";
import Psicodiagnostico from "./containers/psicodiagnostico";
import { useContext } from "react";
import { DisplayContext } from "../../Contexts/displayContext";
import HamburguerIcon from "../../Assets/hamburger.png";
import Opening from "./containers/apresentação";

const Menu: React.FC = () => {

  const { openMenu, setOpenMenu } = useContext(DisplayContext);

  
  const menuItems = [
    { component: Opening },
    { component: Desenvolvimento },
    { component: Psicodiagnostico },
  ];
  
  const shouldRenderAllItems = openMenu;
  const shouldRenderDivider = menuItems.length > 1 && shouldRenderAllItems;
  
  return (
    <Container>
      <HeaderContainer onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon alt="Ícone Menu" src={HamburguerIcon} openMenu={openMenu}/>
      </HeaderContainer>
      <MenuContainer openMenu={openMenu}>
        {menuItems.map((menuItem, index) => (
          <div key={index} style={{ width: "100%" }}>
            {(shouldRenderAllItems || index === 0) && (
              <>
                {<menuItem.component />}
                {shouldRenderDivider && index !== menuItems.length - 1 && <Divider />}
              </>
            )}
          </div>
        ))}
      </MenuContainer>
    </Container>  
  )
}

export default Menu;