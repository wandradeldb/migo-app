import { useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, ShoppingBag, Briefcase, Building2 } from 'lucide-react';

const tabs = [
  { path: '/home', icon: Home, label: 'Início' },
  { path: '/help', icon: BookOpen, label: 'Ajuda' },
  { path: '/market', icon: ShoppingBag, label: 'Mercado' },
  { path: '/jobs', icon: Briefcase, label: 'Empregos' },
  { path: '/stay', icon: Building2, label: 'Hospedagem' },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 z-50"
         style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.08)' }}>
      <div className="flex items-center justify-around px-2 py-1 pb-safe">
        {tabs.map(({ path, icon: Icon, label }) => {
          const active = isActive(path);
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl transition-all duration-200 min-w-[56px]"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className={`p-1.5 rounded-xl transition-all duration-200 ${active ? 'bg-migo-light' : ''}`}>
                <Icon
                  size={22}
                  strokeWidth={active ? 2.5 : 1.8}
                  className={active ? 'text-migo' : 'text-gray-400'}
                />
              </div>
              <span className={`text-[10px] font-semibold tracking-wide transition-colors ${active ? 'text-migo' : 'text-gray-400'}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
