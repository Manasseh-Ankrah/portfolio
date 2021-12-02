import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, title, Icon }) {
  return (
    <div className="sidebarRow">
      {/* <Icon className="sidebarRow__icon"/>
            <h4 className="sidebarRow__title">{title}</h4>             */}

      <ListItem button>
        <ListItemIcon className="sidebarRow__icon">
          <Icon />
        </ListItemIcon>
        <ListItemText className="sidebarRow__title" primary={title} />
      </ListItem>
    </div>
  );
}

export default SidebarRow;
