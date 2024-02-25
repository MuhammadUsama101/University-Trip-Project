import { useState } from 'react';
import './App.css';
import data from './components/data';
import Cards from './components/Cards';
function App() {
  const [cardsData,setCardsData]=useState(data);
  function deleter(id){
    const newCards=cardsData.filter((card)=>{
      return card.id !== id
    })
    setCardsData(newCards);
  }
  function selector(id){
    const newCards=cardsData.filter((card)=>{
      return card.id == id
    })
    setCardsData(newCards);
  }
  if(cardsData.length == 0){
    return (
      <div className='end-page'>
        <h2>No tour left</h2>
        <button onClick={()=>setCardsData(data)}>Refresh Page</button>
      </div>
    )
  }
  return (
    <div>
      <Cards data={cardsData} deleter={deleter} selector={selector}/>
    </div>
   );
}

export default App;
