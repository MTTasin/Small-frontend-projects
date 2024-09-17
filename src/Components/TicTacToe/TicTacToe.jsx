import { useState, useEffect } from "react";
import { BiCircle } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-bold text-5xl bg-red-50 cursor-pointer mr-[-1px] mt-[-1px] border-2 border-red-500 float-left h-[100px] w-[100px] text-center"
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState(null);

  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (squares[getCurrentSquare] || calculateWinner(squares)) {
      return;
    }
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setSquares(cpySquares);
    setIsXTurn(!isXTurn);
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setStatus(null);
  }

  useEffect(() => {
    if (calculateWinner(squares) === "X") {
      setStatus("X wins!");
    } else if (calculateWinner(squares) === "O") {
      setStatus("O wins!");
    } else if (squares.filter(Boolean).length === 9) {
      setStatus("Draw!");
    } else {
      setStatus(`Next turn is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares]);

  return (
    <>
    <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-blue-500">{status}</h2>
      </div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="content-none flex flex-col">
          <div className="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} />
            <Square value={squares[1]} onClick={() => handleClick(1)} />
            <Square value={squares[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} />
            <Square value={squares[4]} onClick={() => handleClick(4)} />
            <Square value={squares[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} />
            <Square value={squares[7]} onClick={() => handleClick(7)} />
            <Square value={squares[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      </div>

      
      <div onClick={handleRestart} className="flex justify-center">
        <button className="text-3xl font-bold text-blue-100 mt-2 bg-green-500 hover:bg-green-400 rounded-xl p-2">
          Restart
        </button>
      </div>
    </>
  );
}
