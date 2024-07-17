import IconWhatsapp from "./icons/Whatsapp";
import Link from "next/link";

const Botao = ({ text, style, href, icon }: any) => {
  return (
    <>
      {style === "primary" ? (
        <Link
          href={href}
          className="text-white bg-green-2 py-3 px-6 rounded-md font-bold uppercase flex gap-2"
        >
          {icon}
          <span className="whitespace-nowrap">{text}</span>
        </Link>
      ) : (
        <Link
          href={href}
          className="text-green-2 py-3 px-6 rounded-md font-bold gap-2 uppercase flex border-solid border-2 border-green-2"
        >
          {icon}
          <span className="whitespace-nowrap">{text}</span>
        </Link>
      )}
    </>
  );
};

export default Botao;
