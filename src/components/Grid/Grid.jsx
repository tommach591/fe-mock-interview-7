import "./Grid.css";
import Box from "../Box";

function Grid({ board, updateBoard }) {
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
