import React, { useState } from "react";



export default function Calls(props) {

    return (
        <li className={'border-b border-gray-400 p-1'}>
                            
                            
            <span className={'text-gray-600 text-sm'}>{props.item.str}</span>
            
            <button type="button" className={'float-right'} onClick={() => props.handleRemoveCallsClick(props.item.id)}>
            <i class="fas fa-times text-red-400 text-lg"></i>&nbsp;&nbsp;</button> 
            
                
        </li>
    );
}