import"./App.css"
import CarDbank from "./components/Cards"



function App() {
    return(
        <div className="majorBox">
            <div className="Box">
                <h1>ZZ-Finance</h1>

                 <button className="firstBu">Nova transação</button>
            </div>
            <div className="cardsBank">
               <CarDbank />
               <CarDbank />
               <CarDbank />
               

               

            </div>
        </div>
    )
}

export default App