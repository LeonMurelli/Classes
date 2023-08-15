import { createContext, useState } from "react";
import { IMenu } from "../@types/menu";
import { IContextProps } from "../@types/context";

export const DisplayContext = createContext<IMenu>({} as IMenu);

export const DisplayControls = ({ children }: IContextProps) => {
    const [openMenu, setOpenMenu] = useState(true);
    
    return (
        <DisplayContext.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </DisplayContext.Provider>
    )
}