import SettingsIcon from '@material-ui/icons/Settings';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

const SIDEBAR_CONFIG = [
    {
        NAME: 'PROFILE',
        LINK: '/profile',
        ICON: PersonOutlineIcon,
    },
    {
        NAME: 'CONTACT',
        LINK: '/contact',
        ICON: RecentActorsIcon,
    },
    {
        NAME: 'SETTINGS',
        LINK: '/settings',
        ICON: SettingsIcon,
    },
];

export default SIDEBAR_CONFIG;