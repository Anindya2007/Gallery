import Image from './image.jsx';

async function api(index){
    let req=await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    let data=await req.json();
    return data;
}

export default function Page(index,data){
   
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
            {data.map((i)=>{
                return <Image link={i.download_url}/>
            })}
        </div>
    )
}