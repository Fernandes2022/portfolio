'use client'

import { motion, MotionProps } from 'framer-motion'
import React from 'react'

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

export const MotionDiv = motion.div as React.FC<MotionDivProps>


