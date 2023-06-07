function Winner(props) {
    console.log("Hello")
    return (
      <div>
        <p className="flex items-center justify-center h-screen text-4xl text-white"> WINNER: {props.winner}</p>;
      </div>
    );
  }

export default Winner;

