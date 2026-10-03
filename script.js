const LETTER = "Amor da minha vida,\n\nEu poderia passar horas tentando encontrar as palavras certas para explicar o que sinto por você, mas, sinceramente, acho que nunca conseguiria. Parece que, quando se trata de você, tudo o que eu penso ou escrevo ainda é pouco perto do que existe dentro de mim.\n\nVocê chegou na minha vida e, de alguma forma, conseguiu iluminar lugares em mim que eu nem sabia que estavam tão escuros. Às vezes, basta um sorriso seu, uma palavra, um olhar ou simplesmente ter você perto para o meu dia ficar diferente. Talvez você nem perceba, mas são essas pequenas coisas que fazem você ser tão importante para mim.\n\nEu não consigo olhar para os nossos dias e pensar que são apenas dias comuns. Cada momento com você tem um significado diferente. Até as coisas mais simples ganham outro sentido quando estou ao seu lado. Uma conversa qualquer, uma risada, um abraço, um olhar demorado… tudo isso acaba ficando guardado em mim.\n\nE uma das coisas que mais gosto é poder observar você.\n\nQuanto mais tempo passa, mais eu percebo detalhes que antes talvez não notasse. O jeito que você fala, o seu sorriso, a forma como você se movimenta, suas expressões, suas manias, o jeito que você demonstra carinho… tudo isso faz parte da mulher por quem eu me apaixono cada vez mais.\n\nE é engraçado porque eu realmente sinto que você fica mais linda a cada dia.\n\nMas não estou falando só da sua aparência.\n\nExiste algo em você que vai muito além disso. É a sua maneira de ser, a sua personalidade, a forma como você olha para as coisas, como trata as pessoas e até aqueles pequenos detalhes que provavelmente você nem imagina que eu reparo.\n\nEu gosto de conhecer cada versão sua.\n\nGosto de ver você mudando, amadurecendo, aprendendo, descobrindo novas coisas e se tornando cada vez mais a mulher que você quer ser. E poder acompanhar isso de perto é algo que eu considero muito especial.\n\nTalvez seja por isso que eu não queira apenas viver momentos bonitos com você. Eu quero estar presente na vida real, naquela que tem dias incríveis e dias difíceis também.\n\nQuero estar ao seu lado quando você estiver feliz, mas também quando estiver cansada, preocupada ou quando simplesmente não estiver bem. Quero ser alguém em quem você possa confiar, alguém com quem você possa conversar sobre qualquer coisa, rir das coisas mais bobas ou simplesmente ficar em silêncio sem precisar explicar nada.\n\nPorque, para mim, amar você não é só estar presente quando tudo está perfeito.\n\nÉ escolher estar aqui também quando as coisas não forem tão fáceis.\n\nEu quero conhecer ainda mais você. Quero conhecer seus sonhos, seus medos, seus planos, suas inseguranças e todas aquelas partes que talvez você não mostre para qualquer pessoa. Quero acompanhar suas conquistas e estar ao seu lado para comemorar cada uma delas.\n\nE quando penso no futuro, o que mais gosto é saber que ainda temos tanta coisa para viver.\n\nAinda existem lugares que não conhecemos, histórias que ainda não contamos, fotografias que ainda não tiramos, conversas que ainda não tivemos e momentos que nem imaginamos que vão acontecer.\n\nE eu quero viver tudo isso com você.\n\nNão porque eu ache que a nossa história precisa ser perfeita, mas porque é com você que eu quero construir a minha.\n\nÀs vezes eu olho para você e penso em como é estranho e bonito o fato de uma pessoa conseguir se tornar tão importante para outra. Você deixou de ser apenas alguém que eu amo. Você se tornou alguém que faz parte dos meus pensamentos, dos meus planos e da maneira como eu enxergo o futuro.\n\nE se algum dia você esquecer o quanto é especial, eu espero que se lembre de como eu te vejo.\n\nPorque quando eu olho para você, eu não vejo apenas uma mulher linda.\n\nEu vejo a pessoa que consegue me trazer paz.\n\nVejo alguém que desperta em mim sentimentos que eu nem sabia que conseguiria sentir.\n\nVejo alguém que eu admiro, desejo, respeito e, acima de tudo, amo.\n\nEu sei que talvez nunca consiga explicar exatamente o tamanho desse amor. Algumas coisas simplesmente não cabem em palavras. A gente sente, vive e demonstra.\n\nE é isso que eu quero fazer com você.\n\nQuero demonstrar, nos pequenos detalhes, que você é importante para mim. Quero que você perceba isso nos meus abraços, nas minhas palavras, na maneira como olho para você e até nas coisas simples que faço sem você pedir.\n\nPorque eu não quero que você seja apenas uma lembrança bonita na minha vida.\n\nQuero que seja parte da minha história.\n\nQuero continuar te olhando daqui a muitos anos e ainda encontrar motivos para me apaixonar por você.\n\nQuero ver você florescer, conquistar seus sonhos e se tornar tudo aquilo que deseja ser. E, se a vida permitir, quero estar ao seu lado para assistir a cada uma dessas fases.\n\nTalvez eu nunca encontre uma frase capaz de resumir tudo o que sinto.\n\nEntão vou simplesmente dizer da maneira mais sincera que consigo:\n\nEu te amo.\n\nAmo quem você é hoje, amo quem você está se tornando e quero conhecer todas as versões suas que ainda estão por vir.\n\nE, mesmo sabendo que nenhuma carta seria capaz de explicar completamente o que existe dentro de mim, espero que, ao ler isso, você consiga sentir pelo menos um pouco do que eu sinto quando olho para você.\n\nPorque, no fim, você é uma das coisas mais bonitas que a vida colocou no meu caminho.\n\nE eu espero poder continuar te chamando de meu amor por muito, muito tempo.";

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const music = $('#backgroundMusic');
const soundBtn = $('#soundBtn');
const enterBtn = $('#enterBtn');
let musicPlaying = false;

document.addEventListener('DOMContentLoaded', () => {
  // Loader
  setTimeout(() => $('#loader')?.classList.add('hide'), 1350);

  // Stars
  const stars = $('#stars');
  for (let i = 0; i < 85; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = (Math.random() * 4) + 's';
    s.style.opacity = (0.2 + Math.random() * .55).toFixed(2);
    stars.appendChild(s);
  }

  // Falling petals
  const petals = $('#petals');
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 10) + 's';
    p.style.animationDelay = (-Math.random() * 14) + 's';
    p.style.opacity = (0.15 + Math.random() * .35).toFixed(2);
    petals.appendChild(p);
  }

  // Cursor glow
  const glow = $('.cursor-glow');
  window.addEventListener('pointermove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }, {passive:true});

  // Music: starts only from a user gesture, which works better on iPhone/Safari.
  if (music) {
    music.volume = .34;
    music.addEventListener('playing', () => {
      musicPlaying = true;
      soundBtn.classList.add('playing');
      soundBtn.innerHTML = '<span class="sound-icon">♫</span><span class="sound-label">ligado</span>';
    });
    music.addEventListener('pause', () => {
      musicPlaying = false;
      soundBtn.classList.remove('playing');
      soundBtn.innerHTML = '<span class="sound-icon">♪</span><span class="sound-label">som</span>';
    });
    music.addEventListener('error', () => {
      console.error('Não foi possível carregar musica.mp3', music.error);
    });
  }

  async function startMusic() {
    if (!music || !music.paused) return;
    try {
      await music.play();
    } catch (err) {
      console.warn('O navegador bloqueou a música. Toque no botão de som.', err);
    }
  }

  enterBtn?.addEventListener('click', async () => {
    await startMusic();
    $('#memorias')?.scrollIntoView({behavior:'smooth'});
  });

  soundBtn?.addEventListener('click', async () => {
    if (!music) return;
    if (music.paused) await startMusic();
    else music.pause();
  });

  // Surprise
  const surprise = $('#surpriseModal');
  $('#surpriseBtn')?.addEventListener('click', () => openModal(surprise));
  $$('[data-close="surprise"]').forEach(el => el.addEventListener('click', () => closeModal(surprise)));

  // Photo lightbox
  const photoModal = $('#photoModal');
  const lightboxImg = $('#lightboxImg');
  const lightboxCaption = $('#lightboxCaption');

  $$('.memory-card').forEach(card => {
    card.addEventListener('click', () => {
      lightboxImg.src = card.dataset.photo;
      lightboxImg.alt = card.querySelector('img')?.alt || 'Memória';
      lightboxCaption.textContent = card.dataset.caption || '';
      openModal(photoModal);
    });
  });
  $$('[data-close="photo"]').forEach(el => el.addEventListener('click', () => closeModal(photoModal)));

  // Reasons
  const reasons = [
    'porque seu sorriso muda o clima de qualquer lugar.',
    'porque até suas manias acabaram virando coisas que eu gosto.',
    'porque seu abraço tem um jeito estranho de fazer tudo parecer menos pesado.',
    'porque eu gosto de ouvir você falando até sobre as coisas mais aleatórias.',
    'porque você consegue ser linda nos detalhes que nem percebe.',
    'porque eu gosto da pessoa que sou quando estou perto de você.',
    'porque você virou parte dos meus planos sem precisar pedir.',
    'porque ainda existe muita vida para a gente descobrir juntos.'
  ];
  let reasonIndex = 0;
  const reasonModal = $('#reasonModal');
  $('#reasonWheel')?.addEventListener('click', () => {
    $('#reasonText').textContent = reasons[reasonIndex++ % reasons.length];
    openModal(reasonModal);
  });
  $$('[data-close="reason"]').forEach(el => el.addEventListener('click', () => closeModal(reasonModal)));

  function openModal(el){
    el?.classList.add('open');
    el?.setAttribute('aria-hidden','false');
    document.body.classList.add('lock');
  }
  function closeModal(el){
    el?.classList.remove('open');
    el?.setAttribute('aria-hidden','true');
    document.body.classList.remove('lock');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [surprise, photoModal, reasonModal].forEach(closeModal);
    }
  });

  // Constellation
  const sky = $('#constellation');
  const starTexts = [
    'eu escolheria você de novo.',
    'seu sorriso é uma das minhas paisagens favoritas.',
    'ainda temos tanta coisa para viver.',
    'você é parte da minha história.',
    'eu gosto da nossa versão simples.',
    'meu lugar favorito continua sendo perto de você.',
    'algumas pessoas viram casa.',
    'eu te amo.'
  ];
  starTexts.forEach((text, i) => {
    const s = document.createElement('span');
    s.className = 'c-star';
    s.dataset.text = text;
    const positions = [
      [15,31],[28,20],[44,42],[60,31],[73,53],[49,68],[30,61],[82,28]
    ];
    s.style.left = positions[i][0] + '%';
    s.style.top = positions[i][1] + '%';
    s.style.animationDelay = (i * .2) + 's';
    sky.appendChild(s);
  });

  // Letter reveal + progress
  const letter = $('#letter');
  const paragraphs = LETTER.trim().split(/\n\s*\n/);
  letter.innerHTML = paragraphs.map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  const letterProgress = $('#letterProgress');

  const updateLetterProgress = () => {
    const rect = letter.getBoundingClientRect();
    const viewport = window.innerHeight;
    const total = letter.scrollHeight;
    const seen = Math.min(total, Math.max(0, viewport - rect.top));
    const percent = Math.round((seen / total) * 100);
    letterProgress.textContent = Math.max(0, Math.min(100, percent)) + '%';
  };
  window.addEventListener('scroll', updateLetterProgress, {passive:true});
  updateLetterProgress();

  // Replay
  $('#replayBtn')?.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
    startMusic();
  });

  // Gentle reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [{opacity:0, transform:'translateY(24px)'},{opacity:1, transform:'translateY(0)'}],
          {duration:800, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
        );
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  $$('.memory-card,.future-item,.reason-wheel').forEach(el => observer.observe(el));
});
