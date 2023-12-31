import { useContext } from "react";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuTitles,
  SubMenuContainer
} from "../styles";
import Aula1 from '../../../Assets/classroom.png'
import { DisplayContext } from "../../../Contexts/displayContext";
import { SlideContext } from "../../../Contexts/slideContext";
import AulaI from "../../Slideshows/Aula_1/Deck_1";
import AulaII from "../../Slideshows/Aula_2/Deck_2";
import AulaIII from "../../Slideshows/Aula_3/Deck_3";
import AulaIV from "../../Slideshows/Aula_4/Deck_4";
import AulaV from "../../Slideshows/Aula_5/Deck_5";
import AulaVI from "../../Slideshows/Aula_6/Deck_6";
import AulaVII from "../../Slideshows/Aula_7/Deck_7";
import AulaVIII from "../../Slideshows/Aula_8/Deck_8";
import AulaIX from "../../Slideshows/Aula_9/Deck_9";

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

  const handleSlides = (link:any) => {
    setSlides(link)
  };

  return (
    <SubMenuContainer>
      <MenuTitles>
        {openMenu? "Psicologia do Desenvolvimento: Infância e Adolescência": ""}
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu} onClick={() => handleSlides(item.link)}> 
          <ButtonIcon alt="Ícone" src={item.icon} /> 
          <MenuItemDescription openMenu={openMenu}>{`${openMenu? item.description+"-": ""} Aula ${index + 1}`} </MenuItemDescription>
        </MenuItem>
      ))}
    </SubMenuContainer>
  )
}

export default Desenvolvimento;