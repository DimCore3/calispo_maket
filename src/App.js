import { useState } from 'react';
import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpenedSearchInput, setIsOpenedSearchInput] = useState(false);

  function closeAllOpenedElements() {
    if(isOpenedSearchInput) {
      setIsOpenedSearchInput(false);
    }
  }

  return (
    <div onClick={closeAllOpenedElements} className="App">
      <Header isOpenedSearchInput={isOpenedSearchInput} setIsOpenedSearchInput={setIsOpenedSearchInput}/>
      <div className='main_content_and_sidebar_full'>
        <div className='main_content_and_sidebar'>
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
