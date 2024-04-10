import { useState } from 'react'
import './App.css'

function App() {
  
 const [isAccepted, setIsAccepted] = useState(false); // lors de l'initialisation isAccepted= false

  return (
    <>
    <Checkbox isChecked={isAccepted} onCheck={setIsAccepted}/> {/* on envoit aussi la methode qui mets a jour la variable comme ca le flux de donnée va de enfant parent */}
    <button disabled={!isAccepted}>Envoyer le formulaire</button> {/* desactive le bouton si on n'a pas isAccepted a true */}
    
    </>
  )}


  function Checkbox({isChecked, onCheck}){
    
    return(
      <>
      <label>
       <input type="checkbox" checked={isChecked} onChange={(e)=> onCheck(e.target.checked)}/>
       Accepter les conditions
       </label> 
      </>
    )
  }


export default App
