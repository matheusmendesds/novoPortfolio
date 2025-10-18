import Image from "next/image"
import java from '@/images/java.png'
import js from '@/images/js.png'
import python from '@/images/python1.png'
import { FaJava } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";


export default function Stack() {
    return (
        <>
            
            <div className="bg-white m-4 border-2 border-black ">
                <h1 className="text-center">Habilidades</h1>
                <div className="flex justify-center ">
                    <div className="img"><FaJava size={60}/></div>
                    <div className="img"><FaJs size={60}/></div>
                    <div className="img"><FaPython size={60}/></div>
                </div>
            </div>
            
        </>
    )
}