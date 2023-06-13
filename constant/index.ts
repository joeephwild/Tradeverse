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

export { category, Tab, Filter, Price, Categories };
