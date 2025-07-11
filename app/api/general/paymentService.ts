import { PaymentType } from "@/types/payment";

const dummyPaymentTypeData:PaymentType[] = [
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

export const getPaymentType = async ():Promise<PaymentType[] | undefined> => {

    return dummyPaymentTypeData
    
}