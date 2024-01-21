export default function Heading({color = 'olive',text,fontSize='20px'}){
    return <h1 style={{color:color, fontSize:fontSize}}>{text}</h1>
}