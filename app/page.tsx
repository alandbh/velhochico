import Image from "next/image";
import LogoLink from "./_components/LogoLink";
import Button from "./_components/Button";
import IconWhatsapp from "./_components/icons/Whatsapp";
import Title from "./_components/Title";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <LogoLink href="/" />
      <br />
      <Button
        text="reserve já"
        icon={<IconWhatsapp color="blue" />}
        style="primary"
        href="/#"
      />
      <br />
      <Button
        text="reserve já"
        href="/#"
        icon={<IconWhatsapp color="red" />}
      ></Button>

      <div className="w-[300px] grid grid-cols-12  border border-slate-500 h-[200px]">
        <div className="bg-red-500 h-5 col-span-2 start-2 col-start-2"></div>
        <div className="bg-green-500 h-5 "></div>
      </div>
      <Title>
        <h1 className="font-gideonRoman">chalé de 1 quarto</h1>
      </Title>
    </main>
  );
}
