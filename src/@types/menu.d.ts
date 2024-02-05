export interface IMenu {
    openMenu: boolean,
    setOpenMenu: ( openMenu: boolean) => void,
    openSubMenu1: boolean,
    setOpenSubMenu1: ( openMenu: boolean) => void,
    openSubMenu2: boolean,
    setOpenSubMenu2: ( openMenu: boolean) => void,
    DisplayContext?: <T>(defaultValue: T) => React.Context <T>
};

export interface IContainerProps {
    openMenu?: boolean;
    openSubMenu1?: boolean,
    openSubMenu2?: boolean,
    hideModal?: boolean;
    expand1?: boolean;
    expand2?: boolean;
    expand3?: boolean;
    expand4?: boolean;
    expand5?: boolean;
};