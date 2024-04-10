import './App.css'

function App() {
  
 const hello="Bonjour";
  return (
    <>
    <Try hello={hello}/>
    
    </>
  )}

  function Try({hello}){
    return(
      <>
       {hello}
      </>
    )
  }


export default App
