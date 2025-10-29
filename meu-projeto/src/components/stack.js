import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaReact, FaWordpress } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";


export default function Stack() {
    return (
        <>
            
            <div className=" m-auto w-3/6">
                <h1 className="text-center">Habilidades</h1>
                <div className="grid grid-cols-3 gap-1 ml-11">
                    <div className="img"><FaHtml5 size={60}/></div>
                    <div className="img"><FaCss3Alt size={60}/></div>
                    <div className="img"><RiTailwindCssFill size={60}/> </div>
                    <div className="img"> <FaBootstrap size={60}/></div>
                    <div className="img"><FaWordpress size={60}/> </div>
                    <div className="img"><FaReact size={60}/></div>
                    <div className="img"><RiNextjsFill size={60}/></div>
                    <div className="img"><FaJs size={60}/></div>
                    <div className="img"><FaPython size={60}/></div>
                    <div className="img"><FaJava size={60}/></div>
                </div>
            </div>
            
        </>
    ) 
}