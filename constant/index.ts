import { MdOutlineRssFeed } from 'react-icons/md'
import { BsFillChatTextFill } from 'react-icons/bs'
import { BiCartAlt } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'


const category = [
    {
        title: "",
        value: ""
    },
    {
        title: "Computing",
        value: "Computing"
    },
    {
        title: "Supermarket",
        value: "Supermarket"
    },
    {
        title: "Games",
        value: "Games"
    },
    {
        title: "Kids",
        value: "Kids"
    },
    {
        title: "Automobile",
        value: "Automobile"
    },
    {
        title: "Sport",
        value: "Sport"
    }, 
    {
        title: "Fashion",
        value: "Fashion"
    },
]

const Filter = [
    {
        title: "Location",
        value: "location"
    },
    {
        title: "Price",
        value: "Price"
    },
   
]

const Price = [
    {
        title: "Location",
        value: "location"
    },
    {
        title: "Price",
        value: "Price"
    },
   
]

const Tab = [
    {
        title: "Feed",
        icon: MdOutlineRssFeed,
        active: "feed"
    },
    {
        title: "Inbox",
        icon: BsFillChatTextFill,
        active: "inbox"
    },
    {
        title: "Carts",
        icon: BiCartAlt,
        active: "cart"
    },
    {
        title: "Notification",
        icon: IoMdNotifications,
        active: "notify"
    },
]

export {
    category,
    Tab,
    Filter,
    Price
}