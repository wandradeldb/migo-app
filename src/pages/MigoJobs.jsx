import { useState } from 'react';
import {
  MapPin, Globe, Check, Send, User, Briefcase, ChevronRight,
} from 'lucide-react';
import BottomNav from '../components/BottomNav';
import { workers, jobs } from '../data/mockData';

function WorkerCard({ worker, onContact }) {
  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
          {worker.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900">{worker.name}</h3>
            {worker.verified && (
              <span className="badge bg-migo-light text-migo">
                <Check size={10} /> Verificado
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm">{worker.role}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin size={11} className="text-gray-400" />
            <span className="text-xs text-gray-400">{worker.location}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="font-black text-blue-600 text-sm">{worker.rate}</p>
          <p className="text-xs text-gray-400 mt-0.5">{worker.stamp}</p>
        </div>
      </div>

      <p className="text-gray-600 text-xs mt-3 leading-relaxed">{worker.bio}</p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {worker.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="badge bg-blue-50 text-blue-600">{skill}</span>
        ))}
        {worker.skills.length > 4 && (
          <span className="badge bg-gray-100 text-gray-500">+{worker.skills.length - 4} mais</span>
        )}
      </div>

      <div className="flex items-center gap-1.5 mt-3">
        <Globe size={12} className="text-gray-400" />
        <span className="text-xs text-gray-500">{worker.languages.join(' · ')}</span>
      </div>

      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1.5 flex-1">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-xs text-gray-500">{worker.availability}</span>
        </div>
        <button
          onClick={() => onContact(worker)}
          className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-semibold"
        >
          <Send size={12} />
          Contatar
        </button>
      </div>
    </div>
  );
}

function JobCard({ job, onApply }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
          {job.companyLogo}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-sm leading-tight">{job.title}</h3>
          <p className="text-gray-500 text-xs mt-0.5">{job.company}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin size={10} className="text-gray-400" />
            <span className="text-xs text-gray-400">{job.location}</span>
          </div>
        </div>
        <div className="flex-shrink-0 text-right">
          <span className="badge bg-indigo-50 text-indigo-500 text-[10px]">{job.type}</span>
          <p className="text-[10px] text-gray-400 mt-1">{job.posted}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="font-bold text-indigo-600 text-sm">{job.salary}</span>
        {job.languages.includes('Português') && (
          <span className="badge bg-yellow-50 text-yellow-600">🇧🇷 PT Bem-vindo</span>
        )}
      </div>

      <p className="text-gray-600 text-xs mt-2 leading-relaxed line-clamp-2">{job.description}</p>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-100 space-y-3">
          <div>
            <p className="text-xs font-bold text-gray-700 mb-1.5">Requisitos</p>
            {job.requirements.map((req) => (
              <div key={req} className="flex items-start gap-2 mb-1">
                <ChevronRight size={12} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">{req}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-gray-700 mb-1.5">Benefícios</p>
            <div className="flex flex-wrap gap-1.5">
              {job.benefits.map((b) => (
                <span key={b} className="badge bg-migo-light text-migo">{b}</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500">Contato: <span className="text-indigo-500 font-medium">{job.contact}</span></p>
        </div>
      )}

      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
        <button onClick={() => setExpanded(!expanded)} className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-xl text-xs font-semibold">
          {expanded ? 'Ver menos' : 'Ver detalhes'}
        </button>
        <button onClick={() => onApply(job)} className="flex-1 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold">
          Candidatar-se
        </button>
      </div>
    </div>
  );
}

export default function MigoJobs() {
  const [mode, setMode] = useState('find');
  const [contactedWorker, setContactedWorker] = useState(null);
  const [appliedJob, setAppliedJob] = useState(null);
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="app-shell">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 pt-10 pb-6">
        <h1 className="text-white text-2xl font-black mb-1">Migo Empregos</h1>
        <p className="text-white/70 text-sm">
          {mode === 'find' ? 'Trabalhadores qualificados da comunidade' : 'Encontre sua próxima oportunidade'}
        </p>
      </div>

      <div className="px-4 py-4">
        <div className="toggle-pill">
          <button className={mode === 'find' ? 'active' : ''} onClick={() => setMode('find')}>
            🔍 Buscar Trabalho
          </button>
          <button className={mode === 'hire' ? 'active' : ''} onClick={() => setMode('hire')}>
            💼 Contratar
          </button>
        </div>
      </div>

      <div className="px-4 pb-28 space-y-4">
        {mode === 'find' && (
          <>
            <div className="flex items-center justify-between">
              <h2 className="section-title">Trabalhadores Disponíveis</h2>
              <span className="text-xs text-blue-500 font-semibold">{workers.length} disponíveis</span>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-3.5 flex items-center gap-3">
              <User size={18} className="text-blue-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Crie seu perfil</p>
                <p className="text-xs text-gray-500 mt-0.5">Deixe os empregadores encontrarem você — grátis</p>
              </div>
              <button className="flex-shrink-0 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">
                Criar
              </button>
            </div>
            {workers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} onContact={setContactedWorker} />
            ))}
          </>
        )}

        {mode === 'hire' && (
          <>
            <div className="flex items-center justify-between">
              <h2 className="section-title">Vagas Abertas</h2>
              <span className="text-xs text-indigo-500 font-semibold">{jobs.length} vagas</span>
            </div>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-3.5 flex items-center gap-3">
              <Briefcase size={18} className="text-indigo-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Publique uma vaga</p>
                <p className="text-xs text-gray-500 mt-0.5">Alcance 2.400+ imigrantes qualificados</p>
              </div>
              <button onClick={() => setShowPostModal(true)} className="flex-shrink-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl">
                Publicar
              </button>
            </div>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={setAppliedJob} />
            ))}
          </>
        )}
      </div>

      {contactedWorker && (
        <div
          className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl z-50 text-sm font-medium"
          onClick={() => setContactedWorker(null)}
          style={{ maxWidth: '380px', width: 'calc(100% - 32px)' }}
        >
          <Check size={16} className="text-green-400 flex-shrink-0" />
          Mensagem enviada para {contactedWorker.name} 🎉
        </div>
      )}

      {appliedJob && (
        <div
          className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl z-50 text-sm font-medium"
          onClick={() => setAppliedJob(null)}
          style={{ maxWidth: '380px', width: 'calc(100% - 32px)' }}
        >
          <Check size={16} className="text-green-400 flex-shrink-0" />
          Candidatura enviada para {appliedJob.company} 🎉
        </div>
      )}

      {showPostModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
          onClick={() => setShowPostModal(false)}
          style={{ maxWidth: '430px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div className="bg-white rounded-t-3xl p-6 w-full" onClick={(e) => e.stopPropagation()}>
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />
            <h3 className="text-xl font-black text-gray-900 text-center mb-1">Publicar uma Vaga</h3>
            <p className="text-gray-500 text-sm text-center mb-5">Conecte-se com imigrantes qualificados na Irlanda</p>
            <div className="space-y-3 mb-5">
              <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400" placeholder="Título da vaga" />
              <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400" placeholder="Nome da empresa" />
              <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400" placeholder="Localização" />
              <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400" placeholder="Salário / valor por hora" />
              <textarea
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-400 resize-none"
                placeholder="Descrição da vaga..."
                rows={3}
              />
            </div>
            <button onClick={() => setShowPostModal(false)} className="w-full py-3.5 rounded-2xl bg-indigo-600 text-white font-semibold text-base">
              Enviar Vaga
            </button>
            <button onClick={() => setShowPostModal(false)} className="w-full text-center text-sm text-gray-400 mt-3 py-2">
              Cancelar
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
