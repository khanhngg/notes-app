const FoldersPanel = ({ folders, currentFolder }) => {
  return (
    <div className="folders-container">
      {currentFolder && (<p>current folder is {currentFolder.id}</p>)}
      {folders.map(({ id, name }) => (
        <p key={id}>{id}: {name}</p>
      ))}
    </div>
  );
};

export default FoldersPanel;