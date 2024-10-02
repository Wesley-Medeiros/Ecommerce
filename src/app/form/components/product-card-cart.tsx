import IMG from '../../../../public/img/img_9.png';
import Image from "next/image";
import { BiTrash } from "react-icons/bi";

export function ProductCardCart() {
    return (
        <div className='w-full flex items-center justify-between gap-8 py-6 border-b border-gray-300'>
            <div className='flex items-center justify-center gap-5'>
                <Image
                    src={IMG}
                    alt="img"
                    width={60}
                    height={60}
                    className='mb-[10px] object-contain' 
                    priority
                />
                <div className='space-y-2'>
                    <p>Camiseta Mescla</p>
                    <button className='flex items-center justify-start gap-1 border border-gray-300 px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 hover:border-gray-400 transition-colors'>
                        <BiTrash className="text-purple-500" size={16} />
                        REMOVER
                    </button>
                </div>
            </div>

            <p>R$ 9,98</p>
        </div>
    );
}
