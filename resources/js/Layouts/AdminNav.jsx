import {Link} from "@inertiajs/react";
import Logo from "@images/Umerch-Logo.png";
import AccountLogo from "@images/Account.svg";
import DashboardLogo from "@images/AdminDashboard.svg";
import InventoryLogo from "@images/InventoryLogo.svg"
import RecordLogsLogo from "@images/RecordLogs.svg"
import LogoutLogo from "@images/LogoutLogo.svg"

export default function AdminNav({children}) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-[#9C0306] w-64 fixed h-screen z-10">
                {/* Logo Section */}
                <div className="p-4">
                    <img src={Logo} alt="Umerch Logo" className="h-20 mx-auto" />
                </div>
                
                {/* Admin Profile */}
                <div className="flex flex-col items-center py-6">
                    <img src={AccountLogo} alt="Account-image" className="w-12 h-12 mb-3" />
                    <p className="text-white text-lg font-bold">Admin</p>
                </div>
                
                {/* Navigation Links */}
                <div className="px-4 space-y-2">
                    <div className="flex items-center text-white hover:bg-red-700 p-3 rounded-lg cursor-pointer">
                        <img src={DashboardLogo} alt="Dashboard" className="w-6 h-6 mr-3"/>
                        <Link href="#" className="text-sm">Dashboard</Link>
                    </div>
                    <div className="flex items-center text-white hover:bg-red-700 p-3 rounded-lg cursor-pointer">
                        <img src={InventoryLogo} alt="Inventory" className="w-6 h-6 mr-3"/>
                        <Link href="#" className="text-sm">Inventory</Link>
                    </div>
                    <div className="flex items-center text-white hover:bg-red-700 p-3 rounded-lg cursor-pointer">
                        <img src={RecordLogsLogo} alt="Record Logs" className="w-6 h-6 mr-3"/>
                        <Link href="#" className="text-sm">Record Logs</Link>
                    </div>
                    <div className="flex items-center text-white hover:bg-red-700 p-3 rounded-lg cursor-pointer">
                        <img src={LogoutLogo} alt="Logout" className="w-6 h-6 mr-3"/>
                        <Link href="#" className="text-sm">Logout</Link>
                    </div>
                </div>
            </div>

            <div className="flex-1 ml-64">
                {/* Top Bar */}
                <div className="bg-[#9C0306] shadow-sm p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ml-auto ">
                            <img src={AccountLogo} alt="Account" className="w-8 h-8 mr-2" />
                            <span className="text-white text-sm">Admin</span>
                        </div>
                    </div>
                </div>
                
                {/* Page Content */}
                <main className="p-3">
                    {children}
                </main>
            </div>
        </div>
    );
}