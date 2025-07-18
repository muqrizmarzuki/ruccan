export interface PaymentType {
    id: number,
    type: string,
    description: string,
    icon_id: string
}

export type Transaction = {
    id: number;
    name: string;
    created_at: string;
    amount: number;
}