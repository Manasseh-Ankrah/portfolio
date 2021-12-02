import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Bar from "@mui/icons-material/Menu";
import "./SidebarDrawer.css";

import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
// import MailIcon from "@mui/icons-material/Mail";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Phone from "@mui/icons-material/Phone";

export default function SidebarDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const sidebarObjects = [
    {
      path: "/",
      title: "Home",
      icon: HomeIcon,
    },
    {
      path: "/about",
      title: "About",
      icon: WhatshotIcon,
    },
    {
      path: "/portfolio",
      title: "Portfolio",
      icon: SubscriptionIcon,
    },
    {
      path: "/pages",
      title: "Pages",
      icon: VideoLibraryIcon,
    },
    {
      path: "/blog",
      title: "Blog",
      icon: HistoryIcon,
    },
    {
      path: "/contact",
      title: "Contact",
      icon: Phone,
    },
    // {
    //   path: "/watch_later",
    //   title: "Watch Later",
    //   icon: WatchLaterIcon,
    // },
    // {
    //   path: "/liked_videos",
    //   title: "Liked videos",
    //   icon: ThumbUpAltIcon,
    // },
    // {
    //   path: "/show_more",
    //   title: "Show More",
    //   icon: ExpandMoreOutlinedIcon,
    // },
  ];

  const list = (anchor) => (
    <Box
      style={{ marginTop: 30 }}
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {sidebarObjects.map((items) => (
        <List key={items.title}>
          {/* <Link to={items.path} className="link__style"> */}
          <SidebarRow selected Icon={items.icon} title={items.title} />
          {/* </Link> */}
        </List>
      ))}

      {/* <Link to="/trending" className="link__style">
          <SidebarRow Icon={WhatshotIcon} title="Trending" />
        </Link> */}
      {/* <Divider /> */}
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer("left", true)}>
            <Bar className="icon" />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
