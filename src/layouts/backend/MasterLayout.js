import React from "react";
import { Routes, Route, Navigate  } from "react-router-dom"

import '../../assets/backend/css/styles.css';
import '../../assets/backend/js/scripts.js';


import Navber from './Navber';
import Siteber from './Siteber';
import Footer from './Footer';


import routes from "../../routes/routes.js";


// import Dashboard from "../../components/backend/Dashboard";


const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navber/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                     <Siteber/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route 
                                    key={idx} 
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                            <route.component {...props} />
                                    )}
                                    />
                                )
                            )
                        })}
                        <Navigate to="/admin/dashboard" />
                     </Routes>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;