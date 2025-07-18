import { PaymentType, Transaction } from "@/types/payment";

const dummyPaymentTypeData: PaymentType[] = [
    {
        id: 1,
        type: "Card",
        description: "Transfer via card number",
        icon_id: "card"
    },
    {
        id: 2,
        type: "FPX",
        description: "Transfer via card number",
        icon_id: "bank"
    }
]

const transactionList: Transaction[] = [
    {
        id: 1,
        name: "Plan Payment",
        created_at: "2025-07-17T10:45:23.000Z",
        amount: -49.99,
    },
    {
        id: 2,
        name: "Top-up Credit",
        created_at: "2025-07-16T08:15:10.000Z",
        amount: 100.00,
    },
    {
        id: 3,
        name: "Refund Processed",
        created_at: "2025-07-15T14:32:45.000Z",
        amount: -25.00,
    },
    {
        id: 4,
        name: "Monthly Subscription",
        created_at: "2025-07-01T00:00:00.000Z",
        amount: 19.99,
    }
];

export const getPaymentType = async (): Promise<PaymentType[] | undefined> => {

    return dummyPaymentTypeData

}

export const getAllTransaction = async (): Promise<Transaction[] | undefined> => {
    return transactionList
}