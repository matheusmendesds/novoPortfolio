import Image from "next/image"
import java from '@/images/java.png'
import js from '@/images/js.png'
import python from '@/images/python1.png'

export default function Stack(Imagem) {
    return (
        <>
            <div>
                <Image src={java} alt="java.png"/>
                <Image src={js} alt="js.png"/>
                <Image src={python} alt="python.png"/>
               

            </div>
        </>
    )
}