import Link from "next/link";
import Header from "../_components/Header";
import NavMenu from "../_components/NavMenu";
import Title from "../_components/Title";
import Button from "../_components/Button";
import IconWhatsapp from "../_components/icons/Whatsapp";
import Waze from "../_components/icons/Waze";
import IconGoogleMaps from "../_components/icons/IconGoogleMaps";
import Footer from "../_components/Footer";

export default function Contato() {
  return (
    <>
      <Header backgroundImg="/chale.jpg">Contato</Header>
      <main>
        <div className="flex flex-col gap-y-12 items-center py-22">
          <Title>estamos sempre de portas abertas</Title>
          <p className="text-2xl">
            Atualmente, nosso atendimento é feito, exclusivamente, via telefone
            ou WhatsApp no seguinte número:
          </p>
          <Link href={"tel:+55 37 99929-0110"} className="text-2xl">
            +55 37 99929-0110
          </Link>
          <Button
            text="reserve já"
            icon={<IconWhatsapp color="white" />}
            style="primary"
            href="https://wa.me/553799290110"
          />
        </div>
        <div className="flex flex-col gap-y-12 px-[6.875rem] pb-22">
          <h2 className="text-4xl">Como chegar</h2>
          <div>
            <p>Pegue a rodovia MG 050 com destino a Piumhi, MG.</p>
            <p>
              Chegando lá, pegue a rodovia MG 341, sentido São Roque de Minas.
              Entre à esquerda no trevo para Vargem Bonita.
            </p>
            <p>
              Em Vargem Bonita, pegue a estrada de terra para Casca D’anta e
              ande por mais 5 Km.
            </p>
          </div>
          <div className="flex w-full justify-center gap-x-[10px]">
            <Button
              text="ROTA PARA WAZE"
              icon={<Waze color="#27AE60" />}
              href="https://wa.me/553799290110"
            />
            <Button
              text="ROTA PARA GOOGLE MAPS"
              icon={<IconGoogleMaps color="#27AE60" />}
              href="https://wa.me/553799290110"
            />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
