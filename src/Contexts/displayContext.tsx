import { createContext, useState } from "react";
import { IMenu } from "../@types/menu";
import { IContextProps } from "../@types/context";

export const DisplayContext = createContext<IMenu>({} as IMenu);

export const DisplayControls = ({ children }: IContextProps) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [openSubMenu1, setOpenSubMenu1] = useState(false);
    const [openSubMenu2, setOpenSubMenu2] = useState(false);
    
    return (
        <DisplayContext.Provider value={{ openMenu, setOpenMenu, openSubMenu1, setOpenSubMenu1, openSubMenu2, setOpenSubMenu2 }}>
            {children}
        </DisplayContext.Provider>
    )
}

