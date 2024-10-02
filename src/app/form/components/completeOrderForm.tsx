import { PiMapPinLineThin } from "react-icons/pi";
import { AddressForm } from "./address-form";
import { BiDollar } from "react-icons/bi";
import { PaymentMethodOptions } from "./payment-method-options";


export function CompleteOrderForm() {
    return (
        <div className="flex flex-col gap-3 w-[640px]">
            <p className="font-bold text-xs">Complete seu pedido</p>

            <div className="space-y-3">
                <div className="w-full bg-gray-100 rounded-md p-10 flex flex-col gap-2">
                    <div className="flex gap-2">
                        <PiMapPinLineThin size={30} className="text-orange-400" />
                        <div>
                            <p className="text-xl">Endereço da entrega</p>
                            <p className="text-slate-500">Informe o endereço onde deseja receber seu pedido</p>
                        </div>

                    </div>
                        <AddressForm />
                </div>

                <div className="w-full bg-gray-100 rounded-md p-10 flex flex-col gap-2">
                    <div className="flex gap-2">
                        <BiDollar size={30} className="text-purple-500" />
                        <div>
                            <p className="text-xl">Pagamento</p>
                            <p className="text-slate-500">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
                        <PaymentMethodOptions />
                </div>
            </div>
        </div>
    );
}
