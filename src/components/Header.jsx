import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell } from 'lucide-react';

export default function Header({ title, subtitle, back = false, action }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <div className="flex items-center gap-3 px-4 py-3 min-h-[56px]">
        {back && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-xl text-gray-600 active:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={22} strokeWidth={2} />
          </button>
        )}
        <div className="flex-1 min-w-0">
          <h1 className={`font-bold text-gray-900 truncate ${subtitle ? 'text-base' : 'text-lg'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs text-gray-500 truncate">{subtitle}</p>
          )}
        </div>
        {action && (
          <div className="flex-shrink-0">{action}</div>
        )}
      </div>
    </header>
  );
}

export function GreenHeader({ children }) {
  return (
    <div className="bg-migo px-4 pt-6 pb-8">
      {children}
    </div>
  );
}
