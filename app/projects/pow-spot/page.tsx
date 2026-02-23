'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const GALLERY = [
  { src: '/projects/pow-spot/1.png', alt: 'Pow Spot home: ski resorts list with search and filters' },
  { src: '/projects/pow-spot/2.png', alt: 'Favorites: saved ski centers with search' },
  { src: '/projects/pow-spot/3.png', alt: 'Plan your trip: flights, accommodation, recommended centers' },
  { src: '/projects/pow-spot/4.png', alt: 'Plan your trip: origin, destination, and travel dates' },
  { src: '/projects/pow-spot/5.png', alt: 'Valle Nevado detail: resources, forecast, day pass, trail map' },
  { src: '/projects/pow-spot/6.png', alt: 'Services: transfer, equipment rental, sports stores' },
]

export default function PowSpotProject() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? GALLERY.length - 1 : i - 1))
  }, [])
  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === GALLERY.length - 1 ? 0 : i + 1))
  }, [])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxOpen, goPrev, goNext])
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200/80 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900 hover:text-blue-800 transition-colors">
            Tomas Urizar
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">About</Link>
            <Link href="/#experience" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">Experience</Link>
            <Link href="/#projects" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">Projects</Link>
            <Link href="/#contact" className="text-slate-600 hover:text-blue-800 transition-colors font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <Link href="/#projects" className="inline-flex items-center text-blue-800 hover:underline mb-6 transition font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                Pow Spot
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Mobile-first app to discover, compare, and plan trips to ski resorts in Chile. Weather, webcams, maps, services, and trip planning in one place.
              </p>
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">Expo</span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">React Native</span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">Expo Router</span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-md text-sm font-medium">JavaScript</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md max-w-[19rem] max-h-[560px] mx-auto">
              <Image
                src="/projects/pow-spot/1.png"
                alt="Pow Spot home screen"
                width={320}
                height={560}
                className="object-contain w-full h-auto max-h-[560px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Overview</h2>
          <div className="space-y-4 text-slate-700">
            <p>
              Pow Spot is a mobile-first application (with web support) built with Expo and React Native. It helps users discover, compare, and explore ski resorts in Chile through clear, visual, and structured information: centers list, detail views with resources and forecast, services (transfer, equipment rental, sports stores), and trip planning (flights, accommodation, recommended centers).
            </p>
            <p>
              The project is designed as a strong MVP: simple, useful, and technically clean, with file-based routing (Expo Router), scalable structure, and a path to future data and backend integration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Demo & screens</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                <video
                  controls
                  className="w-full aspect-video"
                  poster="/projects/pow-spot/1.png"
                  preload="metadata"
                  playsInline
                >
                  <source src="/projects/pow-spot/powspot_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-slate-600 mt-3 text-sm">
                If you’d like to try the app live (e.g. via Expo Go), <Link href="/#contact" className="text-blue-800 hover:underline font-medium">get in touch</Link> and I’ll share a link or set up a session.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-700 mb-3">Screens — click for full size</p>
              <div className="grid grid-cols-3 gap-2">
                {GALLERY.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => { setLightboxIndex(i); setLightboxOpen(true) }}
                    className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 hover:border-blue-800 hover:ring-2 hover:ring-blue-800/30 transition-all focus:outline-none focus:ring-2 focus:ring-blue-800"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={120}
                      height={210}
                      className="object-cover w-full h-full aspect-[9/19]"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className="relative max-h-[85vh] max-w-[90vw] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY[lightboxIndex].src}
              alt={GALLERY[lightboxIndex].alt}
              width={400}
              height={700}
              className="object-contain max-h-[85vh] w-auto rounded shadow-2xl"
            />
          </div>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} / {GALLERY.length}
          </p>
        </div>
      )}

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Home & centers</h3>
              <p className="text-slate-600 text-sm">List of ski centers with image, region, skiable distance, and reference price; search and filters; dynamic detail screen per center.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Plan your trip</h3>
              <p className="text-slate-600 text-sm">Origin and destination for flights, optional travel dates, accommodation by center, and recommended snow centers.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Services</h3>
              <p className="text-slate-600 text-sm">Categories: transfer (rides to resorts), equipment rental (ski and snowboard), sports stores (gear and apparel).</p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Center detail</h3>
              <p className="text-slate-600 text-sm">Resources (directions, web, webcams, report), 5-day forecast, day pass and buy ticket, trail map.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['Expo', 'React Native', 'Expo Router', 'JavaScript', 'Expo Go'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-md text-sm font-medium border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-slate-900 text-slate-400 text-center">
        <p>© {new Date().getFullYear()} Tomas Urizar Kleinknecht.</p>
      </footer>
    </main>
  )
}
