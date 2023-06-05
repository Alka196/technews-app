import React from 'react';
import { useGlobalContext } from './Context';

function Search() {

    const { query, searchPost } = useGlobalContext();

    return (
        <>
           <h1><span><img style={{height:"90px",width:"120px"}}
           src="https://w7.pngwing.com/pngs/174/828/png-transparent-newspaper-animation-blackboard-newspaper-love-text-logo.png"
            alt="logo"/> </span> &nbsp;APNA Tech NEWS </h1>
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