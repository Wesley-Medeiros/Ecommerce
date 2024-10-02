export function ConfirmationOrder() {
    return (
        <div className="flex flex-col gap-3 space-y-6">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="">Total de itens</p>
                    <p>R$ 9,90</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="">Entrega</p>
                    <p>R$ 3,50</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">Total</p>
                    <p className="font-bold text-xl">R$ 14,40</p>
                </div>
            </div>

            <button className="bg-orange-400 flex items-center justify-center py-3 w-full rounded-lg text-white font-bold transition duration-300 ease-in-out hover:bg-orange-500">
                CONFIRMAR PEDIDO
            </button>
        </div>
    );
}
