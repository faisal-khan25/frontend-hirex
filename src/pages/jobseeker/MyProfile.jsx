import { useState, useEffect, useCallback, memo } from 'react';
import { useFetch, useForm } from '../../hooks/useHooks';
import api from '../../services/api';

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

  // Optimized profile update
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

  // Optimized submit handler
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

  // Lightweight loading UI
  if (loading) {
    return (
      <div className="main-content">
        <div
          className="card"
          style={{
            maxWidth: 620,
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <header className="page-header">
        <h1>My Profile</h1>
        <p>
          Keep your profile updated to get better job recommendations
        </p>
      </header>

      <section
        className="card"
        style={{
          maxWidth: 620,
          contain: 'content',
        }}
      >
        {/* Lightweight profile info */}
        <div
          style={{
            background: 'var(--brand-blue-light)',
            borderRadius: 'var(--radius)',
            padding: '12px 16px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <span
            aria-hidden="true"
            style={{ fontSize: 18, lineHeight: 1 }}
          >
            💡
          </span>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--brand-blue)',
              }}
            >
              Complete your profile
            </div>

            <div
              style={{
                fontSize: 12,
                color: '#1f2937',
              }}
            >
              Profiles with all fields filled get 3x more views
            </div>
          </div>
        </div>

        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        {error && (
          <div className="alert alert-error" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="skills">
              Skills{' '}
              <span
                style={{
                  color: '#4b5563',
                  fontWeight: 400,
                  fontSize: 12,
                }}
              >
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

          <div className="grid-2">
            <div className="form-group">
              <label htmlFor="experience">Experience</label>

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
              <label htmlFor="location">Location</label>

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

          <div className="form-group">
            <label htmlFor="education">Education</label>

            <input
              id="education"
              name="education"
              value={form.education}
              onChange={onChange}
              placeholder="B.Tech Computer Science"
              autoComplete="organization-title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resumeUrl">Resume URL</label>

            <input
              id="resumeUrl"
              name="resumeUrl"
              value={form.resumeUrl}
              onChange={onChange}
              placeholder="https://drive.google.com/..."
              inputMode="url"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">About Me</label>

            <textarea
              id="bio"
              name="bio"
              value={form.bio}
              onChange={onChange}
              placeholder="A brief summary about yourself..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default memo(MyProfile);