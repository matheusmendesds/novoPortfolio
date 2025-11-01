import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaReact, FaWordpress } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import java from '@/images/javacerto.png';
import python from '@/images/pythoncerto.png';
import next from '@/images/next.png';


import Image from "next/image";

export default function Stack() {
    return (
        <>
            
            <div className="bg-[#000319] m-auto w-3/6">
                <h1 className="text-center text-white">Habilidades</h1>
                <div className="grid grid-cols-3 gap-1 ml-11 ">
                    <div className="img"><FaHtml5 size={60} color="#e44d26"/><p>Html</p></div>
                    <div className="img"><FaCss3Alt size={60} color="#347dc6"/><p>Css</p></div>
                    <div className="img"><RiTailwindCssFill size={60} color="#347dc6"/><p>Tailwind</p></div>
                    <div className="img"> <FaBootstrap size={60} color="#8118fa"/><p>Bootstrap</p></div>
                    <div className="img"><FaWordpress size={60} color="#28799e"/><p>Wordpress</p></div>
                    <div className="img"><FaReact size={60} color="#66dbfb"/><p>React</p></div>
                    <div className="img"><Image src={next} alt="next.png" width={50} height={50}/><p>Nextjs</p></div>
                    <div className="img"><FaJs size={60} color="#f7e025"/><p>Javascript</p></div>
                    <div className="img"><Image src={python} alt="python.png" width={50} height={50}/><p>Python</p></div>
                    <div className="img"><Image src={java} alt="java.png" width={50} height={50}/><p>Java</p></div>
                </div>
            </div>
            
        </>
    ) 
}