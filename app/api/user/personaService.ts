import type { Persona, PersonaStyle } from "@/types/persona"

export const dummyPersonaStyle: PersonaStyle[] = [
    {
        id: 1,
        name: "funny"
    },
    {
        id: 2,
        name: "energetic"
    },
    {
        id: 3,
        name: "serious"
    },
    {
        id: 4,
        name: "professional"
    }
]

export const dummyPersonaData: Persona[] = [
    {
        id: 1,
        name: "Bella",
        styles: [
            dummyPersonaStyle[0],
            dummyPersonaStyle[1]
        ],
        role: "Sales Assistant",
        active: true
    },
    {
        id: 2,
        name: "Rafiq",
        styles: [
            dummyPersonaStyle[1],
            dummyPersonaStyle[3]
        ],
        role: "Sales Assistant",
        active: false
    },
    {
        id: 3,
        name: "Lina",
        styles: [
            dummyPersonaStyle[2],
            dummyPersonaStyle[3]
        ],
        role: "HR Assistant",
        active: true
    }
]

export const getPersona = async (): Promise<Persona[]> => {
    return dummyPersonaData
}

export const getPersonaStyle = async (): Promise<PersonaStyle[]> => {
    return dummyPersonaStyle
}
