import Descricao from "@/components/descricao";
import Stack from "@/components/stack";
import { Ellipsis } from "lucide-react";
export default function Home() {
  return (
    <div>
      <section>
        <Descricao/>
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
