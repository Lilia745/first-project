import './App.css';

function App() {
  return (
    <div className="root">
      <div className="cont">
        <div className="left">
          <img src="https://colorlib.com/etc/regform/colorlib-regform-3/images/bg-heading-03.jpg"></img>
        </div>
        <div className="right">
          <h2>Registration Info</h2>
          <div className="inputDiv">
          <input type="text" placeholder="Name" required></input>
          <input type="date" placeholder="Bhirdate" required></input>
          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="email" placeholder="Email" required></input>
          <input type="number" placeholder="Phone" required></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
