// import { logDOM } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';
import { FaTrashAlt} from 'react-icons/fa';



  
const Content=()=>{

    function handleChange(){
        const name=["Give", "rent","borrow"];
        const number=Math.floor(Math.random()*3);
        setName(name[number]);

    
      }
    // const handleClick=(name,e)=>{
    //     console.log(`Thank you friends ${name}`);
    //     console.log(e.target.innerText);
    //   }

    //   const handleClick2=(name)=>{
    //       console.log(`Thank you ${name}`);
    //   }
      // function namee(){
      //   return console.log("Abishek");
      // }
      const[count,setCount]=useState(99);
      const[name,setName]=useState("Earn");
      const[items,setItems]=useState([
        {
            id:1,
            checked:true,
            item:"Practice Coding",
        },
        {
            id:2,
            checked:false,
            item:"Playing Cricket",
        },
        {
            id:3,
            checked:false,
            item:"Listening Music",
        }
      ])
    //   const[name,setName]=useState(()=>namee());

      function incrementFunction(){
        setCount(count+1)
      }
      function decrementFunction(){
        setCount(count-1)
      }
   const handleCheck=(id)=>{
    const listItems=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item);
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
   }
   const handledelete=(id)=>{
      const listItems=items.filter((item)=>item.id!==id);
      setItems(listItems);
      localStorage.setItem("todo_list",JSON.stringify(listItems));
   }

    return(
        <main>
        <p onClick={handleChange}>
            Lets {name} Money
        </p>
        <button onClick={handleChange}>Subscribe</button>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
        <ul>
              {items.map((item)=>(
                
                <li key={item.id} className='item'>
                <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked}/>
                <label style={(item.checked)?{textDecoration:"line-through"}:null}onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                <FaTrashAlt role="button" onClick={()=>handledelete(item.id)} tabIndex="0"/>
                </li>
              ))}
           
        </ul>
        </main>
    )
    
}
export default Content;