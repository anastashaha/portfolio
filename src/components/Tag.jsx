export default function Tag({ label }) {
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '10px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.07)',
      borderRadius: '2px',
      marginRight: '4px',
      marginBottom: '4px',
      letterSpacing: '0.03em',
    }}>
      {label}
    </span>
  )
}
