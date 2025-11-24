// JobNavbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const navItems = [
  { label: "Why Join", href: "/jobs/why-join" },
  { label: "Housecleaners", href: "/jobs/housecleaners" },
  { label: "Team Leaders & Trainers", href: "/jobs/team-leaders-trainers" },
  { label: "Managers", href: "/jobs/managers" },
];

const JobNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* thin blue line on very top */}
      <div className="h-1 w-full bg-[#0077c8]" />

      <div className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-3 lg:py-4">
          
          {/* LEFT: logo + tagline */}
          <div className="flex flex-shrink-0 items-center gap-3">

            {/* ⭐ BIGGER LOGO (Only change requested) */}
            <img
              src={Logo}
              alt="Cleanic Authority Logo"
              className="h-16 w-16 object-contain"   // ⬅ ONLY CHANGE
            />

            <span className="hidden text-xs font-medium text-slate-500 md:block">
              Clean Homes. Clean Earth.
            </span>
          </div>

          {/* CENTER: title + desktop nav */}
          <div className="flex flex-1 items-center justify-center">
            <div className="hidden items-center gap-10 md:flex">

              {/* CLICKABLE TITLE */}
              <a
                href="/jobs"
                className="whitespace-nowrap text-lg font-semibold text-[#0077c8] hover:underline cursor-pointer"
              >
                Jobs at The Cleaning Authority
              </a>

              <nav className="flex items-center gap-6 text-sm font-semibold text-slate-900">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative pb-1 transition hover:text-[#0077c8]"
                  >
                    {item.label}
                    <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#0077c8] transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                ))}
              </nav>
            </div>

            {/* mobile title only */}
            <div className="flex w-full items-center justify-center md:hidden">
              <span className="text-sm font-semibold text-[#0077c8]">
                Jobs at The Cleaning Authority
              </span>
            </div>
          </div>

          {/* RIGHT: apply button / mobile menu */}
          <div className="ml-4 flex items-center gap-3">
            <a
              href="/jobs/apply"
              className="hidden bg-[#4ba02c] px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#3c7e22] md:inline-block"
            >
              Apply Now
            </a>

            <button
              className="inline-flex items-center justify-center rounded border border-slate-200 p-2 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-5 bg-slate-800" />
                <span className="block h-0.5 w-5 bg-slate-800" />
                <span className="block h-0.5 w-5 bg-slate-800" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 text-sm font-semibold text-slate-900">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-2 transition hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/jobs/apply"
                className="mt-2 rounded-md bg-[#4ba02c] px-3 py-2 text-center text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#3c7e22]"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default JobNavbar;
