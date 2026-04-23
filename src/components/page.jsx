import Image from './image.jsx';

export default function Page(info){
   
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {info.map((i)=>{
                return <Image link={i.download_url}/>
            })}
        </div>
    )
}