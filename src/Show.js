import React, { useState } from "react";


export default function About(props) {

    const [currentTab, setCurrentTab] = useState('all');

    return (
    <>
        <li className={'border-b border-gray-400 p-1'}>
                            <button className={props.item.status === 'completed' ? 'float-left fas fa-square text-blue-400' : 'float-left far fa-square'}
                            onClick={() => props.handleImageChangeClick(props.item)}></button>
                            {/*<input className={'float-left'} type="checkbox" value={input} onChange={event=>setIsChecked(!isChecked ? setIsChecked(true): setIsChecked(false))}/>&nbsp;*/}
                            <span className={'text-gray-600 text-sm'}
                                style={{ textDecoration: props.item.status === 'completed' ? "line-through" : "none"}}>{props.item.str}</span>
                            <button type="button" className={'float-right'} onClick={() => props.handleRemoveClick(props.item.id)}>
                                <i class="fas fa-times text-red-400"></i></button> 
                            <button className={'float-right text-sm text-yellow-400 fab fa-product-hunt'}></button>
        </li>


        {/* <div>
            <button onClick={() => {
                setCurrentTab('all');
            }} className={currentTab == 'all' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('active');
            }} className={currentTab == 'active' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('completed');
            }} className={currentTab == 'completed' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Completed</button>&nbsp;&nbsp;
        </div> */}
            </>
    );
}