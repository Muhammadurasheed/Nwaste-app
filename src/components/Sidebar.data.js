import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { FaQuestionCircle } from 'react-icons/fa';


export const sidebarData = [
    {
        title: "Home",
        icon: <AiOutlineHome />,
        link: '/'
    },
    {
        title: "Market Place",
        icon: <IoIosPeople />,
        link: '/farmers'
    },
    {
        title: "Message",
        icon: <BiMessageRoundedDots />,
        link: '/'
    },
    {
        title: "Loan",
        icon: <RiExchangeDollarLine />,
        link: '/loan'
    },
    {
        title: "FAQs",
        icon: <FaQuestionCircle />,
        link: '/faq'
    }
]