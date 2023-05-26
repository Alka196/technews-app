import React from 'react';
import { useGlobalContext } from './Context';

function Search() {

    const { query, searchPost } = useGlobalContext();

    return (
        <>
            <h1> APNA Tech NEWS </h1>
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