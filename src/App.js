// src/App.js
import React, { useState } from "react";
import { Download, Search } from "lucide-react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // =========================
  // DATA  (add optional scores with keys like searchlandScore: 4, nimbusScore: 3, etc.)
  // =========================
  const data = [
    {
      category: "Basic Info",
      criterion: "Platform Type",
      searchland: "Automated SaaS platform for self-service site sourcing",
      terraquest: "Land finding consultancy service with in-house GIS technology",
      landinsight: "Cloud-based site sourcing and assessment software (LandTech)",
      nimbus: "Comprehensive property & land data platform (SaaS)",
      landhawk: "Advanced automated land search and risk assessment platform (Idox)",
      // example scores (you can add to any rows you want):
      // searchlandScore: 4, terraquestScore: 3, landinsightScore: 4, nimbusScore: 3, landhawkScore: 4,
    },
    {
      category: "Pricing",
      criterion: "Standard/Entry Tier",
      searchland: "£195/user/month (annual) - Full core functionality",
      terraquest: "Custom quote - Project-based consultancy fee",
      landinsight: "£45/month (annual) - Starter: 5 users, limited lookups",
      nimbus: "Contact for quote - Plus tier (entry level)",
      landhawk: "£120/month (Year 1 promo), then £299/month - Single user",
      // landinsightScore: 3, searchlandScore: 4, landhawkScore: 2,
    },
    {
      category: "Pricing",
      criterion: "Premium Tier",
      searchland: "Pro tier - Custom quote for additional datasets & team features",
      terraquest: "Retainer or project scope dependent",
      landinsight: "£135/month (annual) - Pro: 10 users, unlimited planning views",
      nimbus: "Contact for quote - Advanced tier",
      landhawk: "Enterprise: Custom pricing for 25+ users",
    },
    {
      category: "Pricing",
      criterion: "Enterprise",
      searchland: "Custom enterprise pricing available",
      terraquest: "Large-scale project pricing",
      landinsight: "Unlimited: Custom pricing, unlimited users & sites",
      nimbus: "Enterprise: Custom negotiated pricing",
      landhawk: "Enterprise: Volume discounts for 25+ users",
    },
    {
      category: "Core Features",
      criterion: "Planning Data",
      searchland: "30+ years history, daily updates, all UK authorities",
      terraquest: "95% England/Wales/NI applications via Planning Portal",
      landinsight: "Historic & current applications, council document links",
      nimbus: "Full planning applications with search & automatic alerts",
      landhawk: "Unlimited planning access, automated alerts",
    },
    {
      category: "Core Features",
      criterion: "Ownership Data",
      searchland: "HM Land Registry titles, ownership records, company details",
      terraquest: "Rapid Land Registry analysis, all associated titles/interests",
      landinsight: "Ownership & title data with ultimate owner info & contacts",
      nimbus: "HM Land Registry titles with extensive property details",
      landhawk: "Title deed polygons (land ownership), owner name search",
    },
    {
      category: "Core Features",
      criterion: "Site Search Tools",
      searchland: "AI-powered filtering, radius/polygon search, strategic land overlays",
      terraquest: "GIS-driven analysis by expert team, nationwide scanning",
      landinsight: "Interactive map, location search, draw areas, apply filters",
      nimbus: "4–12 preset site-finding strategies (tier dependent), dozens of filters",
      landhawk: "SiteFinder: Rules-based query builder, filter thousands in seconds",
    },
    {
      category: "Core Features",
      criterion: "Constraints & Risk",
      searchland: "Green belt, flood zones, conservation areas, biodiversity net gain",
      terraquest: "Environmental constraints, utilities, access, risk flagging",
      landinsight: "Flood zones, heritage, local policy, power infrastructure",
      nimbus: "Article 4, green belt, flood zones, planning history",
      landhawk: "150+ geospatial datasets, automated Risk Analysis Profile",
    },
    {
      category: "Core Features",
      criterion: "Comparables Data",
      searchland: "Real-time Rightmove sales/lettings, on-market listings",
      terraquest: "Available through expert analysis",
      landinsight: "Land Registry sold prices, EPC data, Hometrack valuations",
      nimbus: "Residential & commercial comparables, Rightmove & EG integration",
      landhawk: "Average land values, price per sqft in vicinity",
    },
    {
      category: "Core Features",
      criterion: "Owner Outreach",
      searchland: "Built-in letter generation, bulk personalized letters, campaign tracking",
      terraquest: "Can initiate contact with landowners on client's behalf",
      landinsight: "Not included - data export only",
      nimbus: "Not included - data export only",
      landhawk: "Not included - provides ownership info only",
    },
    {
      category: "Automation",
      criterion: "Automation Level",
      searchland:
        "HIGH - AI site searching, automated bulk letters, daily data updates. 4× more land, 75% faster deals",
      terraquest:
        "MEDIUM - Tech-assisted but human-driven. Expert consultants interpret data",
      landinsight:
        "MODERATE - Automated alerts, centralized data, but user-directed searches",
      nimbus:
        "MODERATE - Instant data access, one-click reports, but requires user input",
      landhawk:
        "HIGH - Scans thousands of parcels in minutes, automated risk profiling",
    },
    {
      category: "Coverage",
      criterion: "Geographic Scope",
      searchland: "Great Britain (England, Wales, Scotland) - Not Northern Ireland",
      terraquest: "UK-wide (England, Wales, Scotland, Northern Ireland)",
      landinsight: "UK-wide (England, Wales, Scotland) - Limited NI coverage",
      nimbus: "Great Britain (England, Wales, Scotland)",
      landhawk: "UK Nationwide (England, Wales, Scotland, Northern Ireland)",
    },
    {
      category: "Technical",
      criterion: "Data Export",
      searchland: "CSV/Excel export, API for enterprise users",
      terraquest: "GIS-compatible datasets, Excel sheets, written reports",
      landinsight: "Excel/PDF export, Open API for enterprise",
      nimbus: "Excel/CSV export, API for Enterprise tier",
      landhawk: "Excel, GIS formats, Geospatial API (WMS/WFS) for Enterprise",
    },
    {
      category: "Technical",
      criterion: "Integration",
      searchland:
        "Direct council links, Land Registry ordering, mail partner service",
      terraquest:
        "Land & Property Portal, Planning Portal integration, client GIS import",
      landinsight: "LandFund integration, team collaboration, planning portal links",
      nimbus: "Brickflow financing integration, custom solutions for Enterprise",
      landhawk: "GIS integration (ArcGIS), Idox planning systems",
    },
    {
      category: "Technical",
      criterion: "Licensing",
      searchland: "Per-user (named user login)",
      terraquest: "Service engagement (not software seats)",
      landinsight:
        "Multi-user allowances (5–10 users per tier, unlimited in Enterprise)",
      nimbus: "Per-user (Enterprise for organizations)",
      landhawk: "Per-user or Enterprise (25+ users)",
    },
    {
      category: "Best For",
      criterion: "Ideal Use Case",
      searchland:
        "Self-driven off-market sourcing. Land agents, SME developers wanting fast lead generation",
      terraquest:
        "Large-scale/complex projects. Limited in-house capacity. Councils, infrastructure, national projects",
      landinsight:
        "Team-based developers. Medium-high deal flow. Pipeline management with collaboration",
      nimbus:
        "Versatile – Solo investors to enterprise commercial teams. Comprehensive data analysis",
      landhawk:
        "High-volume analysis. Scanning broad areas. Renewables, planning consultancies, utilities",
    },
    {
      category: "Strengths",
      criterion: "Key Advantages",
      searchland:
        "Widest data layers. Automated outreach. 20% cheaper than competitors. Modern interface",
      terraquest:
        "Turnkey solution. Exclusive Planning Portal data. 50+ years expertise. Thorough vetting",
      landinsight:
        "All-in-one convenience. Established industry presence. Strong collaboration tools",
      nimbus:
        "Broadest data coverage. Powerful filtering. Financing integration (Brickflow)",
      landhawk:
        "Exceptional large-scale analysis. Risk ranking. Renewable energy focus. Idox-backed",
    },
    {
      category: "Drawbacks",
      criterion: "Key Limitations",
      searchland:
        "Requires user learning. Usage caps on Standard tier. Newer company (2020)",
      terraquest:
        "Not DIY. Can be costly. Longer turnaround. Less flexible than software",
      landinsight:
        "Fewer advanced layers. Starter tier very limited. No AI suggestions",
      nimbus:
        "No public pricing. Complex interface. Best features Enterprise-only",
      landhawk:
        "Less known in mainstream. Assumes GIS savvy. No built-in owner outreach",
    },
  ];

  // =========================
  // PLATFORM META (logos with robust fallbacks + website links)
  // =========================
  const platformMeta = {
    searchland: {
      label: "Searchland",
      url: "https://searchland.co.uk",
      // try multiple icons; many sites don't use /favicon.ico
      logos: [
        "https://www.searchland.co.uk/favicon-32x32.png",
        "https://www.searchland.co.uk/favicon.ico",
        "https://searchland.co.uk/favicon.ico",
      ],
    },
    terraquest: {
      label: "TerraQuest",
      url: "https://www.terraquest.co.uk",
      logos: [
        "https://www.terraquest.co.uk/favicon-32x32.png",
        "https://www.terraquest.co.uk/favicon.ico",
        "https://terraquest.co.uk/favicon.ico",
      ],
    },
    landinsight: {
      label: "LandInsight",
      url: "https://land.tech/products/landinsight",
      logos: [
        "https://land.tech/favicon.ico",
        "https://www.land.tech/favicon.ico",
        "https://land.tech/apple-touch-icon.png",
      ],
    },
    nimbus: {
      label: "Nimbus Maps",
      url: "https://www.nimbusmaps.co.uk",
      logos: [
        "https://www.nimbusmaps.co.uk/favicon-32x32.png",
        "https://www.nimbusmaps.co.uk/favicon.ico",
        "https://nimbusmaps.co.uk/favicon.ico",
      ],
    },
    landhawk: {
      label: "LandHawk",
      url: "https://www.landhawk.uk",
      logos: [
        "https://www.landhawk.uk/favicon-32x32.png",
        "https://www.landhawk.uk/favicon.ico",
        "https://landhawk.uk/favicon.ico",
      ],
    },
  };

  const platformKeys = ["searchland", "terraquest", "landinsight", "nimbus", "landhawk"];

  // =========================
  // TOTAL SCORES (sum of any *Score fields you add, each out of 5)
  // =========================
  const totals = platformKeys.reduce((acc, key) => ({ ...acc, [key]: { sum: 0, count: 0 } }), {});
  data.forEach((row) => {
    platformKeys.forEach((key) => {
      const s = row[`${key}Score`];
      if (typeof s === "number") {
        totals[key].sum += s;
        totals[key].count += 1;
      }
    });
  });

  // =========================
  // FILTERING
  // =========================
  const categories = [
    "all",
    "Basic Info",
    "Pricing",
    "Core Features",
    "Automation",
    "Coverage",
    "Technical",
    "Best For",
    "Strengths",
    "Drawbacks",
  ];

  const filteredData = data.filter((row) => {
    const matchesCategory = selectedCategory === "all" || row.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      Object.values(row).some((val) => String(val).toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // =========================
  // CSV EXPORT (includes inline (x/5) if present)
  // =========================
  const exportToCSV = () => {
    const headers = ["Category", "Criterion", "Searchland", "TerraQuest", "LandInsight", "Nimbus Maps", "LandHawk"];
    const csvContent = [
      headers.join(","),
      ...data.map((row) =>
        [
          row.category,
          row.criterion,
          `"${row.searchland}${typeof row.searchlandScore === "number" ? ` (${row.searchlandScore}/5)` : ""}"`,
          `"${row.terraquest}${typeof row.terraquestScore === "number" ? ` (${row.terraquestScore}/5)` : ""}"`,
          `"${row.landinsight}${typeof row.landinsightScore === "number" ? ` (${row.landinsightScore}/5)` : ""}"`,
          `"${row.nimbus}${typeof row.nimbusScore === "number" ? ` (${row.nimbusScore}/5)` : ""}"`,
          `"${row.landhawk}${typeof row.landhawkScore === "number" ? ` (${row.landhawkScore}/5)` : ""}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "land_sourcing_comparison.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // =========================
  // SMALL UI HELPERS
  // =========================
  const categoryColors = {
    "Basic Info": "bg-blue-50",
    Pricing: "bg-green-50",
    "Core Features": "bg-purple-50",
    Automation: "bg-orange-50",
    Coverage: "bg-cyan-50",
    Technical: "bg-indigo-50",
    "Best For": "bg-yellow-50",
    Strengths: "bg-emerald-50",
    Drawbacks: "bg-red-50",
  };

  const FALLBACK_SVG =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><rect width='20' height='20' fill='#1f2937'/><text x='10' y='14' font-size='10' text-anchor='middle' fill='white'>•</text></svg>`
    );

  // Logo component that tries multiple sources then falls back to a tiny SVG
  const Logo = ({ id }) => {
    const [i, setI] = useState(0);
    const list = platformMeta[id].logos || [];
    const src = i < list.length ? list[i] : FALLBACK_SVG;
    return (
      <img
        src={src}
        alt={platformMeta[id].label}
        className="w-5 h-5"
        onError={() => setI((prev) => prev + 1)}
      />
    );
  };

  const HeaderCell = ({ id }) => (
    <th className="px-4 py-3 text-left font-semibold border-r border-gray-600">
      <a
        href={platformMeta[id].url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
        title={platformMeta[id].url}
      >
        <Logo id={id} />
        <span>{platformMeta[id].label}</span>
        {/* Always show total if any scores exist; hide when none added */}
        {totals[id].count > 0 && (
          <span className="text-xs text-blue-200 ml-2">
            ({totals[id].sum}/{totals[id].count * 5})
          </span>
        )}
      </a>
    </th>
  );

  // =========================
  // RENDER
  // =========================
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Land Sourcing Platforms Comparison</h1>
        <p className="text-blue-100">Comprehensive analysis of UK site sourcing tools for off-market development</p>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex gap-4 flex-wrap items-center">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search all fields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>

          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse bg-white">
          <thead className="sticky top-0 z-10">
            <tr className="bg-gradient-to-r from-gray-700 to-gray-800 text-white">
              <th className="px-4 py-3 text-left font-semibold border-r border-gray-600 w-32">Category</th>
              <th className="px-4 py-3 text-left font-semibold border-r border-gray-600 w-48">Criterion</th>
              <HeaderCell id="searchland" />
              <HeaderCell id="terraquest" />
              <HeaderCell id="landinsight" />
              <HeaderCell id="nimbus" />
              <HeaderCell id="landhawk" />
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row, idx) => {
              const isNewCategory = idx === 0 || filteredData[idx - 1].category !== row.category;
              return (
                <tr
                  key={`${row.category}-${row.criterion}-${idx}`}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    isNewCategory ? "border-t-2 border-gray-400" : ""
                  }`}
                >
                  <td className={`px-4 py-3 font-medium text-gray-700 border-r border-gray-200 ${
                    categoryColors[row.category] || ""
                  }`}>
                    {isNewCategory ? row.category : ""}
                  </td>

                  <td className="px-4 py-3 font-medium text-gray-800 border-r border-gray-200 bg-gray-50">
                    {row.criterion}
                  </td>

                  {/* Each cell shows "(x/5)" automatically if you add e.g., searchlandScore: 4 on that row */}
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                    {row.searchland}
                    {typeof row.searchlandScore === "number" ? ` (${row.searchlandScore}/5)` : ""}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                    {row.terraquest}
                    {typeof row.terraquestScore === "number" ? ` (${row.terraquestScore}/5)` : ""}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                    {row.landinsight}
                    {typeof row.landinsightScore === "number" ? ` (${row.landinsightScore}/5)` : ""}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                    {row.nimbus}
                    {typeof row.nimbusScore === "number" ? ` (${row.nimbusScore}/5)` : ""}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {row.landhawk}
                    {typeof row.landhawkScore === "number" ? ` (${row.landhawkScore}/5)` : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-300 p-4 text-center text-sm text-gray-600">
        <p>Showing {filteredData.length} of {data.length} comparison criteria • Last updated: September 2025</p>
      </div>
    </div>
  );
}
