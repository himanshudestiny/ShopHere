

const Button = ({logo, title}) => {
    return (
        <div className='logo' style={{diaplay:"flex", width:"100%", height:"50px", border:"1px solid black", justifyContent:"center" , alignContent:"center",  marginTop:"20px"}}>
         <img style={{width:"8%", marginTop:"6px", marginLeft:"10px"}} src={logo} alt="logo" />
         <p style={{marginTop:"-30px", fontSize:"20px", fontWeight:"600"}}>{title}</p>
        </div>
    )
}

export default Button;