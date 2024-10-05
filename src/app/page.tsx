import ButtonTCF from "./@core/components/button/Button";
import { BsTrash3Fill } from "react-icons/bs";
import { ImPencil } from "react-icons/im";

export default function Home() {
  return ( 
    <>
      <ButtonTCF size={'sm'} label={'Botão de Teste SM'} disabled={false} />
      <ButtonTCF size={undefined} label={'Botão de Teste MD'} disabled={false} />
      <ButtonTCF size={'lg'} label={'Botão de Teste LG'} disabled={false} />
      <ButtonTCF size={'lg'} label={'R'} disabled={false} rounded={true} />
      <ButtonTCF size={'lg'} icon={<BsTrash3Fill />} disabled={false} rounded={true} />
      <ButtonTCF size={'lg'} icon={<ImPencil />} disabled={false} rounded={true} />
      <ButtonTCF size={'sm'} label={'Abrir Minha Conta'} disabled={false} variant={"green"} />
      <ButtonTCF size={'sm'} label={'Já Tenho Conta'} disabled={false} variant={"green-outline"} />
      <ButtonTCF size={'sm'} label={'Voltar ao Início'} disabled={false} variant={"orange"} />
      <ButtonTCF size={'sm'} label={'Concluir Transação'} disabled={false} variant={"base"} />
    </>
  );
}
