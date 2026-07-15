import { Bell, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Left */}
      <div>

        <h1 className="text-2xl font-semibold text-gray-800">
          Work Orders
        </h1>

        <p className="text-sm text-gray-500">
          All Sites • Manager
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition">

          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}
        <button className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">

            M

          </div>

          <div className="text-left">

            <h3 className="text-sm font-semibold text-gray-800">
              Marcus Webb
            </h3>

            <p className="text-xs text-gray-500">
              Manager
            </p>

          </div>

          <ChevronDown size={18} className="text-gray-500" />

        </button>

      </div>

    </header>
  );
}