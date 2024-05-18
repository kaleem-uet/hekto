import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function ListItems({ items }) {
    return (
        <List>
            {items.map((item, i) => (
                <ListItemText key={i}>{item}</ListItemText>
            ))}
        </List>
    );
}

export default ListItems;
