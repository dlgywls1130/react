import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';

function SideBar({ memos, setSelectedMemoIndex, selectedMemoIndex }) {
    return (
        <div className="SideBar">
            <SideBarHeader></SideBarHeader>
            <MemoList
                memos={memos}
                selectedMemoIndex={selectedMemoIndex}
                setSelectedMemoIndex={setSelectedMemoIndex}
            ></MemoList>
            <SideBarFooter></SideBarFooter>
        </div>
    );
}

export default SideBar;
