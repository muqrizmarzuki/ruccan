import type { Knowledge } from "@/types/knowledge";
import { dummyPersonaData } from "./personaService";

const dummyKnowledgeData: Knowledge[] = [
    {
        id: 1,
        uniq_slug: "refund_policy",
        name: "Refund Policy",
        personas: [
            dummyPersonaData[0],
            dummyPersonaData[1]
        ]
    },
    {
        id: 2,
        uniq_slug: "pricing_sop",
        name: "Pricing SOP",
        personas: [
            dummyPersonaData[0],
            dummyPersonaData[2]
        ]
    },
    {
        id: 3,
        uniq_slug: "response_templates",
        name: "Response Templates",
        personas: [
            dummyPersonaData[1],
            dummyPersonaData[2]
        ]
    },
    {
        id: 4,
        uniq_slug: "customer_faq",
        name: "Customer FAQ",
        personas: [
            dummyPersonaData[0],
            dummyPersonaData[1],
            dummyPersonaData[2]
        ]
    },
];

export const getAllKnowledge = async (): Promise<Knowledge[]> => {
    return dummyKnowledgeData
}

export const getKnowledge = async (id: number): Promise<Knowledge> => {
    return dummyKnowledgeData[id]
}
