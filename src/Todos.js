import React, { useState } from "react";
import Add from "./Add.js"


export default function Todos(props) {

    return (
        <div className={'m-10 p-5 border'}>
            TODOS
            <Add listType="todos" />
            <br />
            CALLES
            <Add listType="todos" />
            <br />
            NOTES
           <Add listType="todos" />               
        </div>
    );
}
