import { IVideo } from "./video";

export interface IContextProps {
    children: React.ReactNode;
}

export interface ImageSwitcherProps {
    originalSrc: string;
    hoverSrc: string;
  }