import { useState } from 'react';
import { useFetch } from '../../hooks/useHooks';
import StatusBadge from '../../components/common/StatusBadge';
import api from '../../services/api';
import './Applicants.css';

const STATUS_OPTIONS = ['APPLIED', 'SHORTLISTED', 'REJECTED', 'HIRED'];

export default function Applicants() {
  const { data: jobs, loading } = useFetch('/api/manager/jobs');

  const [selectedJob, setSelectedJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [loadingApps, setLoadingApps] = useState(false);

  const loadApplicants = async (job) => {
    setSelectedJob(job);
    setLoadingApps(true);

    try {
      const res = await api.get(
        `/api/manager/jobs/${job.id}/applicants`
      );
      setApplicants(res.data);
    } catch {
      setApplicants([]);
    } finally {
      setLoadingApps(false);
    }
  };

  const updateStatus = async (appId, status) => {
    await api.put(
      `/api/manager/applications/${appId}/status`,
      { status }
    );

    const res = await api.get(
      `/api/manager/jobs/${selectedJob.id}/applicants`
    );

    setApplicants(res.data);
  };

  if (loading) {
    return (
      <div className="loading">
        Loading jobs...
      </div>
    );
  }

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="logo">
          🚀 ATS Dashboard
        </div>

        <h4 className="sidebar-title">
          Your Jobs
        </h4>

        {jobs?.map((job) => (

          <div
            key={job.id}
            className={`job-card ${
              selectedJob?.id === job.id
                ? 'job-active'
                : ''
            }`}
            onClick={() => loadApplicants(job)}
          >

            <div className="job-title">
              {job.title}
            </div>

            <div className="job-location">
              📍 {job.location}
            </div>

          </div>

        ))}

      </div>

      {/* MAIN */}
      <div className="main">

        <div className="page-header">

          <h1>
            Applicant Tracker
          </h1>

          <p>
            Manage and filter job applicants easily
          </p>

        </div>

        {!selectedJob && (
          <div className="empty">
            👈 Select a job to view applicants
          </div>
        )}

        {selectedJob && (

          <>

            <h3 className="job-heading">
              {selectedJob.title} Applicants
            </h3>

            {loadingApps && (
              <div className="loading">
                Loading...
              </div>
            )}

            {applicants?.map((app) => (

              <div key={app.id} className="card applicant-card">

                {/* Header */}
                <div className="app-header">

                  <div className="app-user">

                    <div className="avatar">
                      {app.applicantName?.[0]}
                    </div>

                    <div>

                      <div className="app-name">
                        {app.applicantName}
                      </div>

                      <div className="app-email">
                        {app.applicantEmail}
                      </div>

                    </div>

                  </div>

                  <StatusBadge status={app.status} />

                </div>

                {/* Cover Letter */}
                {app.coverLetter && (

                  <div className="cover">
                    "{app.coverLetter}"
                  </div>

                )}

                {/* Actions */}
                <div className="status-box">

                  {STATUS_OPTIONS
                    .filter((s) => s !== app.status)
                    .map((s) => (

                      <button
                        key={s}
                        className={`btn btn-sm status-btn ${
                          s === 'REJECTED'
                            ? 'btn-danger'
                            : s === 'HIRED'
                            ? 'btn-success'
                            : s === 'SHORTLISTED'
                            ? 'btn-secondary'
                            : 'btn-outline'
                        }`}
                        onClick={() =>
                          updateStatus(app.id, s)
                        }
                      >
                        {s}
                      </button>

                    ))}

                </div>

              </div>

            ))}

          </>
        )}

      </div>

    </div>
  );
}