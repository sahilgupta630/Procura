import { motion } from 'motion/react';
import { FileText, Clock, DollarSign, Users, Sparkles, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Diagnostics Platform',
    pi: 'Dr. Rajesh Kumar',
    department: 'CSE',
    funding: 85,
    duration: '24 months',
    progress: 65,
    team: 8,
    summary: 'Developing deep learning models for early disease detection using medical imaging. The system employs advanced CNN architectures achieving 92% accuracy in preliminary trials across multiple disease categories.',
    keywords: ['AI', 'Healthcare', 'Deep Learning'],
    status: 'In Progress'
  },
  {
    id: 2,
    title: 'Smart Grid Optimization using IoT and Machine Learning',
    pi: 'Prof. Ananya Sharma',
    department: 'EE',
    funding: 72,
    duration: '18 months',
    progress: 80,
    team: 6,
    summary: 'Implementation of intelligent energy distribution system leveraging IoT sensors and ML algorithms. Achieved 23% reduction in transmission losses and 18% improvement in load balancing efficiency.',
    keywords: ['IoT', 'Smart Grid', 'Energy'],
    status: 'In Progress'
  },
  {
    id: 3,
    title: 'Autonomous Robot for Industrial Safety Inspection',
    pi: 'Dr. Vikram Singh',
    department: 'ME',
    funding: 95,
    duration: '30 months',
    progress: 45,
    team: 10,
    summary: 'Creating autonomous mobile robots capable of navigating hazardous industrial environments. Features include thermal imaging, gas detection, and real-time anomaly reporting using computer vision.',
    keywords: ['Robotics', 'Safety', 'Automation'],
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'ML-Based Drug Discovery Acceleration Platform',
    pi: 'Prof. Meera Patel',
    department: 'BT',
    funding: 110,
    duration: '36 months',
    progress: 55,
    team: 12,
    summary: 'Revolutionizing drug discovery through machine learning-based molecular screening. The platform reduces screening time by 60% and has identified 15 promising candidate molecules for further investigation.',
    keywords: ['ML', 'Drug Discovery', 'Bioinformatics'],
    status: 'In Progress'
  },
  {
    id: 5,
    title: 'Blockchain-Based Supply Chain Transparency System',
    pi: 'Dr. Arun Mehta',
    department: 'CSE',
    funding: 68,
    duration: '20 months',
    progress: 90,
    team: 7,
    summary: 'End-to-end supply chain tracking using blockchain technology ensuring transparency and preventing counterfeiting. Successfully piloted with 3 major manufacturing companies.',
    keywords: ['Blockchain', 'Supply Chain', 'IoT'],
    status: 'Near Completion'
  },
  {
    id: 6,
    title: 'Quantum Computing for Cryptographic Applications',
    pi: 'Prof. Sarah Gupta',
    department: 'Physics',
    funding: 125,
    duration: '48 months',
    progress: 30,
    team: 15,
    summary: 'Exploring quantum computing applications in cryptography and secure communications. Developed preliminary quantum key distribution protocols with enhanced security features.',
    keywords: ['Quantum', 'Cryptography', 'Security'],
    status: 'Early Stage'
  }
];

export function RecentProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9 }}
        className="text-white mb-6 flex items-center gap-3"
      >
        <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full" />
        Recent Projects
        <span className="text-sm text-slate-400">(ML-Summarized)</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer"
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:border-white/20 transition-all h-full flex flex-col">
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs ${
                  project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  project.status === 'Near Completion' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white mb-3 pr-20">{project.title}</h3>

              {/* PI Info */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                  {project.pi.split(' ')[1].charAt(0)}
                </div>
                <div>
                  <p className="text-slate-300 text-sm">{project.pi}</p>
                  <p className="text-slate-500 text-xs">{project.department}</p>
                </div>
              </div>

              {/* ML Summary */}
              <div className={`mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg transition-all ${
                expandedProject === project.id ? 'max-h-96' : 'max-h-20 overflow-hidden'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <p className="text-purple-300 text-xs">ML Summary</p>
                </div>
                <p className="text-slate-300 text-sm">{project.summary}</p>
              </div>

              {expandedProject !== project.id && (
                <div className="flex items-center gap-1 text-blue-400 text-xs mb-4">
                  <span>Click to read more</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-4 mt-auto">
                <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                  <DollarSign className="w-4 h-4 text-green-400 mx-auto mb-1" />
                  <p className="text-white text-sm">₹{project.funding}L</p>
                  <p className="text-slate-400 text-xs">Funding</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                  <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <p className="text-white text-sm">{project.duration}</p>
                  <p className="text-slate-400 text-xs">Duration</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-2 text-center">
                  <Users className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                  <p className="text-white text-sm">{project.team}</p>
                  <p className="text-slate-400 text-xs">Team</p>
                </div>
              </div>

              {/* Progress */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 text-xs">Progress</span>
                  <span className="text-white text-sm">{project.progress}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
