import { Input } from "@/components/input";

export function AddressForm() {
    return (
        <div className="w-full grid grid-cols-[12.5rem_17.25rem_3.75rem] gap-x-3 gap-y-4 grid-flow-dense">
            <Input placeholder="CEP" type="number" className="h-10 rounded-md bg-gray-100 border-gray-300 border transition-colors duration-400 text-xs px-3 focus:border-orange-400 outline-none col-span-3 max-w-48" />
            <Input placeholder="Rua" type="street" className=" h-10 rounded-md bg-gray-100 border-gray-300 border transition-colors duration-400 text-xs px-3 focus:border-orange-400 outline-none col-span-3" />
            <Input placeholder="Numero" type="number" />
            <Input placeholder="Complemento" type="complement" className="h-10 rounded-md bg-gray-100 border-gray-300 border transition-colors duration-400 text-xs px-3 focus:border-orange-400 outline-none col-span-2" />
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" />
        </div>
    );
}
