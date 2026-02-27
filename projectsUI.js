/* projectsUI.js
   Responsible for rendering the projects screen DOM and wiring interactions (filtering).
   New module extracted from the original projectsScreen.js to keep code modular.

   HOW TO ADD A NEW PROJECT (step-by-step)
   1) Each project is a .card element inside the .proj-grid container.
   2) Required structure (copy this template and paste inside <div class="proj-grid">):
      <div class="card" data-category="site">            <-- set data-category to one of the filter keys (site, gm, aplicativo, mapping, etc.)
        <div class="topo"> ... optional window-control dots ... </div>
        <div class="conteudo">
          <div class="thumb"><img src="/pasta.png" alt="Project thumbnail"></div>
          <div class="titulo">Project Title</div>
          <div class="descricao">Short description (1–2 lines).</div>
          <div class="tags"><div class="tag-cat">CategoryLabel</div></div>
          <div class="status online">Online</div>         <-- add status pill (online/offline)
          <div class="rodape"><div class="tag">Tech</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
        </div>
      </div>
   3) Important sizing notes:
      - The card min-height is controlled in projectsStyles.js (min-height:360px). If a card appears smaller, ensure you keep the .thumb img height (in CSS) or add enough content.
      - Thumbnails: the CSS sets .thumb img { height:220px; object-fit:cover; object-position:center top; } — use images >= 800px wide for best results.
      - Grid layout: by default two columns on desktop (grid-template-columns: repeat(2, 1fr)). To add more columns or change layout, edit projectsStyles.js -> .proj-grid.
   4) Filters:
      - Each .card must have a data-category attribute matching filter buttons' data-filter values.
      - To add a new filter button, add a <button class="filter" data-filter="yourkey">Label</button> in the .proj-filters element and use that same key on your card(s).
   5) Troubleshooting:
      - If multiple cards appear "stacked together" check for missing closing tags or pasted HTML inside another .card.
      - If a single card is much smaller, check that .conteudo contains the full block above and that .thumb img isn't missing or using an inline style overriding height.
   6) Example (small valid card):
      <div class="card" data-category="site">
        <div class="topo">
          <div class="bolinha vermelha"></div>
          <div class="bolinha amarela"></div>
          <div class="bolinha verde"></div>
          <div class="barra"></div>
        </div>
        <div class="conteudo">
          <div class="thumb"><img src="/pasta.png" alt="Example"></div>
          <div class="titulo">Example Project</div>
          <div class="descricao">One-line description.</div>
          <div class="tags"><div class="tag-cat">Site</div></div>
          <div class="status offline">Offline</div>
          <div class="rodape"><div class="tag">HTML</div></div>
        </div>
      </div>

   Keep this template handy when adding projects to avoid layout issues.
*/

export function renderProjectsScreen() {
  document.body.innerHTML = `
    <nav class="navbar">
      <div class="logo">&lt;<span class="surtado">Surtado</span>Dev/&gt;</div>
      <div class="hamburger" id="hamburger" aria-label="Menu" role="button" tabindex="0">
        <i class="fas fa-bars"></i>
      </div>
    </nav>

    <main class="proj-main">
      <div class="proj-filters" role="tablist" aria-label="Filtros de projetos">
        <button class="filter active" data-filter="all">Todos</button>
        <button class="filter" data-filter="site">Sites</button>
        <button class="filter" data-filter="gm">GM</button>
        <button class="filter" data-filter="aplicativo">Aplicativos</button>
        <button class="filter" data-filter="mapping">Mappings</button>
      </div>

      <div class="proj-grid">
        <!-- project cards (kept inline for now, easily replaced by templating later) -->
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto1.jpg" alt="Nexus thumbnail"></div>
            <div class="titulo">Bot Drank Hud</div>
            <div class="descricao">Bot moderno desenvolvido para Discord com foco em automação e praticidade. Interface visual limpa e identidade marcante.Projetado para facilitar comandos e interações rápidas.Leve, funcional e pronto para servidores ativos.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>

        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto2.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Projeto celular</div>
            <div class="descricao">Landing page minimalista com foco total na experiência do usuário. Interface moderna com microinterações suaves. Layout responsivo adaptado para mobile e desktop. Criado para impressionar sem sobrecarregar visualmente.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto3.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Meu site antigo</div>
            <div class="descricao">Página de entrada impactante com identidade visual forte. Design escuro com destaque em vermelho neon. Experiência imersiva com foco em apresentação pessoal. Estrutura pensada para causar primeira impressão marcante.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>

        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto4.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Projeto teste</div>
            <div class="descricao">Portfólio direto ao ponto, moderno e funcional. Apresentação clara de projetos e informações de contato. Interface minimalista com botões de navegação intuitivos. Ideal para desenvolvedores que querem objetividade e elegância.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>

        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto5.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Loja online</div>
            <div class="descricao">Transforme sua presença digital com uma loja moderna, rápida e totalmente responsiva. Layout impactante com foco em conversão e experiência do usuário. Sistema de carrinho, painel administrativo e gestão de produtos integrada. Ideal para quem quer vender mais com estilo e profissionalismo..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>

        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto6.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Gamehub</div>
            <div class="descricao">Plataforma moderna para download e divulgação de jogos com visual cyberpunk imersivo. Sistema organizado com cards dinâmicos, informações técnicas e botão de ação destacado. Interface responsiva com foco em performance e experiência gamer. Perfeito para comunidades e portais de games..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>

        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto7.jpg" alt="Project thumbnail"></div>
            <div class="titulo">+18</div>
            <div class="descricao">Sistema completo de streaming com controle de acesso entre conteúdos públicos e VIP. Player integrado com seleção de qualidade e organização por categorias. Layout escuro otimizado para conforto visual e navegação fluida. Ideal para criadores que desejam monetizar conteúdo exclusivo.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto8.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Rocinha rp</div>
            <div class="descricao">Landing page estratégica para venda de pacotes e benefícios em servidor RP. Design impactante com destaques de vantagens, cupons e chamadas para ação. Estrutura pensada para conversão rápida e credibilidade da comunidade. Perfeito para servidores que querem profissionalizar suas vendas.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto9.jpg" alt="Project thumbnail"></div>
            <div class="titulo">CineYellow</div>
            <div class="descricao">Aplicação estilo streaming com catálogo dinâmico de filmes e avaliações. Carrossel em destaque e organização por categorias com visual moderno. Sistema preparado para integração com API de filmes. Ideal para projetos de entretenimento e estudo de aplicações web..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto10.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Site de aniversario</div>
            <div class="descricao">Landing page animada com efeitos visuais, confetes e transições suaves. Sistema de navegação por etapas criando uma experiência envolvente. Design responsivo com foco emocional e personalização de cores. Ideal para homenagens digitais modernas e surpreendentes..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto11.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Formulario da Rota</div>
            <div class="descricao">Formulário profissional com visual futurista e layout imersivo. Campos organizados para coleta completa de dados e integração com WhatsApp/Discord. Interface moderna com efeito glass e fundo temático. Perfeito para facções e organizações que desejam recrutar com credibilidade..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto12.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Uniao rp</div>
            <div class="descricao">Loja virtual para venda de cargos, pacotes e benefícios dentro do servidor. Sistema organizado com ordenação, carrinho e categorias de produtos. Layout escuro premium com foco em clareza e valorização dos planos.Ideal para monetização estruturada de comunidades RP..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto13.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Fluxos rp</div>
            <div class="descricao">E-commerce temático para venda de itens, skins e equipamentos personalizados. Cards de produtos com destaque visual, preço e botão de compra chamativo.Design moderno com identidade forte em vermelho e preto. Perfeito para servidores que querem uma loja impactante e profissional..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">Node</div></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto14.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Games Hub 2.0</div>
            <div class="descricao">Landing page interativa para produto SaaS.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto15.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Fluxos RP 2.0</div>
            <div class="descricao">Loja virtual temática desenvolvida para servidores de Roleplay. Interface moderna com identidade visual forte em vermelho e preto. Sistema organizado por categorias com destaque para produtos e pacotes VIP. Foco em conversão, clareza e experiência do usuário..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto16.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Snow Shop</div>
            <div class="descricao">E-commerce moderno com layout clean e minimalista. Sistema de cards organizados com preço, descrição e botão de ação. Interface leve e responsiva para melhor desempenho em dispositivos móveis. Ideal para vendas online de produtos digitais ou físicos.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto17.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Loja de produtos</div>
            <div class="descricao">E-commerce moderno desenvolvido para venda de produtos físicos ou digitais. Interface organizada com cards bem estruturados, imagens destacadas e botão de compra chamativo. Sistema pensado para fácil navegação, visual limpo e foco em conversão. Totalmente responsivo, garantindo boa experiência em celular e computador. Ideal para negócios que querem vender online com aparência profissional.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto18.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Nossa loja</div>
            <div class="descricao">Site institucional com vitrine de produtos e identidade visual personalizada. Layout elegante com destaque para categorias e promoções. Estrutura simples e intuitiva, facilitando a jornada do cliente. Projeto voltado para fortalecer marca e presença digital. Perfeito para empresas que desejam apresentar seus produtos de forma organizada e confiável.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto19.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Painel De gerar key</div>
            <div class="descricao">Painel administrativo com sistema de criação e gerenciamento de usuários. Interface organizada com foco em usabilidade e controle interno. Estrutura preparada para integração com banco de dados. Ideal para projetos que exigem gestão segura de contas.</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>
        
        <div class="card" data-category="site">
          <div class="topo">
            <div class="bolinha vermelha"></div>
            <div class="bolinha amarela"></div>
            <div class="bolinha verde"></div>
            <div class="barra"></div>
          </div>
          <div class="conteudo">
            <div class="thumb"><img src="/projeto20.jpg" alt="Project thumbnail"></div>
            <div class="titulo">Kayzen Roleplay</div>
            <div class="descricao">Website institucional desenvolvido para servidor de Roleplay, com identidade visual forte e temática imersiva. Layout moderno com seções organizadas para apresentação do servidor, regras, equipe e formas de acesso. Design responsivo otimizado para celular e desktop, garantindo navegação fluida. Estrutura pensada para transmitir profissionalismo, credibilidade e fortalecer a marca do servidor. Ideal para comunidades RP que desejam se destacar e atrair novos jogadores..</div>
            <div class="tags"><div class="tag-cat">Site</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
          </div>
        
        <div class="card" data-category="gm">
          <div class="conteudo">
            <div class="thumb"><img src="/pasta.png" alt="GM project thumbnail"></div>
            <div class="titulo">GM Toolkit</div>
            <div class="descricao">Coleção de utilitários para Game Maker Studio.</div>
            <div class="tags"><div class="tag-cat">GM</div></div>
            <div class="status offline">Offline</div>
            <div class="rodape"><div class="tag">GML</div></div>
          </div>
        </div>

        <div class="card" data-category="mapping">
          <div class="conteudo">
            <div class="thumb"><img src="/seta-direita.png" alt="Mapping project thumbnail"></div>
            <div class="titulo">Mapper</div>
            <div class="descricao">Ferramenta de mapeamento e visualização de dados geoespaciais.</div>
            <div class="tags"><div class="tag-cat">Mappings</div></div>
            <div class="status online">Online</div>
            <div class="rodape"><div class="tag">Leaflet</div><a href="#" class="visitar">Visitar <i class="fas fa-arrow-right"></i></a></div>
          </div>
        </div>

      </div>
    </main>
  `;
}

export function wireProjects() {
  // filtering logic extracted to keep wiring isolated and testable
  const filters = Array.from(document.querySelectorAll('.filter'));
  const cards = Array.from(document.querySelectorAll('.card'));

  function applyFilter(filter) {
    cards.forEach(card => {
      const cat = (card.getAttribute('data-category') || '').toLowerCase();
      card.style.display = (filter === 'all' || filter === '' || cat === filter) ? '' : 'none';
    });
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter((btn.getAttribute('data-filter') || 'all').toLowerCase());
    });
  });

  // set initial state from active button
  const activeBtn = document.querySelector('.filter.active');
  if (activeBtn) applyFilter((activeBtn.getAttribute('data-filter') || 'all').toLowerCase());
}