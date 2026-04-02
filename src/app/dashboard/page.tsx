"use client";

import {
  DollarSign,
  Home,
  Wrench,
  Users,
  Download,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  LogIn,
} from "lucide-react";
import Button from "@/components/ui/Button";

const stats = [
  {
    label: "Monthly Income",
    value: "$14,850",
    change: "+3.2%",
    icon: DollarSign,
    color: "bg-green-50 text-green-700",
    iconColor: "text-green-600",
  },
  {
    label: "Properties",
    value: "6",
    change: "All active",
    icon: Home,
    color: "bg-blue-50 text-blue-700",
    iconColor: "text-blue-600",
  },
  {
    label: "Open Requests",
    value: "3",
    change: "1 urgent",
    icon: Wrench,
    color: "bg-amber-50 text-amber-700",
    iconColor: "text-amber-600",
  },
  {
    label: "Occupancy",
    value: "100%",
    change: "All occupied",
    icon: Users,
    color: "bg-purple-50 text-purple-700",
    iconColor: "text-purple-600",
  },
];

const properties = [
  {
    address: "250 City Centre Ave #1204",
    tenant: "Michael Torres",
    rent: 2200,
    status: "Paid",
    lease: "2025-08-31",
  },
  {
    address: "185 Fourth Ave",
    tenant: "Sarah & James Park",
    rent: 2800,
    status: "Paid",
    lease: "2025-05-31",
  },
  {
    address: "62 Stonecroft Terrace",
    tenant: "The Williams Family",
    rent: 2600,
    status: "Due",
    lease: "2026-01-31",
  },
  {
    address: "380 Richmond Rd #702",
    tenant: "Alex Chen",
    rent: 2500,
    status: "Paid",
    lease: "2025-12-31",
  },
  {
    address: "1430 Merivale Rd #3B",
    tenant: "Priya Nair",
    rent: 1650,
    status: "Paid",
    lease: "2025-09-30",
  },
  {
    address: "230 Jeanne d'Arc Blvd N",
    tenant: "Robert & Lisa Martin",
    rent: 2100,
    status: "Paid",
    lease: "2026-03-31",
  },
];

const maintenanceRequests = [
  {
    property: "250 City Centre Ave #1204",
    issue: "Dishwasher not draining",
    priority: "Normal",
    status: "In Progress",
    date: "2024-11-28",
  },
  {
    property: "62 Stonecroft Terrace",
    issue: "Furnace making unusual noise",
    priority: "Urgent",
    status: "Scheduled",
    date: "2024-11-30",
  },
  {
    property: "380 Richmond Rd #702",
    issue: "Bathroom faucet dripping",
    priority: "Low",
    status: "Pending",
    date: "2024-11-25",
  },
];

const priorityColors: Record<string, string> = {
  Urgent: "text-red-700 bg-red-50",
  Normal: "text-amber-700 bg-amber-50",
  Low: "text-gray-600 bg-gray-100",
};

const statusColors: Record<string, string> = {
  "In Progress": "text-blue-700 bg-blue-50",
  Scheduled: "text-purple-700 bg-purple-50",
  Pending: "text-gray-600 bg-gray-100",
};

export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider">
                Owner Dashboard
              </p>
              <h1 className="text-2xl font-bold text-white">
                Welcome back, Sarah
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  alert(
                    "Download functionality will be connected to your backend."
                  )
                }
              >
                <Download className="h-4 w-4 mr-2" /> Download Report
              </Button>
              <Button variant="gold" size="sm" href="/contact">
                <LogIn className="h-4 w-4 mr-2" /> Full Portal Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl border border-gray-100 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-gray-text">{stat.label}</p>
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}
                  >
                    <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                </div>
                <p className="text-2xl font-bold text-navy">{stat.value}</p>
                <p className="text-xs text-gray-text mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> {stat.change}
                </p>
              </div>
            ))}
          </div>

          {/* Property List */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-navy">Your Properties</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-6 py-3 font-medium text-gray-text">
                      Property
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-gray-text">
                      Tenant
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-gray-text">
                      Rent
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-gray-text">
                      Payment
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-gray-text">
                      Lease End
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((p) => (
                    <tr
                      key={p.address}
                      className="border-b border-gray-50 hover:bg-gray-50"
                    >
                      <td className="px-6 py-3 font-medium text-navy">
                        {p.address}
                      </td>
                      <td className="px-6 py-3 text-gray-700">{p.tenant}</td>
                      <td className="px-6 py-3 text-gray-700">
                        ${p.rent.toLocaleString()}
                      </td>
                      <td className="px-6 py-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            p.status === "Paid"
                              ? "bg-green-50 text-green-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {p.status === "Paid" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-text">
                        {new Date(p.lease).toLocaleDateString("en-CA", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maintenance Requests */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-navy">
                Maintenance Requests
              </h2>
            </div>
            <div className="divide-y divide-gray-50">
              {maintenanceRequests.map((req) => (
                <div
                  key={req.issue}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {req.priority === "Urgent" ? (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      ) : (
                        <Wrench className="h-4 w-4 text-gray-400" />
                      )}
                      <p className="font-medium text-navy text-sm">
                        {req.issue}
                      </p>
                    </div>
                    <p className="text-xs text-gray-text">{req.property}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${priorityColors[req.priority]}`}
                    >
                      {req.priority}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[req.status]}`}
                    >
                      {req.status}
                    </span>
                    <span className="text-xs text-gray-text">
                      {new Date(req.date).toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placeholder: Tenant Status Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-semibold text-navy mb-4">Tenant Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-green-800">
                    Active Leases
                  </span>
                  <span className="text-lg font-bold text-green-700">6</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="text-sm font-medium text-amber-800">
                    Leases Expiring (90 days)
                  </span>
                  <span className="text-lg font-bold text-amber-700">1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-800">
                    Renewal Pending
                  </span>
                  <span className="text-lg font-bold text-blue-700">1</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">
                    Vacancies
                  </span>
                  <span className="text-lg font-bold text-gray-600">0</span>
                </div>
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-semibold text-navy mb-4">
                Download Reports
              </h2>
              <div className="space-y-3">
                {[
                  "November 2024 Income Statement",
                  "October 2024 Income Statement",
                  "Q3 2024 Quarterly Summary",
                  "2023 Year-End Tax Package (T776)",
                ].map((report) => (
                  <button
                    key={report}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left cursor-pointer"
                    onClick={() =>
                      alert("Report downloads will be connected to your backend.")
                    }
                  >
                    <span className="text-sm text-navy font-medium">
                      {report}
                    </span>
                    <Download className="h-4 w-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
