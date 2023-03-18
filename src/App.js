import { DatePicker, TimePicker, Divider } from "antd";
import TableSec from "./TableSec";
import Progresses from "./Progresses";
import Forms from "./Forms";
import Selects from "./Selects";
import Loading from "./Loading";
import ValidationForm from "./ValidationForm";
import FileUpload from "./FileUpload";
import Tags from "./Tags";
import Typographies from "./Typography";
import Menu from "./Menu";
import Avatar from "./Avatar";
import Corusel from "./Corusel";
import Paginations from "./Paginations";
import Tab from "./Tab";

function App() {
  const verDivider = {
    borderColor: "blue",
    fontSize: "2.5rem",
    margin: "0 20px",
  };

  return (
    <div className="App">
      <span style={{ fontSize: "2rem" }}>
        <Divider style={verDivider} type="vertical" />
        Loading Section
        <Divider style={verDivider} type="vertical" />
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
      <ValidationForm />

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
        Pagination Section
      </Divider>

      <Paginations />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Tabs Section
      </Divider>

      <Tab />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        File Upload Section
      </Divider>

      <FileUpload />

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

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Tags Section
      </Divider>

      <Tags />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Typography Section
      </Divider>

      <Typographies />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Menu Section
      </Divider>

      <Menu />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Avatar Section
      </Divider>

      <Avatar />

      <Divider
        orientation="center"
        style={{ borderColor: "blue", fontSize: "2rem" }}
      >
        Carousel Section
      </Divider>

      <Corusel />
    </div>
  );
}

export default App;
