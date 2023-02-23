import { TbDiscount2, TbTruckDelivery } from "react-icons/tb";
import { AiFillGift } from "react-icons/ai";
import { BsCreditCard2FrontFill, BsHeadset } from "react-icons/bs";

export const sliderData = [
  {
    slogan: "Supercharged for pros",
    title: " Special Sale",
    text: "From $999.0 or $41.62/mo",
    subtext: "for 24 mo. Footnote*",
    imageSource: "images/main-banner.jpg",
  },
  {
    slogan: "Supercharged for pros",
    title: " Special Sale",
    text: "From $999.0 or $41.62/mo",
    subtext: "for 24 mo. Footnote*",
    imageSource: "images/main-banner-1.jpg",
  },
  {
    slogan: "Best Sale",
    title: "Laptop Max",
    text: "From $999.0 or $41.62/mo",
    subtext: "for 24 mo. Footnote*",
    imageSource: "images/catbanner-01.jpg",
  },
  {
    slogan: "New Arrival",
    title: " Buy IPad Air",
    text: "From $999.0 or $41.62/mo",
    subtext: "for 24 mo. Footnote*",
    imageSource: "images/catbanner-02.jpg",
  },
  {
    slogan: "15% off",
    title: " Smartwatch 7",
    text: "shop the latest band ",
    subtext: "styles and colors",
    imageSource: "images/catbanner-03.jpg",
  },
  {
    slogan: "Free engraving",
    title: " Airpods Max",
    text: "High-fidelity playback &",
    subtext: "ultra-low distortion",
    imageSource: "images/catbanner-04.jpg",
  },
];

export const sectionTwoData = {
  sectionTwoPartOne: [
    {
      label: "Free Shipping",
      text: "From all orders over $5",
      icon: <TbTruckDelivery size={"1.5em"} />,
    },
    {
      label: "Daily Suprise Offers",
      text: "Save up to 25% off",
      icon: <AiFillGift size={"1.5em"} />,
    },
    {
      label: "Support 24/7",
      text: "Shop with an expert",
      icon: <BsHeadset size={"1.5em"} />,
    },
    {
      label: "Affordable Prices",
      text: "Get Factory default price",
      icon: <TbDiscount2 size={"1.5em"} />,
    },
    {
      label: "Secure Payment",
      text: "100% protected payment",
      icon: <BsCreditCard2FrontFill size={"1.5em"} />,
    },
  ],
  sectionTwoPartTwo: [
    {
      label: "Computers & Laptop",
      text: "6",
      imageSource: "images/laptop.jpg",
    },
    {
      label: "Cameras & Videos",
      text: "10",
      imageSource: "images/camera.jpg",
    },
    {
      label: "Smart Television",
      text: "12",
      imageSource: "images/tv.jpg",
    },
    {
      label: "Smartwatches",
      text: "14",
      imageSource: "images/watch.jpg",
    },
    {
      label: "Music & Gaming",
      text: "4",
      imageSource: "images/camera.jpg",
    },
    {
      label: "Mobiles & Tablets",
      text: "6",
      imageSource: "images/tv.jpg",
    },
    {
      label: "Headphones",
      text: "5",
      imageSource: "images/headphone.jpg",
    },
    {
      label: "Accessories",
      text: "12",
      imageSource: "images/laptop.jpg",
    },
    {
      label: "Portable Speakers",
      text: "7",
      imageSource: "images/tv.jpg",
    },
    {
      label: "Home Appliances",
      text: "2",
      imageSource: "images/camera.jpg",
    },
  ],
};

export const SWIPER_BREAKPOINTS = {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 3,
  },
  1224: {
    slidesPerView: 4,
  },
};

export const configSectionThree = {
  slidesPerView: 2,
  pagination: false,
  breakpoints: SWIPER_BREAKPOINTS,
};
export const configSectionOne = {
  slidesPerView: 1,
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
};