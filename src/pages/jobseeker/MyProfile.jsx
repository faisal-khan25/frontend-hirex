import { useState, useEffect, useCallback } from 'react';
import { useFetch, useForm } from '../../hooks/useHooks';
import api from '../../services/api';
import './MyProfile.css';

const initialForm = {
  skills: '',
  experience: '',
  resumeUrl: '',
  bio: '',
  location: '',
  education: '',
};

function MyProfile() {
  const { data: profile, loading } = useFetch('/api/jobseeker/profile');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const { form, setForm, onChange } = useForm(initialForm);

  useEffect(() => {
    if (profile) {
      setForm({
        skills: profile.skills || '',
        experience: profile.experience || '',
        resumeUrl: profile.resumeUrl || '',
        bio: profile.bio || '',
        location: profile.location || '',
        education: profile.education || '',
      });
    }
  }, [profile, setForm]);

  const handleSave = useCallback(async (e) => {
    e.preventDefault();

    setSaving(true);
    setSuccess('');
    setError('');

    try {
      await api.post('/api/jobseeker/profile', form);
      setSuccess('Profile saved successfully!');
    } catch (err) {
      setError('Failed to save profile');
    } finally {
      setSaving(false);
    }
  }, [form]);

  if (loading) {
    return (
      <div className="main-content">
        <div className="card profile-loading-card">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content" style={{ overflowAnchor: 'none' }}>

      {/* Header */}
      <header className="page-header">
        <h1>My Profile</h1>

        <p>
          Keep your profile updated to get better job recommendations
        </p>
      </header>

      {/* Card */}
      <section className="card profile-card">

        {/* Info Box */}
        <div className="profile-info-box">

          <span
            aria-hidden="true"
            className="profile-info-icon"
          >
            💡
          </span>

          <div>

            <div className="profile-info-title">
              Complete your profile
            </div>

            <div className="profile-info-text">
              Profiles with all fields filled get 3x more views
            </div>

          </div>

        </div>

        {/* Success */}
        {success && (
          <div
            className="alert alert-success"
            role="alert"
          >
            {success}
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            className="alert alert-error"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSave}>

          {/* Skills */}
          <div className="form-group">

            <label htmlFor="skills">
              Skills

              <span className="label-note">
                (comma separated)
              </span>
            </label>

            <input
              id="skills"
              name="skills"
              value={form.skills}
              onChange={onChange}
              placeholder="React, Java, MySQL"
              autoComplete="off"
            />

          </div>

          {/* Grid */}
          <div className="grid-2">

            <div className="form-group">

              <label htmlFor="experience">
                Experience
              </label>

              <input
                id="experience"
                name="experience"
                value={form.experience}
                onChange={onChange}
                placeholder="2 years"
                autoComplete="off"
              />

            </div>

            <div className="form-group">

              <label htmlFor="location">
                Location
              </label>

              <input
                id="location"
                name="location"
                value={form.location}
                onChange={onChange}
                placeholder="Hyderabad, India"
                autoComplete="address-level2"
              />

            </div>

          </div>

          {/* Education */}
          <div className="form-group">

            <label htmlFor="education">
              Education
            </label>

            <input
              id="education"
              name="education"
              value={form.education}
              onChange={onChange}
              placeholder="B.Tech Computer Science"
              autoComplete="organization-title"
            />

          </div>

          {/* Resume */}
          <div className="form-group">

            <label htmlFor="resumeUrl">
              Resume URL
            </label>

            <input
              id="resumeUrl"
              name="resumeUrl"
              value={form.resumeUrl}
              onChange={onChange}
              placeholder="https://drive.google.com/..."
              inputMode="url"
            />

          </div>

          {/* Bio */}
          <div className="form-group">

            <label htmlFor="bio">
              About Me
            </label>

            <textarea
              id="bio"
              name="bio"
              value={form.bio}
              onChange={onChange}
              placeholder="A brief summary about yourself..."
              rows={4}
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary save-btn"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Profile'}
          </button>

        </form>

      </section>

    </div>
  );
}

export default MyProfile;