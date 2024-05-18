import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const Dropdown = ({ open, anchorel, items, handleClose, areaLabelledBy }) => {
    return (
        <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorel}
            id="dropdown-menu"
            MenuListProps={{ "aria-labelledby": `${areaLabelledBy}` }}
        >
            {items.map((item, index) => (
                <MenuItem key={item} onClick={handleClose}>
                    {item}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default Dropdown;
