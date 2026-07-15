import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import WorkOrderCard from "../../components/workorders/WorkOrderCard";
import { workOrders } from "../../data/workOrders";
import Header from "../../components/layout/Header";
import WorkOrderDetails from "../../components/workorders/WorkOrderDetails";

export default function WorkOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Assigned",
    "Technician En Route",
    "Technician Arrived",
    "Work In Progress",
    "Work Completed",
    "Verified & Closed",
    "Cancelled",
  ];

  const filteredOrders =
    activeFilter === "All"
      ? workOrders
      : workOrders.filter((order) => order.status === activeFilter);

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
       <Header />

        {/* Filter */}
        <div className="bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between">

          <div className="flex flex-wrap gap-2">

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md text-sm transition

                ${
                  activeFilter === filter
                    ? "bg-[#1F2D49] text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {filter}
              </button>

            ))}

          </div>

          <button className="bg-[#F59E0B] hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-medium">

            + New Work Order

          </button>

        </div>

        {/* Content */}
        <div className="flex flex-1 gap-5 p-5 overflow-hidden">

          {/* Left */}
          <div className="w-[38%] overflow-y-auto space-y-4 pr-1">

            {filteredOrders.map((order) => (

              <WorkOrderCard
                key={order.id}
                {...order}
                selected={selectedOrder?.id === order.id}
                onClick={() => setSelectedOrder(order)}
              />

            ))}

          </div>

          {/* Right */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200">

           <WorkOrderDetails workOrder={selectedOrder} />

          </div>

        </div>

      </main>

    </div>
  );
}