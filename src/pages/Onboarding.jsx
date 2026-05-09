import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    emoji: '🇮🇪',
    title: 'Bem-vindo ao Migo',
    tagline: 'Sua comunidade.\nSua língua.\nSua cidade.',
    description: 'Tudo que você precisa para se estabelecer na Irlanda — em um só app, em português.',
    bg: 'from-migo to-migo-dark',
  },
  {
    emoji: null,
    title: 'O que o Migo faz?',
    cards: [
      { icon: '📋', label: 'Migo Ajuda', desc: 'Navegue pela burocracia irlandesa passo a passo' },
      { icon: '🛒', label: 'Migo Mercado', desc: 'Compre e venda dentro da comunidade' },
      { icon: '💼', label: 'Migo Empregos', desc: 'Encontre trabalho ou contrate talentos' },
      { icon: '🏠', label: 'Migo Hospedagem', desc: 'Quartos em casas de brasileiros' },
    ],
    bg: 'from-white to-gray-50',
  },
  {
    emoji: '🤝',
    title: 'Você não está sozinho.',
    tagline: 'Milhares de brasileiros\njá chamam a Irlanda de lar.',
    description: 'Entre no Migo e conecte-se com sua comunidade hoje — de graça.',
    bg: 'from-migo-light to-white',
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem('migo_onboarded', '1');
      navigate('/home');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('migo_onboarded', '1');
    navigate('/home');
  };

  const slide = slides[current];
  const isLast = current === slides.length - 1;

  return (
    <div className="app-shell min-h-screen flex flex-col overflow-hidden">
      {!isLast && (
        <div className="absolute top-4 right-4 z-10">
          <button onClick={handleSkip} className="text-sm font-medium text-gray-400 px-3 py-1">
            Pular
          </button>
        </div>
      )}

      <div className={`flex-1 flex flex-col bg-gradient-to-b ${slide.bg} px-6 pt-16 pb-6`}>

        {/* Slide 1 */}
        {current === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-5xl font-black text-migo" style={{ fontFamily: 'Inter, sans-serif' }}>M</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-migo mb-3" style={{ letterSpacing: '-0.5px' }}>Migo</h1>
              <p className="text-xl font-bold text-gray-800 leading-snug whitespace-pre-line">{slide.tagline}</p>
            </div>
            <p className="text-gray-500 text-base max-w-xs">{slide.description}</p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-migo-light text-migo rounded-full text-xs font-semibold">🇧🇷 Comunidade Brasileira</span>
              <span className="px-3 py-1 bg-migo-light text-migo rounded-full text-xs font-semibold">🇮🇪 Na Irlanda</span>
            </div>
          </div>
        )}

        {/* Slide 2 */}
        {current === 1 && (
          <div className="flex-1 flex flex-col gap-6">
            <div className="text-center pt-4">
              <h2 className="text-2xl font-black text-gray-900">{slide.title}</h2>
              <p className="text-gray-500 text-sm mt-1">4 módulos poderosos para a sua vida na Irlanda</p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-1 content-center">
              {slide.cards.map((card) => (
                <div key={card.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
                  <span className="text-3xl">{card.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{card.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slide 3 */}
        {current === 2 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
            <span className="text-7xl">{slide.emoji}</span>
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-3">{slide.title}</h2>
              <p className="text-lg font-semibold text-migo whitespace-pre-line">{slide.tagline}</p>
            </div>
            <p className="text-gray-500 text-base max-w-xs">{slide.description}</p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                <span className="text-xl">📋</span>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-700">1.847 guias lidos este mês</p>
                  <p className="text-xs text-gray-400">Navegue pela burocracia com facilidade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                <span className="text-xl">💬</span>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-700">100% em Português</p>
                  <p className="text-xs text-gray-400">Conteúdo feito para brasileiros na Irlanda</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 pb-10 pt-4 bg-white flex flex-col gap-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-migo' : 'w-2 h-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <button onClick={handleNext} className="btn-primary flex items-center justify-center gap-2">
          {isLast ? 'Começar — É Grátis' : 'Próximo'}
          <ChevronRight size={18} />
        </button>

        {isLast && (
          <p className="text-center text-xs text-gray-400">
            Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
          </p>
        )}
      </div>
    </div>
  );
}
