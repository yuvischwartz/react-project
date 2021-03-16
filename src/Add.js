import React, {useEffect, useState} from "react";
import clsx from "clsx";
import TodoItem from "./Todo-item.js"
import Show from "./Show.js"

export default function Add(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [currentTab, setCurrentTab] = useState('all');
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        if (toggle) {
            setToggle(false);
        }

    },[toggle])
    
   
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
    
    function handleImageChangeClick(it) {
    
        let listCopy = list;
        listCopy.map(item => {
            if (item.id === it.id) {
                if (item.status === 'active') {
                    item.status = 'completed';
                } else {
                    item.status = 'active';
                }
            }
        })
        setToggle(true);
        setList(listCopy);
        console.log(listCopy);
    }
    return (
        <div> 
            {/*putting the show here}
            {<Show />} */}

        <div>
            <button onClick={() => {
                    setCurrentTab('all');
                    setList(list.filter(item => item.status === 'completed' || item.status === 'active'));
            }} className={currentTab == 'all' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                    setCurrentTab('active');
                    setList(list.filter(item => item.status === 'active'));
            }} className={currentTab == 'active' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                    setCurrentTab('completed');
                    setList(list.filter(item => item.status === 'completed'));
            }} className={currentTab == 'completed' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Completed</button>&nbsp;&nbsp;
        </div>
            


            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'input-bar border border-gray-400 inline-block rounded text-l mt-3'}/>
            <button onClick={() => handleAddClick(props)}
                className={'add-btn btn inline-block border pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-purple-400'}>Add</button>

          
        {JSON.stringify(list)}
            {list.length > 0 && !toggle && <div className={'bg-blue-50 p-2 rounded m-3 p-5 text-sm'}>
                <ul>
                    {list.map((item, index) => {
                        return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick} />

                    })}
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