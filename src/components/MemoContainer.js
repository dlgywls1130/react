function MemoContainer({ memo, setMemo }) {
    return (
        <div className="MemoContainer">
            <div>
                <input
                    type="text"
                    className="MemoContiner__title"
                    value={memo.title}
                    onChange={(e) => {
                        setMemo({
                            ...memo,
                            title: e.target.value,
                            updateAt: new Date().getTime(),
                        });
                    }}
                ></input>
            </div>
            <div>
                <textarea
                    className="MemoContainer__content"
                    value={memo.content}
                    onChange={(e) => {
                        setMemo({
                            ...memo,
                            content: e.target.value,
                            updateAt: new Date().getTime(),
                        });
                    }}
                ></textarea>
            </div>
        </div>
    );
}

export default MemoContainer;
