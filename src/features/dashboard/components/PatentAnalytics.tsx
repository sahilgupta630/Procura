import { motion } from 'motion/react';
import { Award, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const patentByCategory = [
  { name: 'AI/ML', value: 42, color: '#3b82f6' },
  { name: 'IoT', value: 28, color: '#10b981' },
  { name: 'Robotics', value: 24, color: '#8b5cf6' },
  { name: 'Biotech', value: 18, color: '#f59e0b' },
  { name: 'Energy', value: 22, color: '#ec4899' },
  { name: 'Others', value: 22, color: '#6b7280' }
];

const patentTimeline = [
  { year: '2020', filed: 18, granted: 12 },
  { year: '2021', filed: 25, granted: 18 },
  { year: '2022', filed: 32, granted: 24 },
  { year: '2023', filed: 41, granted: 31 },
  { year: '2024', filed: 52, granted: 38 },
  { year: '2025', filed: 28, granted: 15 }
];

export function PatentAnalytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl"
        >
          <Award className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-white">Patent Analytics</h3>
          <p className="text-slate-400 text-sm">Innovation tracking</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pie Chart - Categories */}
        <div>
          <h4 className="text-white text-sm mb-4">Patents by Category</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={patentByCategory}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                animationBegin={500}
                animationDuration={1500}
              >
                {patentByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569', 
                  borderRadius: '8px' 
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-2 gap-2 mt-4">
            {patentByCategory.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-slate-300 text-xs">{category.name}</span>
                <span className="text-slate-400 text-xs">({category.value})</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bar Chart - Timeline */}
        <div>
          <h4 className="text-white text-sm mb-4">Filed vs Granted</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={patentTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
              <XAxis dataKey="year" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569', 
                  borderRadius: '8px' 
                }}
              />
              <Bar dataKey="filed" fill="#8b5cf6" radius={[4, 4, 0, 0]} animationDuration={1500} />
              <Bar dataKey="granted" fill="#10b981" radius={[4, 4, 0, 0]} animationDuration={1500} />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded" />
              <span className="text-slate-300 text-xs">Filed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded" />
              <span className="text-slate-300 text-xs">Granted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
        {[
          { label: 'Total Patents', value: '156', change: '+31.7%' },
          { label: 'Success Rate', value: '73%', change: '+5.2%' },
          { label: 'Pending', value: '42', change: '-8.3%' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="text-center"
          >
            <p className="text-white">{stat.value}</p>
            <p className="text-slate-400 text-xs mb-1">{stat.label}</p>
            <div className={`flex items-center justify-center gap-1 ${
              stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
            }`}>
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
