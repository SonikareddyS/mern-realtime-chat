const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div
      style={{
        padding: 24,
        backgroundColor: '#1e293b', // dark slate blue-ish background
        textAlign: 'center',
        width: 320,
        margin: 'auto',
        borderRadius: 16,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
          marginBottom: 24,
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            style={{
              aspectRatio: '1 / 1',
              borderRadius: 16,
              backgroundColor: i % 2 === 0 ? '#334155' : '#475569', // dark grey-blue shades
            }}
          />
        ))}
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#f1f5f9' }}>
        {title}
      </h2>
      <p style={{ color: '#cbd5e1' }}>{subtitle}</p>
    </div>
  );
};

export default AuthImagePattern;
