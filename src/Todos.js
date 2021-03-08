import React, {useState} from "react";

export default function Todos(props) {

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function handleAddClick() {
        setList([...list,input]);  
    }

    return (
        <div className={'m-10 p-5 border'}>
            <input type="text" value={input} onChange={event=>setInput(event.target.value)}
                className={'border'} />
            <button onClick={handleAddClick} className={'border'}>Add</button>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
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