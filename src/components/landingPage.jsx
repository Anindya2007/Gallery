export default function Landing({disable,Start}){
    return (
        < div style={{ display: disable ? 'none' : 'block',textAlign:'center' }}>
      <h1 style={{color:'white',fontSize:'100px'}}>Welcome to your own Image Gallery</h1>
      <h3 style={{color:'white',fontSize:'40px'}}>Enlighten your day by exploring plaesing imanges</h3>
      <button onClick={Start} style={{marginTop:'180px'}}>Get Started</button>
    </div>
    )
}