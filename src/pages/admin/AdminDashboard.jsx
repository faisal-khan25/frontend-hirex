import { useFetch } from '../../hooks/useHooks';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend
} from 'recharts';

import './AdminDashboard.css';

export default function AdminDashboard() {

  const { data: stats, loading } =
    useFetch('/api/admin/dashboard');

  if (loading) {
    return (
      <div className="loading">
        Loading dashboard...
      </div>
    );
  }

  if (!stats) return null;

  const STAT_CARDS = [
    {
      num: stats.totalJobSeekers,
      label: 'Job Seekers',
      icon: '👤',
      color: 'var(--brand-blue)',
      bg: 'var(--brand-blue-light)'
    },

    {
      num: stats.totalManagers,
      label: 'Recruiters',
      icon: '🏢',
      color: '#7c3aed',
      bg: '#f5f3ff'
    },

    {
      num: stats.totalJobs,
      label: 'Jobs Posted',
      icon: '💼',
      color: 'var(--brand-green)',
      bg: 'var(--brand-green-light)'
    },

    {
      num: stats.totalApplications,
      label: 'Applications',
      icon: '📋',
      color: 'var(--brand-red)',
      bg: 'var(--brand-red-light)'
    }
  ];

  return (
    <div className="main-content">

      {/* Header */}
      <div className="page-header">

        <h1>
          Growth Dashboard
        </h1>

        <p>
          Platform-wide analytics and trends
        </p>

      </div>

      {/* Stat Cards */}
      <div className="grid-4 stats-grid">

        {STAT_CARDS.map((s, i) => (

          <div
            key={i}
            className="card stat-card"
          >

            <div className="stat-top">

              <div
                className="stat-icon"
                style={{
                  background: s.bg
                }}
              >
                {s.icon}
              </div>

            </div>

            <div
              className="stat-number"
              style={{
                color: s.color
              }}
            >
              {s.num}
            </div>

            <div className="stat-label">
              {s.label}
            </div>

          </div>

        ))}

      </div>

      {/* Charts */}
      <div className="grid-2 charts-grid">

        {/* Recruiter Growth */}
        <div className="card">

          <h3 className="chart-title">
            Monthly Recruiter Growth
          </h3>

          {stats.monthlyGrowth?.length > 0 ? (

            <ResponsiveContainer
              width="100%"
              height={220}
            >

              <LineChart
                data={stats.monthlyGrowth}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f0f0f0"
                />

                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  tick={{ fontSize: 11 }}
                  allowDecimals={false}
                />

                <Tooltip />

                <Legend />

                <Line
                  type="monotone"
                  dataKey="managers"
                  stroke="var(--brand-red)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="New Recruiters"
                />

              </LineChart>

            </ResponsiveContainer>

          ) : (

            <div className="empty chart-empty">
              No data yet
            </div>

          )}

        </div>

        {/* Applications Chart */}
        <div className="card">

          <h3 className="chart-title">
            Company-wise Applications
          </h3>

          {stats.companyHiringTrends?.length > 0 ? (

            <ResponsiveContainer
              width="100%"
              height={220}
            >

              <BarChart
                data={stats.companyHiringTrends}
                layout="vertical"
              >

                <XAxis
                  type="number"
                  tick={{ fontSize: 11 }}
                />

                <YAxis
                  dataKey="company"
                  type="category"
                  tick={{ fontSize: 11 }}
                  width={90}
                />

                <Tooltip />

                <Bar
                  dataKey="applications"
                  fill="var(--brand-red)"
                  radius={[0, 4, 4, 0]}
                  name="Applications"
                />

              </BarChart>

            </ResponsiveContainer>

          ) : (

            <div className="empty chart-empty">
              No hiring data yet
            </div>

          )}

        </div>

      </div>

      {/* Table */}
      <div className="card company-table-card">

        <div className="company-table-header">

          <h3 className="table-title">
            Hiring Trends by Company
          </h3>

        </div>

        {stats.companyHiringTrends?.length === 0 ? (

          <div className="empty">
            No data available
          </div>

        ) : (

          <div className="table-wrap">

            <table>

              <thead>

                <tr>
                  <th>#</th>
                  <th>Company</th>
                  <th>Total Applications</th>
                </tr>

              </thead>

              <tbody>

                {stats.companyHiringTrends?.map((row, i) => (

                  <tr key={i}>

                    <td className="table-index">
                      {i + 1}
                    </td>

                    <td className="table-company">
                      {row.company}
                    </td>

                    <td>

                      <span className="badge badge-orange">
                        {row.applications}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}