import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupsIcon from '@mui/icons-material/Groups';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const sidebarData=[
    {
        title: 'Dashboard',
        icon:<DashboardIcon/>,
        link:'/DashBoard'
    }
    ,{
        title: 'Knowledge',
        icon:<SchoolIcon/>,
        link:'/knowledge'
    },
    {
        title: 'Members',
        icon:<CardMembershipIcon/>,
        link:'/Members'
    },
    {
        title: 'Teams',
        icon:<GroupsIcon/>,
        link:'/Teams'
    },
    {
        title: 'Vaults',
        icon:<FileCopyIcon/>,
        link:'/Vaults'
    },
    {
        title: 'Chat',
        icon: <ChatIcon/>,
        link:"/chat"
    },
    {
        title: 'Setting',
        icon: <SettingsIcon/>,
        link:"/Setting"
    },
    {
        title: 'Company',
        icon: <BusinessIcon/>,
        link:"/Company"
    },
    {
        title: 'My profile',
        icon: <AccountBoxIcon/>,
        link:"/myprofile"
    },


]
