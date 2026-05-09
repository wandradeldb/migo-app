import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Search, Star, MapPin, Heart, ChevronRight, Phone, Check, Plus,
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import { marketItems, categories } from '../data/mockData';

// ─── Lista de Produtos ────────────────────────────────────────────────────────

function ProductList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [wishlist, setWishlist] = useState([]);
  const [showFreemium, setShowFreemium] = useState(false);

  const filtered = marketItems.filter((item) => {
    const matchCat = activeCategory === 'Todos' || item.category === activeCategory;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.seller.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div className="app-shell">
      <div className="bg-gradient-to-br from-orange-500 to-red-500 px-5 pt-10 pb-6">
        <h1 className="text-white text-2xl font-black mb-1">Migo Mercado</h1>
        <p className="text-white/70 text-sm">Compre e venda dentro da comunidade</p>
        <div className="mt-4 flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2.5">
          <Search size={16} className="text-white/60 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar produtos e vendedores..."
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
              activeCategory === cat ? 'bg-orange-500 text-white shadow-sm' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mx-4 mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-3.5 flex items-center gap-3">
        <Plus size={20} className="text-white flex-shrink-0" />
        <div className="flex-1">
          <p className="text-white font-bold text-sm">Anuncie seus produtos</p>
          <p className="text-white/70 text-xs">Grátis para navegar • €15/mês para vender</p>
        </div>
        <button
          onClick={() => setShowFreemium(true)}
          className="bg-white text-orange-500 font-bold text-xs px-3 py-2 rounded-xl flex-shrink-0"
        >
          Começar a Vender
        </button>
      </div>

      <div className="px-4 pb-24 grid grid-cols-2 gap-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(`/market/${item.id}`)}
            className="card text-left overflow-hidden active:scale-95 transition-transform"
          >
            <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative">
              <span className="text-4xl">{item.emoji}</span>
              {item.badge && (
                <span className={`absolute top-2 left-2 badge ${item.badgeColor} text-[10px]`}>{item.badge}</span>
              )}
              <button
                onClick={(e) => toggleWishlist(item.id, e)}
                className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm"
              >
                <Heart size={14} className={wishlist.includes(item.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'} />
              </button>
            </div>
            <div className="p-3">
              <p className="font-bold text-gray-900 text-xs leading-snug line-clamp-2">{item.title}</p>
              <p className="text-gray-500 text-[10px] mt-0.5 truncate">{item.seller}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-orange-500 font-black text-sm">€{item.price}</p>
                <div className="flex items-center gap-0.5">
                  <Star size={10} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-[10px] text-gray-500">{item.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <MapPin size={9} className="text-gray-300" />
                <span className="text-[10px] text-gray-400 truncate">{item.location}</span>
              </div>
            </div>
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-500 font-medium">Nenhum produto encontrado</p>
          </div>
        )}
      </div>

      {showFreemium && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
          onClick={() => setShowFreemium(false)}
          style={{ maxWidth: '430px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div className="bg-white rounded-t-3xl p-6 w-full" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
            <div className="text-center mb-5">
              <span className="text-4xl">🛒</span>
              <h3 className="text-xl font-black text-gray-900 mt-2">Venda no Migo Mercado</h3>
              <p className="text-gray-500 text-sm mt-1">Alcance milhares de brasileiros em toda a Irlanda</p>
            </div>
            <div className="space-y-3 mb-6">
              {[
                'Anúncios ilimitados de produtos',
                'Contato direto com compradores',
                'Página de perfil da sua loja',
                'Destaque nos resultados de busca',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-migo-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-migo" />
                  </div>
                  <p className="text-sm text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="bg-migo-light rounded-2xl p-4 text-center mb-4">
              <p className="text-3xl font-black text-migo">€15<span className="text-base font-semibold text-gray-500">/mês</span></p>
              <p className="text-xs text-gray-500 mt-0.5">Cancele quando quiser • Sem taxa de adesão</p>
            </div>
            <button
              onClick={() => setShowFreemium(false)}
              className="w-full py-3.5 rounded-2xl text-white font-semibold text-base"
              style={{ background: 'linear-gradient(135deg, #f97316, #ef4444)' }}
            >
              Começar 7 Dias Grátis
            </button>
            <button onClick={() => setShowFreemium(false)} className="w-full text-center text-sm text-gray-400 mt-3 py-2">
              Agora não
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

// ─── Detalhe do Produto ───────────────────────────────────────────────────────

function ProductDetail({ itemId }) {
  const navigate = useNavigate();
  const item = marketItems.find((i) => i.id === Number(itemId));
  const [contacted, setContacted] = useState(false);

  if (!item) {
    return (
      <div className="app-shell flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-4xl mb-3">🤔</p>
          <p className="text-gray-500">Produto não encontrado</p>
          <button onClick={() => navigate('/market')} className="mt-4 text-orange-500 font-semibold text-sm">
            Voltar ao Mercado
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Header title={item.category} back />

      <div className="h-52 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <span className="text-7xl">{item.emoji}</span>
      </div>

      <div className="px-4 py-4 pb-28">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            {item.badge && <span className={`badge ${item.badgeColor} mb-2`}>{item.badge}</span>}
            <h1 className="text-xl font-black text-gray-900 leading-tight">{item.title}</h1>
          </div>
          <p className="text-2xl font-black text-orange-500 flex-shrink-0">€{item.price}</p>
        </div>

        <div className="flex items-center gap-3 mt-4 p-3 bg-gray-50 rounded-2xl">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">
            {item.sellerAvatar}
          </div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 text-sm">{item.seller}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <Star size={11} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-gray-700">{item.rating}</span>
              <span className="text-xs text-gray-400">({item.reviews} avaliações)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <MapPin size={14} className="text-gray-400" />
          <span className="text-sm text-gray-500">{item.location}</span>
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-gray-900 mb-2">Descrição</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="badge bg-orange-50 text-orange-500">{item.category}</span>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setContacted(true)}
            className={`flex-1 py-3.5 rounded-2xl font-semibold text-base transition-all active:scale-95 flex items-center justify-center gap-2 ${
              contacted ? 'bg-migo-light text-migo' : 'text-white shadow-md'
            }`}
            style={contacted ? {} : { background: 'linear-gradient(135deg, #f97316, #ef4444)' }}
          >
            <Phone size={18} />
            {contacted ? 'Contato enviado!' : 'Entrar em Contato'}
          </button>
          <button className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Heart size={20} className="text-gray-400" />
          </button>
        </div>

        {contacted && (
          <div className="mt-3 bg-migo-light border border-migo/20 rounded-xl p-3 text-center">
            <p className="text-sm text-migo font-semibold">Mensagem enviada para {item.seller}!</p>
            <p className="text-xs text-gray-500 mt-0.5">Eles responderão em até 24 horas.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

export default function MigoMarket() {
  const { id } = useParams();
  if (!id) return <ProductList />;
  return <ProductDetail itemId={id} />;
}
