import { DatePicker, TimePicker, Divider } from "antd";
import TableSec from "./TableSec";
import Progresses from "./Progresses";
import Forms from "./Forms";
import Selects from "./Selects";
import Loading from "./Loading";

function App() {
  const verDivider = {
    borderColor: "blue",
    fontSize: "2.5rem",
    margin: "0 20px",
  };

  return (
    <div className="App">
      <span style={{ fontSize: "2rem" }}>
        <Divider
          style={verDivider}
          type="vertical"
        />
        Loading Section
        <Divider
          style={verDivider}
          type="vertical"
        />
      </span>
      <Loading />

      <Divider
        orientation="center"
        dashed
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Selects Section
      </Divider>

      <Selects />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Form Section
      </Divider>

      <Forms />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Table Section
      </Divider>

      <TableSec />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Date Pickers
      </Divider>

      <DatePicker picker="date" />
      <TimePicker picker="date" />
      <DatePicker.RangePicker picker="date" />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Progress Section
      </Divider>

      <Progresses />
    </div>
  );
}

export default App;
