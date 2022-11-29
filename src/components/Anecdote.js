const Anecdote = ({ anecdotes }) => (
  <div>
    <h2>
      {anecdotes.content} by {anecdotes.author}
    </h2>
    <p>has {anecdotes.votes} votes</p>
    <p>
      for more info see <a href={anecdotes.info}>{anecdotes.info}</a>
    </p>
  </div>
);

export default Anecdote;
