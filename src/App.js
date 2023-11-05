import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Maindiv from './MainDiv/Maindiv';
import Trendingbar from './Trendingbar/Trendingbar';

function App() {
  return (
    <div className="flex justify-center grid grid-cols-3">
      <div className='flex justify-end ml-auto '>
        <Sidebar />
      </div>
      <div className='flex justify-center w-full'>
      <Maindiv />
      </div>
      <div className='w-full'>
      <Trendingbar />
      </div>
    </div>
  );
}

export default App;
