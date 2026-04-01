'use client'

import { motion } from 'framer-motion'

type AnimationVariant = 'slideUp' | 'slideRight' | 'slideDown' | 'scale' | 'blur'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const variants: Record<AnimationVariant, { initial: any; animate: any; transition: any }> = {
  // Landing page & Officers: fade + slide up
  slideUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  // Fall Leadership: fade + slide in from left (energetic, forward-moving)
  slideRight: {
    initial: { opacity: 0, x: -28 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  // State Conference: fade + slide down from above (dramatic, announcement-feel)
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  // Mission & History: fade + scale (classic, story-unfolding)
  scale: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  // Nationals: fade + blur into focus (premium, prestige)
  blur: {
    initial: { opacity: 0, filter: 'blur(8px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function PageTransition({
  children,
  variant = 'slideUp',
}: {
  children: React.ReactNode
  variant?: AnimationVariant
}) {
  const { initial, animate, transition } = variants[variant]

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  )
}
