import HomeProfile from "./pages/user/homeProfile";
import HomPage from "./pages/user/homPage";
import MasterLayout from "./pages/user/theme/masterLayout";
import {ROUTERS} from "./utils/router"
import { Routes,Route } from "react-router-dom";
const renderUserRouter = () => {
    const userRouter=[
        {
            path: ROUTERS.USER.HOME,
            compoent: <HomPage/>
        }, {
            path: ROUTERS.USER.PROFILE,
            compoent: <HomeProfile />
        }
    ]

    return (
        <MasterLayout >
            <Routes>
                {
                    userRouter.map( (item, index) =>(
                        <Route key={index} path={item.path} element={item.compoent} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom= () => {
    return renderUserRouter() ;
}

export default RouterCustom;