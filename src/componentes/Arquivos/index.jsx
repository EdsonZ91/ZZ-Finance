




function Caixa({Text,valr,figura}){
    
 



    return(

        <div className={figura == "down"  ? "Down" : "Up" }>
       
        
            
            <div className="cardIcon"></div>
            
             <div className="Up">
                <p> {Text} </p>
                <h3>R${valr}</h3> 
            </div>

           <div className="Down" >
                <h2>{figura}</h2>
                
            </div> 
               


           

        </div>

       

    )
}
export default Caixa;