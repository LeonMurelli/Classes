import { createContext, useState } from "react";
import { IContextProps } from "../@types/context";
import Intro from "../Components/Desenvolvimento/intro";

export const SlideContext = createContext<any>([]); //tipar depois

export const SlideStorage = ({ children }: IContextProps) => {
    const [slides, setSlides] = useState([Intro]);
    
    return (
        <SlideContext.Provider value={{ slides, setSlides }}>
            {children}
        </SlideContext.Provider>
    )
}