import React, {useState} from "react";

export default function About(props) {
    
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

  

    function handleAddClick(listType) {
        if (listType === "todos") {
            
            if (input.trim().length > 0)  {
                setList([...list, input]);
                setInput("");
            }

        }
    }
    
    function handleRemoveClick(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }


    return (
        <div class={'m-10 p-5 border'}> 
            
            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'border'} />
            <button onClick={() => handleAddClick(props.listType)} className={'border'}>Add</button>

            <ul>
                {list.map((item, index) => <li key={index}>
                <input type="checkbox"/>
                    {item} <button type="button" onClick={() => handleRemoveClick(item.id)}>Remove</button> 
                </li>)}
            </ul>
        </div>
    );
}