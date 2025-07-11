import { Persona } from "./persona";

export interface ChatItem {
    self:boolean,
    text:string,
    time:string,
    date:string,
    read:boolean,
}

export interface Chat {
    id: number;
    name: string;
    persona: Persona
    chatList: ChatItem[]
};

