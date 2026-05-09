import { useNavigate } from 'react-router-dom';
import { Bell, ChevronRight, TrendingUp, Users, Star } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const modules = [
  {
    id: 'help',
    path: '/help',
    label: 'Migo Ajuda',
    emoji: '📋',
    description: 'Guias de burocracia irlandesa',
    color: 'from-emerald-500 to-migo',
    badge: '7 guias',
  },
  {
    id: 'market',
    path: '/market',
    label: 'Migo Mercado',
    emoji: '🛒',
    description: 'Marketplace da comunidade',
    color: 'from-orange-400 to-red-500',
    badge: '8 anúncios',
  },
  {
    id: 'jobs',
    path: '/jobs',
    label: 'Migo Empregos',
    emoji: '💼',
    description: 'Trabalho e contratação',
    color: 'from-blue-500 to-indigo-600',
    badge: '3 vagas',
  },
  {
    id: 'stay',
    path: '/stay',
    label: 'Migo Hospedagem',
    emoji: '🏠',
    description: 'Quartos em casas brasileiras',
    color: 'from-purple-500 to-pink-500',
    badge: '3 quartos',
  },
];

const stats = [
  { icon: Users, value: '2.400+', label: 'Membros', color: 'text-migo' },
  { icon: Star, value: '4,9', label: 'Avaliação', color: 'text-yellow-500' },
  { icon: TrendingUp, value: '1.800+', label: 'Ajudados', color: 'text-blue-500' },
];

export default function Home() {
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <div className="app-shell">
      {/* Cabeçalho verde */}
      <div className="bg-gradient-to-br from-migo to-migo-dark px-5 pt-12 pb-10 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-8 w-48 h-48 bg-white/5 rounded-full" />

        <div className="flex items-start justify-between relative z-10">
          <div>
            <p className="text-white/70 text-sm font-medium">{greeting} 👋</p>
            <h1 className="text-white text-2xl font-black mt-0.5" style={{ letterSpacing: '-0.3px' }}>Migo</h1>
            <p className="text-white/60 text-xs mt-0.5">Sua comunidade na Irlanda</p>
          </div>
          <button className="relative p-2 bg-white/15 rounded-xl">
            <Bell size={20} className="text-white" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </button>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5">
          <span className="text-sm">🇧🇷</span>
          <p className="text-white text-xs font-semibold">Sua língua. Sua cidade. Sua comunidade.</p>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="mx-4 -mt-5 bg-white rounded-2xl shadow-md border border-gray-100 p-4 flex items-center justify-around">
        {stats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-1">
              <Icon size={14} className={color} />
              <span className="font-bold text-gray-900 text-sm">{value}</span>
            </div>
            <span className="text-gray-400 text-xs">{label}</span>
          </div>
        ))}
      </div>

      {/* Grade de módulos */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="section-title">Módulos</h2>
          <span className="text-xs text-migo font-semibold">4 disponíveis</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => navigate(mod.path)}
              className="relative overflow-hidden rounded-2xl text-left active:scale-95 transition-transform"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              <div className={`bg-gradient-to-br ${mod.color} p-4 h-36 flex flex-col justify-between`}>
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{mod.emoji}</span>
                  <span className="bg-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    {mod.badge}
                  </span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{mod.label}</p>
                  <p className="text-white/75 text-xs mt-0.5 leading-snug">{mod.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dica rápida */}
      <div className="mx-4 mt-5 mb-6 bg-migo-light border border-migo/20 rounded-2xl p-4 flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="flex-1">
          <p className="text-sm font-bold text-migo">Chegou agora na Irlanda?</p>
          <p className="text-xs text-gray-600 mt-0.5">Comece pelo guia do Número PPS — é o primeiro passo para tudo.</p>
        </div>
        <button
          onClick={() => navigate('/help/pps-number')}
          className="flex-shrink-0 p-1.5 bg-migo rounded-xl"
        >
          <ChevronRight size={16} className="text-white" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
