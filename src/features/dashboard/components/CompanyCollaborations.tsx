import { motion } from 'motion/react';
import { Building2, TrendingUp, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const topCompanies = [
  { name: 'TCS', projects: 28, funding: 145, rating: 4.8 },
  { name: 'Infosys', projects: 22, funding: 132, rating: 4.6 },
  { name: 'Wipro', projects: 18, funding: 98, rating: 4.5 },
  { name: 'Reliance', projects: 25, funding: 187, rating: 4.9 },
  { name: 'Tata Steel', projects: 15, funding: 76, rating: 4.4 },
  { name: 'L&T', projects: 20, funding: 115, rating: 4.7 }
];

const sectorData = [
  { sector: 'IT', count: 68 },
  { sector: 'Manufacturing', count: 45 },
  { sector: 'Energy', count: 38 },
  { sector: 'Healthcare', count: 32 },
  { sector: 'Automotive', count: 28 },
  { sector: 'Others', count: 23 }
];

export function CompanyCollaborations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl"
        >
          <Building2 className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-white">Company Collaborations</h3>
          <p className="text-slate-400 text-sm">Industry partnerships</p>
        </div>
      </div>

      {/* Top Companies */}
      <div className="mb-6">
        <h4 className="text-white text-sm mb-4">Top Partners</h4>
        <div className="space-y-3">
          {topCompanies.slice(0, 4).map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-slate-700/30 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">{company.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h5 className="text-white text-sm">{company.name}</h5>
                    <p className="text-slate-400 text-xs">{company.projects} projects</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400">₹{company.funding}Cr</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-slate-300 text-xs">{company.rating}</span>
                  </div>
                </div>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(company.projects / 28) * 100}%` }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sector Distribution */}
      <div>
        <h4 className="text-white text-sm mb-4">Collaborations by Sector</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={sectorData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
            <XAxis type="number" stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <YAxis dataKey="sector" type="category" stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #475569', 
                borderRadius: '8px' 
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#f59e0b" 
              radius={[0, 8, 8, 0]} 
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
        {[
          { label: 'Total Partners', value: '234', change: '+12.4%' },
          { label: 'Active MoUs', value: '89', change: '+18.7%' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="text-center bg-slate-700/30 rounded-lg p-3"
          >
            <p className="text-white mb-1">{stat.value}</p>
            <p className="text-slate-400 text-xs mb-2">{stat.label}</p>
            <div className="flex items-center justify-center gap-1 text-green-400">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">{stat.change}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
