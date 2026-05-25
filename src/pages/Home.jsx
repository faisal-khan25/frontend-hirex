
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useAuth } from '../context/AuthContext';
import './home.css';

const FEATURES = [
  {
    icon: '🔍',
    title: 'Smart Job Search',
    desc: 'Search across thousands of live job listings.',
  },
  {
    icon: '📋',
    title: 'One-Click Apply',
    desc: 'Apply instantly and track applications.',
  },
  {
    icon: '📊',
    title: 'Built-in ATS',
    desc: 'Recruiters can manage candidates easily.',
  },
];

const STATS = [
  { num: '50K+', label: 'Jobs Posted' },
  { num: '2L+', label: 'Job Seekers' },
  { num: '10K+', label: 'Recruiters' },
  { num: '95%', label: 'Placement Rate' },
];

const JOB_CATEGORIES = [
  { icon: '💻', label: 'Software Dev', count: '12,400+' },
  { icon: '📈', label: 'Sales & Mktg', count: '4,200+' },
  { icon: '🎨', label: 'Design & UX', count: '2,800+' },
];

const CategoryCard = memo(({ cat }) => (
  <Link
    to="/jobs"
    className="category-card"
    aria-label={`${cat.label} jobs`}
  >
    <span className="category-icon" aria-hidden="true">
      {cat.icon}
    </span>

    <div>
      <h3 className="category-title">{cat.label}</h3>
      <p className="category-count">{cat.count} jobs</p>
    </div>
  </Link>
));

const FeatureCard = memo(({ feature }) => (
  <article className="feature-card">
    <div className="feature-icon" aria-hidden="true">
      {feature.icon}
    </div>

    <h3>{feature.title}</h3>
    <p>{feature.desc}</p>
  </article>
));

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            India&apos;s #1 Job Platform
          </span>

          <h1 className="hero-title">
            Find Your Next
            <span> Dream Job</span>
          </h1>

          <p className="hero-desc">
            HireX connects professionals with top companies.
          </p>

          <div className="hero-buttons">
            <Link to="/jobs" className="btn-primary">
              Browse Jobs
            </Link>

            {!user && (
              <Link to="/register" className="btn-secondary">
                Upload Resume
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        {STATS.map((s) => (
          <article key={s.label} className="stat-box">
            <h2>{s.num}</h2>
            <p>{s.label}</p>
          </article>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Browse by Category</h2>

        <div className="categories-grid">
          {JOB_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.label}
              cat={cat}
            />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
          />
        ))}
      </section>
    </main>
  );
}
