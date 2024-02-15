import { useContext } from "react";
import { 
  MenuItem2,
  MenuItemDescription,
  ButtonIcon,
  MenuTitles,
  SubMenuContainer
} from "../styles";
import Aula1 from '../../../Assets/classroom.png'
import { DisplayContext } from "../../../Contexts/displayContext";
import { SlideContext } from "../../../Contexts/slideContext";
import AulaI from "../../Psicodiagnostico/Aula_1/Deck_1";
import AulaII from "../../Psicodiagnostico/Aula_2/Deck_1";


const items = [
  {icon: Aula1, description: 'Psicodiagnóstico', link: AulaI},
  {icon: Aula1, description: 'Psicodiagnóstico', link: AulaII},
]

function Psicodiagnostico() {

  const { openMenu } = useContext(DisplayContext);
  const { setSlides } = useContext(SlideContext);
  const { openSubMenu2, setOpenSubMenu2 } = useContext(DisplayContext);

  const handleSlides = (link:any) => {
    setSlides(link)
  };

  return (
    <SubMenuContainer>
      <MenuTitles onClick={() => setOpenSubMenu2(!openSubMenu2)}>
        {openMenu? "Psicodiagnóstico": ""}
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem2 key={index} openMenu={openMenu} openSubMenu2={openSubMenu2} onClick={() => handleSlides(item.link)}> 
          <ButtonIcon alt="Ícone" src={item.icon} /> 
          <MenuItemDescription openMenu={openMenu}>{`${openMenu? item.description+"-": ""} Aula ${index + 1}`} </MenuItemDescription>
        </MenuItem2>
      ))}
    </SubMenuContainer>
  )
}

export default Psicodiagnostico;