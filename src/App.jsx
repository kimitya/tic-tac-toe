import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Zagruzka from "./components/Zagruzka";
import Grid from "./components/Grid";
import Winner from "./components/Winner";

function App() {
  const [grid, setGrid] = useState([
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
    { id: 9, text: "" },
  ]);
  const [user, setUser] = useState(true);

  const [winner, setWinner] = useState(null);

  // var hasWinner = false;

  function test(){

  }
  function checkWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    console.log("cheching winner")
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (combination.every((number) => grid[number].text === "X")) {
        // setHasWinner = true;
        // setHasWinner(trx)
        setWinner("X")
      } else if (combination.every((number) => grid[number].text === "O")) {
        // setHasWinner = true;
        setWinner("O")
      }
    }
  }
  useEffect(()=>{
    checkWinner()
  }, [grid])
  
  
  function handlePlay(elementID) {
    //NO NO push splice pop shift unshift
    //OK map forEach slice  filter find some
    const newGrid = grid.map((item) => {
      if (item.id === elementID && !item.text) {
        return { ...item, text: user ? "X" : "O" };
      } else return item;
    });


    // newGrid.forEach((item) => {
    //   if (item.text=="X"){
    //     arrX.push(item.id);
    //   } else if (item.text=="O"){
    //     arrO.push(item.id);
    //   } 
    // });

    

    setUser(!user);
    setGrid(newGrid);
      // return null; 
    }
    // const winner = checkWinner()

    //var winner = checkWinner(arrX, arrO);

    // const [winner, setWinner] = useState(checkWinner(arrX, arrO));

    // if (winner) {
    //   setHasWinner=true;
    //   console.log(`Победитель: ${winner}`);
    //   console.log(hasWinner)
    // } 

    // if (arrX!=[] && arrX.length>2){
    //   var firstIndex = arrX[0];
    //   var secondIndex = arrX[1];
    //   var step = secondIndex - firstIndex;
    //   var thirdIndex = arrX[2];
    //   if (thirdIndex-step==secondIndex) {
    //     // hasWinner = true;
    //     console.log("Winner");
    //   }
    // }

  // if (!user) {
  //   return (
  //     <MainLayout>
  //       <Zagruzka />
  //     </MainLayout>
  //   );
  // }
  
    console.log(winner)
  return (
    <MainLayout>
      {!winner ? <Grid grid={grid} handlePlay={handlePlay}/> : <Winner winner={winner}/>}
    </MainLayout>
  );
}

export default App;
