import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calculator,
  Search,
  FileText,
  CreditCard,
  RefreshCw,
  Edit,
  BarChart3,
  Settings,
  Users,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "EMI Calculator", path: "/emi-calculator", icon: Calculator },
  { name: "Search", path: "/search", icon: Search },
  { name: "Entries", path: "/entries", icon: FileText },
  { name: "Transactions", path: "/transactions", icon: CreditCard },
];

const updatesItems = [
  { name: "Update Customer", path: "/updates/customer" },
  { name: "Update Loan", path: "/updates/loan" },
  { name: "Update Vehicle", path: "/updates/vehicle" },
];

const editItems = [
  { name: "EDIT CUSTOMER", path: "/edits/customer" },
  { name: "EDIT CO-BORROWER", path: "/edits/co-borrower" },
  { name: "EDIT GUARANTOR", path: "/edits/guarantor" },
  { name: "EDIT LOAN", path: "/edits/loan" },
  { name: "RESTRUCTURE LOAN", path: "/edits/restructure-loan" },
  { name: "EDIT VEHICLE", path: "/edits/vehicle" },
  { name: "CHANGE GUARANTOR", path: "/edits/change-guarantor" },
  { name: "CHANGE HP", path: "/edits/change-hp" },
  { name: "CHANGE EMI DATE", path: "/edits/change-emi-date" },
  { name: "EDIT EXT AC NO", path: "/edits/edit-ext-ac-no" },
];

const reportsItems = [
  { name: "Monthly Reports", path: "/reports/monthly" },
  { name: "Customer Reports", path: "/reports/customer" },
  { name: "Vehicle Reports", path: "/reports/vehicle" },
];

export default function Sidebar() {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownName)
        ? prev.filter((name) => name !== dropdownName)
        : [...prev, dropdownName],
    );
  };

  const isDropdownOpen = (dropdownName) => openDropdowns.includes(dropdownName);

  const isEditPageActive = location.pathname.startsWith("/edits");
  const isUpdatesPageActive = location.pathname.startsWith("/updates");
  const isReportsPageActive = location.pathname.startsWith("/reports");

  return (
    <div className="w-64 bg-white h-screen shadow-sm border-r border-gray-200 flex flex-col hidden lg:flex">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F2f7586ff9e01429985c3cdd0be5b530e%2Fbbc1714c8c5e4bfe8026b78b72010f9b?format=webp&width=800"
            alt="FYNEAUTO Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {/* Regular menu items */}
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path === "/search" &&
                location.pathname.startsWith("/search"));

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}

          {/* Updates Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("updates")}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isUpdatesPageActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5" />
                <span>UPDATES</span>
              </div>
              {isDropdownOpen("updates") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen("updates") && (
              <div className="ml-6 mt-1 space-y-1">
                {updatesItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === item.path &&
                        "text-primary bg-blue-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Edit Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("edit")}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isEditPageActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center space-x-3">
                <Edit className="w-5 h-5" />
                <span>EDIT</span>
              </div>
              {isDropdownOpen("edit") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen("edit") && (
              <div className="ml-6 mt-1 space-y-1">
                {editItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === item.path &&
                        "text-primary bg-blue-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Reports Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("reports")}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isReportsPageActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5" />
                <span>Reports</span>
              </div>
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              {isDropdownOpen("reports") ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isDropdownOpen("reports") && (
              <div className="ml-6 mt-1 space-y-1">
                {reportsItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded",
                      location.pathname === item.path &&
                        "text-primary bg-blue-50",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Setup and Accounts */}
          <Link
            to="/setup"
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === "/setup"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            <Settings className="w-5 h-5" />
            <span>Setup</span>
            <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>

          <Link
            to="/accounts"
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === "/accounts"
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            <Users className="w-5 h-5" />
            <span>Accounts</span>
            <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
        </div>
      </nav>

      {/* Settings and Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-1">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
