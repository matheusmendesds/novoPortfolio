'use client'
import { useState , useEffect} from "react";

export default function Descricao() {
     const fullText = `Oi, eu sou o Matheus 👋
Sou desenvolvedor front-end e estudo Java e Análise de Dados com Python.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // velocidade (ms por letra)
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);
    return (
       <div className="w-6/12 mx-auto p-6 bg-[#252D6F] text-white rounded-2xl shadow-lg text-center space-y-4">
            {displayedText}
       </div>

    )
}