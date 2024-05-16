const App = () => {
  const name = "Taimoor Ali";
  const a = 2;
  const b = 5;
  const names = ["Mariam", "Abdul ahad", "Sana ", "Taimoor"];
  const loggedIn = true;
  const styles = {
    color:"Green",
    fontSize:"80px"
  }

  return (
    <>
      <div className="text-3xl font-bold underline">app</div>
      <p style={{ color: "red", fontSize: "55px" }}>wow {name}</p>
      <p style={styles}>
        The sum of {a} and {b} is {a + b}
      </p>

      <ul>
        {names.map((name, i) => (
          <li key={i}>
            {i} : {name}
          </li>
        ))}
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
