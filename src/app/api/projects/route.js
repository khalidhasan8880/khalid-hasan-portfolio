import { NextResponse } from "next/server";

const projects = [
  {
    name: "Lingoland",
    _id: 1,
    thumbnail: "https://i.ibb.co/qyHgFMJ/lingoland-thumnail.png",
    title: "This is a single-page Full-Stack application.",
    ClientCode: "https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-khalidhasan8880",
    serverCode: "https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-khalidhasan8880",
    liveLink:"https://lingoland-71395.web.app/",
    usedTechnology:
      "AXIOS,Tanstack Query, AOS animation, React-Helmet, HeadlessUi, Stripe, Swiper,     React Hot Toast, React-Icons, Firebase",
    features: [
      "Single Page Application Students",
      "instructor & Admin Dashboard",
      "Payment Methods",
      "Payment History",
      "Secure Routes",
      "Class Delete & Update by instructor",
      "instructor Classes",
      "Classes Approved by Admin",
      "Pay For all Classes at a time & also for Single Class",
    ],
    screenShots: [
      "",
      "",
    ],
  },
  {
    name: "sports-toys",
    _id: 2,
    thumbnail: "https://i.ibb.co/fSY12Fk/sports-toys-thumbnail.png",
    title: "This is a single-page Full-Stack application.",
    ClientCode: "https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-khalidhasan8880",
    serverCode: "https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-khalidhasan8880",
    liveLink:"https://sports-toys-7ae13.web.app/",
    usedTechnology:
      "AOS animation, React-Helmet, Swiper, React Hot Toast, React-Icons, Firebase",
    features: [
      "lazy loading",
      "Authentication",
      "Single Page Application",
      "Protected Routes",
      "AOS animation",
      "Sorting by price high to low and low to high",
      "Banner",
      "Dynamic Title",
      "Google sign in",
      "Displayed success or error with pop up Message",
      "404 Page",
      "Loading Spinner at Landing page",
      "Responsive design",
    ],
    screenShots: [""],
  },
  {
    name: "Bangla-Recipe",
    _id: 3,
    thumbnail: "https://i.ibb.co/fSY12Fk/sports-toys-thumbnail.png",
    title: "This is a single-page Application.",
    ClientCode: "https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-khalidhasan8880",
    serverCode: "https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-khalidhasan8880",
    liveLink:"https://bangla-recipes-d82f8.web.app/",
    usedTechnology:
      "Swiper, React Hot Toast, React-Icons, Firebase",
    features: [
      "lazy loading",
      "Authentication",
      "Single Page Application",
      "Protected Routes",
      "Carousel banner",
      "Google, GitHub Sign In methods",
      "Displayed Error Message",
      "Stored Recipe at Favorite",
      "404 Page",
      "Loading Spinner at Landing page",
      "Responsive design",
    ],
    screenShots: [""],
  },
];

export async function GET() {
  try {
    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json({ error: true });
  }
}
