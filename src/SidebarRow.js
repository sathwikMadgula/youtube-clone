import React from "react";
import "./SidebarRow.css";
// import { Home } from "@mui/icons-material";


function SidebarRow({ selected,Icon, title }) {
    return (
        <div className={`SidebarRow  ${selected && "selected"}`}>
            <Icon className="SidebarRow__Icon" />
            <h2 className="SidebarRow__title">{title}</h2>

        </div>
    )
}

export default SidebarRow;