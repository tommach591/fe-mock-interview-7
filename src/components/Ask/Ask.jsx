import { EmptyBoard } from "../../utils/constants";
import "./Ask.css";

function Ask({
  setBoard,
  setHistory,
  setWinner,
  setDone,
  setIsX,
  askBeforeReset,
  setAskBeforeReset,
}) {
  const performReset = () => {
    setIsX(true);
    setBoard([...EmptyBoard]);
    setHistory([]);
    setWinner(null);
    setDone(false);
    setAskBeforeReset(false);
  };

  return askBeforeReset ? (
    <div className="Ask">
      <div>
        <h3>New Game?</h3>
      </div>
      <div>
        <h3>Are you sure you want to start a new game?</h3>
      </div>
      <div className="Choices">
        <div
          className="Button"
          onClick={() => {
            setAskBeforeReset(false);
          }}
        >
          No
        </div>
        <div
          className="Button"
          onClick={() => {
            performReset();
          }}
        >
          Yes
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default Ask;
