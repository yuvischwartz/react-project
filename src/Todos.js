import React, {useState} from "react";


export default function Todos(props) {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);


    function handleAddClick() {
        if (input.trim().length > 0)  {
            setList([...list, input]);
            setInput("");
        }
    }

    {/*
    function handleDeleteClick(id) {
        setList(list.filter(item => item.id !== id));
    } */}

    return (
        <div className={'m-10 p-5 border'}>
            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'border'} />
            <button onClick={handleAddClick} className={'border'}>Add</button>

            <ul>
                {list.map((item, index) => <li key={index}>
                <input type="checkbox"/>
                    {item}
                    </li>)}
            </ul>

            
                    {/** 
                    <button onClick={()=>handleDeleteClick(item.id)}><i className="fas fa-trash-alt text-red-400"></i></button>
               */}
                    
        </div>
    );
}



    {/* 
    const [inputText, setInputText] = useState();
    const [todos, setTodos] = useState([]);

    const handleInputChange = async (ev) => {
        setInputText(ev.currentTarget.value);
    };


    const handleAddClick = async () => {
        setTodos([...todos, inputText])
    };

*/}