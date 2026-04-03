import { useState, useEffect } from 'react'
import { ArrowRight, Play, CheckCircle2, ChevronRight, Download, Users, Zap, BookOpen, Smartphone, ShieldCheck, Ticket, LayoutDashboard, Store, Heart, CalendarDays, MessageSquare, Video, Sun, UserPlus, FileText, Tv } from 'lucide-react'
import './App.css'

import mockupImg from './assets/app-mockup.png';

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="dot-pattern-bg min-h-screen">
      {/* Navbar */}
      <nav className={`navbar container ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">
          <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            FH
          </div>
          Faith Hub
        </div>
        
        <div className="nav-links">
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#quem-somos" className="nav-link">Quem Somos</a>
          <a href="#solucoes" className="nav-link">Soluções</a>
          <a href="#gestao" className="nav-link">Faith Hub Studio</a>
          <a href="#contato" className="nav-link">Contato</a>
        </div>

        <div className="nav-actions">
          <a href="https://studio.faithhub.com.br" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginRight: '1rem', padding: '0.5rem 1rem', textDecoration: 'none' }}>Login</a>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
            Falar com Consultor
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge animate-fade-in-up">
              <Zap size={16} fill="currentColor" />
              <span>Plataforma Completa desenvolvida por Cristãos</span>
            </div>
            
            <h1 className="hero-title animate-fade-in-up delay-100">
              Expanda sua Igreja com um <span>Ecossistema de Tecnologia</span>
            </h1>
            
            <p className="hero-description animate-fade-in-up delay-200">
              Da palma da mão do membro no App ao portal de tesouraria do administrador. Conecte Células, Loja, Devocionais e Eventos em uma plataforma unificada.
            </p>
            
            <div className="hero-actions animate-fade-in-up delay-300">
              <button className="btn btn-primary" onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
                Ver Demonstração
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline glass" onClick={() => document.getElementById('solucoes')?.scrollIntoView({behavior: 'smooth'})}>
                Explorar Módulos
              </button>
            </div>
          </div>

          <div className="hero-visual animate-fade-in-up delay-200">
            {/* Main Phone Mockup */}
            <div className="mockup-wrapper">
              <div className="mockup-screen" style={{ background: '#000' }}>
                <img src={mockupImg} alt="Faith Hub App Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>

            {/* Floating Element */}
            <div className="floating-card glass">
              <div className="floating-icon">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>100% Sincronizado</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Web e App Integrados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="section bg-glass" id="quem-somos">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual" style={{ position: 'relative', width: '100%', paddingBottom: '110%' }}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Comunidade Faith Hub" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', borderRadius: '32px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }}
              />
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--primary)', color: 'white', padding: '1.5rem', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(82, 196, 185, 0.5)', maxWidth: '240px' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', lineHeight: 1.2, marginBottom: '4px' }}>Tech & Propósito</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Conectando rebanhos em uma única plataforma cloud de excelência.</div>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">Nascemos para acabar com as planilhas espalhadas.</h2>
              <p className="section-text">
                Assim como as grandes plataformas do mercado, entendemos que uma igreja moderna precisa de ferramentas inteligentes. Mas fomos além: não somos apenas um portal administrativo.
              </p>
              <p className="section-text">
                Construímos um <strong>Ecossistema focado no Engajamento</strong>. Enquanto a secretaria gerencia relatórios e fluxo de caixa pelo Web Portal, o membro leva a igreja no bolso todos os dias, alimentando-se da Palavra e se conectando com sua célula.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 size={20} color="var(--primary)" /> Sem perda de visitantes após os eventos</li>
                <li><CheckCircle2 size={20} color="var(--primary)" /> Automação do envio de devocionais gamificados</li>
                <li><CheckCircle2 size={20} color="var(--primary)" /> Fim do desencontro financeiro com PDV na palma da mão</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções (Jornada App) */}
      <section className="section" id="solucoes">
        <div className="container text-center">
          <h2 className="section-title text-center">A Jornada Digital do seu Membro</h2>
          <p className="section-text text-center mx-auto" style={{ maxWidth: '700px', marginBottom: '3rem' }}>
            Entregamos um App Premium onde seu Rebanho encontra pasto espiritual fresco todo dia.
          </p>

          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {/* 1. Bíblia */}
            <div className="feature-card glass">
              <div className="feature-icon bg-primary-light"><BookOpen size={28} color="var(--primary)" /></div>
              <h3 className="feature-title">Bíblia Sagrada</h3>
              <p className="feature-text">Múltiplas versões disponíveis para o membro acompanhar o culto direto do celular, fazer marcações e criar dezenas de anotações pessoais.</p>
            </div>

            {/* 2. Devocional */}
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(234, 179, 8, 0.1)' }}><Sun size={28} color="#eab308" /></div>
              <h3 className="feature-title">Devocionais Gamificados</h3>
              <p className="feature-text">Leituras diárias assíncronas para fortalecer o hábito espiritual. O membro lê, medita e acompanha o seu próprio progresso de leitura anual.</p>
            </div>

            {/* 3. Loja */}
            <div className="feature-card glass">
              <div className="feature-icon bg-primary-light"><Store size={28} color="var(--primary)" /></div>
              <h3 className="feature-title">Faith Store & Livraria</h3>
              <p className="feature-text">Vitrine virtual completa. Compre livros, camisetas ou reserve lanches da cantina de forma antecipada pelo App.</p>
            </div>

            {/* 4. Cursos e Eventos */}
            <div className="feature-card glass">
              <div className="feature-icon bg-secondary-light"><CalendarDays size={28} color="var(--secondary)" /></div>
              <h3 className="feature-title">Cursos e Eventos</h3>
              <p className="feature-text">Calendário completo da igreja. O membro garante o ingresso ou faz check-in em cursos sem precisar de links externos ou Google Forms.</p>
            </div>

            {/* 5. Contribuir */}
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(34, 197, 94, 0.1)' }}><Heart size={28} color="#22c55e" /></div>
              <h3 className="feature-title">Dízimos e Ofertas</h3>
              <p className="feature-text">Área financeira segura e transparente. Contribua via PIX Cola, anexe comprovantes e apoie campanhas/projetos especiais da igreja local.</p>
            </div>

            {/* 6. Células */}
            <div className="feature-card glass">
              <div className="feature-icon bg-secondary-light"><Users size={28} color="var(--secondary)" /></div>
              <h3 className="feature-title">Integração de Células</h3>
              <p className="feature-text">O membro encontra o pequeno grupo mais próximo e, ao se integrar, acessa materiais em PDF, fotos e um mural de recados privado.</p>
            </div>

            {/* 7. Orações */}
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(139, 92, 246, 0.1)' }}><MessageSquare size={28} color="#8b5cf6" /></div>
              <h3 className="feature-title">Mural de Pedidos de Oração</h3>
              <p className="feature-text">Um espaço de intercessão coletiva. Deixe seu pedido restrito à liderança ou público para que a comunidade o apoie em oração.</p>
            </div>

            {/* 8. Transmissões */}
            <div className="feature-card glass">
              <div className="feature-icon" style={{ background: 'rgba(239, 68, 68, 0.1)' }}><Video size={28} color="#ef4444" /></div>
              <h3 className="feature-title">Transmissões ao Vivo</h3>
              <p className="feature-text">Integração nativa com Youtube e Podcasts. Assista aos cultos de domingo ou acabe com o silêncio através de playlists e lives 24h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Jornada Web (Admin) */}
      <section className="section bg-slate" id="gestao">
        <div className="container">
          <div className="admin-grid">
            <div className="admin-content">
              <h2 className="section-title">O Faith Hub Studio</h2>
              <p className="section-text" style={{ fontSize: '1.1rem' }}>
                Onde tudo ganha vida. Ajuste tudo pelo portal da web e <strong>reflita automaticamente no seu App</strong>. O Studio foi desenhado aos moldes das maiores startups do mundo para que a sua secretaria governe com segurança e em tempo real.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(82, 196, 185, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><LayoutDashboard size={20} color="var(--primary)" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Dashboard</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Monitoramento e dados gerenciais em tempo real.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><UserPlus size={20} color="#22c55e" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Gestão de Membros</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Criação de usuários e envio de convites de acesso.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(234, 179, 8, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><Store size={20} color="#eab308" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Fluxo de Caixa PDV</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Monitor de pedidos estilo Trello para Loja e Café.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><Users size={20} color="#8b5cf6" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Estrutura de Células</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Criação e organização ágil dos pequenos grupos.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><FileText size={20} color="#ef4444" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Materiais de Estudo</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Suba PDFs, vídeos e alinhe a visão da congregação.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><Tv size={20} color="#38bdf8" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Central de Culto</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Fixe canais oficiais e agende transmissões ao vivo.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><Sun size={20} color="#f97316" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Studio Devocional</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Crie devoções diárias para o rebanho comentar.</p></div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '10px', borderRadius: '12px', height: 'fit-content' }}><Ticket size={20} color="#ec4899" /></div>
                  <div><h4 style={{ fontSize: '0.95rem', marginBottom: '4px' }}>Eventos & Cursos</h4><p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: 1.3 }}>Loja de ingressos sem limites ou altas taxas externas.</p></div>
                </div>
              </div>
            </div>
            
            <div className="admin-visual glass">
              <div className="browser-mockup">
                <div className="browser-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <div className="browser-bar">studio.faithhub.com.br</div>
                </div>
                <div className="browser-body">
                  <div className="sidebar">
                    <div className="menu-item active">Dashboard</div>
                    <div className="menu-item">Membros</div>
                    <div className="menu-item">Células</div>
                    <div className="menu-item">PDV & Eventos</div>
                  </div>
                  <div className="main-content">
                    <div className="chart-bar"></div>
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '40%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient" id="contato">
        <div className="container text-center">
          <h2 className="section-title text-white">Pronto para digitalizar o seu rebanho?</h2>
          <p className="section-text text-white mx-auto" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
            Agende uma demonstração gratuita com nosso consultor e veja ao vivo tudo o que construímos operando em harmonia.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-dark)', padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Falar Via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                FH
              </div>
              <h4>Faith Hub</h4>
              <p>Construindo pontes tecnológicas para igrejas locais que amam pessoas.</p>
            </div>
            <div>
              <h5>Ecossistema</h5>
              <a href="#">Super App (Membros)</a>
              <a href="#">Gestão de Células</a>
              <a href="#">Loja e PDV On-line</a>
              <a href="#">Transmissões ao Vivo</a>
            </div>
            <div>
              <h5>Empresa</h5>
              <a href="#">Quem Somos</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
            </div>
            <div>
              <h5>Contato</h5>
              <a href="#">suporte@faithhub.com</a>
              <p>(00) 90000-0000</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Faith Hub Ecossistema. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
