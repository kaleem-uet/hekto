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
      <img src={loading} />
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
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/blog",
          element: (
            <Suspense>
              <BlogPage />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "/shop",
          element: (
            <Suspense>
              <GridView />
            </Suspense>
          ),
        },
        {
          path: "/aboutus",
          element: (
            <Suspense>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/order",
          element: (
            <Suspense>
              <OrderComplete />
            </Suspense>
          ),
        },
        {
          path: "/payment",
          element: (
            <Suspense>
              <Payment />
            </Suspense>
          ),
        },
        {
          path: "/404error",
          element: (
            <Suspense>
              <NotFound />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "/faq",
          element: (
            <Suspense>
              <Faq />
            </Suspense>
          ),
        },
        {
          path: "/readmore/:id",
          element: (
            <Suspense>
              <BlogReadMore />
            </Suspense>
          ),
        },
        {
          path: "/detail/:id",
          element: (
            <Suspense>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense>
              <ShopingCart />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense>
              <SignUp />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routes;
}


export default CustomRouts;
