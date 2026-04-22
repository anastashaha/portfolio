import { Link, useParams, useNavigate } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import Nav from '../components/Nav.jsx'
import Tag from '../components/Tag.jsx'

export default function Project({ section }) {
  const { slug } = useParams()
  const project = getProject(section, slug)

  if (!project) {
    return (
      <div style={{ padding: '40px', fontSize: '12px' }}>
        project not found. <Link to={`/${section}`}>back to {section}</Link>
      </div>
    )
  }

  const meta = project.institution || project.venue || null

  return (
    <div style={{ minHeight: '100vh', padding: '40px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '60px' }}>
        <Link to="/" style={{ fontSize: '12px' }}>anastasha rachel gunawan</Link>
        <Nav />
      </header>

      <main style={{ maxWidth: '560px' }}>
        <div style={{ marginBottom: '4px', fontSize: '11px', color: '#888' }}>
          <Link to={`/${section}`} style={{ color: '#888' }}>{section}</Link>
          {' / '}
          {project.title}
        </div>

        <h1 style={{ fontSize: '13px', fontWeight: 'normal', marginBottom: '24px', marginTop: '32px' }}>
          {project.title}
        </h1>

        <div style={{ fontSize: '11px', color: '#888', marginBottom: '24px', display: 'flex', gap: '16px' }}>
          <span>{project.year}</span>
          {meta && <span>{meta}</span>}
        </div>

        <p style={{ fontSize: '12px', lineHeight: '1.7', marginBottom: '28px', color: '#333' }}>
          {project.description}
        </p>

        <div style={{ flexWrap: 'wrap' }}>
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </main>
    </div>
  )
}
