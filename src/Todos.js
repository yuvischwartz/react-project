import React, { useState } from "react";
import Add from "./Add.js"


export default function Todos(props) {

    return (
        <div className={'container1  p-5 border'}>
            <div className={'containerTodos'}>
                    <h1 className='title'>Today's Tasks</h1>
                <Add />
            </div>

            <div className={'containerP'}>
                    <h1 className='title'>Priority</h1>
                    
            </div>   

            <div className={'containerCalles'}>
                    <h1 className='title'>Calles</h1>
                    
            </div>
            
            <div className={'containerNotes'}>
                    <h1 className='title'>Notes</h1>
                    
            </div>

            
        </div>
    );
}
