import React, { useState } from "react";
import Add from "./Add.js"

export default function About(props) {
    return (
        <div class={'m-10 p-5 border'}>
           About page TEST
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