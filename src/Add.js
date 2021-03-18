import React, {useEffect, useState} from "react";
import clsx from "clsx";
import TodoItem from "./Todo-item.js"
import Show from "./Show.js"

export default function Add(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [currentTab, setCurrentTab] = useState('all');
    const [toggle, setToggle] = useState(false);
    const [completedList, setCompletedList] = useState(list);
    const [activeList, setActiveList] = useState(list);
    
    useEffect(() => {
        if (toggle) {
            setToggle(false);
        }

    },[toggle])
    
    function setLists() {
        setActiveList(list.filter(item => item.status === 'active'));
        setCompletedList(list.filter(item => item.status === 'completed'));
    }
    
    function handleAddClick(props) {      
            if (input.trim().length > 0)  {
                setList([...list, {
                    str: input,
                    status: 'active',
                    id: list.length + 1,
                }]);
                setInput("");
                setLists(props.list);
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
        setLists(list);
        console.log(listCopy);
    }


    return (
        <div> 

            <div>
                {/* {JSON.stringify(list)}
                {JSON.stringify(allList)}
                {JSON.stringify(activeList)}
                {JSON.stringify(completedList)} */}

            <button onClick={() => {
                   setCurrentTab('all'); 
            }} className={currentTab === 'all' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
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

        
            {list.length > 0 && !toggle && currentTab === 'all' && <div className={'bg-gray-100 p-2 rounded m-3 p-5 text-sm'}>
                <ul>
                    {list.map((item, index) => {
                        return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick} />

                    })}
                </ul>
            </div>}


            {list.length > 0 && activeList.length > 0 && !toggle && currentTab === 'active' && <div className={'bg-red-200 p-2 rounded m-3 p-5 text-sm'}>
                <ul>
                    {activeList.map((item, index) => {
                        return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick} />

                    })}
                </ul>
            </div>}
        
            {list.length > 0 && completedList.length > 0 && !toggle && currentTab === 'completed' && <div className={'bg-green-100 p-2 rounded m-3 p-5 text-sm'}>
                <ul>
                    {completedList.map((item, index) => {
                        return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick} />

                    })}
                </ul>
            </div>} 
        
        </div>
    );
}
