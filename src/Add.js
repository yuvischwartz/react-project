import React, {useState} from "react";
import clsx from "clsx";
import TodoItem from "./Todo-item.js"
import Show from "./Show.js"

export default function Add(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    {/*const [currentTab, setCurrentTab] = useState('all');*/}

    function handleAddClick(props) {      
            if (input.trim().length > 0)  {
                setList([...list, {
                    str: input,
                    status: 'active',
                    id: list.length + 1,
                }]);
                setInput("");
            }   
    }
    
    function handleRemoveClick(id) {
        {/*} const newList = list.filter((item) => item.id !== id);
    setList(newList);*/}
        
        setList(list.filter(item => item.id !== id));
    }

    function handleCheckClick(item) {
        const className = clsx({"bg-red-500": true});
        return <h1 className={className}>{item}</h1>;
    }

    return (
        <div> 
            

            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'border inline-block rounded text-lg'}/>
            <button onClick={() => handleAddClick(props)}
                className={'inline-block border pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-purple-400'}>Add</button>

            {/*<ul>
                {list.map((item, index) => <li key={index}>
                    <input type="checkbox" onClick={()=>handleCheckClick(item)} />
                    {item} <button type="button" onClick={() => handleRemoveClick(item.id)}>Remove</button> 
                </li>)}
            </ul>*/}
            
            {list.length > 0 && <div className={'bg-gray-100 p-2 rounded m-5 p-5 text-sm'}>
                <ul>
                    {list.map((item, index) =>
                        <li key={index} className={'border-b border-gray-500 p-1'}>
                            <input type="checkbox" />&nbsp;
                            <span className={'text-gray-700 font-semibold text-sm'}>{item.str}</span>
                            <button type="button" onClick={() => handleRemoveClick(item.id)}>
                            <i class="fas fa-trash-alt text-red-400 float-rigth pl-5"></i></button> 
                        </li>)}
                </ul>
            </div>}
        
                <Show />
            
                
            
       
        
        </div>
    );
}

{/**
            {list.map((item, index) => {
                        return <TodoItem item={item} key={index}/>
                    }) */}