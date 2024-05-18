import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import LeatestBlogs from '../Components/LeatestBlog/LeatestBlogs'
import NewsLatter from '../Components/NewsLatter/NewsLatter'
import OffBanner from '../Components/OffBanner/OffBanner'
import DiscountItem from '../Components/Products/DiscountItem'
import FeaturedProducts from '../Components/Products/FeaturedProducts'
import LatestProducts from '../Components/Products/LatestProducts'
import TopCategories from '../Components/Products/TopCategories'
import TrendingProducts from '../Components/Products/TrendingProducts'
import UniqueBanner from '../Components/Products/UniqueBanner';
import Services from '../Components/Services'
import ShopexOffer from '../Components/ShopexOffer/ShopexOffer'
function Home() {
  return (
    <>
      <HeroSection/>
        <FeaturedProducts/>
       <LatestProducts />
       <ShopexOffer/>
       <UniqueBanner/>
       <TrendingProducts/>
       <OffBanner/>
       <DiscountItem/>
       <TopCategories/>
       <NewsLatter/>
       <Services/>
       <LeatestBlogs/>
    </>
  )
}

export default Home