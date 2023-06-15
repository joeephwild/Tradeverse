import {
  MdOutlineRssFeed,
  MdSportsTennis,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiCartAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { HiComputerDesktop, HiShoppingBag } from "react-icons/hi2";
import { FaGamepad } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { RiBearSmileFill } from "react-icons/ri";
import { GiRolledCloth } from "react-icons/gi";
import { product } from "@/assets";

const category = [
  {
    title: "",
    value: "",
  },
  {
    title: "Computing",
    value: "Computing",
  },
  {
    title: "Supermarket",
    value: "Supermarket",
  },
  {
    title: "Games",
    value: "Games",
  },
  {
    title: "Kids",
    value: "Kids",
  },
  {
    title: "Automobile",
    value: "Automobile",
  },
  {
    title: "Sport",
    value: "Sport",
  },
  {
    title: "Fashion",
    value: "Fashion",
  },
];

const Filter = [
  {
    title: "Location",
    value: "location",
  },
  {
    title: "Price",
    value: "Price",
  },
];

const Price = [
  {
    title: "Location",
    value: "location",
  },
  {
    title: "Price",
    value: "Price",
  },
];

const Tab = [
  {
    title: "Feed",
    icon: MdOutlineRssFeed,
    active: "feed",
    route: "/dashboard/feed",
  },
  {
    title: "Inbox",
    icon: BsFillChatTextFill,
    active: "inbox",
    route: "/dashboard/chat",
  },
  {
    title: "Carts",
    icon: BiCartAlt,
    active: "cart",
    route: "/dashboard/carts",
  },
  {
    title: "Notification",
    icon: IoMdNotifications,
    active: "notify",
    route: "",
  },
];

const Categories = [
  {
    title: "Computing",
    icon: HiComputerDesktop,
    value: "Computing",
  },
  {
    title: "SuperMarket",
    icon: HiShoppingBag,
    value: "SuperMarket",
  },
  {
    title: "Games",
    icon: FaGamepad,
    value: "Games",
  },
  {
    title: "Kids",
    icon: RiBearSmileFill,
  },
  {
    title: "Automobile",
    icon: AiTwotoneCar,
    value: "Automobile",
  },
  {
    title: "Sports",
    icon: MdSportsTennis,
    value: "Sports",
  },
  {
    title: "Fashion",
    icon: GiRolledCloth,
    value: "Automobile",
  },
  {
    title: "Other Categories",
    icon: MdOutlineMoreHoriz,
    value: "other",
  },
];

type Props = {
  image: any;
  title: string;
  price: string;
  location: string;
  isSellerActive: boolean;
};

const products: Props[] = [
  {
    image: product,
    title: "Windows Laptop M2 Chip",
    price: "$4,000 - 0.002 ETH",
    location: "Port Harcourt, Rivers state",
    isSellerActive: true,
  },
  {
    image: product,
    title: "Macbook M2 Chip",
    price: "$4,000 - 0.002 ETH",
    location: "Port Harcourt, Rivers state",
    isSellerActive: false,
  },
  {
    image: product,
    title: " M2 Chip",
    price: "$4,000 - 0.002 ETH",
    location: "Port Harcourt, Rivers state",
    isSellerActive: true,
  },
  {
    image: product,
    title: "Macbook M2",
    price: "$4,000 - 0.002 ETH",
    location: "Port Harcourt, Rivers state",
    isSellerActive: true,
  },
  {
    image: product,
    title: " Chip",
    price: "$4,000 - 0.002 ETH",
    location: "Port Harcourt, Rivers state",
    isSellerActive: false,
  },
];

export { category, Tab, Filter, Price, Categories, products };