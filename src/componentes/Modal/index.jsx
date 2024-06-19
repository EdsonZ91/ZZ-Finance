import InputCrd from '../Entrada'
import './Style.css'

function Modal(){

 return(
  <div className="container-segundaP">
   <div className='segundaP'>
      <div>
         <h2>Cadastrar Transação</h2>
         <div style={{
            display: "flex",
            flexDirection: "column",
            
            gap: 10
         }}>
          <InputCrd placeholder={"Título"}/>
          <InputCrd placeholder={"0"}/>
            
         </div>

      </div>
      <form>


      </form>


   </div>
  </div>

    )
}
export default Modal