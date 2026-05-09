import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin, Star, ChevronRight, Shield, Check,
  Home, Percent,
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { stays } from '../data/mockData';

// ─── Lista de Hospedagens ─────────────────────────────────────────────────────

function StayList() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  return (
    <div className="app-shell">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 px-5 pt-10 pb-6">
        <h1 className="text-white text-2xl font-black mb-1">Migo Hospedagem</h1>
        <p className="text-white/70 text-sm">Quartos em casas de brasileiros na Irlanda</p>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 bg-white/15 rounded-xl px-3 py-2.5">
            <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Entrada</p>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-white text-xs font-semibold outline-none w-full"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="flex-1 bg-white/15 rounded-xl px-3 py-2.5">
            <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">Saída</p>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-white text-xs font-semibold outline-none w-full"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5">
        <Shield size={15} className="text-purple-500 flex-shrink-0" />
        <p className="text-xs text-gray-600">
          <span className="font-bold text-purple-600">Migo Seguro</span> — Anfitriões verificados • Migo cobra 10–15% somente em reservas confirmadas
        </p>
      </div>

      <div className="px-4 mt-4 pb-28 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Quartos Disponíveis</h2>
          <span className="text-xs text-purple-500 font-semibold">{stays.length} quartos</span>
        </div>

        {stays.map((stay) => (
          <button
            key={stay.id}
            onClick={() => navigate(`/stay/${stay.id}`)}
            className="card w-full text-left overflow-hidden active:scale-[0.98] transition-transform"
          >
            <div className="h-44 bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center relative">
              <span className="text-6xl">{stay.emoji}</span>
              <div className="absolute top-3 left-3">
                <span className={`badge ${stay.available ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                  {stay.available ? '● Disponível' : 'Indisponível'}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-2.5 py-1.5">
                <p className="text-purple-700 font-black text-sm leading-none">€{stay.price}<span className="text-xs font-medium text-gray-500">/noite</span></p>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-gray-900 text-sm flex-1 leading-snug">{stay.title}</h3>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold text-gray-700">{stay.rating}</span>
                  <span className="text-xs text-gray-400">({stay.reviews})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 mt-1.5">
                <MapPin size={11} className="text-gray-400" />
                <span className="text-xs text-gray-500">{stay.location}</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5 ml-4">{stay.transport}</p>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center text-base">
                  {stay.hostAvatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-700">{stay.host}</p>
                  <p className="text-[10px] text-gray-400">{stay.hostJoined}</p>
                </div>
                <div className="ml-auto">
                  <span className="badge bg-purple-50 text-purple-500">🇧🇷 Anfitrião Brasileiro</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {stay.features.slice(0, 3).map((f) => (
                  <span key={f} className="badge bg-gray-100 text-gray-600">{f}</span>
                ))}
                {stay.features.length > 3 && (
                  <span className="badge bg-gray-100 text-gray-400">+{stay.features.length - 3}</span>
                )}
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400">Mínimo: {stay.minNights} noites</p>
                  <p className="text-xs text-gray-400">Máximo: {stay.maxNights} noites</p>
                </div>
                <div className="flex items-center gap-1 text-purple-600 font-semibold text-xs">
                  Ver Quarto
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-4 z-40">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-3.5 flex items-center gap-3 shadow-xl">
          <Home size={20} className="text-white flex-shrink-0" />
          <div className="flex-1">
            <p className="font-bold text-white text-sm">Tem um quarto disponível?</p>
            <p className="text-white/70 text-xs">Ganhe €25–€50/noite hospedando brasileiros</p>
          </div>
          <button className="flex-shrink-0 bg-white text-purple-600 font-bold text-xs px-3 py-2 rounded-xl">
            Anunciar
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

// ─── Detalhe da Hospedagem ────────────────────────────────────────────────────

function StayDetail({ stayId }) {
  const navigate = useNavigate();
  const stay = stays.find((s) => s.id === Number(stayId));
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [booked, setBooked] = useState(false);

  if (!stay) {
    return (
      <div className="app-shell flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-4xl mb-3">🤔</p>
          <p className="text-gray-500">Hospedagem não encontrada</p>
          <button onClick={() => navigate('/stay')} className="mt-4 text-purple-500 font-semibold text-sm">
            Voltar para Hospedagem
          </button>
        </div>
      </div>
    );
  }

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut) - new Date(checkIn);
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const subtotal = nights * stay.price;
  const commission = Math.round(subtotal * 0.12);
  const total = subtotal + commission;

  if (booked) {
    return (
      <div className="app-shell min-h-screen flex flex-col items-center justify-center px-6 text-center gap-5">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          <Check size={40} className="text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-gray-900">Reserva Solicitada!</h2>
          <p className="text-gray-500 text-sm mt-2">
            Sua solicitação foi enviada para <span className="font-semibold">{stay.host}</span>.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Eles confirmarão em até 24 horas pelo WhatsApp.
          </p>
        </div>
        <div className="bg-purple-50 rounded-2xl p-4 w-full text-left space-y-1.5">
          <p className="text-sm"><span className="font-semibold text-gray-700">Quarto:</span> <span className="text-gray-600">{stay.title}</span></p>
          <p className="text-sm"><span className="font-semibold text-gray-700">Entrada:</span> <span className="text-gray-600">{checkIn}</span></p>
          <p className="text-sm"><span className="font-semibold text-gray-700">Saída:</span> <span className="text-gray-600">{checkOut}</span></p>
          <p className="text-sm"><span className="font-semibold text-gray-700">Noites:</span> <span className="text-gray-600">{nights}</span></p>
          <p className="text-sm font-bold text-purple-600">Total: €{total}</p>
        </div>
        <button onClick={() => navigate('/stay')} className="btn-primary" style={{ background: 'linear-gradient(135deg, #9333ea, #db2777)' }}>
          Voltar para Hospedagens
        </button>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header title={stay.title} back />

      <div className="h-52 bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center relative">
        <span className="text-7xl">{stay.emoji}</span>
        <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1.5">
          <p className="text-purple-700 font-black text-base leading-none">
            €{stay.price}<span className="text-xs font-medium text-gray-500">/noite</span>
          </p>
        </div>
      </div>

      <div className="px-4 py-4 pb-28 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-xl font-black text-gray-900 flex-1 leading-tight">{stay.title}</h1>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-gray-900">{stay.rating}</span>
              <span className="text-gray-400 text-sm">({stay.reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <MapPin size={13} className="text-gray-400" />
            <span className="text-sm text-gray-500">{stay.location}</span>
          </div>
          <p className="text-xs text-gray-400 mt-0.5 ml-5">{stay.transport}</p>
        </div>

        <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-2xl">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
            {stay.hostAvatar}
          </div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 text-sm">{stay.host}</p>
            <p className="text-xs text-gray-500">{stay.hostJoined}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {stay.hostLanguages.map((l) => (
                <span key={l} className="badge bg-purple-50 text-purple-500">{l}</span>
              ))}
            </div>
          </div>
          <span className="badge bg-green-50 text-green-500 flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            Ativo
          </span>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-1.5">Sobre este quarto</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{stay.description}</p>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-2">O que está incluído</h3>
          <div className="grid grid-cols-2 gap-2">
            {stay.features.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-purple-600" />
                </div>
                <span className="text-xs text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-2">Regras da casa</h3>
          <div className="space-y-1.5">
            {stay.rules.map((rule) => (
              <div key={rule} className="flex items-center gap-2">
                <span className="text-base">•</span>
                <span className="text-xs text-gray-600">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-4 grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-gray-500">Hóspedes</p>
            <p className="font-bold text-gray-900 mt-0.5">{stay.guests} {stay.guests === 1 ? 'pessoa' : 'pessoas'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Mínimo de noites</p>
            <p className="font-bold text-gray-900 mt-0.5">{stay.minNights} noites</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Máximo de noites</p>
            <p className="font-bold text-gray-900 mt-0.5">{stay.maxNights} noites</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Valor por noite</p>
            <p className="font-bold text-purple-600 mt-0.5">€{stay.price}</p>
          </div>
        </div>

        <div className="border border-purple-200 rounded-2xl p-4">
          <h3 className="font-bold text-gray-900 mb-3">Selecione as datas</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Entrada</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Saída</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-purple-400"
              />
            </div>
          </div>

          {nights > 0 && (
            <div className="space-y-1.5 pt-3 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">€{stay.price} × {nights} noites</span>
                <span className="text-gray-700">€{subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1">
                  <Percent size={11} /> Taxa de serviço Migo (12%)
                </span>
                <span className="text-gray-700">€{commission}</span>
              </div>
              <div className="flex justify-between font-bold text-sm pt-1.5 border-t border-gray-100">
                <span className="text-gray-900">Total</span>
                <span className="text-purple-600">€{total}</span>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => checkIn && checkOut && nights >= stay.minNights && setBooked(true)}
          className="w-full py-3.5 rounded-2xl font-semibold text-base text-white transition-all active:scale-95"
          style={{
            background: checkIn && checkOut && nights >= stay.minNights
              ? 'linear-gradient(135deg, #9333ea, #db2777)'
              : '#d1d5db',
          }}
        >
          {!checkIn || !checkOut
            ? 'Selecione as datas para reservar'
            : nights < stay.minNights
            ? `Mínimo de ${stay.minNights} noites necessário`
            : `Solicitar Reserva — €${total}`}
        </button>

        <p className="text-center text-xs text-gray-400">Você não será cobrado até o anfitrião confirmar</p>
      </div>

      <BottomNav />
    </div>
  );
}

export default function MigoStay() {
  const { id } = useParams();
  if (!id) return <StayList />;
  return <StayDetail stayId={id} />;
}
