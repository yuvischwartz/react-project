import React, { useState } from "react";
import Add from "./Add.js"


export default function Todos(props) {

    return (
        <>
        <div className={'container1 p-5'}>
            <div className={'containerTodos'}>
                    <h1 className='title text-gray-700'>Today's Tasks</h1>
                    
                <Add />
            </div>

            <div className={'containerP border'}>
                    <h1 className='sub-title text-gray-900'>Priority</h1>
                    
            </div>   

            <div className={'containerCalles border'}>
                    <h1 className='sub-title'>Calles</h1>
                    
            </div>
            
            </div>
            </>
    );
}
