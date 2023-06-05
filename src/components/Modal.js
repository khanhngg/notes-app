import { useState } from 'react';

const Modal = ({ header, body, cancel, submit }) => {
  const [input, setInput] = useState('');

  return (
    <div className="modal-container" onClick={() => cancel()}>
      <div className="modal-content" onClick={event => event.stopPropagation()}>
        <div className="modal-header">{header}</div>
        <div className="modal-body">
          <label htmlFor="input">{body}</label>
          <input
            name="input"
            value={input}
            placeholder="Please enter folder name..."
            autoFocus={true}
            onChange={event => setInput(event.target.value)}
            />
        </div>
        <div className="modal-footer">
          <button
            className="cancel-button"
            onClick={() => cancel()}
          >
            Cancel
          </button>
          <button
            className="submit-button"
            disabled={input.trim() === ''}
            onClick={() => submit(input)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;