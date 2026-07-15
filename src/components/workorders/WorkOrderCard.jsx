import {
  Wrench,
  Truck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const statusStyles = {
  "Work In Progress": {
    icon: Wrench,
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  "Technician En Route": {
    icon: Truck,
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  "Work Completed": {
    icon: CheckCircle2,
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  "Verified & Closed": {
    icon: ShieldCheck,
    bg: "bg-green-100",
    text: "text-green-700",
  },
};

const priorityStyles = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-blue-100 text-blue-600",
  Low: "bg-gray-100 text-gray-600",
};

export default function WorkOrderCard({
  id,
  title,
  machine,
  site,
  technician,
  priority,
  updated,
  status,
  selected = false,
  onClick,
}) {
  const currentStatus = statusStyles[status];
  const Icon = currentStatus?.icon;

  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        rounded-xl
        border
        p-4
        cursor-pointer
        transition-all
        duration-200

        ${
          selected
            ? "border-blue-500 ring-2 ring-blue-100 shadow-sm"
            : "border-gray-200 hover:border-blue-300 hover:shadow-md"
        }
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start">

        <span className="text-[11px] font-semibold text-gray-500">
          {id}
        </span>

        <div
          className={`
            flex
            items-center
            gap-1
            rounded-full
            px-2.5
            py-1
            text-[11px]
            font-medium
            ${currentStatus.bg}
            ${currentStatus.text}
          `}
        >
          {Icon && <Icon size={12} />}
          {status}
        </div>

      </div>

      {/* Title */}
      <h3 className="mt-3 text-[18px] font-semibold text-gray-900 leading-6">
        {title}
      </h3>

      {/* Machine */}
      <p className="mt-2 text-sm text-gray-500">
        {machine} • {site} • {technician}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center gap-2">

        <span
          className={`
            rounded-md
            px-2
            py-1
            text-[11px]
            font-medium
            ${priorityStyles[priority]}
          `}
        >
          {priority}
        </span>

        <span className="text-sm text-gray-500">
          Updated {updated}
        </span>

      </div>
    </div>
  );
}