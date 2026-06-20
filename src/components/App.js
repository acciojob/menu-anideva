
import React, {useState} from 'react';

function App () {
    const [category,setCategory]= useState("all");
   const menu = [
  { id: 1, name: "Pancakes", category: "breakfast" },
  { id: 2, name: "Burger", category: "lunch" },
  { id: 3, name: "Pizza", category: "lunch" },
  { id: 4, name: "Chocolate Shake", category: "shakes" }
];

const filteredMenu =
  category === "all"
    ? menu
    : menu.filter((item) => item.category === category);

     return (
        <div id="main">
            <button id ="filter-btn-1"
            onClick={()=> setCategory("breakfast")}>Breakfast</button>
            <button id ="filter-btn-2"
            onClick={()=>setCategory ("lunch")}>Lunch</button>
            <button id ="filter-btn-3"
            onClick={()=> setCategory ("shakes")}>Shakes</button>
            <h2>{category}</h2>
            {
                filteredMenu.map((item)=>(
                    <h3 
                    key={item.id}
                    data-test-id={`menu-item-${item.category}`}
                    >
                        {item.name}
                    </h3>
                ))
            }

        </div>
     );
}

export default App;