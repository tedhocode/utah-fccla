'use client'

import { motion } from 'framer-motion'

type AnimationVariant =
  // ── Round 1: fade + motion ────────────────────────────────────────────────
  | 'slideUp'        // fade + slide up          → landing page, officers
  | 'scale'          // fade + scale             → mission & history
  | 'slideRight'     // fade + slide from left   → fall leadership
  | 'slideDown'      // fade + drop from above   → state conference
  | 'blur'           // fade + blur in           → nationals
  // ── Round 2: no fade, pure motion ────────────────────────────────────────
  | 'springUp'       // spring bounce from below → (replaced)
  | 'elasticScale'   // elastic scale pop        → (replaced)
  | 'bounceDown'     // spring drop from above   → (replaced)
  | 'slideSkew'      // slide + skew lean        → (replaced)
  | 'rotateIn'       // rotate + slide settle    → (replaced)
  | 'flip'           // 3D rotateX flip          → (replaced)
  // ── Round 3: first-round styles with fade removed ─────────────────────────
  | 'slideUpPure'    // y only, no opacity       → STAR Events, Scholarships
  | 'scalePure'      // scale only, no opacity   → State Competitions
  | 'slideDownPure'  // y from above, no opacity → Accommodations
  | 'slideRightPure' // x only, no opacity       → Getting Started
  | 'blurPure'       // blur only, no opacity    → Run for Office
  // ── Round 3: triple combinations ─────────────────────────────────────────
  | 'tripleA'        // fade + slideUp + scale   → Newsletters
  | 'tripleB'        // slideRight + scale + blur (no fade) → National Programs
  | 'tripleC'        // fade + slideDown + blur  → Theme & Goals

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const variants: Record<AnimationVariant, { initial: any; animate: any; transition: any; style?: any }> = {

  // ── Round 1 ───────────────────────────────────────────────────────────────
  slideUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  scale: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideRight: {
    initial: { opacity: 0, x: -28 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  // ── Round 2 ───────────────────────────────────────────────────────────────
  springUp: {
    initial: { y: 52 },
    animate: { y: 0 },
    transition: { type: 'spring', stiffness: 280, damping: 22, mass: 0.9 },
  },
  elasticScale: {
    initial: { scale: 0.88 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 350, damping: 20, mass: 0.8 },
  },
  bounceDown: {
    initial: { y: -44 },
    animate: { y: 0 },
    transition: { type: 'spring', stiffness: 300, damping: 18, mass: 1 },
  },
  slideSkew: {
    initial: { x: -40, skewX: 5 },
    animate: { x: 0, skewX: 0 },
    transition: { type: 'spring', stiffness: 260, damping: 22, mass: 0.9 },
  },
  rotateIn: {
    initial: { x: -24, rotate: -5 },
    animate: { x: 0, rotate: 0 },
    transition: { type: 'spring', stiffness: 240, damping: 20, mass: 1 },
  },
  flip: {
    initial: { rotateX: 18 },
    animate: { rotateX: 0 },
    transition: { type: 'spring', stiffness: 220, damping: 18, mass: 1 },
    style: { perspective: 900, transformStyle: 'preserve-3d' },
  },

  // ── Round 3: pure (no fade) ───────────────────────────────────────────────
  slideUpPure: {
    initial: { y: 22 },
    animate: { y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  scalePure: {
    initial: { scale: 0.97 },
    animate: { scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideDownPure: {
    initial: { y: -22 },
    animate: { y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  slideRightPure: {
    initial: { x: -30 },
    animate: { x: 0 },
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  blurPure: {
    initial: { filter: 'blur(8px)' },
    animate: { filter: 'blur(0px)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  // ── Round 3: triples ──────────────────────────────────────────────────────
  // fade + slide up + scale
  tripleA: {
    initial: { opacity: 0, y: 18, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  // slide from left + scale + blur (no fade)
  tripleB: {
    initial: { x: -26, scale: 0.96, filter: 'blur(6px)' },
    animate: { x: 0, scale: 1, filter: 'blur(0px)' },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  // fade + drop from above + blur
  tripleC: {
    initial: { opacity: 0, y: -18, filter: 'blur(6px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function PageTransition({
  children,
  variant = 'slideUp',
}: {
  children: React.ReactNode
  variant?: AnimationVariant
}) {
  const { initial, animate, transition, style } = variants[variant]

  return (
    <motion.div initial={initial} animate={animate} transition={transition} style={style}>
      {children}
    </motion.div>
  )
}
