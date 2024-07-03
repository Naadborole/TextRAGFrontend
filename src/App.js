import logo from './logo.svg';
import './App.css';
import ChatInput from './components/ChatInput';
import DocumentList from './components/DocumentList';

function App() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className='flex-[1_1_15%] bg-rich-black text-white'>
        <DocumentList />
      </div>
      <div className='flex-[1_1_85%] bg-oxford-blue'>
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
