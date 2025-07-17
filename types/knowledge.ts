import type { Persona } from "@/types/persona"

export interface Knowledge {
    id: number;
    uniq_slug: string;
    name: string;
    personas: Persona[];
}