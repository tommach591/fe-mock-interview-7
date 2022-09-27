import { useState } from "react";
import "./App.css";
import { EmptyBoard } from "../../utils/constants";
import Header from "../Header";
import Grid from "../Grid";
import Undo from "../Undo";
import Reset from "../Reset";
import Modal from "../Modal";

function App() {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState([...EmptyBoard]);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(null);
  const [done, setDone] = useState(false);
  const [askBeforeReset, setAskBeforeReset] = useState(false);

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

  const performReset = () => {
    setIsX(true);
    setBoard([...EmptyBoard]);
    setHistory([]);
    setWinner(null);
    setDone(false);
    setAskBeforeReset(false);
  };

  const performUndo = () => {
    if (history.length > 1) {
      history.pop();
      setHistory(history);
      setBoard([...history[history.length - 1]]);
      setIsX(!isX);
      if (done) {
        setWinner(null);
        setDone(false);
      }
    } else {
      setBoard([...EmptyBoard]);
      setIsX(true);
      setHistory([]);
    }
  };

  return (
    <div className="App">
      <Header isX={isX} winner={winner} done={done} />
      <Grid board={board} updateBoard={updateBoard} />
      <div className="Buttons">
        <Undo performUndo={performUndo} />
        <Reset setAskBeforeReset={setAskBeforeReset} />
        <Modal
          performReset={performReset}
          askBeforeReset={askBeforeReset}
          setAskBeforeReset={setAskBeforeReset}
        />
      </div>
    </div>
  );
}

export default App;
