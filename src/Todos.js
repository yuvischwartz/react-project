import React, { useState } from "react";
import Add from "./Add.js"


export default function Todos(props) {

    return (
        <div className={'m-10 p-5 border'}>
            TODOS
            <Add />
            
            {/*<br />
            CALLES
            <Add />
            <br />
            NOTES
            <Add />   */}            
        </div>
    );
}
