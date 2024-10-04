'use client'

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useRouter } from "next/navigation";
import { useOrderContext } from "../../../context/order-context"; // Importa o contexto
import { FormOrder } from "./form-order";
import { SelectedProducts } from "./selected-products";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP inválido"),
  rua: zod.string().min(1, "Rua é obrigatória"),
  numero: zod.string().min(1, "Número é obrigatório"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Bairro é obrigatório"),
  cidade: zod.string().min(1, "Cidade é obrigatória"),
  uf: zod.string().min(2, "UF é obrigatória").max(2, "UF deve ter 2 caracteres"),
  paymentMethods: zod.string().min(1, "Informe o método de pagamento"),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

export function CompleteOrderForm() {
  const { setOrderData } = useOrderContext(); 
  const router = useRouter();

  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: OrderData) {
    setOrderData(data); 
    router.push("/confirmedOrder"); 
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <form onSubmit={handleSubmit(handleConfirmOrder)} className="flex gap-8 w-full">
        <FormOrder />
        <SelectedProducts />
      </form>
    </FormProvider>
  );
}
