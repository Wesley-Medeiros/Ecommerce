'use client';

import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import LastImg from '../../../public/img/Illustration.png';
import { RiMapPin2Fill } from 'react-icons/ri';
import { PiTimerFill, PiCurrencyDollarFill } from 'react-icons/pi';
import { useOrderContext } from '../../context/order-context'; 
import { useEffect } from 'react';

const paymentMethodLabels: Record<string, string> = {
    credit: "Crédito",
    debit: "Débito",
    PIX: "PIX",
};

export default function ConfirmedOrder() {
    const router = useRouter();
    const { orderData } = useOrderContext();

    useEffect(() => {
        if (!orderData) {
            router.push('/');
        }
    }, [orderData, router]);

    if (!orderData) {
        return null;
    }

    const {
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        paymentMethods,
    } = orderData;

    return (
        <div className="flex flex-col gap-10 mt-20 px-40 py-5">
            <div>
                <h2 className="text-3xl font-bold text-orange-400">Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo seu pedido chegará até você</p>
            </div>

            <div className="flex items-center gap-[102px]">
                <div className="flex flex-col border custom-border-radius p-10 min-w-[120px] space-y-8">
                    <div className="flex gap-5 items-center">
                        <RiMapPin2Fill className="text-purple-400" size={40} />
                        <div>
                            <p>Entrega em <strong>{rua}, {numero}{complemento ? `, ${complemento}` : ''}</strong></p>
                            <p>{bairro} - {cidade}, {uf}</p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <PiTimerFill className="text-orange-400" size={40} />
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <PiCurrencyDollarFill className="text-purple-400" size={40} />
                        <div>
                            <p>Pagamento</p>
                            {/* Utilize o objeto de mapeamento para exibir o rótulo correto */}
                            <p><strong>{paymentMethodLabels[paymentMethods]}</strong></p>
                        </div>
                    </div>
                </div>

                <Image
                    src={LastImg}
                    alt="LastImg"
                    width={450}
                    height={450}
                    priority
                />
            </div>
        </div>
    );
}
