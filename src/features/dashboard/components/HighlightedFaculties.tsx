import { motion } from 'motion/react';
import { Users, Award, TrendingUp, FileText, Sparkles } from 'lucide-react';

const faculties = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    department: 'Computer Science & Engineering',
    projects: 24,
    funding: 125,
    patents: 18,
    h_index: 42,
    impact: 96,
    specialization: 'AI/ML, Deep Learning',
    recentWork: 'Developed novel transformer architecture for Indian language processing achieving 94% accuracy',
    highlight: 'top-performer'
  },
  {
    id: 2,
    name: 'Prof. Ananya Sharma',
    department: 'Electrical Engineering',
    projects: 19,
    funding: 98,
    patents: 15,
    h_index: 38,
    impact: 92,
    specialization: 'Smart Grid, IoT',
    recentWork: 'Created AI-powered energy distribution system reducing transmission losses by 23%',
    highlight: 'rising-star'
  },
  {
    id: 3,
    name: 'Dr. Vikram Singh',
    department: 'Mechanical Engineering',
    projects: 16,
    funding: 87,
    patents: 22,
    h_index: 45,
    impact: 94,
    specialization: 'Robotics, Automation',
    recentWork: 'Designed autonomous inspection robot for hazardous industrial environments',
    highlight: 'innovation-leader'
  },
  {
    id: 4,
    name: 'Prof. Meera Patel',
    department: 'Biotechnology',
    projects: 21,
    funding: 112,
    patents: 12,
    h_index: 36,
    impact: 89,
    specialization: 'Bioinformatics, Drug Discovery',
    recentWork: 'ML-based drug screening platform accelerating discovery process by 60%',
    highlight: 'top-performer'
  }
];

const highlightColors = {
  'top-performer': { gradient: 'from-yellow-500 to-orange-500', badge: 'Top Performer', icon: Award },
  'rising-star': { gradient: 'from-blue-500 to-cyan-500', badge: 'Rising Star', icon: TrendingUp },
  'innovation-leader': { gradient: 'from-purple-500 to-pink-500', badge: 'Innovation Leader', icon: Sparkles }
};

export function HighlightedFaculties() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="mb-6"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="text-white mb-6 flex items-center gap-3"
      >
        <span className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
        Highlighted Faculties & Researchers
        <span className="text-sm text-slate-400">(Auto-curated by ML)</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {faculties.map((faculty, index) => {
          const highlight = highlightColors[faculty.highlight as keyof typeof highlightColors];
          const HighlightIcon = highlight.icon;

          return (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />

              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      <span className="text-xl">{faculty.name.split(' ')[1].charAt(0)}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-white mb-1">{faculty.name}</h3>
                      <p className="text-slate-400 text-sm mb-2">{faculty.department}</p>
                      <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${highlight.gradient} rounded-full`}>
                        <HighlightIcon className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{highlight.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <p className="text-slate-400 text-sm mb-2">Specialization</p>
                  <p className="text-blue-300 text-sm">{faculty.specialization}</p>
                </div>

                {/* Recent Work - ML Generated */}
                <div className="mb-4 p-4 bg-slate-700/30 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <p className="text-purple-300 text-xs">ML-Generated Summary</p>
                  </div>
                  <p className="text-slate-300 text-sm italic">{faculty.recentWork}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Projects', value: faculty.projects, icon: FileText },
                    { label: 'Funding', value: `₹${faculty.funding}Cr`, icon: TrendingUp },
                    { label: 'Patents', value: faculty.patents, icon: Award },
                    { label: 'H-Index', value: faculty.h_index, icon: Users }
                  ].map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 + statIndex * 0.05 }}
                      className="bg-slate-700/50 rounded-lg p-2 text-center"
                    >
                      <stat.icon className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                      <p className="text-white text-sm">{stat.value}</p>
                      <p className="text-slate-400 text-xs">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Impact Score */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm">Impact Score</span>
                    <span className="text-white">{faculty.impact}/100</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${faculty.impact}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                      className={`h-full bg-gradient-to-r ${highlight.gradient} shadow-lg`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
