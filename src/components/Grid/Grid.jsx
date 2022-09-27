import "./Grid.css";
import Box from "../Box";

function Grid({
  board,
  setBoard,
  history,
  setHistory,
  winner,
  setWinner,
  done,
  setDone,
  isX,
  setIsX,
}) {
  const updateBoard = (i) => {
    if (board[i] == null && !winner) {
      board[i] = isX ? "X" : "O";
      history.push(board.slice());
      setBoard(board);
      setHistory(history);
      setIsX(!isX);
      let result = checkWinner();
      if (result) {
        setDone(true);
        setWinner(result);
      } else {
        setDone(isFilled());
      }
    }
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isFilled = () => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] == null) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="Grid">
      {board.map((value, i) => {
        return (
          <div
            onClick={() => {
              updateBoard(i);
            }}
            key={"Box " + i}
          >
            <Box key={i} value={value} boxID={i} />
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
