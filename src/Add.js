import React, {useState} from "react";
import clsx from "clsx";
import TodoItem from "./Todo-item.js"

export default function About(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [currentTab, setCurrentTab] = useState('all');

    function handleAddClick(props) {      
            if (input.trim().length > 0)  {
                setList([...list, {str: input, status:'active'}]);
                setInput("");
            }   
    }
    
    function handleRemoveClick(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    function handleCheckClick(item) {
        const className = clsx({"bg-red-500": true});
        return <h1 className={className}>{item}</h1>;
    }

    return (
        <div class={'m-10 p-5 border'}> 
            

            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'border'}/>
            <button onClick={() => handleAddClick(props)} className={'border'}>Add</button>

            
            <button onClick={() => {
                
                setCurrentTab('all');
            }} className={currentTab == 'all' ? 'text-white bg-pink-400' : 'text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('active');
            }} className={currentTab == 'active' ? 'text-white bg-pink-400' : 'text-white bg-gray-400'}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('completed');
            }} className={currentTab == 'completed' ? 'text-white bg-pink-400' : 'text-white bg-gray-400'}>Completed</button>&nbsp;&nbsp;

        

            {/*<ul>
                {list.map((item, index) => <li key={index}>
                    <input type="checkbox" onClick={()=>handleCheckClick(item)} />
                    {item} <button type="button" onClick={() => handleRemoveClick(item.id)}>Remove</button> 
                </li>)}
            </ul>*/}

            {list.length > 0 && <div className={'bg-gray-100 p-2 rounded'}>
                <ul>
                    {list.map((item, index) => {
                        return <TodoItem item={item} key={index} />
                    })
                    }
                </ul>

                
            </div>}
        </div>
    );
}