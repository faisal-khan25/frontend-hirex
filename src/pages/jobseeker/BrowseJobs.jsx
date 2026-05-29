import { useState } from 'react';
import { useFetch } from '../../hooks/useHooks';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import './BrowseJobs.css';

const QUICK_FILTERS = [
  'Full Time',
  'Remote',
  'Fresher',
  '0-1 Years',
  '1-3 Years',
  'Work From Home'
];

export default function BrowseJobs() {
  const { user } = useAuth();

  const [keyword, setKeyword] = useState('');
  const [searched, setSearched] = useState('');
  const [applyModal, setApplyModal] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [applyMsg, setApplyMsg] = useState('');

  // const url = searched
  //   ? `/api/jobs/browse?keyword=${searched}`
  //   : '/api/jobs/browse';
  const url = `/api/jobs/browse${searched ? `?keyword=${searched}` : ''}`;

  const { data: jobs, loading } = useFetch(url, [searched]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(keyword);
  };

  const handleApply = async () => {
    try {
      const res = await api.post(
        `/api/jobseeker/apply/${applyModal.id}`,
        { coverLetter }
      );

      setApplyMsg(res.data);
    } catch (e) {
      setApplyMsg(e.response?.data?.error || 'Failed to apply');
    }
  };

  return (
    <div className="main-content">

      {/* Header */}
      <div className="page-header">
        <h1>Browse Jobs</h1>

        <p>
          {jobs?.length || 0} jobs available
          {searched ? ` for "${searched}"` : ''}
        </p>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="search-form">

        <div className="search-container">

          <span className="search-icon">🔍</span>

          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by job title, skill, or keyword..."
            className="search-input"
          />

          {searched && (
            <button
              type="button"
              className="clear-btn"
              onClick={() => {
                setSearched('');
                setKeyword('');
              }}
            >
              ×
            </button>
          )}

          <button
            type="submit"
            className="btn btn-secondary btn-sm search-btn"
          >
            Search
          </button>

        </div>
      </form>

      {/* Quick Filters */}
      <div className="quick-filters">

        {QUICK_FILTERS.map((f, i) => (
          <button
            key={i}
            className="filter-btn"
            onClick={() => {
              setKeyword(f);
              setSearched(f);
            }}
          >
            {f}
          </button>
        ))}

      </div>

      {/* Loading */}
      {loading && (
        <div className="loading">
          Fetching jobs...
        </div>
      )}

      {/* Empty */}
      {!loading && jobs?.length === 0 && (
        <div className="empty">

          <div className="empty-icon">
            🔍
          </div>

          <div className="empty-title">
            No jobs found
          </div>

          <div className="empty-subtitle">
            Try a different keyword or clear filters
          </div>

        </div>
      )}

      {/* Jobs */}
      <div className="grid-2 jobs-grid">

        {jobs?.map((job) => (

          <div key={job.id} className="job-card">

            {/* Top */}
            <div className="job-top">

              <div className="company-logo">
                🏢
              </div>

              <span className="hiring-badge">
                Actively Hiring
              </span>

            </div>

            {/* Title */}
            <div className="job-title">
              {job.title}
            </div>

            {/* Company */}
            <div className="job-company">

              <span>🏢</span>

              {job.companyName}

              <span className="company-rating">
                ★ 4.2
              </span>

            </div>

            {/* Meta */}
            <div className="job-meta">

              <span>
                <i
                  className="bi bi-geo-alt"
                ></i>

                {' '}
                {job.location || 'Remote'}
              </span>

              <span>
                <i
                  className="bi bi-currency-rupee"
                ></i>

                {' '}
                {job.salary || 'Not disclosed'}
              </span>

              <span>
                <i
                  className="bi bi-briefcase"
                ></i>

                {' '}
                {job.jobType || 'Full Time'}
              </span>

            </div>

            {/* Skills */}
            <div className="skills-container">

              {job.skills
                ?.split(',')
                .slice(0, 4)
                .map((s, i) => (

                  <span
                    key={i}
                    className="skill-tag"
                  >
                    {s.trim()}
                  </span>

                ))}

            </div>

            {/* Description */}
            <p className="job-description">
              {job.description?.slice(0, 110)}...
            </p>

            {/* Footer */}
            <div className="job-footer">

              {user?.role === 'JOBSEEKER' ? (

                <button
                  className="btn btn-outline-blue btn-sm"
                  onClick={() => {
                    setApplyModal(job);
                    setApplyMsg('');
                    setCoverLetter('');
                  }}
                >
                  Apply Now
                </button>

              ) : (
                <span />
              )}

              <span className="job-time">
                Just now
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Apply Modal */}
      {applyModal && (

        <div
          className="modal-overlay"
          onClick={() => setApplyModal(null)}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="modal-header">

              <div className="modal-logo">
                🏢
              </div>

              <div>
                <h2>{applyModal.title}</h2>

                <p className="modal-company">
                  {applyModal.companyName}
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setApplyModal(null)}
              >
                ×
              </button>

            </div>

            <hr className="section-divider" />

            {/* Success/Error */}
            {applyMsg ? (

              <div
                className={`alert ${
                  applyMsg.toLowerCase().includes('success') ||
                  applyMsg.toLowerCase().includes('applied')
                    ? 'alert-success'
                    : 'alert-error'
                }`}
              >
                {applyMsg}
              </div>

            ) : (

              <>
                <div className="form-group">

                  <label>
                    Cover Letter

                    <span className="optional-text">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    rows={5}
                    value={coverLetter}
                    onChange={(e) =>
                      setCoverLetter(e.target.value)
                    }
                    placeholder="Tell the recruiter why you're a great fit for this role..."
                  />

                </div>

                <div className="modal-actions">

                  <button
                    className="btn btn-primary"
                    onClick={handleApply}
                  >
                    Submit Application
                  </button>

                  <button
                    className="btn btn-outline"
                    onClick={() => setApplyModal(null)}
                  >
                    Cancel
                  </button>

                </div>
              </>
            )}

          </div>

        </div>
      )}

    </div>
  );
}