import { motion } from 'motion/react';
import { DollarSign, Rocket, Award, Building2, TrendingUp, Users, FileText, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

const kpiData = [
  {
    id: 'funding',
    label: 'Total Funding',
    value: 452000000,
    prefix: '₹',
    suffix: 'Cr',
    icon: DollarSign,
    gradient: 'from-green-500 to-emerald-600',
    change: '+24.5%',
    trend: 'up'
  },
  {
    id: 'deployments',
    label: 'Deployments',
    value: 87,
    icon: Rocket,
    gradient: 'from-blue-500 to-cyan-600',
    change: '+18.2%',
    trend: 'up'
  },
  {
    id: 'patents',
    label: 'Patents Filed',
    value: 156,
    icon: Award,
    gradient: 'from-purple-500 to-pink-600',
    change: '+31.7%',
    trend: 'up'
  },
  {
    id: 'companies',
    label: 'Company Partnerships',
    value: 234,
    icon: Building2,
    gradient: 'from-orange-500 to-red-600',
    change: '+12.4%',
    trend: 'up'
  },
  {
    id: 'projects',
    label: 'Active Projects',
    value: 342,
    icon: FileText,
    gradient: 'from-indigo-500 to-blue-600',
    change: '+15.8%',
    trend: 'up'
  },
  {
    id: 'researchers',
    label: 'Active Researchers',
    value: 567,
    icon: Users,
    gradient: 'from-teal-500 to-green-600',
    change: '+9.3%',
    trend: 'up'
  },
  {
    id: 'roi',
    label: 'Avg ROI',
    value: 385,
    suffix: '%',
    icon: Target,
    gradient: 'from-yellow-500 to-orange-600',
    change: '+22.1%',
    trend: 'up'
  },
  {
    id: 'impact',
    label: 'Impact Score',
    value: 94.5,
    suffix: '/100',
    icon: TrendingUp,
    gradient: 'from-rose-500 to-purple-600',
    change: '+7.2%',
    trend: 'up'
  }
];

function formatValue(value: number, prefix?: string, suffix?: string): string {
  if (suffix === 'Cr') {
    return `${prefix || ''}${(value / 10000000).toFixed(1)}${suffix}`;
  }
  return `${prefix || ''}${value}${suffix || ''}`;
}

export function KPIMetrics() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>(
    Object.fromEntries(kpiData.map(kpi => [kpi.id, 0]))
  );

  useEffect(() => {
    const timers = kpiData.map((kpi, index) => {
      return setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = kpi.value / steps;
        let current = 0;
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= kpi.value) {
            current = kpi.value;
            clearInterval(interval);
          }
          setAnimatedValues(prev => ({ ...prev, [kpi.id]: current }));
        }, duration / steps);
      }, index * 100);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white mb-6 flex items-center gap-3"
      >
        <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
        Key Performance Indicators
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-blue-500/50 to-purple-500/50" />
            
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
              <div className="flex items-start justify-between mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 bg-gradient-to-br ${kpi.gradient} rounded-xl shadow-lg`}
                >
                  <kpi.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-1 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <TrendingUp className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 text-xs">{kpi.change}</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <p className="text-white mb-1">
                  {formatValue(animatedValues[kpi.id], kpi.prefix, kpi.suffix)}
                </p>
                <p className="text-slate-400 text-sm">{kpi.label}</p>
              </motion.div>

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${kpi.gradient} rounded-b-2xl origin-left`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
