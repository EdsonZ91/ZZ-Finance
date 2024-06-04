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

               <Crd Text="Saida" 
               valr={400} />

               <Crd Text="Total" 
               valr={2600} /> 

            </div>
             
                <div className="CrdDown">

                    <Bagb />

                    <Bagb />
                    
                    <Bagb />




                </div>
    
        </div>
    )
}

export default App