import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  CircleUserRound,
  FileText,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  ReceiptText,
  ShieldCheck,
  Wallet,
  X,
  FileSignature,
} from 'lucide-react'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/dm-sans'
import {
  APROVACAO,
  AVISO_PRODUTOS,
  CAMPANHA,
  CONDICOES,
  DESTAQUES_RESTRICOES,
  DOCUMENTOS,
  FAQ,
  LINHAS,
  MAILTO_SAC,
  PASSOS,
} from './content/campanha'
import { RegulamentoLeitor } from './components/RegulamentoLeitor'

const base = import.meta.env.BASE_URL
const iconesDocs = [ReceiptText, CircleUserRound, MessageSquareText, Camera, Wallet, FileSignature]
const corPasso = ['amarelo', 'rosa', 'ceu', 'amarelo', 'rosa', 'ceu']

const NAV = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#regras', label: 'Regras' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

function Selo() {
  return (
    <svg className="selo" viewBox="0 0 200 200" role="img" aria-label="Selo da campanha: satisfação garantida, condições no regulamento">
      <defs>
        <path id="selo-circulo" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="98" className="selo-fundo" />
      <circle cx="100" cy="100" r="88" className="selo-aro" />
      <text className="selo-texto-circ">
        <textPath href="#selo-circulo" startOffset="0">
          SATISFAÇÃO GARANTIDA • CONDIÇÕES NO REGULAMENTO •
        </textPath>
      </text>
      <text x="100" y="92" textAnchor="middle" className="selo-grande">SEU</text>
      <text x="100" y="116" textAnchor="middle" className="selo-medio">DINHEIRO</text>
      <text x="100" y="138" textAnchor="middle" className="selo-pequeno">DE VOLTA*</text>
    </svg>
  )
}

export function App() {
  const [menu, setMenu] = useState(false)
  const [regAberto, setRegAberto] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a className="pular" href="#conteudo">Pular para o conteúdo</a>
      {APROVACAO.modoAprovacao && (
        <p className="faixa-aprovacao" role="note">
          <strong>Versão para aprovação interna.</strong> Conteúdo sujeito à aprovação final do regulamento.
        </p>
      )}

      <header className="topo">
        <div className="topo-inner">
          <a href="#inicio" className="topo-logo" aria-label="FranceFarma Cosméticos — início">
            <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" />
          </a>
          <nav id="menu-principal" className={`topo-nav ${menu ? 'aberto' : ''}`} aria-label="Principal">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} onClick={() => setMenu(false)}>{n.label}</a>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn-azul btn-p" onClick={() => { setMenu(false); setRegAberto(true) }}>
              <FileText aria-hidden="true" /> Regulamento
            </button>
          </nav>
          <button type="button" className="topo-menu" aria-expanded={menu} aria-controls="menu-principal" onClick={() => setMenu((v) => !v)}>
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr">{menu ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO ------------------------------------------------------ */}
        <section id="inicio" className="hero" aria-labelledby="hero-titulo">
          <div className="hero-inner">
            <div className="hero-texto">
              <p className="chip">
                <MapPin aria-hidden="true" /> Goiás · compras de 14/09 a 31/12/2026
              </p>
              <h1 id="hero-titulo">
                <span className="h1-a">Satisfação garantida</span>
                <span className="h1-b">ou seu dinheiro de volta</span>
              </h1>
              <p className="hero-sub">
                Comprou um produto participante da FranceFarma e não ficou satisfeito? Você pode pedir o reembolso do
                valor pago, seguindo as regras da campanha.
              </p>
              <div className="hero-ctas">
                <a href="#regras" className="btn btn-amarelo">
                  Ver as regras <ArrowRight aria-hidden="true" />
                </a>
                <a href="#produtos" className="btn btn-contorno">
                  Produtos participantes
                </a>
              </div>
              <ul className="hero-fatos" aria-label="Resumo das condições">
                <li><strong>30 dias</strong> para pedir, a partir da nota</li>
                <li><strong>Até 2</strong> unidades por CPF</li>
                <li><strong>Valor pago</strong> conforme a nota fiscal</li>
              </ul>
              <p className="hero-asterisco">
                *Mediante solicitação ao SAC no prazo, devolução do produto na embalagem original com conteúdo restante e
                análise, conforme o regulamento.
              </p>
            </div>

            <div className="hero-arte" aria-label="Embalagens de produtos participantes" role="img">
              <span className="disco disco-1" aria-hidden="true" />
              <span className="disco disco-2" aria-hidden="true" />
              <span className="disco disco-3" aria-hidden="true" />
              <img className="hp hp-1" src={`${base}img/produtos/vid-hidratante-ureia.webp`} alt="" width="256" height="760" fetchPriority="high" />
              <img className="hp hp-2" src={`${base}img/produtos/tnh-shampoo-todos.webp`} alt="" width="310" height="590" />
              <img className="hp hp-3" src={`${base}img/produtos/intimo-floral.webp`} alt="" width="265" height="760" />
              <img className="hp hp-4" src={`${base}img/produtos/tnh-condicionador-princesa.webp`} alt="" width="294" height="560" />
              <div className="selo-wrap">
                <Selo />
              </div>
              <p className="hero-ilustr">Imagens ilustrativas</p>
            </div>
          </div>
        </section>

        <div className="fita" aria-hidden="true">
          <p>
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i}>Compre <b>•</b> Experimente <b>•</b> Não ficou satisfeito? Fale com o SAC <b>•</b> </span>
            ))}
          </p>
        </div>

        {/* GARANTIA -------------------------------------------------- */}
        <section className="garantia" aria-labelledby="garantia-titulo">
          <div className="garantia-inner">
            <div>
              <p className="sobre">A garantia</p>
              <h2 id="garantia-titulo">Experimente sem medo. <span>A sua opinião vale.</span></h2>
              <p>
                Usou o produto conforme as instruções da embalagem e não gostou? Envie a solicitação ao SAC da
                FranceFarma. Atendidas as condições do regulamento, você recebe de volta o valor efetivamente pago pelo
                produto, por PIX ou transferência para conta em seu nome.
              </p>
              <p>A análise confere os requisitos e indícios de fraude; o motivo da insatisfação não é julgado.</p>
            </div>
            <ul className="garantia-lista">
              {DESTAQUES_RESTRICOES.map((t) => (
                <li key={t}>
                  <ShieldCheck aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* COMO FUNCIONA --------------------------------------------- */}
        <section id="como-funciona" className="passos" aria-labelledby="passos-titulo">
          <div className="cab">
            <p className="sobre">Como funciona</p>
            <h2 id="passos-titulo">Do caixa ao reembolso em 6 passos</h2>
          </div>
          <ol className="passos-grade">
            {PASSOS.map((p, i) => (
              <li key={p.titulo} className={`passo passo-${corPasso[i]}`}>
                <span className="passo-num" aria-hidden="true">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                <p className="passo-cl">{p.clausula}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PRODUTOS -------------------------------------------------- */}
        <section id="produtos" className="produtos" aria-labelledby="produtos-titulo">
          <div className="cab">
            <p className="sobre">Produtos participantes</p>
            <h2 id="produtos-titulo">Quem está na campanha</h2>
            <p className="cab-txt">{AVISO_PRODUTOS}</p>
          </div>
          <div className="prod-grade">
            {LINHAS.map((l) => (
              <article key={l.id} className={`prod prod-${l.id}`}>
                <div className="prod-topo">
                  <h3>{l.nome}</h3>
                  <ul aria-label={`${l.descricao.replace(':', '')} — ${l.nome}`}>
                    {l.itens.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
                <div className="prod-fotos">
                  {l.imagens.map((im) => (
                    <img key={im.src} src={im.src} alt={im.alt} loading="lazy" decoding="async" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* REGRAS ---------------------------------------------------- */}
        <section id="regras" className="regras" aria-labelledby="regras-titulo">
          <div className="cab cab-claro">
            <p className="sobre">Regras rápidas</p>
            <h2 id="regras-titulo">As condições principais</h2>
            <p className="cab-txt">Resumo das principais regras. Em caso de dúvida, vale o texto do regulamento.</p>
          </div>
          <dl className="regras-grade">
            {CONDICOES.map((c) => (
              <div key={c.rotulo} className="regra">
                <dt>{c.rotulo}</dt>
                <dd>
                  <strong>{c.valor}</strong>
                  <span>{c.detalhe}</span>
                  <small>Cláusula {c.clausula}</small>
                </dd>
              </div>
            ))}
          </dl>
          <p className="regras-nao">
            <strong>Não são aceitas solicitações</strong> sem nota ou cupom fiscal, com compra fora da vigência, embalagem
            descartada, produto totalmente consumido, uso em desacordo com as instruções, indício de adulteração ou compra
            para revenda ou em nome de pessoa jurídica (cláusula 10).
          </p>
        </section>

        {/* DOCUMENTOS ------------------------------------------------ */}
        <section id="documentos" className="docs" aria-labelledby="docs-titulo">
          <div className="cab">
            <p className="sobre">Documentos</p>
            <h2 id="docs-titulo">O que enviar no e-mail</h2>
            <p className="cab-txt">Tudo em formato digital, anexado ao e-mail para o SAC.</p>
          </div>
          <ul className="docs-grade">
            {DOCUMENTOS.map((d, i) => {
              const Icone = iconesDocs[i]
              return (
                <li key={d.titulo}>
                  <span className="docs-ic" aria-hidden="true"><Icone /></span>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* SAC ------------------------------------------------------- */}
        <section id="sac" className="sac" aria-labelledby="sac-titulo">
          <div className="sac-inner">
            <h2 id="sac-titulo">Não ficou satisfeito?</h2>
            <p className="sac-lead">Envie sua solicitação para o SAC da FranceFarma, o canal indicado no regulamento.</p>
            <a href={MAILTO_SAC} className="btn btn-azul btn-g">
              <Mail aria-hidden="true" /> {CAMPANHA.sacEmail}
            </a>
            <ul className="sac-info">
              <li><CalendarDays aria-hidden="true" /> Até 30 dias corridos da emissão da nota fiscal</li>
              <li><BadgeCheck aria-hidden="true" /> Protocolo confirmado em até 2 dias úteis</li>
            </ul>
            <p className="sac-obs">
              O botão abre o seu programa de e-mail com um roteiro do que enviar. Este site não recebe, armazena nem
              processa solicitações ou dados pessoais.
            </p>
          </div>
        </section>

        {/* FAQ ------------------------------------------------------- */}
        <section id="duvidas" className="faq" aria-labelledby="faq-titulo">
          <div className="cab">
            <p className="sobre">Dúvidas</p>
            <h2 id="faq-titulo">Perguntas frequentes</h2>
          </div>
          <div className="faq-lista">
            {FAQ.map((f) => (
              <details key={f.p}>
                <summary>{f.p}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* REGULAMENTO ----------------------------------------------- */}
        <section id="regulamento" className="reg" aria-labelledby="reg-sec-titulo">
          <div className="reg-caixa">
            <FileText className="reg-ic" aria-hidden="true" />
            <div>
              <h2 id="reg-sec-titulo">Regulamento completo</h2>
              <p>A participação implica a aceitação integral do regulamento.</p>
              {APROVACAO.modoAprovacao && <p className="reg-status">{APROVACAO.versaoRegulamento}</p>}
            </div>
            <div className="reg-acoes">
              <button type="button" className="btn btn-azul" onClick={() => setRegAberto(true)}>
                Ler regulamento completo
              </button>
              <a href={CAMPANHA.regulamentoPdf} className="btn btn-contorno-esc" download>
                Baixar em PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="rodape-inner">
          <div className="rodape-logo">
            <img src={`${base}img/marca/francefarma-logo-480.webp`} alt="FranceFarma Cosméticos" width="480" height="145" loading="lazy" />
          </div>
          <div className="rodape-txt">
            <p className="rodape-camp">{CAMPANHA.nome}</p>
            <p>{CAMPANHA.avisoParticipacao}</p>
          </div>
          <ul className="rodape-links">
            <li><button type="button" onClick={() => setRegAberto(true)}>Regulamento</button></li>
            <li><a href={`mailto:${CAMPANHA.sacEmail}`}>{CAMPANHA.sacEmail}</a></li>
            <li>
              <a href={CAMPANHA.siteOficial} target="_blank" rel="noopener noreferrer">
                Site oficial FranceFarma <ArrowUpRight aria-hidden="true" /><span className="sr"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
        <p className="rodape-legal">
          Promotora: {CAMPANHA.promotora}. Campanha de garantia de satisfação: não é sorteio, concurso ou vale-brinde e
          não substitui os direitos previstos no Código de Defesa do Consumidor.
        </p>
      </footer>

      <RegulamentoLeitor aberto={regAberto} onFechar={() => setRegAberto(false)} />
    </>
  )
}
