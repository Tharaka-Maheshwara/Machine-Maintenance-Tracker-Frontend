import {
  CalendarDays,
  Factory,
  User,
  Flag,
  CircleDot,
} from "lucide-react";

export default function WorkOrderDetails({ workOrder }) {
  if (!workOrder) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">

          <div className="text-7xl mb-5">
            📋
          </div>

          <h2 className="text-xl font-semibold text-gray-700">
            No Work Order Selected
          </h2>

          <p className="text-gray-500 mt-2">
            Please select a work order from the list.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">

      {/* Top */}

      <div className="border-b border-gray-200 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              {workOrder.id}
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-1">
              {workOrder.title}
            </h2>

          </div>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            {workOrder.status}
          </span>

        </div>

      </div>

      {/* Details */}

      <div className="p-6 space-y-6">

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-gray-50 rounded-xl p-4">

            <div className="flex items-center gap-2 text-gray-500">

              <Factory size={18} />

              <span className="text-sm">
                Machine
              </span>

            </div>

            <p className="mt-2 font-semibold">
              {workOrder.machine}
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <div className="flex items-center gap-2 text-gray-500">

              <User size={18} />

              <span className="text-sm">
                Technician
              </span>

            </div>

            <p className="mt-2 font-semibold">
              {workOrder.technician}
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <div className="flex items-center gap-2 text-gray-500">

              <Flag size={18} />

              <span className="text-sm">
                Priority
              </span>

            </div>

            <p className="mt-2 font-semibold">
              {workOrder.priority}
            </p>

          </div>

          <div className="bg-gray-50 rounded-xl p-4">

            <div className="flex items-center gap-2 text-gray-500">

              <CalendarDays size={18} />

              <span className="text-sm">
                Updated
              </span>

            </div>

            <p className="mt-2 font-semibold">
              {workOrder.updated}
            </p>

          </div>

        </div>

        {/* Site */}

        <div className="bg-gray-50 rounded-xl p-5">

          <div className="flex items-center gap-2">

            <CircleDot
              size={18}
              className="text-blue-600"
            />

            <h3 className="font-semibold">
              Site
            </h3>

          </div>

          <p className="mt-3 text-gray-700">
            {workOrder.site}
          </p>

        </div>

        {/* Description */}

        <div>

          <h3 className="font-semibold text-gray-800 mb-3">
            Description
          </h3>

          <div className="rounded-xl bg-gray-50 p-5 leading-7 text-gray-600">

            {workOrder.description}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 pt-4">

          <button className="bg-[#1F2D49] hover:bg-[#17233A] text-white px-6 py-3 rounded-lg font-medium transition">

            Update Status

          </button>

          <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg transition">

            View History

          </button>

        </div>

      </div>

    </div>
  );
}