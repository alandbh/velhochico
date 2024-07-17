import Image from "next/image";
import LogoLink from "./_components/LogoLink";
import Botao from "./_components/Botao";
import IconWhatsapp from "./_components/icons/Whatsapp";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoLink href="/"/>
      <br />
      <Botao text="reserve já" icon={<IconWhatsapp color="blue" />} style='primary'href="/#"/>
      <br />
      <Botao text="reserve já" href="/#" icon={<IconWhatsapp color="red" />}>
        
      </Botao>
    </main>
  );
}
