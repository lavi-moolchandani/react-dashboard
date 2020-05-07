import Profile from '../containers/components/Profile';
import Settings from '../containers/components/settings';
import Contact from '../containers/components/contact';

const routes = [
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/settings',
        component: Settings,
    },
    {
        isDefault: true,
        component: Profile,
    },
];

export default routes;