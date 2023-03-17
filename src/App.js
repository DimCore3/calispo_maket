import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <Header />
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
