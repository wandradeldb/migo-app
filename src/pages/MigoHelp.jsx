import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Search, ChevronRight, Clock, CheckCircle, ChevronDown,
  ChevronUp, Star, Lightbulb,
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { guides, consultationTypes, consultants } from '../data/mockData';

// ─── Lista de Guias ───────────────────────────────────────────────────────────

function GuideList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Finanças', 'Imigração', 'Moradia', 'Família', 'Transporte'];

  const filtered = guides.filter((g) => {
    const matchCat = activeCategory === 'Todos' || g.category === activeCategory;
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="app-shell">
      <div className="bg-gradient-to-br from-migo to-migo-dark px-5 pt-10 pb-6">
        <h1 className="text-white text-2xl font-black mb-1">Migo Ajuda</h1>
        <p className="text-white/70 text-sm">Guias passo a passo para a vida na Irlanda</p>
        <div className="mt-4 flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2.5">
          <Search size={16} className="text-white/60 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar guias..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-white placeholder-white/50 text-sm flex-1 outline-none"
          />
        </div>
      </div>

      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat ? 'bg-migo text-white shadow-sm' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-4 pb-4 space-y-3">
        {filtered.map((guide) => (
          <button
            key={guide.id}
            onClick={() => navigate(`/help/${guide.id}`)}
            className="card w-full text-left p-4 flex items-center gap-4 active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 bg-migo-light rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
              {guide.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900 text-sm">{guide.title}</h3>
                {guide.popular && (
                  <span className="badge bg-accent/10 text-accent">Popular</span>
                )}
              </div>
              <p className="text-gray-500 text-xs mt-0.5 truncate">{guide.subtitle}</p>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock size={11} /> {guide.readTime}
                </span>
                <span className="text-xs text-gray-300">•</span>
                <span className="text-xs text-migo font-medium">{guide.category}</span>
              </div>
            </div>
            <ChevronRight size={18} className="text-gray-300 flex-shrink-0" />
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-500 font-medium">Nenhum guia encontrado</p>
            <p className="text-gray-400 text-sm mt-1">Tente outro termo de busca</p>
          </div>
        )}
      </div>

      <div className="mx-4 mb-24 bg-gradient-to-r from-migo to-migo-dark rounded-2xl p-4 flex items-center gap-3">
        <span className="text-3xl flex-shrink-0">🧑‍💼</span>
        <div className="flex-1">
          <p className="font-bold text-white text-sm">Precisa de ajuda personalizada?</p>
          <p className="text-white/70 text-xs mt-0.5">Agende uma consulta com um especialista • a partir de €30</p>
        </div>
        <button
          onClick={() => navigate('/help/booking')}
          className="flex-shrink-0 bg-white text-migo font-bold text-xs px-3 py-2 rounded-xl"
        >
          Agendar
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

// ─── Detalhe do Guia ──────────────────────────────────────────────────────────

function GuideDetail({ guideId }) {
  const navigate = useNavigate();
  const guide = guides.find((g) => g.id === guideId);
  const [expandedStep, setExpandedStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [showFaq, setShowFaq] = useState(false);

  if (!guide) {
    return (
      <div className="app-shell flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-4xl mb-3">🤔</p>
          <p className="text-gray-500">Guia não encontrado</p>
          <button onClick={() => navigate('/help')} className="mt-4 text-migo font-semibold text-sm">
            Voltar para Ajuda
          </button>
        </div>
      </div>
    );
  }

  const toggleComplete = (i) => {
    setCompletedSteps((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    );
  };

  const progress = Math.round((completedSteps.length / guide.steps.length) * 100);

  return (
    <div className="app-shell">
      <Header
        title={guide.title}
        back
        action={
          <button
            onClick={() => navigate('/help/booking')}
            className="text-xs font-semibold text-migo bg-migo-light px-3 py-1.5 rounded-xl"
          >
            Pedir Ajuda
          </button>
        }
      />

      <div className="bg-migo-light px-5 py-5 border-b border-migo/10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">
            {guide.icon}
          </div>
          <div>
            <p className="font-bold text-gray-900">{guide.title}</p>
            <p className="text-gray-500 text-xs mt-0.5">{guide.subtitle}</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={11} /> {guide.readTime}
              </span>
              <span className="badge bg-migo/10 text-migo">{guide.category}</span>
            </div>
          </div>
        </div>

        {completedSteps.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-migo">{progress}% concluído</span>
              <span className="text-xs text-gray-400">{completedSteps.length}/{guide.steps.length} etapas</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-migo rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-4 space-y-3">
        <h2 className="section-title">Passo a Passo</h2>
        {guide.steps.map((step, i) => {
          const isExpanded = expandedStep === i;
          const isDone = completedSteps.includes(i);

          return (
            <div key={i} className={`card overflow-hidden transition-all ${isDone ? 'opacity-70' : ''}`}>
              <button
                className="w-full p-4 flex items-start gap-3 text-left"
                onClick={() => setExpandedStep(isExpanded ? -1 : i)}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); toggleComplete(i); }}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                    isDone ? 'bg-migo border-migo' : 'border-gray-300'
                  }`}
                >
                  {isDone && <CheckCircle size={14} className="text-white" />}
                </button>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Etapa {i + 1}
                  </span>
                  <p className={`font-semibold text-sm mt-0.5 ${isDone ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                    {step.title}
                  </p>
                </div>
                {isExpanded ? (
                  <ChevronUp size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                  {step.tip && (
                    <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3">
                      <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-amber-700 text-xs leading-relaxed">{step.tip}</p>
                    </div>
                  )}
                  {!isDone && (
                    <button
                      onClick={() => { toggleComplete(i); if (i < guide.steps.length - 1) setExpandedStep(i + 1); }}
                      className="mt-3 w-full py-2.5 bg-migo text-white rounded-xl text-sm font-semibold"
                    >
                      Marcar como feito e continuar
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {guide.faq && (
        <div className="px-4 pb-4">
          <button
            onClick={() => setShowFaq(!showFaq)}
            className="w-full flex items-center justify-between py-3 border-t border-gray-100"
          >
            <span className="section-title">Perguntas Frequentes</span>
            {showFaq ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
          </button>
          {showFaq && (
            <div className="space-y-3">
              {guide.faq.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm">P: {item.q}</p>
                  <p className="text-gray-600 text-sm mt-1.5 leading-relaxed">R: {item.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="px-4 pb-28">
        <div className="bg-gradient-to-r from-migo to-migo-dark rounded-2xl p-4">
          <p className="font-bold text-white text-sm">Ainda com dúvidas? Fale com um especialista</p>
          <p className="text-white/70 text-xs mt-0.5 mb-3">Consulta individual em português, a partir de €30</p>
          <button
            onClick={() => navigate('/help/booking')}
            className="bg-white text-migo font-bold text-sm px-4 py-2.5 rounded-xl w-full"
          >
            Agendar Consulta
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

// ─── Agendamento ──────────────────────────────────────────────────────────────

function BookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

  if (booked) {
    return (
      <div className="app-shell min-h-screen flex flex-col items-center justify-center px-6 text-center gap-5">
        <div className="w-20 h-20 bg-migo-light rounded-full flex items-center justify-center">
          <CheckCircle size={40} className="text-migo" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900">Consulta Agendada!</h2>
          <p className="text-gray-500 text-sm mt-2">
            Sua consulta está marcada para{' '}
            <span className="font-semibold text-gray-700">{selectedDate} às {selectedTime}</span>.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Você receberá uma confirmação pelo WhatsApp em breve.
          </p>
        </div>
        <div className="bg-migo-light rounded-2xl p-4 w-full text-left">
          <p className="text-xs text-gray-500 mb-1">Resumo do agendamento</p>
          <p className="font-bold text-gray-900 text-sm">{consultationTypes.find(t => t.id === selectedType)?.label}</p>
          <p className="text-gray-600 text-sm">{consultants.find(c => c.id === selectedConsultant)?.name}</p>
          <p className="text-migo font-bold mt-1">€{consultationTypes.find(t => t.id === selectedType)?.price}</p>
        </div>
        <button onClick={() => navigate('/help')} className="btn-primary">
          Voltar aos Guias
        </button>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header title="Agendar Consulta" back />

      <div className="px-4 py-4 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
              step >= s ? 'bg-migo text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              {s}
            </div>
            {s < 3 && <div className={`h-0.5 flex-1 ${step > s ? 'bg-migo' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>
      <div className="px-4 mb-4 flex justify-between text-xs text-gray-400">
        <span className={step >= 1 ? 'text-migo font-semibold' : ''}>Tipo</span>
        <span className={step >= 2 ? 'text-migo font-semibold' : ''}>Consultor</span>
        <span className={step >= 3 ? 'text-migo font-semibold' : ''}>Data e Hora</span>
      </div>

      <div className="px-4 pb-28 space-y-4">
        {step === 1 && (
          <>
            <h2 className="section-title">Escolha o tipo de consulta</h2>
            <div className="space-y-3">
              {consultationTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`card w-full p-4 text-left transition-all ${selectedType === type.id ? 'border-2 border-migo' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{type.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{type.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="badge bg-migo-light text-migo">
                          <Clock size={10} /> {type.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-black text-migo">€{type.price}</p>
                      {selectedType === type.id && <CheckCircle size={18} className="text-migo ml-auto mt-1" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button className="btn-primary mt-2" disabled={!selectedType} onClick={() => setStep(2)} style={{ opacity: selectedType ? 1 : 0.5 }}>
              Continuar
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="section-title">Escolha seu consultor</h2>
            <div className="space-y-3">
              {consultants.map((c) => (
                <button
                  key={c.id}
                  onClick={() => c.available && setSelectedConsultant(c.id)}
                  className={`card w-full p-4 text-left transition-all ${selectedConsultant === c.id ? 'border-2 border-migo' : ''} ${!c.available ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-migo-light rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                      {c.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900 text-sm">{c.name}</p>
                        {!c.available && <span className="badge bg-red-50 text-red-400">Indisponível</span>}
                      </div>
                      <p className="text-gray-500 text-xs">{c.role}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Star size={11} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-bold text-gray-700">{c.rating}</span>
                        <span className="text-xs text-gray-400">({c.reviews} avaliações)</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {c.languages.map((l) => (
                          <span key={l} className="badge bg-blue-50 text-blue-500">{l}</span>
                        ))}
                      </div>
                    </div>
                    {selectedConsultant === c.id && <CheckCircle size={18} className="text-migo flex-shrink-0" />}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <button className="btn-outline flex-1" onClick={() => setStep(1)}>Voltar</button>
              <button className="btn-primary flex-1" disabled={!selectedConsultant} onClick={() => setStep(3)} style={{ opacity: selectedConsultant ? 1 : 0.5 }}>
                Continuar
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="section-title">Escolha data e horário</h2>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Data</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-migo"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-2">Horários disponíveis</label>
              <div className="grid grid-cols-4 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 rounded-xl text-sm font-semibold transition-all ${selectedTime === t ? 'bg-migo text-white' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Observações (opcional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Descreva brevemente sua situação..."
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-migo resize-none"
              />
            </div>
            {selectedDate && selectedTime && (
              <div className="bg-migo-light rounded-2xl p-4">
                <p className="text-xs text-gray-500 mb-2 font-semibold">Resumo do agendamento</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700"><span className="font-semibold">Tipo:</span> {consultationTypes.find(t => t.id === selectedType)?.label}</p>
                  <p className="text-sm text-gray-700"><span className="font-semibold">Consultor:</span> {consultants.find(c => c.id === selectedConsultant)?.name}</p>
                  <p className="text-sm text-gray-700"><span className="font-semibold">Data:</span> {selectedDate} às {selectedTime}</p>
                  <p className="text-sm font-bold text-migo mt-2">Total: €{consultationTypes.find(t => t.id === selectedType)?.price}</p>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <button className="btn-outline flex-1" onClick={() => setStep(2)}>Voltar</button>
              <button
                className="btn-primary flex-1"
                disabled={!selectedDate || !selectedTime}
                onClick={() => setBooked(true)}
                style={{ opacity: selectedDate && selectedTime ? 1 : 0.5 }}
              >
                Confirmar Agendamento
              </button>
            </div>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default function MigoHelp() {
  const { id } = useParams();
  if (!id) return <GuideList />;
  if (id === 'booking') return <BookingPage />;
  return <GuideDetail guideId={id} />;
}
