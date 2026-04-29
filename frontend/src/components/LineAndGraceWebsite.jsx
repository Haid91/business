import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Button Component
function Button({ children, className = "", variant = "default", size, ...props }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer";
  const styles = variant === "outline"
    ? "border border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
    : variant === "ghost" ? "bg-transparent hover:bg-stone-100"
    : "bg-stone-900 text-white hover:bg-stone-800";
  const iconSize = size === "icon" ? "h-10 w-10 p-0" : "";
  return <button className={`${base} ${styles} ${iconSize} ${className}`} {...props}>{children}</button>;
}

// Card Component
function Card({ children, className = "", ...props }) {
  return <div className={`rounded-xl border bg-white shadow-sm ${className}`} {...props}>{children}</div>;
}

// CardContent Component
function CardContent({ children, className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props}>{children}</div>;
}

// Input Component
function Input({ className = "", ...props }) {
  return <input className={`w-full rounded-md border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-400 ${className}`} {...props} />;
}

// Badge Component
function Badge({ children, className = "", ...props }) {
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`} {...props}>{children}</span>;
}

// Simple icon components
const Search = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ShoppingBag = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
const Menu = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
const Heart = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const ArrowRight = () => <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const Sparkles = () => <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const Truck = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
const ShieldCheck = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const RotateCcw = () => <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;

const products = [
  {
    name: "Ayla Wide-Leg Trouser",
    category: "Trousers",
    price: "$69",
    tag: "Best Seller",
    tone: "from-stone-200 to-stone-100",
    description: "Relaxed tailored pants for everyday modest styling.",
  },
  {
    name: "Grace Longline Blazer",
    category: "Outerwear",
    price: "$119",
    tag: "Workwear",
    tone: "from-neutral-300 to-neutral-100",
    description: "Structured coverage with a soft, modern silhouette.",
  },
  {
    name: "Noor Maxi Shirt Dress",
    category: "Dresses",
    price: "$89",
    tag: "New Arrival",
    tone: "from-amber-100 to-stone-100",
    description: "A button-down maxi dress designed for effortless layering.",
  },
  {
    name: "Line Denim Maxi Skirt",
    category: "Skirts",
    price: "$79",
    tag: "Casual",
    tone: "from-slate-200 to-blue-100",
    description: "A modest denim staple with a clean western feel.",
  },
  {
    name: "Soft Form Knit Top",
    category: "Tops",
    price: "$49",
    tag: "Essential",
    tone: "from-zinc-100 to-stone-50",
    description: "A breathable long-sleeve basic for layering or pairing.",
  },
  {
    name: "Everyday Trench Coat",
    category: "Outerwear",
    price: "$139",
    tag: "Premium",
    tone: "from-yellow-100 to-stone-100",
    description: "A modest outer layer for city days and cooler evenings.",
  },
];

const categories = ["All", "Dresses", "Trousers", "Skirts", "Tops", "Outerwear"];

export default function LineAndGraceWebsite() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, products]);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-900 text-sm font-semibold text-white">
              L&G
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Line & Grace</p>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Modest Westernwear</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
            <a href="#shop" className="hover:text-stone-950">Shop</a>
            <a href="#collections" className="hover:text-stone-950">Collections</a>
            <a href="#story" className="hover:text-stone-950">Our Story</a>
            <a href="#contact" className="hover:text-stone-950">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 hover:bg-stone-100">
              <Search className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-stone-100">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-stone-100 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-5 w-fit rounded-full bg-stone-900 px-4 py-1 text-white text-sm">
                New modest essentials arriving soon
              </div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
                Modest style, made modern.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Line & Grace creates elegant western-inspired pieces for women who want coverage, comfort, and confidence without compromising style.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-stone-900 px-7 py-3 text-white hover:bg-stone-800 flex items-center justify-center gap-2">
                  Shop the edit
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-full border border-stone-300 px-7 py-3 text-stone-900 hover:bg-stone-100">
                  View lookbook
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
              <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-stone-300/60 blur-3xl" />
              <div className="relative grid min-h-[520px] grid-cols-2 gap-4 rounded-[2rem] border border-stone-200 bg-white/60 p-4 shadow-2xl shadow-stone-200/70 backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-stone-200 to-stone-50 p-5">
                  <div className="h-full rounded-[1.2rem] border border-white/70 bg-white/40 p-4">
                    <p className="text-sm font-medium text-stone-600">The Blazer Edit</p>
                    <div className="mt-6 h-56 rounded-full bg-stone-300/60" />
                  </div>
                </div>
                <div className="mt-12 rounded-[1.5rem] bg-gradient-to-br from-amber-100 to-stone-50 p-5">
                  <div className="h-full rounded-[1.2rem] border border-white/70 bg-white/40 p-4">
                    <p className="text-sm font-medium text-stone-600">Maxi Dresses</p>
                    <div className="mt-6 h-64 rounded-t-full bg-stone-900/80" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-stone-50 p-5">
                  <div className="h-full rounded-[1.2rem] border border-white/70 bg-white/40 p-4">
                    <p className="text-sm font-medium text-stone-600">Denim Skirts</p>
                    <div className="mt-6 h-52 rounded-b-full bg-blue-200/80" />
                  </div>
                </div>
                <div className="-mt-8 rounded-[1.5rem] bg-gradient-to-br from-zinc-100 to-stone-50 p-5">
                  <div className="h-full rounded-[1.2rem] border border-white/70 bg-white/40 p-4">
                    <p className="text-sm font-medium text-stone-600">Wide-Leg Pants</p>
                    <div className="mt-6 h-56 rounded-3xl bg-stone-400/50" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="collections" className="border-y border-stone-200 bg-white/60 py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              { icon: Truck, title: "Australia-wide delivery", text: "Simple delivery options for everyday orders." },
              { icon: ShieldCheck, title: "Quality checked", text: "Designed around coverage, comfort, and durability." },
              { icon: RotateCcw, title: "Easy styling", text: "Neutral pieces that mix, match, and layer." },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 rounded-3xl p-4">
                <div className="rounded-2xl bg-stone-100 p-3">
                  <feature.icon className="h-5 w-5 text-stone-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-950">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
                <Sparkles className="h-4 w-4" /> Featured pieces
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-stone-950">Shop the modest edit</h2>
              <p className="mt-3 max-w-2xl text-stone-600">
                A sample range of western modest essentials: tailored trousers, maxi skirts, shirt dresses, longline blazers, and soft layering tops.
              </p>
            </div>
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-stone-200 bg-white py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-stone-900"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "rounded-full bg-stone-900 px-5 py-2 text-white hover:bg-stone-800"
                    : "rounded-full border border-stone-300 bg-white px-5 py-2 text-stone-700 hover:bg-stone-100"
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/80">
                  <div className={`relative h-72 bg-gradient-to-br ${product.tone} p-5`}>
                    <button className="absolute right-4 top-4 rounded-full bg-white/70 p-2 hover:bg-white">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="rounded-full bg-white/80 text-stone-800 px-3 py-1 text-sm w-fit">{product.tag}</div>
                    <div className="mx-auto mt-8 h-48 w-32 rounded-t-full bg-white/70 shadow-inner" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{product.category}</p>
                        <h3 className="mt-2 text-xl font-semibold text-stone-950">{product.name}</h3>
                      </div>
                      <p className="text-lg font-semibold text-stone-950">{product.price}</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-stone-600">{product.description}</p>
                    <button className="mt-5 w-full rounded-full bg-stone-900 py-3 text-white hover:bg-stone-800">
                      Add to bag
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="story" className="bg-stone-950 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] bg-gradient-to-br from-stone-800 to-stone-700 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-stone-300">Brand story</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">Clothing with clean lines and graceful coverage.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-stone-300">
                Line & Grace is built for women who want modest pieces that still feel current, polished, and easy to style. The collection focuses on neutral colours, relaxed tailoring, long silhouettes, and versatile staples that work across casual, workwear, and elevated everyday outfits.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["01", "Modest cuts"],
                  ["02", "Western styling"],
                  ["03", "Everyday comfort"],
                ].map(([number, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-2xl font-semibold">{number}</p>
                    <p className="mt-2 text-sm text-stone-300">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-stone-950">Join the first drop list</h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-600">
            Be first to hear about the launch collection, supplier previews, and limited early-bird offers.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-full border border-stone-200 bg-white p-2 shadow-sm sm:flex-row">
            <input placeholder="Enter your email" className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 focus:outline-none focus:ring-0" />
            <button className="rounded-full bg-stone-900 px-7 py-3 text-white hover:bg-stone-800">Notify me</button>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Line & Grace</p>
            <p className="mt-1 text-sm text-stone-500">Modern modest westernwear for everyday elegance.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-stone-600">
            <a href="#shop" className="hover:text-stone-950">Shop</a>
            <a href="#collections" className="hover:text-stone-950">Collections</a>
            <a href="#story" className="hover:text-stone-950">About</a>
            <a href="#contact" className="hover:text-stone-950">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
