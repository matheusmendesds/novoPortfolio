import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaReact, FaWordpress } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";


export default function Stack() {
    return (
        <>
            
            <div className="bg-[#000319] m-auto w-3/6">
                <h1 className="text-center text-white">Habilidades</h1>
                <div className="grid grid-cols-3 gap-1 ml-11 ">
                    <div className="img"><FaHtml5 size={60}/><p>Html</p></div>
                    <div className="img"><FaCss3Alt size={60}/><p>Css</p></div>
                    <div className="img"><RiTailwindCssFill size={60}/><p>Tailwind</p></div>
                    <div className="img"> <FaBootstrap size={60}/><p>Bootstrap</p></div>
                    <div className="img"><FaWordpress size={60}/><p>Wordpress</p></div>
                    <div className="img"><FaReact size={60}/><p>React</p></div>
                    <div className="img"><RiNextjsFill size={60}/><p>Nextjs</p></div>
                    <div className="img"><FaJs size={60}/><p>Javascript</p></div>
                    <div className="img"><FaPython size={60}/><p>Python</p></div>
                    <div className="img"><FaJava size={60}/><p>Java</p></div>
                </div>
            </div>
            
        </>
    ) 
}