import './App.css';

function App() {
  const user = {
    name:"Anna",
    year:"2007",
    surname:""
  }
  return (
    <p> my name is {user.name}, I born in {user.year} year, I {2024 - user.year} old years</p>
  );
}

export default App;
