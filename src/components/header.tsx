import LOGO from '../../public/img/Ativo 1 1.png'
import Image from 'next/image'
import { CartControl } from '../components/cart-control'


export function Header() {
    return(
        <header className="flex items-center justify-between px-40 py-5 border-b-2 border-#C7C7C7">
            <a href='#'><Image src={LOGO} alt="Logo"/></a>
            <div>
                <CartControl />
            </div>
        </header>
    )
}
