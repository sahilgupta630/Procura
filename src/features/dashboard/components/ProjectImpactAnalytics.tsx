import { motion } from 'motion/react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, DollarSign, Target } from 'lucide-react';
import { useState } from 'react';

const monthlyImpactData = [
  { month: 'Jul', funding: 35, deployments: 12, patents: 8, companies: 15, impact: 72 },
  { month: 'Aug', funding: 42, deployments: 15, patents: 11, companies: 18, impact: 78 },
  { month: 'Sep', funding: 38, deployments: 18, patents: 14, companies: 22, impact: 82 },
  { month: 'Oct', funding: 51, deployments: 21, patents: 18, companies: 26, impact: 88 },
  { month: 'Nov', funding: 48, deployments: 25, patents: 22, companies: 31, impact: 91 },
  { month: 'Dec', funding: 62, deployments: 28, patents: 25, companies: 34, impact: 94 }
];

const radarData = [
  { metric: 'Funding', value: 92, fullMark: 100 },
  { metric: 'Innovation', value: 88, fullMark: 100 },
  { metric: 'Deployment', value: 85, fullMark: 100 },
  { metric: 'Patents', value: 94, fullMark: 100 },
  { metric: 'Industry', value: 87, fullMark: 100 },
  { metric: 'Impact', value: 91, fullMark: 100 }
];

type MetricType = 'funding' | 'deployments' | 'patents' | 'companies' | 'impact';

const metrics: { key: MetricType; label: string; color: string }[] = [
  { key: 'funding', label: 'Funding (Cr)', color: '#10b981' },
  { key: 'deployments', label: 'Deployments', color: '#3b82f6' },
  { key: 'patents', label: 'Patents', color: '#8b5cf6' },
  { key: 'companies', label: 'Companies', color: '#f59e0b' },
  { key: 'impact', label: 'Impact Score', color: '#ec4899' }
];

export function ProjectImpactAnalytics() {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('funding');
  const [chartType, setChartType] = useState<'area' | 'bar' | 'radar'>('area');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
          >
            <TrendingUp className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h3 className="text-white">Project Impact Analytics</h3>
            <p className="text-slate-400 text-sm">Real-time performance tracking</p>
          </div>
        </div>

        <div className="flex gap-2">
          {(['area', 'bar', 'radar'] as const).map((type) => (
            <motion.button
              key={type}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setChartType(type)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                chartType === type
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Metric Selector */}
      {chartType !== 'radar' && (
        <div className="flex flex-wrap gap-2 mb-4">
          {metrics.map((metric) => (
            <motion.button
              key={metric.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMetric(metric.key)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedMetric === metric.key
                  ? 'bg-white/20 text-white shadow-lg border border-white/30'
                  : 'bg-slate-700/30 text-slate-300 hover:bg-slate-700/50'
              }`}
              style={{
                borderLeft: selectedMetric === metric.key ? `4px solid ${metric.color}` : 'none'
              }}
            >
              {metric.label}
            </motion.button>
          ))}
        </div>
      )}

      {/* Chart Display */}
      <motion.div
        key={`${chartType}-${selectedMetric}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {chartType === 'area' && (
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyImpactData}>
              <defs>
                <linearGradient id={`gradient-${selectedMetric}`} x1="0" y1="0" x2="0" y2="1">
                  <stop 
                    offset="5%" 
                    stopColor={metrics.find(m => m.key === selectedMetric)?.color} 
                    stopOpacity={0.8}
                  />
                  <stop 
                    offset="95%" 
                    stopColor={metrics.find(m => m.key === selectedMetric)?.color} 
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Area
                type="monotone"
                dataKey={selectedMetric}
                stroke={metrics.find(m => m.key === selectedMetric)?.color}
                strokeWidth={3}
                fill={`url(#gradient-${selectedMetric})`}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {chartType === 'bar' && (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyImpactData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569', 
                  borderRadius: '12px'
                }}
                labelStyle={{ color: '#e2e8f0' }}
              />
              <Bar
                dataKey={selectedMetric}
                fill={metrics.find(m => m.key === selectedMetric)?.color}
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === 'radar' && (
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#475569" />
              <PolarAngleAxis dataKey="metric" stroke="#94a3b8" />
              <PolarRadiusAxis stroke="#94a3b8" />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.6}
                animationDuration={1500}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569', 
                  borderRadius: '12px'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </motion.div>
    </motion.div>
  );
}
