import Image from "next/image";
import LogoLink from "./_components/LogoLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogoLink />
    </main>
  );
}
