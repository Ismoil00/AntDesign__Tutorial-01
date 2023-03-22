// import { HeartFilled } from "@ant-design/icons";
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
import StepsSection from "./StepsSec";
import CollapseExpand from "./CollapseExpand";
import ToggleSwitches from "./ToggleSwitches";
import DrawerSec from "./DrawerSec";
import CalendarSec from "./CalendarSec";
import TimerSec from "./TimerSec";
import RightClickMenu from "./RightClickMenu";
import SkeletonSec from "./SkeletonSec";
import RatingSec from "./RatingSec";
import AutoComlete from "./AutoComlete";

function App() {
  const verDivider = {
    borderColor: "blue",
    fontSize: "2.5rem",
    margin: "0 20px",
  };
  const divider = {
    borderColor: "blue",
    fontSize: "2rem",
    margin: "100px 0",
  };

  return (
    <div className="App">
      <span style={{ fontSize: "2rem" }}>
        <Divider style={verDivider} type="vertical" />
        Loading Section
        <Divider style={verDivider} type="vertical" />
      </span>
      <Loading />

      <Divider orientation="center" dashed style={divider}>
        Selects Section
      </Divider>

      <Selects />

      <Divider orientation="center" style={divider}>
        Form Section
      </Divider>

      <Forms />
      <ValidationForm />

      <Divider orientation="center" style={divider}>
        Table Section
      </Divider>

      <TableSec />

      <Divider orientation="center" style={divider}>
        Pagination Section
      </Divider>

      <Paginations />

      <Divider orientation="center" style={divider}>
        Tabs Section
      </Divider>

      <Tab />

      <Divider orientation="center" style={divider}>
        File Upload Section
      </Divider>

      <FileUpload />

      <Divider orientation="center" style={divider}>
        Date Pickers
      </Divider>

      <DatePicker
        picker="date"
        rootClassName="rootClass"
        popupClassName="popupClass"
      />
      <TimePicker picker="date" />
      <DatePicker.RangePicker picker="date" />

      <Divider orientation="center" style={divider}>
        Progress Section
      </Divider>

      <Progresses />

      <Divider orientation="center" style={divider}>
        Tags Section
      </Divider>

      <Tags />

      <Divider orientation="center" style={divider}>
        Typography Section
      </Divider>

      <Typographies />

      <Divider orientation="center" style={divider}>
        Menu Section
      </Divider>

      <Menu />

      <Divider orientation="center" style={divider}>
        Avatar Section
      </Divider>

      <Avatar />

      <Divider orientation="center" style={divider}>
        Carousel Section
      </Divider>

      <Corusel />

      <Divider orientation="center" style={divider}>
        Steps Section
      </Divider>

      <StepsSection />

      <Divider orientation="center" style={divider}>
        Collapse and Expande Section
      </Divider>

      <CollapseExpand />

      <Divider orientation="center" style={divider}>
        Toggles and Switches Section
      </Divider>

      <ToggleSwitches />

      <Divider orientation="center" style={divider}>
        Drawer Section
      </Divider>

      <DrawerSec />

      <Divider orientation="center" style={divider}>
        Calendar Section
      </Divider>

      <CalendarSec />

      <Divider orientation="center" style={divider}>
        Timer Section
      </Divider>

      <TimerSec />

      <Divider orientation="center" style={divider}>
        Right Click Menu Section
      </Divider>

      <RightClickMenu />

      <Divider orientation="center" style={divider}>
        Skeletons Section
      </Divider>

      <SkeletonSec />

      <Divider orientation="center" style={divider}>
        Rating Section
      </Divider>

      <RatingSec />

      <Divider orientation="center" style={divider}>
        AutoComplete Section
      </Divider>

      <AutoComlete />
    </div>
  );
}

export default App;
