import Welcome from '@/components/about/welcome'
import Spacer from '@/components/common/spacer'
import FeaturedCourses from '@/components/home/featured-courses'
import Slider from '@/components/home/slider'
import UpcomingEvents from '@/components/home/upcoming-events'
import React from 'react'

const Page = () => {
  return (
    <>
    <Slider/>
    <Spacer/>
    <Welcome />
    <Spacer/>
    <FeaturedCourses/>
    <Spacer/>
      <UpcomingEvents/>
      <Spacer/>
    </>
  )
}

export default Page