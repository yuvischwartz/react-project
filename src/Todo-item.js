import React, { useState } from "react";



export default function TodoItem(props) { 



    return (
        <li className={'border-b border-gray-500 p-1'}>
            <input type="checkbox"/>&nbsp;&nbsp;
            <span className={'text-gray-700 font-semibold text-sm'}>{props.item.str}</span>
            <i class="fas fa-trash-alt text-red-400 float-rigth pl-5"></i>
            
        </li>
    );
}