import React, { useState } from "react";


export default function About(props) {

    const [currentTab, setCurrentTab] = useState('all');

    return (
        <div>
            <button onClick={() => {
                setCurrentTab('all');
            }} className={currentTab == 'all' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('active');
            }} className={currentTab == 'active' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('completed');
            }} className={currentTab == 'completed' ? 'btn rounded cursor-pointer text-sm text-white bg-gray-500 ' : 'btn rounded cursor-pointer text-sm text-white bg-gray-400 '}>Completed</button>&nbsp;&nbsp;
        </div>
    );
}