import { Dropdown } from "semantic-ui-react";
import './App.css'
import { useState } from "react";

function App() {

  const categories =[
    {id:1, name:"Menage"},
    {id:2, name:"Couture"},
    {id:3, name:"Cuisine"},
    {id:4, name:"Garage"},
    {id:5, name:"Piano"}
  ]

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e,  {value}) => { /***********************VOIR COMmENT CA FONCTIONNE */
  setSelectedCategory(value);
  };
  const essai = "ca marcheeeee!"; 

  const optionsCat = categories.map((category) => ({
    key: category.id, // Use category ID as key
    text: category.name, // Display category name
    value : category.id
  }));


  
  return (
    <>
    
    <label>Catégorie : </label>
   <Dropdown
    placeholder='Selectionner une catégorie' 
    search //Active la recherche dans la liste des options
    selection //permet de sélectionner une seule option.
    clearable
    options={optionsCat} 
    onChange={handleChange}
    />
    
    <Service option={selectedCategory} optionne= {essai}/> 
  </>
   )
}



function Service({option, optionne}){
  
  const services =[
    {id:1, name:"Je fais le ménage pour 25€ de l'heure"},
    {id:2, name:" Je fais de la Couture depuis 10 ans, je peux faire es habits sur mesure ou repriser des vetements"},
    {id:3, name:"Je fais de la Cuisine, je donne des cours ou vends des gateaux et petits fours"},
    {id:4, name:"Je suis garagiste et je vous propose des réparations"},
    {id:5, name:"je donne des cours de Piano"}
  ]

  const name = services.find((service) => (service.id === option))?.name;
  // si service.id=={option} true  , renvoit l'element trouvé . Le ?.name accede a la prop name de cet élément (? evite les erreurs si rien n'est trouvé)

  console.log({optionne})
  return(
    <>
    
   Choix de l'option : {option} <br/>
   <h2>{name}</h2>
   "{optionne}"
  
   
    </>
  )
}


export default App
