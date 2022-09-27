import "./Reset.css";

function Reset({ setAskBeforeReset }) {
  return (
    <div
      className="Reset"
      onClick={() => {
        setAskBeforeReset(true);
      }}
    >
      Reset
    </div>
  );
}

export default Reset;
