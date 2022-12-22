
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = (onNewCategory) => {        
    if (categories.includes(onNewCategory)) return;
      setCategories([ onNewCategory, ...categories ]);      
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      
      <AddCategory 
        onNewCategory = {event => onAddCategory(event)}
      />
           
        {  categories.map(  category =>  (
              <GifGrid 
                key={category}
                category={category}
              />
            )
          ) 
        }              
        
    </>
  )
}
