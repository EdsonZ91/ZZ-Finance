

function Card ({valor,texto}) {


    return(
    
        <div className="carDbank">
            <div className="cardIcon">

            </div>
            <div className="entradaTx">
                <p className="Ent">{texto}</p>
                <p className="valr">{valor}</p>

            </div>
            
           

        </div>



    )
}

export default Card
