import {
  LayoutDashboard,
  Cpu,
  ClipboardList,
  TriangleAlert,
  Wrench,
  BarChart3,
  DollarSign,
  Bell,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Machines",
    icon: Cpu,
  },
  {
    name: "Work Orders",
    icon: ClipboardList,
    active: true,
  },
  {
    name: "Fault Reports",
    icon: TriangleAlert,
    badge: 1,
  },
  {
    name: "Repair Records",
    icon: Wrench,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Finance",
    icon: DollarSign,
  },
  {
    name: "Notifications",
    icon: Bell,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1F2D49] text-white flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-white/10">

        <div className="w-11 h-11 rounded-lg bg-orange-500 flex items-center justify-center text-xl">
          ⚙️
        </div>

        <div className="ml-3">
          <h2 className="text-lg font-semibold">
            MachineTrack
          </h2>

          <p className="text-xs text-gray-300">
            Maintenance System
          </p>
        </div>

      </div>

      {/* Navigation */}
      <div className="flex-1 py-5">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.name}
              className={`
                w-full
                flex
                items-center
                justify-between
                px-6
                py-3
                transition

                ${
                  item.active
                    ? "bg-[#2E3F61] border-r-4 border-orange-500"
                    : "hover:bg-[#2A3A5A]"
                }
              `}
            >

              <div className="flex items-center gap-3">

                <Icon size={18} />

                <span className="text-sm">
                  {item.name}
                </span>

              </div>

              {item.badge && (

                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-[11px]">
                  {item.badge}
                </div>

              )}

            </button>

          );

        })}

      </div>

      {/* Bottom User */}
      <div className="border-t border-white/10 p-5">

        <div className="flex items-center">

          <div className="w-11 h-11 rounded-full bg-orange-400 flex items-center justify-center font-bold">
            M
          </div>

          <div className="ml-3">

            <h3 className="text-sm font-semibold">
              Marcus Webb
            </h3>

            <p className="text-xs text-gray-300">
              Manager
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}