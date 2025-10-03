import MyProfile from "@/pages/MyProfile.jsx";
import MyProjects from "@/pages/MyProjects.jsx";
import Schedule from "@/pages/Schedule.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import ErrorNotification from './components/ui/error-notification.jsx';
import { dismissError, retryConnection } from './redux/error/action-reducer.js';



const routes = [
    {
        path: '/projects',
        title: 'My Projects',
        component: MyProjects
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
