"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const activityData = [
  { day: "Mon", tasks: 3 },
  { day: "Tue", tasks: 4 },
  { day: "Wed", tasks: 2 },
  { day: "Thu", tasks: 6 },
  { day: "Fri", tasks: 5 },
  { day: "Sat", tasks: 1 },
  { day: "Sun", tasks: 4 },
];

const progressData = [
  { name: "Week 1", progress: 40 },
  { name: "Week 2", progress: 60 },
  { name: "Week 3", progress: 80 },
  { name: "Week 4", progress: 90 },
];

export default function DashboardPage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    setUser({ name: "Atul", email: "atul@example.com" });
  }, []);

  return (
    <section className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome back, {user?.name} 👋
        </h1>
        <p className="text-gray-400">Here’s your weekly progress overview</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900 text-white p-4">
          <CardContent>
            <h2 className="text-sm text-gray-400">Tasks Completed</h2>
            <p className="text-2xl font-bold">24</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white p-4">
          <CardContent>
            <h2 className="text-sm text-gray-400">Upcoming Sessions</h2>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white p-4">
          <CardContent>
            <h2 className="text-sm text-gray-400">Overall Progress</h2>
            <p className="text-2xl font-bold">76%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900 text-white p-4">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="tasks" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-gray-900 text-white p-4">
          <h2 className="text-lg font-semibold mb-4">Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#22d3ee"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card className="bg-gray-900 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-2 text-gray-300">
          <li>✅ Completed Mock Test on OS</li>
          <li>📚 Started Technical Interview Practice</li>
          <li>🚀 Scheduled Interview Practice Session</li>
          <li>🎯 Completed Behavioral Questions Round</li>
          <li>📖 Revised DBMS and SQL Queries</li>
          <li>💡 Learned about System Design Basics</li>
          <li>📝 Solved 10 DSA Problems in Java</li>
          <li>🎥 Watched Mock Interview Feedback</li>
        </ul>
      </Card>

      {/* Upcoming Interviews / Sessions */}
      <Card className="bg-gray-900 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
        <ul className="space-y-2 text-gray-300">
          <li>📅  - Mock Interview: System Design</li>
          <li>📅  - DSA Problem Solving Practice</li>
          <li>📅  - Resume Review & HR Round</li>
        </ul>
      </Card>

      {/* Skill Progress Section */}
      <Card className="bg-gray-900 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Skill Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-400">DSA</p>
            <p className="text-xl font-bold text-indigo-400">70%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">OS</p>
            <p className="text-xl font-bold text-pink-400">60%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">DBMS</p>
            <p className="text-xl font-bold text-green-400">85%</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">System Design</p>
            <p className="text-xl font-bold text-yellow-400">50%</p>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-gray-900 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700">
            ➕ New Test
          </button>
          <button className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700">
            📅 Schedule Session
          </button>
          <button className="bg-pink-600 px-4 py-2 rounded-lg hover:bg-pink-700">
            📊 View Reports
          </button>
        </div>
      </Card>
    </section>
  );
}
