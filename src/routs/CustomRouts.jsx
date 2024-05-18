import React, { Suspense, lazy } from "react";
const DefaultLayout = lazy(() => import("../DefaultLayouts"));
const BlogPage = lazy(() => import("../Pages/Blogs/BlogPage"));
const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Auth/Login"));
const GridView = lazy(() => import("../Pages/ProductView/GridView"));
const AboutUs = lazy(() => import("../Pages/About/AboutUs"));
const OrderComplete = lazy(() => import("../Pages/Order/OrderComplete"));
const Payment = lazy(() => import("../Pages/Order/Payment"));
const NotFound = lazy(() => import("../Pages/Error/NotFound"));
const ContactUs = lazy(() => import("../Pages/Contact/ContactUs"));
const Faq = lazy(() => import("../Pages/FAQ/Faq"));
const BlogReadMore = lazy(() => import("../Pages/Blogs/BlogReadMore"));
const ProductDetail = lazy(() =>
  import("../Pages/SingleProduct/ProductDetail")
);
const ShopingCart = lazy(() => import("../Pages/Cart/ShopingCart"));
const SignUp = lazy(() => import("../Pages/Auth/SignUp"));
import { useRoutes } from "react-router-dom";
const loading = lazy(() => import("../assets/img/loading.gif"));
import { styled } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingImg src={loading} />
    </div>
  );
};

function CustomRouts() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={Loading}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/blog",
          element: (
            <Suspense fallback={Loading}>
              <BlogPage />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={Loading}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/shop",
          element: (
            <Suspense fallback={Loading}>
              <GridView />
            </Suspense>
          ),
        },
        {
          path: "/aboutus",
          element: (
            <Suspense fallback={Loading}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/order",
          element: (
            <Suspense fallback={Loading}>
              <OrderComplete />
            </Suspense>
          ),
        },
        {
          path: "/payment",
          element: (
            <Suspense fallback={Loading}>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: "/404error",
          element: (
            <Suspense fallback={Loading}>
              <NotFound />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={Loading}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "/faq",
          element: (
            <Suspense fallback={Loading}>
              <Faq />
            </Suspense>
          ),
        },
        {
          path: "/readmore/:id",
          element: (
            <Suspense fallback={Loading}>
              <BlogReadMore />
            </Suspense>
          ),
        },
        {
          path: "/detail/:id",
          element: (
            <Suspense fallback={Loading}>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={Loading}>
              <ShopingCart />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={Loading}>
              <SignUp />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routes;
}

const LoadingImg = styled("img")(({ theme }) => {
  width: 50;
  height: 40;
});
export default CustomRouts;
