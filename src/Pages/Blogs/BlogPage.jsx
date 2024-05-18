import BlogPostsCard from "../../Common/Blogs/BlogPostsCard";
import LeatestBlogs from "../../Components/LeatestBlog/LeatestBlogs";
import { Container, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "./Pagination";
import { default as data } from "../../assets/data/MOCK_DATA.json";
import CommanHero from "../../Common/HeroCom/CommanHero";
import Search from "../../Components/Blogs/Search";
import Categories from "../../Components/Blogs/Categories";
import RecentPost from "../../Components/Blogs/RecentPost";
import SaleProduct from "../../Components/Blogs/SaleProduct";
import OfferProduct from "../../Components/Blogs/OfferProduct";
import Follow from "../../Components/Blogs/Follow";
import Tags from "../../Components/Blogs/Tags";
import Services from "../../Components/Services";
function BlogPage() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(4 / PER_PAGE);
  // const count = PER_PAGE;
  const _DATA = usePagination(data, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <>
      <CommanHero title={"Blog Page"} />
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <Grid container spacing={2}>
          <Grid item md={8} sm={12} xs={12}>
            {_DATA.currentData().map((v) => {
              return <BlogPostsCard />;
            })}

            <Stack
              spacing={6}
              sx={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pagination
                count={count}
                size="large"
                page={page}
                color="primary"
                onChange={handleChange}
                variant="outlined"
                defaultPage={4}
                boundaryCount={2}
                shape="rounded"
              />
            </Stack>
          </Grid>
          <RightSideGrid item md={4}>
            <Search />
            <Categories />
            <RecentPost />
            <SaleProduct />
            <OfferProduct />
            <Follow />
            <Tags />
          </RightSideGrid>
        </Grid>
        <div style={{ marginTop: 20 }}>
          <Services />
        </div>
      </Container>
    </>
  );
}

const RightSideGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export default BlogPage;
