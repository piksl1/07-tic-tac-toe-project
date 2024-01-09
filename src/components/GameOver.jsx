const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      {winner && <p>{winner} WON!</p>}
      {!winner && <p>It's a DRAW!</p>}
      <p>
        <button onClick={onRestart}>REMATCH!</button>
      </p>
    </div>
  );
};

export default GameOver;
