import Search from './Search';
import Stories from './Stories';
import Pagination from './Pagination';
import './App.css';
// import { useContext } from 'react';
// import { AppContext } from './Context';
// import { useGlobalContext } from './Context';


function App() {
  // const data = useContext(AppContext); now while using custom hook instead of this write the below one
  // const data = useGlobalContext();
  return (
    <>

      <Search />
      <Pagination />
      <Stories />
    </>

  );
}

export default App;
