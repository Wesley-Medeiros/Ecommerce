import Image from "next/image";
import LastImg from '../../../public/img/Illustration.png';
import { RiMapPin2Fill } from "react-icons/ri";
import { PiTimerFill, PiCurrencyDollarFill } from "react-icons/pi";

export default function ComfirmedOrder() {
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
                            <p>Entrega em <strong>Rua Doutor Aniceto Varejão, 704</strong></p>
                            <p>Piedade - Jaboatão dos Guararapes, PE</p>
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
                            <p><strong>Cartão de crédito</strong></p>
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
