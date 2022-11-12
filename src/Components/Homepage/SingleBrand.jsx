


const SingleBrand = ({title, image}) => {
    return (
        <div>
          <div style={{border:"1px solid black", height:"370px", width:"430px"}}>
                <div style={{height:"27%",}}>
                    <h1 style={{ fontSize:"23px", fontWeight:"400", color:"black"}}>{title}</h1>
                </div>
                <div style={{height:"73%", display:"flex"}}>
                    <div style={{width:"15%"}}></div>
                    <div style={{width:"85%"}}><img src={image} alt="image" style={{height:"100%", width:"100%"}}/></div>
                    
                </div>
            </div>  
        </div>
    )
}


export default SingleBrand;