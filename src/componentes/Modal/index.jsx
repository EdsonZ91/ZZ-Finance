import InputCrd from '../Entrada'
import './Style.css'
import ButtonMod from '../ModalButton'
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
         <div className='modal-button'>
          <ButtonMod />
          <ButtonMod />
         </div>

               <div>





               </div>





         
            <div>
               <button className='button-cadastrar'>Cadastrar</button>
            </div>



      </form>


   </div>
  </div>

    )
}
export default Modal