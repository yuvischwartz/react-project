import React, { useState } from "react";


export default function About(props) {
    return (
        <div class={'m-10 p-5 bg-blue-400 rounded'}>
            <h1 className={'title'}>What makes a great to-do list app?</h1>
            
            <div className={'text-center'}>
                <p> When it comes to to-do lists, everyone has different criteria. We kept this in mind as we tested apps and noticed a few features that made certain ones out.

                <h3>The best to-do list apps:</h3>

                Make it fast to add and organize tasks. Ideally, a task is added and categorized in a couple taps or keystrokes.

                Offer multiple ways to organize your tasks. Tags, lists, projects, and due dates are all helpful, and the best apps offer at least a few categories like this.

                Remind you about self-imposed deadlines. Notifications, widgets, emails—the best applications make it obvious when something needs to be completed.

                Offer clean user interfaces. Well-designed to-do apps fit into your workflow so you can get back to what you're supposed to be doing.

                Sync between every platform you use. Which platforms will depend on what you personally use, but we didn't consider anything that doesn't sync between desktop and mobile.
                </p>
            </div>
        </div>
    );
}