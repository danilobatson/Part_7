import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useMatch,
} from 'react-router-dom';
import {
  Footer,
  About,
  Menu,
  CreateNew,
  AnecdoteList,
  Anecdote,
} from './components';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ]);

  const [notification, setNotification] = useState('');

  const match = useMatch('/anecdotes/:id');
  const anecdote =
    match && anecdotes.find((a) => a.id === Number(match.params.id));

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }
  }, [notification]);

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <div>{notification}</div>}
      <Routes>
        <Route path='/' element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path='/anecdotes/:id'
          element={<Anecdote anecdotes={anecdote} />}
        />
        <Route
          path='/create'
          element={
            <CreateNew setNotification={setNotification} addNew={addNew} />
          }
        />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
