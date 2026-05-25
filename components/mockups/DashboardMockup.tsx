import { cn } from "@/lib/cn";

/**
 * Realistic, lightweight dashboard mockup composed entirely from HTML/SVG.
 * No images. Designed to feel like a real product screenshot:
 * - Sidebar with workspace and nav items
 * - Pipeline (kanban) preview, an event chart and live activity strip
 */
export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10",
        "bg-gradient-to-b from-[#141417] to-[#0F1115]",
        "shadow-lift",
        className,
      )}
      aria-hidden
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#0F1115]/80 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="ml-2 flex h-6 flex-1 items-center gap-2 rounded-md bg-[#19191E]/80 px-2.5 text-[11px] text-[#5C6168]">
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 7V5a3 3 0 0 1 6 0v2" />
            <rect x="3.5" y="7" width="9" height="6" rx="1.2" />
          </svg>
          app.catercore.com<span className="text-[#3A3D45]">/pipeline</span>
        </div>
        <div className="hidden h-6 items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#19191E]/60 px-2 text-[11px] text-[#A0A0A0] md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
          Live
        </div>
      </div>

      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 hidden border-r border-white/[0.06] bg-[#0F1115]/60 p-3 md:block">
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#141417]/60 px-2.5 py-2">
            <div className="grid h-6 w-6 place-items-center rounded-md bg-[rgba(255,255,255,0.05)] text-[10px] font-bold text-ink-300">
              FB
            </div>
            <div className="min-w-0">
              <div className="truncate text-[11px] font-medium text-[#E0E0E0]">Flashback Catering</div>
              <div className="truncate text-[10px] text-[#5C6168]">Workspace · Pro</div>
            </div>
          </div>

          <nav className="mt-3 space-y-0.5">
            {[
              { label: "Pipeline", icon: "pipeline", active: true, badge: "12" },
              { label: "Inquiries", icon: "inbox", badge: "3" },
              { label: "Events", icon: "calendar" },
              { label: "Menus", icon: "menu" },
              { label: "Staffing", icon: "users" },
              { label: "Clients", icon: "client" },
              { label: "Invoices", icon: "receipt" },
            ].map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center justify-between rounded-md px-2 py-1.5 text-[11.5px]",
                  item.active
                    ? "bg-white/[0.05] text-[#F5F5F5]"
                    : "text-[#A0A0A0]",
                )}
              >
                <span className="flex items-center gap-2">
                  <NavIcon name={item.icon} active={!!item.active} />
                  {item.label}
                </span>
                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-px text-[10px]",
                      item.active
                        ? "bg-white/[0.05] text-ink-400"
                        : "bg-white/[0.05] text-[#A0A0A0]",
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-4 rounded-lg border border-white/[0.06] bg-gradient-to-b from-[#141417] to-[#0F1115] p-3">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-ink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
              This week
            </div>
            <div className="mt-1.5 text-[18px] font-semibold tracking-tight text-[#F5F5F5]">
              $142,380
            </div>
            <div className="text-[10.5px] text-[#5C6168]">+12.4% vs last week</div>
            <div className="mt-2.5 grid grid-cols-12 items-end gap-[3px] h-8">
              {[5, 7, 6, 9, 8, 11, 10, 12, 9, 13, 11, 14].map((h, i) => (
                <span
                  key={i}
                  className="block rounded-sm bg-gradient-to-t from-ink-300/40 to-ink-400/80"
                  style={{ height: `${(h / 14) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Main pane */}
        <main className="col-span-12 md:col-span-9 p-4 md:p-5">
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#5C6168]">Pipeline</div>
              <div className="mt-0.5 flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#F5F5F5]">
                Active events
                <span className="rounded-md border border-white/[0.07] bg-white/[0.03] px-1.5 py-0.5 text-[10.5px] font-medium text-[#A0A0A0]">
                  Q2
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Pill>Filter</Pill>
              <Pill>Sort</Pill>
              <Pill primary>
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                </svg>
                New inquiry
              </Pill>
            </div>
          </div>

          {/* Kanban */}
          <div className="mt-4 grid grid-cols-4 gap-2.5">
            {[
              {
                title: "Inquiry",
                count: 6,
                tone: "neutral" as const,
                cards: [
                  { name: "Renwick Wedding", meta: "May 18 · 140 guests", value: "$8.2k", tag: "Wedding" },
                  { name: "Hartford Gala", meta: "May 22 · 320 guests", value: "$24k", tag: "Corp" },
                ],
              },
              {
                title: "Quoted",
                count: 4,
                tone: "azure" as const,
                cards: [
                  { name: "Beaumont Foundation", meta: "Jun 04 · 80 guests", value: "$11k", tag: "Gala" },
                ],
              },
              {
                title: "Signed",
                count: 3,
                tone: "ember" as const,
                cards: [
                  { name: "Avalon Conf", meta: "Jun 12 · 600 guests", value: "$42k", tag: "Corp" },
                  { name: "Linden Birthday", meta: "Jun 15 · 60 guests", value: "$6.4k", tag: "Private" },
                ],
              },
              {
                title: "Delivered",
                count: 8,
                tone: "sage" as const,
                cards: [
                  { name: "Northbrook Co.", meta: "May 02 · Paid", value: "$18k", tag: "Corp" },
                ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="rounded-xl border border-white/[0.06] bg-[#0F1115]/60 p-2.5"
              >
                <div className="flex items-center justify-between text-[10.5px]">
                  <span className="flex items-center gap-1.5 text-[#C2C2C2]">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        col.tone === "neutral" && "bg-ink-400",
                        col.tone === "azure" && "bg-azure-400",
                        col.tone === "ember" && "bg-ink-300",
                        col.tone === "sage" && "bg-sage-400",
                      )}
                    />
                    {col.title}
                  </span>
                  <span className="rounded-md bg-white/[0.04] px-1.5 py-px text-[#A0A0A0]">{col.count}</span>
                </div>
                <div className="mt-2 space-y-2">
                  {col.cards.map((c) => (
                    <div
                      key={c.name}
                      className="rounded-lg border border-white/[0.06] bg-gradient-to-b from-[#19191E] to-[#141417] p-2.5"
                    >
                      <div className="flex items-center justify-between gap-1.5">
                        <div className="truncate text-[11.5px] font-medium text-[#F5F5F5]">{c.name}</div>
                        <span className="shrink-0 rounded-md border border-white/[0.06] bg-white/[0.02] px-1.5 py-px text-[9.5px] text-[#A0A0A0]">
                          {c.tag}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[10.5px] text-[#5C6168]">{c.meta}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                          <Avatar tone="ember" />
                          <Avatar tone="azure" />
                        </div>
                        <div className="text-[11px] font-semibold text-[#E0E0E0]">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: chart + activity */}
          <div className="mt-3 grid grid-cols-12 gap-2.5">
            <div className="col-span-12 md:col-span-7 rounded-xl border border-white/[0.06] bg-[#0F1115]/60 p-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#5C6168]">Revenue · 12 weeks</div>
                <div className="flex items-center gap-2 text-[10.5px] text-[#A0A0A0]">
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-ink-300" /> Signed</span>
                  <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-azure-400" /> Quoted</span>
                </div>
              </div>
              <div className="mt-3 h-24">
                <RevenueChart />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 rounded-xl border border-white/[0.06] bg-[#0F1115]/60 p-3">
              <div className="text-[11px] uppercase tracking-[0.16em] text-[#5C6168]">Activity</div>
              <ul className="mt-2 space-y-2">
                {[
                  { who: "Mia", what: "signed contract", obj: "Avalon Conf", time: "2m" },
                  { who: "AI Agent", what: "drafted quote for", obj: "Hartford Gala", time: "11m" },
                  { who: "James", what: "added 4 staff to", obj: "Linden Birthday", time: "38m" },
                ].map((a) => (
                  <li key={a.what + a.obj} className="flex items-start gap-2.5 text-[11.5px]">
                    <Avatar tone={a.who === "AI Agent" ? "azure" : "azure"} small />
                    <div className="min-w-0 flex-1">
                      <span className="text-[#E0E0E0]">{a.who}</span>
                      <span className="text-[#5C6168]"> {a.what} </span>
                      <span className="text-[#E0E0E0]">{a.obj}</span>
                    </div>
                    <span className="text-[10px] text-[#3A3D45]">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Pill({
  children,
  primary,
}: {
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-[11px] font-medium",
        primary
          ? "bg-white/[0.08] text-ink-50"
          : "border border-white/[0.07] bg-white/[0.02] text-[#C2C2C2]",
      )}
    >
      {children}
    </span>
  );
}

function Avatar({
  tone = "ember",
  small = false,
}: {
  tone?: "ember" | "azure" | "sage";
  small?: boolean;
}) {
  const TONE = {
    ember: "from-ink-300 to-ink-500 text-ink-950",
    azure: "from-azure-400 to-azure-500 text-ink-950",
    sage:  "from-sage-400  to-sage-500  text-ink-950",
  } as const;
  return (
    <span
      className={cn(
        "grid place-items-center rounded-full border border-white/15 bg-gradient-to-br font-semibold",
        small ? "h-5 w-5 text-[9px]" : "h-5 w-5 text-[9px]",
        TONE[tone],
      )}
    >
      {tone === "ember" ? "M" : tone === "azure" ? "J" : "S"}
    </span>
  );
}

function NavIcon({ name, active }: { name: string; active: boolean }) {
  const cls = cn("h-3.5 w-3.5", active ? "text-ink-300" : "text-[#5C6168]");
  switch (name) {
    case "pipeline":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="3.5" height="10" rx="0.8" />
          <rect x="6.25" y="5" width="3.5" height="8" rx="0.8" />
          <rect x="10.5" y="7" width="3.5" height="6" rx="0.8" />
        </svg>
      );
    case "inbox":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 9.5V4.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v5" />
          <path d="M2.5 9.5h3l1 1.5h3l1-1.5h3v2a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="3.5" width="11" height="10" rx="1" />
          <path d="M2.5 6.5h11M5.5 2.5v2M10.5 2.5v2" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4h10M3 8h10M3 12h6" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2" />
          <path d="M2.5 13c.5-2 1.8-3 3.5-3s3 1 3.5 3" />
          <circle cx="11" cy="7" r="1.6" />
          <path d="M9.5 13c.3-1.5 1.3-2.4 3-2.4s2.7.9 3 2.4" />
        </svg>
      );
    case "client":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="6" r="2.5" />
          <path d="M3 13c.5-2.4 2.4-4 5-4s4.5 1.6 5 4" />
        </svg>
      );
    case "receipt":
      return (
        <svg viewBox="0 0 16 16" className={cls} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2.5h8v11l-2-1-2 1-2-1-2 1z" />
          <path d="M6 6h4M6 9h4" />
        </svg>
      );
    default:
      return null;
  }
}

function RevenueChart() {
  // Smooth path generated from sample data points — pure SVG, GPU-friendly
  const w = 600;
  const h = 96;
  const points = [12, 18, 14, 22, 19, 26, 24, 32, 28, 34, 30, 38];
  const max = 42;
  const step = w / (points.length - 1);

  const toY = (v: number) => h - (v / max) * h;
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${toY(p).toFixed(1)}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  const quoted = points.map((p) => Math.max(0, p - 6));
  const qPath = quoted
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${toY(p).toFixed(1)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="emberArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#EF4444" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0"   />
        </linearGradient>
      </defs>
      <g>
        {[0.25, 0.5, 0.75].map((p) => (
          <line key={p} x1={0} x2={w} y1={h * p} y2={h * p} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
      </g>
      <path d={area} fill="url(#emberArea)" />
      <path d={path}  stroke="#F87171" strokeWidth="1.6" fill="none" />
      <path d={qPath} stroke="#7da9e0" strokeWidth="1.4" fill="none" strokeDasharray="3 3" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={toY(p)} r={i === points.length - 1 ? 3 : 0} fill="#F87171" />
      ))}
    </svg>
  );
}
