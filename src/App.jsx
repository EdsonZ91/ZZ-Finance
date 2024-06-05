import"./App.css"
import  Crd from "./componentes/Arquivos"
import Pencil from "./componentes/texto"
import Bagb from "./componentes/Bag"


function App() {
    return(
        <div className="majorBox">
            <div className="Box">
                <h1>ZZ-Finance</h1>

                 <button className="firstBu">Nova transação</button>
            </div>
            <div  className="cardsBank">

               <Crd  Text="Entrada" 
               valr={3000}/>

               <Crd  Text="Saida" 
               valr={-400} />

               <Crd Text="Total" 
               valr={2600} /> 

               

            </div>
             
                <div className="CrdDown">

                    {/* <Bagb text={"Spotify Premium  "} opp={"sexta-feira, 04:50 pm "} value={26.50}/>

                    <Bagb text={"Pix Transfer"} opp={"sexta-feira, 09:50 am "} value={26.50}/>
                    
                    <Bagb text={"Pão Frances"} opp={"Quinta-Feira, 05:00 pm "} value={12.50}/>  */}

             <Crd  figura= "26/12/1991" Text="Entrada" 
               valr={3000}/>
               <Crd figura="pão"  Text="saída" 
               valr={-600}/>
               <Crd  figura="pão" Text="Total" 
               valr={2400}/>

                    




                </div>
    
        </div>
    )
}

export default App