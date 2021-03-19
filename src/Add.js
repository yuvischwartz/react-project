import React, {useEffect, useState} from "react";
// import clsx from "clsx";
// import TodoItem from "./Todo-item.js"
import Show from "./Show.js"
import Priority from "./Priority.js"
import Calls from "./Calls.js";

export default function Add(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [currentTab, setCurrentTab] = useState('all');
    const [toggle, setToggle] = useState(false);
    const [completedList, setCompletedList] = useState(list);
    const [activeList, setActiveList] = useState(list);
    const [priority, setPriority] = useState([]);
    const [calls, setCalls] = useState([]);

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

    // PRIORITY
    function handlePriorityClick(it){
        
        list.map((item, index) => {
            setPriority([...priority, {
                str: item.str,
                status: item.status,
                id: item.id,
            }])
            handleRemoveClick(item.id); 
        });
            
    }

    function handleRemovePriorityClick(id) {
        setPriority(priority.filter(item => item.id !== id));
    }

    // CALLS
    function handleCallsClick(it){
        
        list.map((item, index) => {
            setCalls([...calls, {
                str: item.str,
                status: item.status,
                id: item.id,
            }])
            handleRemoveClick(item.id); 
        });
            
    }

    function handleRemoveCallsClick(id) {
        setCalls(calls.filter(item => item.id !== id));
    }
        
    
    return (
        <div className={'container1 p-5'}> 
            
            {/* TODOS */}
            <div className={'containerTodos'}>
                <h1 className='title text-gray-700'>Today's Tasks</h1>
             

                <div>
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

                {/* ALL TAB */}
                {list.length > 0 && !toggle && currentTab === 'all' &&
                    <div className={'bg-gray-100 p-2 rounded m-3 p-5 text-sm'}>
                        <ul>
                            {list.map((item, index) => {
                                return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick}
                                    handlePriorityClick={handlePriorityClick} handleCallsClick={handleCallsClick}/>

                            })}
                        </ul>
                    </div>}

                {/* ACTIVE TAB */}
                {list.length > 0 && activeList.length > 0 && !toggle && currentTab === 'active' &&
                    <div className={'bg-red-200 p-2 rounded m-3 p-5 text-sm'}>
                        <ul>
                            {activeList.map((item, index) => {
                                return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick} handleRemoveClick={handleRemoveClick}
                                handlePriorityClick={handlePriorityClick} handleCallsClick={handleCallsClick} />

                            })}
                        </ul>
                    </div>}
            
                {/* COMPLETED TAB */}
                {list.length > 0 && completedList.length > 0 && !toggle && currentTab === 'completed' &&
                    <div className={'bg-green-100 p-2 rounded m-3 p-5 text-sm'}>
                        <ul>
                            {completedList.map((item, index) => {
                                return <Show key={index} item={item} handleImageChangeClick={handleImageChangeClick}
                                    handleRemoveClick={handleRemoveClick} handlePriorityClick={handlePriorityClick} handleCallsClick={handleCallsClick}/>

                            })}
                        </ul>
                    </div>} 
                </div>
            
            {/* PRIORITY */}
            <div className={'containerP border'}>
                <h1 className='sub-title text-gray-900'>Priority</h1>
                
                {priority.length > 0 &&
                <div className={'bg-yellow-200 p-2 rounded m-3 p-5 text-sm'}>
                    <ul>
                        {priority.map((item, index) => {
                            
                            return <Priority key={index} item={item} handleRemovePriorityClick={handleRemovePriorityClick} />


                        })}
                    </ul>
                </div>}
            </div>

            {/* CALLES */}
            <div className={'containerCalles border'}>
                <h1 className='sub-title'>Calles</h1>
                
                {calls.length > 0 &&
                <div className={'bg-green-200 p-2 rounded m-3 p-5 text-sm'}>
                    <ul>
                        {calls.map((item, index) => {
                            
                            return <Calls key={index} item={item} handleRemoveCallsClick={handleRemoveCallsClick} />


                        })}
                    </ul>
                </div>}
                    
            </div>

        </div>
    );
}

{/* {JSON.stringify(list)}
                    {JSON.stringify(allList)}
                    {JSON.stringify(activeList)}
                    {JSON.stringify(completedList)}
                    {JSON.stringify(priority)} */}