import React from "react";
import PageRoutes from "./PageRoutes";
import '../../containers/Headers/Header.css';
import Header from "../../containers/Headers/Header";



const Dashboard = () => {

    return (
        <React.Fragment>
            <div className="header">
                <Header/>
            </div>
            <div className="Product">
                <PageRoutes />
            </div>
        </React.Fragment>
    );

}


export default Dashboard;