'use client'

import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormOrder } from "./form-order";
import { SelectedProducts } from "./selected-products";

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(8, "CEP inválido"),
    rua: zod.string().min(1, "Rua é obrigatória"),
    numero: zod.string().min(1, "Número é obrigatório"),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, "Bairro é obrigatório"),
    cidade: zod.string().min(1, "Cidade é obrigatória"),
    uf: zod.string().min(2, "UF é obrigatória").max(2, "UF deve ter 2 caracteres")
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function CompleteOrderForm() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm;
    
    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data);
    }
    
    return (
        <FormProvider {...confirmOrderForm }>
            <form onSubmit={handleSubmit(handleConfirmOrder)} className='flex gap-8 w-full'>
                <FormOrder />
                <SelectedProducts /> 
            </form>
        </FormProvider>
    );
}
