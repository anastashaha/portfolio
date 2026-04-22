import { Link } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects.js'
import Nav from '../components/Nav.jsx'
import Tag from '../components/Tag.jsx'

// Parses 'text'[link: url] markup into React nodes
function parseInlineLinks(text) {
  if (!text) return text
  const regex = /'([^']+)'\[link:\s*([^\]]+)\]/g
  const parts = []
  let lastIndex = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <a
        key={match.index}
        href={match[2].trim()}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'underline' }}
      >
        {match[1]}
      </a>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length ? parts : [text]
}

function WorkItem({ item }) {
  const [hovered, setHovered] = useState(false)

  const titleNodes = parseInlineLinks(item.title)

  let titleEl
  if (item.href) {
    titleEl = (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        {titleNodes}
      </a>
    )
  } else if (item.to) {
    titleEl = (
      <Link to={item.to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {titleNodes}
      </Link>
    )
  } else {
    titleEl = titleNodes
  }

  const isClickable = !!(item.href || item.to)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        padding: '4px 0',
        fontSize: '12px',
        lineHeight: '1.5',
        opacity: isClickable && hovered ? 0.55 : 1,
        transition: 'opacity 0.2s ease',
      }}
    >
      <span style={{ color: '#888', whiteSpace: 'nowrap', textAlign: 'right', paddingRight: '32px' }}>
        {item.date}
      </span>
      <div>
        {titleEl}
        {item.hoverText && (
          <div style={{
            overflow: 'hidden',
            maxHeight: hovered ? '300px' : '0',
            opacity: hovered ? 1 : 0,
            paddingTop: hovered ? '6px' : '0',
            transition: 'max-height 0.4s ease, opacity 0.3s ease, padding-top 0.3s ease',
            fontSize: '11px',
            color: '#888',
            lineHeight: '1.7',
          }}>
            {parseInlineLinks(item.hoverText)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Section({ section }) {
  const items = projects[section] ?? []

  return (
    <div style={{ minHeight: '100vh', padding: '40px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '60px' }}>
        <Link to="/" style={{ fontSize: '12px' }}>anastasha rachel gunawan</Link>
        <Nav />
      </header>

      <main>
        {(section === 'selected work' || section === 'teaching') ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((item, i) =>
              item.type === 'header' ? (
                <div
                  key={item.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    fontSize: '12px',
                    paddingTop: i === 0 ? 0 : '24px',
                    paddingBottom: '6px',
                  }}
                >
                  <span />
                  <span style={{ color: '#aaa' }}>[{item.label}]</span>
                </div>
              ) : (
                <WorkItem key={item.slug} item={item} />
              )
            )}
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1px', borderTop: '1px solid #ddd' }}>
            {items.map((project) => (
              <Link
                key={project.slug}
                to={`/${section}/${project.slug}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    padding: '18px 0',
                    borderBottom: '1px solid #ddd',
                    gap: '24px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <div>
                    <div style={{ fontSize: '12px', marginBottom: '6px' }}>{project.title}</div>
                    <div style={{ flexWrap: 'wrap' }}>
                      {project.tags.map((t) => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', color: '#888', whiteSpace: 'nowrap' }}>
                    {project.year}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
