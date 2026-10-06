
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
              SP
            </div>

            <div>
              <h1 className="font-bold text-lg">Social Protection</h1>
              <p className="text-xs text-slate-500">Musa to Soko</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="text-emerald-600">Dashboard</a>
            <a href="#" className="hover:text-emerald-600">Programs</a>
            <a href="#" className="hover:text-emerald-600">Benefits</a>
            <a href="#" className="hover:text-emerald-600">Help</a>
          </div>

          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-emerald-100 font-medium mb-3">
              SUPPORT • OPPORTUNITY • DIGNITY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Connecting people to the support they need.
            </h2>

            <p className="text-emerald-50 text-lg mb-8">
              Access social protection programs, financial assistance,
              community services, and opportunities in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50">
                Find Support
              </button>

              <button className="border border-white/50 px-6 py-3 rounded-lg font-semibold hover:bg-white/10">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <StatCard
            title="Registered Beneficiaries"
            value="24,580"
            icon="👥"
          />

          <StatCard
            title="Active Programs"
            value="18"
            icon="🤝"
          />

          <StatCard
            title="Applications"
            value="1,248"
            icon="📄"
          />

          <StatCard
            title="Support Delivered"
            value="92%"
            icon="✓"
          />
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Social Protection Programs</h2>
            <p className="text-slate-500 mt-1">
              Find programs that can support you and your community.
            </p>
          </div>

          <button className="text-emerald-600 font-semibold">
            View all →
          </button>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProgramCard
            icon="💰"
            title="Cash Transfer Program"
            description="Financial assistance for vulnerable households and individuals."
            status="Open for applications"
          />

          <ProgramCard
            icon="🏥"
            title="Health Support"
            description="Access healthcare assistance and community health services."
            status="Available"
          />

          <ProgramCard
            icon="🌾"
            title="Livelihood Support"
            description="Training, grants, and opportunities to build sustainable income."
            status="Available"
          />
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {/* Application */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-7">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold">Your Applications</h3>
                <p className="text-slate-500 text-sm mt-1">
                  Track your latest applications.
                </p>
              </div>

              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                2 Pending
              </span>
            </div>

            <div className="space-y-4">
              <Application
                name="Household Cash Support"
                date="Applied 28 September 2026"
                status="Under Review"
              />

              <Application
                name="Livelihood Training"
                date="Applied 20 September 2026"
                status="Approved"
              />
            </div>
          </div>

          {/* Help */}
          <div className="bg-emerald-700 text-white rounded-2xl p-7">
            <div className="text-4xl mb-5">💬</div>

            <h3 className="text-xl font-bold mb-2">
              Need help?
            </h3>

            <p className="text-emerald-100 text-sm leading-6 mb-6">
              Our support team can help you understand programs,
              applications, and available benefits.
            </p>

            <button className="w-full bg-white text-emerald-700 py-3 rounded-lg font-semibold hover:bg-emerald-50">
              Contact Support
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Social Protection</p>
            <p className="text-sm mt-1">
              Building stronger and more resilient communities.
            </p>
          </div>

          <p className="text-sm">
            © 2026 Musa to Soko
          </p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl">
          {icon}
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ icon, title, description, status }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>

      <h3 className="text-lg font-bold mb-2">{title}</h3>

      <p className="text-slate-500 text-sm leading-6 mb-5">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-600">
          ● {status}
        </span>

        <button className="text-sm font-semibold text-slate-700 hover:text-emerald-600">
          Learn more →
        </button>
      </div>
    </div>
  );
}

function Application({ name, date, status }) {
  const approved = status === "Approved";

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-slate-500 mt-1">{date}</p>
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${
          approved
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

export default App;

