export interface PersonaStyle {
    id: number, 
    name: string
}

export interface Persona {
    id: number;
    name: string;
    styles: PersonaStyle[];
    role: string;
    active: boolean;
}