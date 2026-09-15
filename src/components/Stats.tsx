import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Store, Star, Clock } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: 340, suffix: '%', label: 'Average review growth' },
  { icon: Store, value: 500, suffix: '+', label: 'Businesses onboard' },
  { icon: Star, value: 12000, suffix: '+', label: 'Reviews collected' },
  { icon: Clock, value: 10, suffix: 's', label: 'Tap to review' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const startTime = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, started]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(66,133,244,0.12),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(52,168,83,0.10),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <p className="font-google text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-gray-400 sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
