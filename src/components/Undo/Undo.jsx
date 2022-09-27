import { EmptyBoard } from "../../utils/constants";
import "./Undo.css";

function Undo({
  board,
  setBoard,
  history,
  setHistory,
  setWinner,
  done,
  setDone,
  isX,
  setIsX,
}) {
  const performUndo = () => {
    if (history.length > 1) {
      history.pop();
      setHistory(history);
      board = [...history[history.length - 1]];
      setBoard(board);
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
    <div
      className="Undo"
      onClick={() => {
        performUndo();
      }}
    >
      Undo
    </div>
  );
}

export default Undo;
