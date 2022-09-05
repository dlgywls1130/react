import './index.css';
import MemoList from '../MemoList';
import SideBarFooter from '../SideBarFooter';
import SideBarHeader from '../SideBarHeader';

function SideBar({
    memos,
    addMemo,
    setSelectedMemoIndex,
    selectedMemoIndex,
    deleteMemo,
}) {
    return (
        <div className="SideBar">
            <SideBarHeader></SideBarHeader>
            <MemoList
                memos={memos}
                selectedMemoIndex={selectedMemoIndex}
                setSelectedMemoIndex={setSelectedMemoIndex}
                deleteMemo={deleteMemo}
            ></MemoList>
            <SideBarFooter onClick={addMemo}></SideBarFooter>
        </div>
    );
}

export default SideBar;
