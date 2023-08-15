import { useContext } from "react";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuTitles,
  SubMenuContainer
} from "../styles";
import Home from '../../../Assets/botao-home.png'
import { DisplayContext } from "../../../Contexts/displayContext";
import { SlideContext } from "../../../Contexts/slideContext";
import Intro from "../../Slideshows/intro";

const items = [
  {icon: Home, description: 'Home'},
]

function Opening() {

  const { openMenu } = useContext(DisplayContext);
  const { setSlides } = useContext(SlideContext);

  const handleSlides = () => {
    setSlides([Intro])
  };

  return (
    <SubMenuContainer>
      <MenuTitles>
        {openMenu? "Apresentação": ""}
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu} onClick={handleSlides}> 
          <ButtonIcon alt="Ícone" src={item.icon} /> 
          <MenuItemDescription openMenu={openMenu}>{`${openMenu? item.description: ""}`} </MenuItemDescription>
        </MenuItem>
      ))}
    </SubMenuContainer>
  )
}

export default Opening;