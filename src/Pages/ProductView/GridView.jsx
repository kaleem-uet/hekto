import React, { useState } from "react";
import Filter from "../../Common/Filters/Filter";
import CommanHero from "../../Common/HeroCom/CommanHero";
import GridProduct from "../../Components/Products/GridProduct";
import ShopListProduct from "../../Components/Products/ShopListProduct";
import ShopWithLeftSide from "./ShopWithLeftSide";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { IconButton } from "@mui/material";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import { SectionHeading } from "../../Common/CommonTypo";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


function GridView() {
  const [View, setView] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <>
      {View ? (
        <CommanHero title={"Shop List"} />
      ) : (
        <CommanHero title={"Shop Grid Default"} />
      )}

      {matches ? (
        <Filter setView={setView} />
      ) : (
        <>
          {" "}
          <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:10}}>
             <SectionHeading variant="h4"> Filter</SectionHeading>
            <IconButton onClick={handleOpen}>
              <FormatAlignRightIcon color="primary"/>
            </IconButton>
            </div>
            
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
            <DialogTitle>Fill the form</DialogTitle>
            <DialogContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Filter setView={setView} />
              </Box>
            </DialogContent>
            <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
            </Dialog>
          </div>{" "}
        </>
      )}

      {/* <Filter setView={setView}/> */}
      {View ? <ShopWithLeftSide /> : <GridProduct />}
    </>
  );
}

export default GridView;
