export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-brand-700">Welcome to EHR Demo</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card p-4">
          <h2 className="font-medium mb-2">Patients</h2>
          <p className="text-sm text-slate-600">Login or sign up to manage your profile and appointments.</p>
        </div>
        <div className="card p-4">
          <h2 className="font-medium mb-2">Doctors</h2>
          <p className="text-sm text-slate-600">Manage your availability and upcoming appointments.</p>
        </div>
        <div className="card p-4">
          <h2 className="font-medium mb-2">Admins</h2>
          <p className="text-sm text-slate-600">Oversee users, doctors, and appointments.</p>
        </div>
      </div>
    </div>
  );
}
