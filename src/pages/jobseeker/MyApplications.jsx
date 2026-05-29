import { useFetch } from '../../hooks/useHooks';
import StatusBadge from '../../components/common/StatusBadge';
import './MyApplications.css';

export default function MyApplications() {
  const { data: apps, loading } = useFetch('/api/jobseeker/applications');

  if (loading) {
    return (
      <div className="loading">
        Loading applications...
      </div>
    );
  }

  return (
    <div className="main-content">

      {/* Header */}
      <div className="page-header">
        <h1>My Applications</h1>

        <p>
          Track all your job applications in one place
        </p>
      </div>

      {/* Empty State */}
      {apps?.length === 0 && (

        <div className="empty">

          <div className="empty-icon">
            📋
          </div>

          <div className="empty-title">
            No applications yet
          </div>

          <div className="empty-subtitle">
            Browse jobs and start applying to see them here.
          </div>

        </div>
      )}

      {/* Applications Table */}
      {apps?.length > 0 && (

        <div className="card applications-card">

          <div className="table-wrap">

            <table className="applications-table">

              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Applied On</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                {apps.map((app) => (

                  <tr key={app.id}>

                    <td className="job-title-cell">
                      {app.jobTitle}
                    </td>

                    <td className="company-cell">
                      {app.companyName}
                    </td>

                    <td className="date-cell">

                      {app.appliedAt
                        ? new Date(app.appliedAt).toLocaleDateString(
                            'en-IN',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            }
                          )
                        : '-'}

                    </td>

                    <td>
                      <StatusBadge status={app.status} />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

    </div>
  );
}