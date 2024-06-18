import"./App.css"
import  Crd from "./componentes/Arquivos"
import Pencil from "./componentes/texto"
import Bagb from "./componentes/Bag"
import Modal from "./componentes/Modal"



function App() {

    function handleOnclickBtn() {
        // alert("Teste")
       const Cerveja= prompt("O que voce trouxe para Brenda")
       alert("voce trouxe " + Cerveja + "cervejas")
        
    }
 
    const pressButton = false

    function openHouse(idade) {
        alert(idade)

    }


    return(
        <div className="majorBox">
            <div className="Box">
                <h1>ZZ-Finance</h1>

                <button onClick={() => handleOnclickBtn()}>
                    Testando
                </button>

                 <button onClick={() => openHouse(32)} className="firstBu" >Nova transação</button>
            </div>
            <div  className="cardsBank">

               <Crd  Text="Entrada" 
               valr={3000}/>

               <Crd  Text="Saída" 
               valr={-400} />

               <Crd Text="Total" 
               valr={2600} /> 

               

            </div>
             
            <div className="CrdDown">

                   
             <Crd  descrip="Spotify Premium" Text="Entrada" 
               valr={3000}/>

               <Crd descrip="Pix Transferencia"  Text="saída" 
               valr={-600}/>
               <Crd  descrip="Coxinha da Quebrada" Text="Total" 
               valr={2400}/>     

                </div>

                { <Modal />}
                
                

              

     
        </div>
    )
}

export default App