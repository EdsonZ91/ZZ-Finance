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

               <Crd  Text="Entrada" valr={3.000}/>

               <Crd Text="Saida" valr={400} />

               <Crd Text="Total" valr={2.600} /> 

             
             
            
                

           

            
            </div>
            
            


           
        </div>
    )
}

export default App