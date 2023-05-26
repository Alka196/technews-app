//context creation
//provider
//consumer-->length process so eliminated
// Use context hook-->replace consumer
import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

let API = " http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: " ",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = React.createContext();

//to create a provider function
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);



    const fetchapiData = async (url) => {  // to overcome promise we use asyn await
        dispatch({ type: "SET_LOADING" })

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            dispatch(   //Dispatch triggers the action method in reducer
                {
                    type: "GET_STORIES",
                    payload: {
                        hits: data.hits,
                        nbPages: data.nbPages
                    }
                });

            //isLoading= false;


        } catch (error) {
            console.log(error);
        }
    }

    // remove

    const removePost = (post_ID) => {
        dispatch(
            {
                type: "REMOVE_POST",
                payload: post_ID
            })
    }

    //Search
    const searchPost = (searchQuery) => {
        dispatch(
            {
                type: "SEARCH_QUERY",
                payload: searchQuery
            });
    };

    //Pagination

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",

        })
    }

    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE",

        })
    }




    //to call the api func

    useEffect(() => {

        fetchapiData(` ${API}query=${state.query}&page=${state.page}`);

    }, [state.query, state.page]);

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>{children} </AppContext.Provider> //...state means all previous data is passed
    )
    //children here means complete whole react application and provider hold it .
};

//custom Hook creation-->Hooks returned in a custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };