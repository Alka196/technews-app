import React, { useState } from 'react';
import { useGlobalContext } from './Context';
import './Search.css'


function Search() {

    const { query, searchPost } = useGlobalContext();
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Perform subscription logic here (e.g., sending email to server)
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <>
        <form >
            <div className='subs-btn'>
                    <input
                        className="email-input"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="subscribe-button" type="submit">Subscribe Now</button>
                    </div>
                    </form>
            <h1><span><img style={{ height: "90px", width: "120px" }}
                src="https://w7.pngwing.com/pngs/174/828/png-transparent-newspaper-animation-blackboard-newspaper-love-text-logo.png"
                alt="logo" /> </span> &nbsp;APNA Tech NEWS </h1>

            <form onSubmit={(e) => e.preventDefault()}>

                <div>
                    <input
                        type='text'
                        placeholder='search Here'
                        value={query}
                        onChange={(e) => searchPost(e.target.value)}
                    />
                    </div>
                   
            </form>
            

        </>

    );
}

export default Search;