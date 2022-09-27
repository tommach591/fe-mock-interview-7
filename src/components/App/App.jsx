import { useState } from "react";
import "./App.css";
import { EmptyBoard } from "../../utils/constants";
import Header from "../Header";
import Grid from "../Grid";
import Undo from "../Undo";
import Reset from "../Reset";
import Ask from "../Ask";

function App() {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState([...EmptyBoard]);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState(null);
  const [done, setDone] = useState(false);
  const [askBeforeReset, setAskBeforeReset] = useState(false);

  return (
    <div className="App">
      <Header isX={isX} winner={winner} done={done} />
      <Grid
        board={board}
        setBoard={setBoard}
        history={history}
        setHistory={setHistory}
        winner={winner}
        setWinner={setWinner}
        done={done}
        setDone={setDone}
        isX={isX}
        setIsX={setIsX}
      />
      <div className="Buttons">
        <Undo
          board={board}
          setBoard={setBoard}
          history={history}
          setHistory={setHistory}
          setWinner={setWinner}
          done={done}
          setDone={setDone}
          isX={isX}
          setIsX={setIsX}
        />
        <Reset setAskBeforeReset={setAskBeforeReset} />
        <Ask
          setBoard={setBoard}
          setHistory={setHistory}
          setWinner={setWinner}
          setDone={setDone}
          setIsX={setIsX}
          askBeforeReset={askBeforeReset}
          setAskBeforeReset={setAskBeforeReset}
        />
      </div>
    </div>
  );
}

export default App;
