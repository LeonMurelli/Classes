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

const items = [
  {icon: Aula1, description: 'Desenvolvimento I '},
]

function Desenvolvimento() {

  const { openMenu } = useContext(DisplayContext);
  const { setSlides } = useContext(SlideContext);

  const handleSlides = () => {
    setSlides(AulaI)
  };

  return (
    <SubMenuContainer>
      <MenuTitles>
        {openMenu? "Psicologia do Desenvolvimento: Infância e Adolescência": ""}
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu} onClick={handleSlides}> 
          <ButtonIcon alt="Ícone" src={item.icon} /> 
          <MenuItemDescription openMenu={openMenu}>{`${openMenu? item.description+"-": ""} Aula ${index + 1}`} </MenuItemDescription>
        </MenuItem>
      ))}
    </SubMenuContainer>
  )
}

export default Desenvolvimento;