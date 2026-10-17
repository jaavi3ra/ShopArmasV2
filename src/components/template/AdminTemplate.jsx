
export function AdminTemplate({ children }) {
  return (
    <main className="admin-page">
      <div className="admin-layout">
        {children}
      </div>
    </main>
  );
}
