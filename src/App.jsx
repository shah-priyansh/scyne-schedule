import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Layout} from './components/layout'
import {lazy} from "react";
import { useSelector, useDispatch } from 'react-redux';
import ErrorNotification from './components/ui/error-notification.jsx';
import { dismissError, retryConnection } from './redux/error/action-reducer.js';
import Summary from "@/pages/Summary.jsx";
import MyTimesheets from "@/pages/MyTimesheets.jsx";
import PendingApproval from "@/pages/PendingApproval.jsx";
import Approvedtimesheets from "@/pages/Approvedtimesheets.jsx";
import MyProjects from "@/pages/MyProjects.jsx";
import MyExpenses from "@/pages/MyExpenses.jsx";
import Dashboard from "@/pages/Dashboard.jsx";
import MyInvoice from "@/pages/MyInvoice.jsx";
import MyProfile from "@/pages/MyProfile.jsx";
import Schedule from "@/pages/Schedule.jsx";

const Profile = lazy(() => import('./pages/Profile'))
const HierarchyChart = lazy(() => import('./pages/HierarchyChart'))
const SkillsOverview = lazy(() => import('./pages/SkillsOverview'))
const Endorsement = lazy(() => import('./pages/Endorsement'))
const SkillsCategories = lazy(() => import('./pages/SkillsCategories'))

const routes = [

    {
        path: '/',
        title: 'Dashboard',
        component: Dashboard
    },
    
    {
        path: '/',
        title: 'My Skills / Profile',
        component: Profile
    },
    {
        path: '/profile',
        title: 'My Skills / Profile',
        component: Profile
    },
    {
        path: '/skills-overview',
        title: 'Organization/Teams / Skills Overview',
        component: SkillsOverview
    },
    {
        path: '/hierarchy',
        title: 'Organization/Teams / Organization Chart',
        component: HierarchyChart
    },
    {
        path: '/skill-categories',
        title: 'Organization/Teams / Skill Categories',
        component: SkillsCategories
    },
    {
        path: '/endorsement',
        title: 'Endorsement',
        component: Endorsement
    },
    {
        path: '/profile',
        title: 'Profile',
        component: Profile
    },

    {
        path: 'summary',
        title: 'Summary',
        component: Summary
    }
    ,
    {
        path: '/my-timesheets',
        title: 'My Timesheets',
        component: MyTimesheets
    },
    {
        path: '/pending-approval',
        title: 'Pending Approval',
        component: PendingApproval
    },
    {
        path: '/approved-timesheets',
        title: 'Approved timesheets',
        component: Approvedtimesheets
    },
    {
        path: '/my-projects',
        title: 'My Projects',
        component: MyProjects
    },
    {
        path: '/my-expenses',
        title: 'My Expenses',
        component: MyExpenses
    },
    {
        path: '/my-invoice',
        title: 'My Invoice',
        component: MyInvoice
    },
    {
        path: '/my-profile',
        title: 'My Profile',
        component: MyProfile
    },
    {
        path: '/schedule',
        title: 'Schedule',
        component: Schedule
    },
]

const AppRoute = ({route}) => {
    const Component = route.component

    return (
        <Layout title={route.title}>
            <Component/>
        </Layout>
    )
}

function App() {
    const dispatch = useDispatch();
    const { currentError, isErrorVisible } = useSelector(state => state.error);

    const handleDismissError = () => {
        dispatch(dismissError());
    };

    const handleRetryConnection = () => {
        dispatch(retryConnection());
    };

    return (
        <>
            <Router>
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<AppRoute route={route}/>}
                        />
                    ))}
                </Routes>
            </Router>
            
            <ErrorNotification
                error={currentError}
                show={isErrorVisible}
                onDismiss={handleDismissError}
                onRetry={handleRetryConnection}
            />
        </>
    )
}

export default App
