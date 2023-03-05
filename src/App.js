import { DatePicker, TimePicker } from "antd";
import TableSec from "./TableSec";
import Progresses from "./Progresses";
import Forms from "./Forms";
import Selects from "./Selects";
import Loading from "./Loading";

function App() {
  // Styles:
  
  const horizontalLines = {
    color: "gray",
    width: "100%",
    margin: "50px",
  };
  

  return (
    <div className="App">
      <Loading />

      <hr style={horizontalLines} />

      <Selects />

      <hr style={horizontalLines} />

      <Forms />

      <hr style={horizontalLines} />

      <TableSec />

      <hr style={horizontalLines} />

      <h1 style={{ marginBottom: "20px" }}>Date Pickers</h1>
      <DatePicker picker="date" />
      <TimePicker picker="date" />
      <DatePicker.RangePicker picker="date" />

      <hr style={horizontalLines} />

      <Progresses />
    </div>
  );
}

export default App;
