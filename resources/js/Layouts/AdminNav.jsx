import {Link} from "@inertiajs/react";
import Logo from "@images/Umerch-Logo.png";
import AccountLogo from "@images/Account.svg";
export default function AdminNav() {
    return (
        <div className="bg-[#9C0306] h-[100vh] w-50">
            <div className="flex flex-col items-center py-4">
                <img src={Logo} alt="Umerch Logo" className="h-16 mb-4" />
                <div className="mt-4">
                    <img src={AccountLogo} alt="Account-image" />
                </div>
            </div>
        </div>
    );
}