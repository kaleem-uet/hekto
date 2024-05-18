import { IconButton, Typography ,styled} from "@mui/material";
import React,{useState} from "react";
import CartProd from "../../assets/img/blog.png";
import exit from "../../assets/img/exit.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function CartProductCard() {
    const [Quantity, setQuantity] = useState(1)
    return (
        <MainContainer>
            <Card />
            <CustomeTypo>$32.00</CustomeTypo>
            <QuantityBtnContainer>
                <IconButton onClick={()=>{setQuantity(Quantity >1 ? Quantity-1 : Quantity)}}>
                    <RemoveIcon sx={{ color: "#BEBFC2" }} />
                </IconButton>
                <Typography sx={{ color: "#BEBFC2" }}>{Quantity}</Typography>
                <IconButton onClick={()=>{setQuantity(Quantity+1)}}>
                    <AddIcon sx={{ color: "#BEBFC2" }} />
                </IconButton>
            </QuantityBtnContainer>
            <CustomeTypo>$200:00</CustomeTypo>
        </MainContainer>
    );
}
const Card = () => (
    <>
        <CardWrapper>
            <CustomeImage src={exit}/>
            <ProdContainer>
                <ProdImage src={CartProd} />
                <ProdContant>
                    <CustomeTypo variant="subtitle1" sx={{ lineHeight: 2 }}>
                        Ut diam consequat
                    </CustomeTypo>
                    <CustomeTypo variant="subtitle2" sx={{ lineHeight: 2 }}>
                        Color: Brown
                    </CustomeTypo>
                    <CustomeTypo variant="subtitle2" sx={{ lineHeight: 2 }}>
                        Size: XL
                    </CustomeTypo>
                </ProdContant>
            </ProdContainer>
        </CardWrapper>
    </>
);

const MainContainer=styled('div')(({theme})=>({
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap:"wrap"
}))
const CardWrapper = styled("div")(({ theme }) => ({
    marginBottom: 20,
    position: "relative",
}));

const QuantityBtnContainer=styled('div')(({theme})=>({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    with: 200,
    height: 25,
    backgroundColor: "#F0EFF2",
    padding: 2, 
}))
const CustomeImage = styled("img")(({ theme }) => ({
    width: 10,
    height: 10,
    position: "absolute",
    left: 95,
    top: -4,
}));
const ProdContainer = styled("div")(({ theme }) => ({
    width: 250,
    height: 83,
    display: "flex",
    flexDirection: "row",
}));
const ProdImage = styled("img")(({ theme, src }) => ({
    src: `url(${src})`,
    width: "40%",
    height: "100%",
    borderRadius: 3,
}));

const ProdContant = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginLeft: 10,
}));
const CustomeTypo=styled(Typography)(({theme})=>({
    fontFamily: theme.typography.customFonts.JosefinSans,    
}))
export default CartProductCard;
