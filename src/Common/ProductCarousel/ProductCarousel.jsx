import { styled } from "@mui/material";
import React, { useState } from "react";
import featured_1 from "../../assets/img/featured-1.png";
import featured_2 from "../../assets/img/featured-2.png";
import featured_3 from "../../assets/img/featured-3.png";
import featured_4 from "../../assets/img/featured-4.png";
import { useEffect } from "react";
import ProdTrails from "../../Components/Animations/ProdTrails";
const IMAGES = [featured_1, featured_2, featured_3, featured_4];
const THUMBS = [featured_1, featured_2, featured_3, featured_4];

function ProductCarousel() {
  const [currentImage, setCurrentImage] = useState(featured_1);
  const [currentPassedImage, setCurrentPassedImage] = useState(featured_1);
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
        <ProdTrails delay={1500}>
          <img
            src={currentImage}
            style={{
              width: 330,
              height: 'auto',
              // padding: 15,
            }}
          />
        </ProdTrails>
        <div style={{display:'flex',flexDirection:'row'}}>
          {/* <ImageLeftWrapper src={featured_1} />
          <ImageLeftWrapper src={featured_2} /> */}
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
        </div>
      </MainContainer>
      
    </Wrapper>
  );
}

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));
const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // marginTop: 20,
}));
const ImageLeftWrapper = styled("img")(({ theme, src }) => ({
  width: 100,
  height: 100,
//   marginBottom: 20,
  borderRadius: 10,
  borderColor: "transparent",
  backgroundSize:
    "cover" /* Ensures the background image covers the entire area */,
  backgroundPosition: "center" /* Centers the background image */,
  cursor: "pointer",
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
  "&:hover": {
    borderWidth: 2,
    borderColor: theme.palette.primary.main,
  backgroundColor:theme.palette.primary.main,

  },
}));
export default ProductCarousel;
