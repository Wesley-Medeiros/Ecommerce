import { Input } from "@/components/input";
import { useFormContext } from "react-hook-form";

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AddressForm() {
    const { register, formState } = useFormContext();

    const { errors } = formState as unknown as ErrorsType;

    return (
        <div className="w-full grid grid-cols-[12.5rem_17.25rem_3.75rem] gap-x-3 gap-y-4 grid-flow-dense flex-1">
            <Input 
                placeholder="CEP"
                type="number" 
                className="col-span-3 max-w-48" 
                {...register("cep")}
                error={errors.cep?.message} 
            />
            <Input
                placeholder="Rua" 
                type="text"
                className="col-span-3"
                {...register("rua")}
                error={errors.rua?.message} 
            />
            <Input 
                placeholder="Número" 
                type="number"
                {...register("numero")}
                error={errors.numero?.message} 
            />
            <Input 
                placeholder="Complemento" 
                type="text"
                className="col-span-2"
                {...register("complemento")}
                error={errors.complemento?.message}
            />
            <Input 
                placeholder="Bairro" 
                type="text"
                {...register("bairro")}
                error={errors.bairro?.message}
            />
            <Input 
                placeholder="Cidade" 
                type="text"
                {...register("cidade")}
                error={errors.cidade?.message}
            />
            <Input 
                placeholder="UF" 
                type="text"
                {...register("uf")}
                error={errors.uf?.message}
            />
        </div>
    );
}
