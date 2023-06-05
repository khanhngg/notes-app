const FoldersPanel = ({ isShow, folders, currentFolder, selectFolder, createFolder }) => {
  return (
    <div className={`folders-container ${!isShow ? "hide" : ""}`}>
      <div className="folders-list">
        {folders.map(({ id, name }) => {
          return currentFolder.id === id
          ?
            <div className="folder-item selected-item" key={id}>
              <span><strong>{name}</strong></span>
            </div>
          :
            <div className="folder-item" key={id} onClick={() => selectFolder(id)}>
              <span>{name}</span>
            </div>
        })}
      </div>
      <div className="button" onClick={() => createFolder()}>
        {/* New Folder Icon */}
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2.08331C10.4398 2.08331 8.42581 2.69424 6.71279 3.83884C4.99978 4.98344 3.66465 6.6103 2.87624 8.51369C2.08783 10.4171 1.88154 12.5115 2.28347 14.5322C2.6854 16.5528 3.67749 18.4089 5.13429 19.8657C6.59109 21.3225 8.44716 22.3146 10.4678 22.7165C12.4884 23.1184 14.5829 22.9121 16.4863 22.1237C18.3897 21.3353 20.0165 20.0002 21.1611 18.2872C22.3057 16.5742 22.9166 14.5602 22.9166 12.5C22.9166 11.132 22.6472 9.7775 22.1237 8.51369C21.6002 7.24989 20.833 6.10156 19.8657 5.13428C18.8984 4.16701 17.7501 3.39972 16.4863 2.87623C15.2225 2.35275 13.8679 2.08331 12.5 2.08331ZM15.625 13.5416H13.5417V15.625C13.5417 15.9012 13.4319 16.1662 13.2366 16.3615C13.0412 16.5569 12.7763 16.6666 12.5 16.6666C12.2237 16.6666 11.9588 16.5569 11.7634 16.3615C11.5681 16.1662 11.4583 15.9012 11.4583 15.625V13.5416H9.37498C9.09872 13.5416 8.83376 13.4319 8.63841 13.2365C8.44306 13.0412 8.33332 12.7762 8.33332 12.5C8.33332 12.2237 8.44306 11.9588 8.63841 11.7634C8.83376 11.5681 9.09872 11.4583 9.37498 11.4583H11.4583V9.37498C11.4583 9.09871 11.5681 8.83376 11.7634 8.63841C11.9588 8.44306 12.2237 8.33331 12.5 8.33331C12.7763 8.33331 13.0412 8.44306 13.2366 8.63841C13.4319 8.83376 13.5417 9.09871 13.5417 9.37498V11.4583H15.625C15.9013 11.4583 16.1662 11.5681 16.3616 11.7634C16.5569 11.9588 16.6667 12.2237 16.6667 12.5C16.6667 12.7762 16.5569 13.0412 16.3616 13.2365C16.1662 13.4319 15.9013 13.5416 15.625 13.5416Z" fill="#231F20"/>
        </svg>
        <span>New Folder</span>
      </div>
    </div>
  );
};

export default FoldersPanel;