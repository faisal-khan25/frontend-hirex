import { useState } from 'react';
import { useFetch, useForm } from '../../hooks/useHooks';
import api from '../../services/api';
import './ManageJobs.css';

const emptyJob = {
  title: '',
  description: '',
  skills: '',
  salary: '',
  location: '',
  jobType: 'Full Time'
};

export default function ManageJobs() {

  const { data, loading } = useFetch('/api/manager/jobs');

  // DIRECT DATA
  const jobs = data || [];

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  const { form, setForm, onChange, reset } = useForm(emptyJob);

  // OPEN NEW
  const openNew = () => {
    reset();
    setEditingId(null);
    setShowForm(true);
    setError('');
  };

  // OPEN EDIT
  const openEdit = (job) => {
    setForm({ ...job });
    setEditingId(job.id);
    setShowForm(true);
    setError('');
  };

  // SAVE
  const handleSave = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await api.put(
          `/api/manager/jobs/${editingId}`,
          form
        );

      } else {

        await api.post(
          '/api/manager/jobs',
          form
        );
      }

      setShowForm(false);

      window.location.reload();

    } catch (e) {

      setError(
        e.response?.data?.error ||
        'Failed to save job'
      );
    }
  };

  // DELETE
  const handleDelete = async (id) => {

    if (!window.confirm(
      'Remove this job posting?'
    )) {
      return;
    }

    try {

      await api.delete(
        `/api/manager/jobs/${id}`
      );

      window.location.reload();

    } catch (error) {

      console.error(error);

      alert('Delete failed');
    }
  };

  return (

    <div className="manage-jobs">

      {/* HEADER */}

      <div className="header">

        <div className="page-header">

          <h1>Job Postings</h1>

          <p>
            {loading
              ? 'Loading jobs...'
              : `${jobs.length} active jobs`}
          </p>

        </div>

        <button
          className="btn btn-primary"
          onClick={openNew}
        >
          + Post Job
        </button>

      </div>

      {/* JOB LIST */}

      {loading ? (

        <div className="loading">
          Loading jobs...
        </div>

      ) : jobs.length === 0 ? (

        <div className="empty">

          <h3>No jobs found</h3>

          <p>
            Create your first job posting
          </p>

          <button
            className="btn btn-primary"
            onClick={openNew}
          >
            Post Job
          </button>

        </div>

      ) : (

        jobs.map(job => (

          <div
            className="job-card"
            key={job.id}
          >

            <div className="job-info">

              <div className="job-title">
                {job.title}
              </div>

              <div className="job-meta">

                📍 {job.location}

                <span>·</span>

                💰 {job.salary}

                <span>·</span>

                🕒 {job.jobType}

              </div>

              <div className="skills">

                {job.skills
                  ?.split(',')
                  .map((s, i) => (

                    <span
                      key={i}
                      className="skill-tag"
                    >
                      {s}
                    </span>

                  ))}

              </div>

            </div>

            <div className="actions">

              <button
                className="btn btn-outline btn-sm"
                onClick={() => openEdit(job)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(job.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))
      )}

      {/* MODAL */}

      {showForm && (

        <div
          className="modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >

            <h2>
              {editingId
                ? 'Edit Job'
                : 'Post New Job'}
            </h2>

            {error && (
              <p className="error">
                {error}
              </p>
            )}

            <form onSubmit={handleSave}>

              <div className="form-group">

                <label>Title</label>

                <input
                  name="title"
                  value={form.title}
                  onChange={onChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Location</label>

                <input
                  name="location"
                  value={form.location}
                  onChange={onChange}
                />

              </div>

              <div className="form-group">

                <label>Salary</label>

                <input
                  name="salary"
                  value={form.salary}
                  onChange={onChange}
                />

              </div>

              <div className="form-group">

                <label>Job Type</label>

                <select
                  name="jobType"
                  value={form.jobType}
                  onChange={onChange}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Contract</option>
                </select>

              </div>

              <div className="form-group">

                <label>Skills</label>

                <input
                  name="skills"
                  value={form.skills}
                  onChange={onChange}
                />

              </div>

              <div className="form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  rows={4}
                />

              </div>

              <button
                className="btn btn-primary"
                type="submit"
              >
                {editingId
                  ? 'Update'
                  : 'Post'}
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}