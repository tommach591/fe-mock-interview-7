import "./Header.css";

function Header({ isX, winner, done }) {
  return (
    <div className="Header">
      {done ? (
        <h2>{winner ? winner + " is the winner!" : "It's a tie!"}</h2>
      ) : (
        <h2>It is now {isX ? "X" : "O"}'s turn.</h2>
      )}
    </div>
  );
}

export default Header;
