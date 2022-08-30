import { memo, useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
    const [memos, setMemos] = useState([
        {
            title: 'Memo 1',
            content: 'this is memo 1',
            createdAt: 1661833987869,
            updatedAt: 1661833987869,
        },
        {
            title: 'Memo 2',
            content: 'this is memo 2',
            createdAt: 1661834017365,
            updatedAt: 1661834017365,
        },
    ]);

    const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);
    const setMemo = (newMemo) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        setMemos(newMemos);
    };

    return (
        <div className="App">
            <SideBar
                memos={memos}
                selectedMemoIndex={selectedMemoIndex}
                setSelectedMemoIndex={setSelectedMemoIndex}
            />
            <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
        </div>
    );
}

export default App;
