import React, { useState } from "react";


export default function About(props) {

    const [currentTab, setCurrentTab] = useState('all');

    return (
        <div>
            <button onClick={() => {
                setCurrentTab('all');
            }} className={currentTab == 'all' ? 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-pink-400' : 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-gray-700'}>All</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('active');
            }} className={currentTab == 'active' ? 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-pink-400' : 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-gray-700'}>Active</button>&nbsp;&nbsp;
            
            <button onClick={() => {
                setCurrentTab('completed');
            }} className={currentTab == 'completed' ? 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-pink-400' : 'pt-1 pb-1 pr-3 pl-3 rounded cursor-pointer text-sm text-white bg-gray-700'}>Completed</button>&nbsp;&nbsp;
        </div>
    );
}