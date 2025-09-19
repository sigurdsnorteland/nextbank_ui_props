import { HeaderLinkProps_v1 } from "../HeaderLink/HeaderLinkProps_v1";

export interface HeaderProps_v1 {
    linksTop?: HeaderLinkProps_v1[];
    linksBottom?: HeaderLinkProps_v1[];

    userIconLink?: HeaderLinkProps_v1;
    logOut?: HeaderLinkProps_v1;

    customerName?: string,
    customerAlerts?: number,
    
    navigate: any,
}