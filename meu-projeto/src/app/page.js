import Carousel from "@/components/carousel";
import Menu from "@/components/menu";
import Stack from "@/components/stack";
import Teste from "@/components/teste";
import { Ellipsis } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section>
        <p className="text-lg text-center bg-[#000319] text-white ">
          Desenvolvedor Front-End | Next.js | React | Tailwind CSS
        </p>
      </section>
      <section>
        <div>
          <Stack/>
        </div>
      </section>
      <section>
        <p>Contato</p>
      </section>

    </div>
  );
}
