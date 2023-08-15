export interface IMenu {
    openMenu: boolean,
    setOpenMenu: ( openMenu: boolean) => void,
    DisplayContext?: <T>(defaultValue: T) => React.Context <T>
};

export interface IContainerProps {
    openMenu?: boolean;
    hideModal?: boolean;
    expand1?: boolean;
    expand2?: boolean;
};