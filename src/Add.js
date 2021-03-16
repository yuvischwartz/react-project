import React, {useState} from "react";
import clsx from "clsx";
import TodoItem from "./Todo-item.js"
import Show from "./Show.js"

export default function Add(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [currentTab, setCurrentTab] = useState('all');
    const [status, setStatus] = useState('active');
    
   
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
        setList(list.filter(item => item.id !== id));
    }
    
    function handleImageChangeClick(status,id) {
        setList(list.map(item => {
            if (item.id === id) {
                if (item.status === 'active') {
                    return { ...item, status: 'completed' };
                } else {
                    return { ...item, status: 'active' };
                }
            }
        }))
       
        
        {/*else {
            status = 'active';
            setIsChecked(true);
        }*/}
        
        {/*if (isChecked) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
            
        }
        
        if (status === 'active') {
            setStatus('complited');
        } else {
            setStatus('active');
      }
      */}
        
    }
    return (
        <div> 
            {/*putting the show here}
            {<Show />} */}

        <div>
            <button onClick={() => {
                    setCurrentTab('all');
            }} className={currentTab == 'all' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('active');
            }} className={currentTab == 'active' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('completed');
            }} className={currentTab == 'completed' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Completed</button>&nbsp;&nbsp;
        </div>
            


            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'input-bar border border-gray-400 inline-block rounded text-l mt-3'}/>
            <button onClick={() => handleAddClick(props)}
                className={'add-btn btn inline-block border pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-purple-400'}>Add</button>

          
            
            {list.length > 0 && <div className={'bg-blue-50 p-2 rounded m-3 p-5 text-sm'}>
                <ul>
                    {list.map((item, index) =>
                        <li key={index} className={'border-b border-gray-400 p-1'}>
                            <button className={item.status === 'completed' ? 'float-left fas fa-square text-green-300' : 'float-left far fa-square'}
                            onClick={() => handleImageChangeClick(item.status,item.id)}></button>
                            {/*<input className={'float-left'} type="checkbox" value={input} onChange={event=>setIsChecked(!isChecked ? setIsChecked(true): setIsChecked(false))}/>&nbsp;*/}
                            <span className={'text-gray-600 text-sm'}
                                style={{ textDecoration: item.status === 'completed' ? "line-through" : "none"}}>{item.str}</span>
                            <button type="button" className={'float-right'} onClick={() => handleRemoveClick(item.id)}>
                            <i class="fas fa-times text-red-400"></i></button>  
                        </li>)}
                </ul>
            </div>}
        
                
        
        </div>
    );
}
{/*checked={item.isChecked}*/}
{/**

    
            {list.map((item, index) => {
                        return <TodoItem item={item} key={index}/>
                    }) */}

                      {/*<ul>
                {list.map((item, index) => <li key={index}>
                    <input type="checkbox" onClick={()=>handleCheckClick(item)} />
                    {item} <button type="button" onClick={() => handleRemoveClick(item.id)}>Remove</button> 
                </li>)}
            </ul>*/}


                 {/*} const newList = list.filter((item) => item.id !== id);
    setList(newList);*/}

     {/*const [currentTab, setCurrentTab] = useState('all');*/}