import SoftwareCardContent from "./SoftwareCardContent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";

const SoftwareCard = () => {
  const Page = {
    backgroundColor: "rgb(85, 80, 225)",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "100%",
    width: "73px",
    height: "50px",
    position: "relative",
    top:'-65px'
  };
  const Calender = {
    backgroundColor: "rgb(226, 136, 10)",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "100%",
    width: "73px",
    height: "50px",
    position:'relative',
    top:'-65px'
  };
  const Group = {
    backgroundColor: "rgb(70, 191, 238)",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "100%",
    width: "73px",
    height: "50px",
    position:'relative',
    top:'-65px'
  }
  return (
    <div className="swc">
      <SoftwareCardContent
        icon={<DescriptionIcon style={Page} />}
        title="Lorem ipsum dolor sit amet."
        description="Stay in touch with classmates around the world anywhere,anytime
        and keep class spirit up"
      />
      <SoftwareCardContent
        icon={<CalendarMonthIcon style={Calender} />}
        title="Lorem ipsum dolor sit amet."
        description="Stay in touch with classmates around the world anywhere,anytime
        and keep class spirit up"
      />
      <SoftwareCardContent
        icon={<GroupsIcon style={Group} />}
        title="Lorem ipsum dolor sit amet."
        description="Stay in touch with classmates around the world anywhere,anytime
        and keep class spirit up"
      />
    </div>
  );
};

export default SoftwareCard;
