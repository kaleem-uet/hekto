import { styled } from "@mui/material";
import React, { useState } from "react";
import prod1 from "../../assets/img/image-product-1.jpg";
import prod2 from "../../assets/img/image-product-2.jpg";
import prod3 from "../../assets/img/image-product-3.jpg";
import prod4 from "../../assets/img/image-product-4.jpg";
import thumb1 from "../../assets/img/image-product-1-thumbnail.jpg";
import thumb2 from "../../assets/img/image-product-2-thumbnail.jpg";
import thumb3 from "../../assets/img/image-product-3-thumbnail.jpg";
import { useEffect } from "react";
import ProdTrails from '../../Components/Animations/ProdTrails';
const IMAGES = [prod1, prod2, prod3, prod4];
const THUMBS = [thumb1, thumb2, thumb3];

function ProductCarousel() {
    const [currentImage, setCurrentImage] = useState(prod1);
    const [currentPassedImage, setCurrentPassedImage] = useState(prod1);
    const [open, setOpen] = useState(false);
    const handleClick = (index) => {
        setCurrentImage(IMAGES[index]);
    };
    const handleToggle = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const removeActivatedClass = (parent) => {
        parent.childNodes.forEach((node) => {
            node.childNodes[0].classList.contains("activated") &&
                node.childNodes[0].classList.remove("activated");
        });
    };
    useEffect(() => {
        setCurrentPassedImage(currentImage);
    }, [currentImage]);
    return (
        <Wrapper>
            <MainContainer>
                {THUMBS.map((th, index) => (
                    <ProdTrails delay={500}>
                        <div
                            key={index}
                            onClick={(e) => {
                                handleClick(index);
                                removeActivatedClass(
                                    e.currentTarget.parentNode
                                );
                                e.currentTarget.childNodes[0].classList.toggle(
                                    "activated"
                                );
                            }}
                        >
                            <div
                                className={`outlay ${
                                    index === 0 && "activated"
                                }`}
                            ></div>
                            <ImageLeftWrapper
                                src={th}
                                alt={`product-${index + 1}`}
                            />
                        </div>
                    </ProdTrails>
                ))}
            </MainContainer>

            <ProdTrails delay={1500}>
                <img
                    src={currentImage}
                    style={{
                        width: 300,
                        height: 350,
                        padding: 15,
                    }}
                />
            </ProdTrails>
        </Wrapper>
    );
}

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
}));
const MainContainer=styled('div')(({theme})=>({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
}))
const ImageLeftWrapper = styled("img")(({ theme, src }) => ({
    width: 130,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "transparent",
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    "&:hover": {
        borderWidth: 2,
        borderColor: theme.palette.primary.main,
    },
}));
export default ProductCarousel;
