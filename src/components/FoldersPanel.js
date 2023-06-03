const FoldersPanel = ({ folders, currentFolder, selectFolder }) => {
  return (
    <div className="folders-container">
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
  );
};

export default FoldersPanel;