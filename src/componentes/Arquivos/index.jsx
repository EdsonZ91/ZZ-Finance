




function Caixa({Text,valr,descrip}){
    
 



    return(

        <div className={descrip == "coxinha da Quebrada"  ? "Down" : "Up" }>
       
        
            
            <div className="cardIcon"></div>
            
             <div className="Up">
                <p> {Text} </p>
                <h3>R${valr}</h3> 
            </div>

           <div className="Down" >
                <h2>{descrip}</h2>
                
            </div> 
               


           

        </div>

       

    )
}
export default Caixa;