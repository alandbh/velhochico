import Image from "next/image";
import LogoLink from "./_components/LogoLink";
import Botao from "./_components/Botao";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoLink />
      <br />
      <Botao text="reserve já" icon style='primary'/>
    </main>
  );
}
