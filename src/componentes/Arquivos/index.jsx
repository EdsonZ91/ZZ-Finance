function Caixa({Text,valr,figura}){
    
 



    return(

        <div className={figura == "Crd" ? "CrdBaixo" :"Crd" }>
            
             <div className="cardIcon"></div>

                <p> {Text} </p>

                <h3>R${valr}</h3> 

                <h2>{figura}</h2>

               


           

        </div>

       

    )
}
export default Caixa;