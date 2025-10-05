import {Link} from "@inertiajs/react";
import Logo from "@images/Umerch-Logo.png";
import AccountLogo from "@images/Account.svg";
import DashboardLogo from "@images/AdminDashboard.svg";
import InventoryLogo from "@images/InventoryLogo.svg"
import RecordLogsLogo from "@images/RecordLogs.svg"
import LogoutLogo from "@images/LogoutLogo.svg"
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
            <div className="bg-[#9C0306] h-[100vh] w-55">
                <div className="flex flex-col items-center py-4">
                    <div className="mt-3">
                        <img src={AccountLogo} alt="Account-image" />
                    </div>
                    <div className="text-white text-1xl font-bold text-center mt-2">
                        <p>Admin</p>
                    </div>
                    {/* Navigation Links */}
                    <div className="flex justify-start mt-6 mr-10 text-white hover:bg-red-700 p-2 rounded-lg cursor-pointer">
                        <img src={DashboardLogo} alt="Dashboard" className="w-6 h-6 mr-3 flex-shrink-0"/>
                        <Link href="#" className="text-sm">Dashboard</Link>
                    </div>
                    <div className="flex justify-start mt-4 mr-12 text-white hover:bg-red-700 p-2 rounded-lg cursor-pointer">
                        <img src={InventoryLogo} alt="Inventory" className="w-6 h-6 mr-3 flex-shrink-0"/>
                        <Link href="#" className="text-sm">Inventory</Link>
                    </div>
                    <div className="flex justify-start mt-4 mr-6 text-white hover:bg-red-700 p-2 rounded-lg cursor-pointer">
                        <img src={RecordLogsLogo} alt="Record Logs" className="w-6 h-6 mr-3 flex-shrink-0"/>
                        <Link href="#" className="text-sm">Record Logs</Link>
                    </div>
                    <div className="flex justify-start mt-4 mr-14 text-white hover:bg-red-700 p-2 rounded-lg cursor-pointer">
                        <img src={LogoutLogo} alt="Logout" className="w-6 h-6 mr-3 flex-shrink-0"/>
                        <Link href="#" className="text-sm">Logout</Link>
                    </div>
                </div>
            </div>
        </>
    );
}