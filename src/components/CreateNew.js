import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks';
const CreateNew = ({ addNew, setNotification }) => {
  const content = useField('content');
  const author = useField('author');
  const info = useField('info');

  const resetFields = (event) => {
    event.preventDefault();
    content.resetField();
    author.resetField();
    info.resetField();
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content,
      author,
      info,
      votes: 0,
    });
    navigate('/');
    setNotification(`a new anecdote ${content} created!`);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.props} />
        </div>
        <div>
          author
          <input {...author.props} />
        </div>
        <div>
          url for more info
          <input {...info.props} />
        </div>
        <button>create</button>
        <button onClick={resetFields}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
