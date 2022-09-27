import "./Undo.css";

function Undo({ performUndo }) {
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
