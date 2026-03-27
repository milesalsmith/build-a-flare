// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 text-center">
        {/* Brand Header */}
        <div className="mb-8 flex flex-col items-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20 mb-6">
            <span className="text-3xl font-bold text-white">B</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Build-a-Flare <span className="text-orange-500">Lab</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A high-performance L7 security and e-commerce origin. 
            Powered by Next.js 16, DigitalOcean, and Cloudflare.
          </p>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12">
          {[
            { label: "Origin", status: "Online", detail: "DigitalOcean Droplet", color: "bg-green-500" },
            { label: "Proxy", status: "Active", detail: "Nginx 1.24", color: "bg-green-500" },
            { label: "Edge", status: "Proxied", detail: "Cloudflare L7", color: "bg-orange-500" }
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-left shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className={`h-2 w-2 rounded-full ${item.color}`} />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">{item.label}</span>
              </div>
              <div className="text-lg font-semibold mb-1">{item.status}</div>
              <div className="text-sm text-zinc-500">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="/shop" 
            className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-bold transition-transform hover:scale-105"
          >
            Enter ProStore
          </a>
          <a 
            href="https://github.com/milesalsmith/build-a-flare" 
            target="_blank"
            className="px-8 py-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full font-bold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-700"
          >
            View Lab Docs
          </a>
        </div>
      </main>

      <footer className="absolute bottom-8 text-sm text-zinc-500 font-medium">
        Q1 2026 Build-a-Flare Milestone 01
      </footer>
    </div>
  );
}