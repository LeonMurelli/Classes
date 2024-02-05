import { useContext } from "react";
import { 
  MenuItemDescription,
  ButtonIcon,
  MenuTitles,
  SubMenuContainer,
  MenuItem1,
} from "../styles";
import Aula1 from '../../../Assets/classroom.png'
import { DisplayContext } from "../../../Contexts/displayContext";
import { SlideContext } from "../../../Contexts/slideContext";
import AulaI from "../../Desenvolvimento/Aula_1/Deck_1";
import AulaII from "../../Desenvolvimento/Aula_2/Deck_2";
import AulaIII from "../../Desenvolvimento/Aula_3/Deck_3";
import AulaIV from "../../Desenvolvimento/Aula_4/Deck_4";
import AulaV from "../../Desenvolvimento/Aula_5/Deck_5";
import AulaVI from "../../Desenvolvimento/Aula_6/Deck_6";
import AulaVII from "../../Desenvolvimento/Aula_7/Deck_7";
import AulaVIII from "../../Desenvolvimento/Aula_8/Deck_8";
import AulaIX from "../../Desenvolvimento/Aula_9/Deck_9";

const items = [
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaI},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaII},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaIII},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaIV},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaV},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaVI},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaVII},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaVIII},
  {icon: Aula1, description: 'Desenvolvimento I ', link: AulaIX},
]

function Desenvolvimento() {

  const { openMenu } = useContext(DisplayContext);
  const { setSlides } = useContext(SlideContext);
  const { openSubMenu1, setOpenSubMenu1 } = useContext(DisplayContext);

  const handleSlides = (link:any) => {
    setSlides(link)
  };

  return (
    <SubMenuContainer>
      <MenuTitles onClick={() => setOpenSubMenu1(!openSubMenu1)}>
        {openMenu? "Psicologia do Desenvolvimento: Infância e Adolescência": ""}
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem1 key={index} openMenu={openMenu} openSubMenu1={openSubMenu1} onClick={() => handleSlides(item.link)}> 
          <ButtonIcon alt="Ícone" src={item.icon} /> 
          <MenuItemDescription openMenu={openMenu}>{`${openMenu? item.description+"-": ""} Aula ${index + 1}`} </MenuItemDescription>
        </MenuItem1>
      ))}
    </SubMenuContainer>
  )
}

export default Desenvolvimento;