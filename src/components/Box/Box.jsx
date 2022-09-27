import "./Box.css";

function Box({ value, boxID }) {
  return (
    <div className="Box">
      <h1 className={value}>{value}</h1>
    </div>
  );
}

export default Box;
