'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './shared.module.css'

/* ====== TOPBAR ====== */
export function Topbar({ ctaText, ctaHref }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.topbar} ${scrolled ? styles.topbarScrolled : ''}`}>
      <div className={styles.topbarInner}>
        <a href="/" className={styles.logo}>
          ATHLETIC <span>WAY</span>
        </a>
        <a href={ctaHref} className={styles.topbarCta}>{ctaText}</a>
      </div>
    </nav>
  )
}

/* ====== CTA BUTTON ====== */
export function CTAButton({ href, children, subtext, size = 'large' }) {
  return (
    <div className={styles.ctaWrap}>
      <a
        href={href}
        className={`${styles.ctaButton} ${size === 'small' ? styles.ctaSmall : ''}`}
      >
        {children}
      </a>
      {subtext && <p className={styles.ctaSubtext}>{subtext}</p>}
    </div>
  )
}

/* ====== SECTION LABEL + TITLE ====== */
export function SectionHeader({ label, title, centered = false }) {
  // Parse *italic* markers in title
  const parts = title.split(/(\*[^*]+\*)/)
  const rendered = parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
  })

  return (
    <div className={centered ? styles.sectionHeaderCentered : ''}>
      {label && <p className={styles.sectionLabel}>{label}</p>}
      <h2 className={styles.sectionTitle}>{rendered}</h2>
    </div>
  )
}

/* ====== FAQ ACCORDION ====== */
export function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.faqItem} ${openIndex === i ? styles.faqActive : ''}`}
        >
          <button
            className={styles.faqQuestion}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <span className={styles.faqToggle}>+</span>
          </button>
          <div className={styles.faqAnswer}>
            <div className={styles.faqAnswerInner}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ====== SCROLL REVEAL ====== */
export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ''} ${className}`}
    >
      {children}
    </div>
  )
}

/* ====== FOOTER ====== */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p style={{ marginBottom: 8 }}>
          <a href="https://instagram.com/quentinrandis" target="_blank" rel="noopener noreferrer">
            @quentinrandis
          </a>
        </p>
        <p>© {new Date().getFullYear()} Athletic Way · Tous droits réservés</p>
      </div>
    </footer>
  )
}
