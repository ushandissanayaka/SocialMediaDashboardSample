
import './App.css';
import AppHeader from './components/AppHeader';
import SideMenuBar from './components/SideMenuBar';
import PageContent from './components/PageContent';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader/>
        <div className='sideMenuAndPageContent'>
          <SideMenuBar></SideMenuBar>
          <PageContent></PageContent>
        </div>
        <AppFooter/>
    </div>
  );
}

export default App;
