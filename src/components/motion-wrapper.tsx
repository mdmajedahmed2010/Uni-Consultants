import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animated Number Counter (e.g. 0 -> 2500+)
 * Animates smoothly when scrolled into view.
 */
export function CountUp({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (decimals > 0) {
      return `${prefix}${latest.toFixed(decimals)}${suffix}`;
    }
    return `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
  });

  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Emil snappy ease-out
      onUpdate: (latest) => {
        if (decimals > 0) {
          setDisplayValue(`${prefix}${latest.toFixed(decimals)}${suffix}`);
        } else {
          setDisplayValue(`${prefix}${Math.floor(latest).toLocaleString()}${suffix}`);
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

/**
 * Slide-in from Left, Right, Up, or Down on viewport enter.
 */
export function SlideIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  distance = 40,
  className,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -distance, y: 0 };
      case "right":
        return { opacity: 0, x: distance, y: 0 };
      case "down":
        return { opacity: 0, x: 0, y: -distance };
      case "up":
      default:
        return { opacity: 0, x: 0, y: distance };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Container for Grids and Lists.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className,
}: {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger Item for cards inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  direction = "up",
  distance = 30,
  className,
}: {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  distance?: number;
  className?: string;
}) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -distance, y: 0 };
      case "right":
        return { opacity: 0, x: distance, y: 0 };
      case "up":
      default:
        return { opacity: 0, x: 0, y: distance };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitial(),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated Section Heading with staggered title and description.
 */
export function MotionHeading({
  tag,
  title,
  highlight,
  description,
  tagColor = "text-[#043E8B]",
  highlightColor = "text-red-600",
  align = "center",
  className,
}: {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  tagColor?: string;
  highlightColor?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left",
        "mb-12 sm:mb-14",
        className,
      )}
    >
      {tag && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "inline-block text-xs font-extrabold uppercase tracking-widest mb-2.5",
            tagColor,
          )}
        >
          {tag}
        </motion.div>
      )}

      <h2 className="font-serif-editorial text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}{" "}
        {highlight && <span className={cn("italic font-normal", highlightColor)}>{highlight}</span>}
      </h2>

      {description && (
        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
