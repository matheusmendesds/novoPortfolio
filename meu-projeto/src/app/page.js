import Carousel from "@/components/carousel";
import Menu from "@/components/menu";
import Stack from "@/components/stack";
import { Ellipsis } from "lucide-react";
export default function Home() {
  return (
    <div>
     
      <section>
        <div >
          <Carousel/>
          <Stack/>
        </div>
      </section>

    </div>
  );
}
