import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
//import Home from "../components/home";

export const AppRoutes: React.FunctionComponent = (): JSX.Element => {
    return(
        <Routes> 
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

