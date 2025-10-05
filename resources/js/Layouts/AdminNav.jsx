import {Link} from "@inertiajs/react";
import Logo from "@images/Umerch-Logo.png";
import AccountLogo from "@images/Account.svg";
import DashboardLogo from "@images/AdminDashboard.svg";
import InventoryLogo from "@images/InventoryLogo.svg"

export default function AdminNav() {
    return (
        <>
            {/* Top Nav Bar */}
            <div className="p-4 bg-[#9C0306] flex flex-row justify-start items-center gap-2 h-23">
                <img src={Logo} alt="Umerch Logo" className="h-20 mb-4 item bg-center ml-8" />
                <div className="ml-auto">
                    <img src={AccountLogo} alt="Account Logo" className="h-7 mb-4 item bg-center" />
                </div>
                <div>
                    <p className="text-white text-sm text-center font-family-[Mon] mb-4 mr-3">Admin</p>
                </div>
            </div>
            {/* // Sidebar */}
            <div className="bg-[#9C0306] h-[100vh] w-50">
                <div className="flex flex-col items-center py-4">
                    <div className="mt-3">
                        <img src={AccountLogo} alt="Account-image" />
                    </div>
                    <div className="text-white text-1xl font-bold text-center mt-2">
                        <p>Admin</p>
                    </div>
                    {/* Dashboard Link */}
                    <div className="flex flex-row g-5 justify-center items-center mt-4 text-white">
                        <img src={DashboardLogo} alt="" className="mr-3"/>
                        <Link className="mr-9">Dashboard</Link>
                    </div>
                    <div className="flex flex-row g-4 justify-center items-center mt-4 text-white">
                        <img src={DashboardLogo} alt="" className="mr-3"/>
                        <Link className="mr-9">Inventory</Link>
                    </div>
                    <div className="flex flex-row g-4 justify-center items-center mt-4 text-white">
                        <img src={DashboardLogo} alt="" className="mr-3"/>
                        <Link className="mr-9">RecordLogs</Link>
                    </div>
                    <div className="flex flex-row g-4 justify-center items-center mt-4 text-white">
                        <img src={DashboardLogo} alt="" className="mr-3"/>
                        <Link className="mr-9">Logout</Link>
                    </div>
                </div>
            </div>
        </>
    );
}