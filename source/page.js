import { Topbar, CTAButton, SectionHeader, FAQ, Reveal, Footer } from '../components/shared'
import s from './page.module.css'

export const metadata = {
  title: 'Athletic Reset — Retrouve ton corps d\'athlète en 90 jours | Athletic Way',
  description: 'Programme de transformation 90 jours pour hommes de 35+ : redeviens fort, mobile et athlétique avec 3 séances de 60 minutes par semaine.',
}

// ====== CONFIG — Modifie tes liens ici ======
const PAYMENT_LINK = '#offre' // Remplace par ton lien Systeme.io
const INSTAGRAM_URL = 'https://instagram.com/quentinrandis'

// ====== TESTIMONIALS DATA ======
const testimonials = [
  {
    initials: 'Q.',
    name: 'Quentin',
    detail: '-12kg de masse grasse · Force, endurance et mobilité transformées',
    // beforeImg: '/images/quentin-before.jpg',
    // afterImg: '/images/quentin-after.jpg',
    text: (
      <>
        <strong>J&apos;ai fait plus de progrès en quelques mois qu&apos;en des années à m&apos;entraîner seul.</strong> J&apos;ai perdu 12 kg de masse grasse, construit du muscle et amélioré ma force, mon endurance et ma mobilité. Mais le plus important, c&apos;est le changement mental : confiance, constance, fierté. Chaque détail de la programmation est pensé pour progresser sans se perdre ni s&apos;épuiser.
      </>
    ),
  },
  {
    initials: 'JB',
    name: 'Jean-Baptiste',
    detail: 'Musculation + mobilité · Progression durable',
    // beforeImg: '/images/jb-before.jpg',
    // afterImg: '/images/jb-after.jpg',
    text: (
      <>
        J&apos;ai été séduit par l&apos;alliance entre musculation et mobilité. <strong>La variété des exercices garde la motivation intacte.</strong> Tout est intelligemment structuré : on progresse et les mouvements évoluent tout en gardant les bases essentielles. Le coaching m&apos;a permis de corriger rapidement ma technique. Quentin insiste sur la vision long terme : une progression durable, pas un sprint qui mène au burnout.
      </>
    ),
  },
  {
    initials: 'T.',
    name: 'Tim',
    detail: 'Douleurs chroniques éliminées · Force + mobilité + endurance',
    // beforeImg: '/images/tim-before.jpg',
    // afterImg: '/images/tim-after.jpg',
    text: (
      <>
        <strong>Après avoir testé de nombreux formats sans résultats durables, j&apos;ai enfin trouvé un système qui fonctionne.</strong> Avant, mes progrès étaient freinés par des douleurs aux épaules, aux coudes et au dos. Le format full body travaille force, mobilité, explosivité et endurance de manière intelligente. J&apos;ai longtemps pensé qu&apos;il était impossible de tout développer en même temps — cette méthode m&apos;a prouvé le contraire.
      </>
    ),
  },
]

// ====== FAQ DATA ======
const faqItems = [
  {
    question: "J'ai vraiment pas le temps, entre le taf et la famille…",
    answer: "3 séances de 60 minutes par semaine. C'est 3h sur 168 heures. Et quand ta semaine explose, le système Anti-Déraillement prend le relais avec des séances courtes de 30 minutes. Ce programme est littéralement conçu pour les semaines de merde.",
  },
  {
    question: '997€ c\'est cher pour du coaching en ligne…',
    answer: "Ça fait 11€ par jour. Moins qu'un déjeuner. Et contrairement à l'abonnement salle que tu paies sans y aller, ici tu as un coach, un système, un suivi, et une garantie de résultats. La vraie question c'est : combien te coûte une année de plus dans un corps qui ne te ressemble pas ?",
  },
  {
    question: "J'ai besoin de quel matériel ?",
    answer: "Le programme s'adapte à ton matériel. Accès à une salle de sport idéalement, mais des variantes existent pour un setup maison avec le minimum. On en discute au démarrage pour adapter la programmation.",
  },
  {
    question: 'Et si je voyage souvent pour le travail ?',
    answer: "C'est exactement pour ça que le système Anti-Déraillement existe. Des séances \"hôtel\" avec zéro matériel, des protocoles de mobilité pour les jours de transit. Le programme ne s'arrête pas quand tu prends l'avion.",
  },
  {
    question: 'Je suis débutant / j\'ai des blessures, c\'est adapté ?',
    answer: "Le programme est individualisé. La phase 1 \"Réactivation\" est conçue pour repartir de zéro si nécessaire. Si tu as des blessures, on adapte chaque mouvement. Tim, un de mes clients, avait des douleurs chroniques aux épaules et au dos. Elles ont disparu.",
  },
  {
    question: 'Comment se passe le suivi concrètement ?',
    answer: "Un check-in hebdomadaire asynchrone. Tu m'envoies tes retours (sensations, questions, vidéos si besoin), j'analyse et j'ajuste ta programmation. Pas d'appels interminables qui bloquent ton agenda. Efficace, direct, adapté à ton rythme.",
  },
]

export default function AthleticResetPage() {
  return (
    <>
      <Topbar ctaText="Rejoindre le programme" ctaHref="#offre" />

      {/* HERO */}
      <section className={s.hero}>
        <div>
          <p className={s.heroEyebrow}>Programme de transformation · 90 jours</p>
          <h1 className={s.heroTitle}>
            T&apos;AS UN TAF QUI TOURNE<br />
            ET UN CORPS QUI<br />
            NE SUIT <em>PLUS.</em>
          </h1>
          <p className={s.heroSub}>
            Tu enchaînes les calls de 8h à 19h, tu manges un sandwich devant ton écran, et le soir t&apos;as juste l&apos;énergie de t&apos;écrouler dans le canapé. Tu te couches en te disant &quot;demain je m&apos;y mets&quot;. Demain, rebelote.<br /><br />
            <strong>En 90 jours, ça s&apos;arrête.</strong> 3 séances de 60 minutes par semaine.
          </p>
          <div className={s.heroCta}>
            <CTAButton href="#offre">Démarrer ma transformation</CTAButton>
          </div>
        </div>
        <div className={s.heroScroll}>
          <span className={s.heroScrollLine} />
        </div>
      </section>

      {/* VIDEO */}
      <section className={s.videoSection}>
        <div className={s.videoWrapper}>
          <div className={s.videoContainer}>
            {/* Remplace le placeholder par ton embed :
                <iframe src="https://www.youtube.com/embed/TON_ID" frameBorder="0" allowFullScreen /> */}
            <div className={s.videoPlaceholder}>
              <div className={s.videoPlayBtn}>
                <div className={s.videoPlayIcon} />
              </div>
              <span className={s.videoPlayLabel}>Regarde cette vidéo — 4 min</span>
            </div>
          </div>
          <p className={s.videoCaption}>
            Quentin t&apos;explique pourquoi l&apos;Athletic Reset est différent de tout ce que tu as essayé.
          </p>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className={s.sectionDark}>
        <Reveal className={s.container}>
          <SectionHeader label="Sois honnête avec toi-même" title={`C'EST TOI,\n*MOT POUR MOT.*`} />

          <div className={s.painBlock}>
            <p>Tu te réveilles à 6h30, déjà fatigué. Tu bois ton café debout en checkant tes mails. À 9h t&apos;es en call. À 12h tu manges un truc vite fait devant ton écran. À 19h tu rentres vidé. Le canapé gagne. <strong>Tous les soirs.</strong> Tu te couches en te disant &quot;demain je m&apos;y mets&quot;. Demain, même histoire.</p>
          </div>

          <div className={s.painBlock}>
            <p>Ce week-end, tu as essayé de jouer 15 minutes avec tes gamins. Tu étais essoufflé. T&apos;as eu mal au dos le lendemain. T&apos;as vu une photo de toi à la plage l&apos;été dernier et tu ne t&apos;es pas reconnu. <strong>Ce mec là, c&apos;est pas toi.</strong> Pas celui que tu es dans ta tête.</p>
          </div>

          <div className={s.painBlock}>
            <p>Le truc qui te rend dingue ? Tu gères une boîte, des équipes, des budgets, des deadlines. <strong>T&apos;es discipliné dans tout.</strong> Mais sur ton corps, tu galères depuis des mois — peut-être des années. Tu as essayé la salle, les programmes YouTube, les apps. Ça tient 3 semaines et ça s&apos;effondre.</p>
          </div>

          <p className={s.bodyText} style={{ marginTop: 40 }}>
            Si tu viens de lire ça en te disant <strong>&quot;putain c&apos;est exactement moi&quot;</strong> — ce programme a été construit pour toi. Pas pour un profil vague d&apos;homme de 35 ans. Pour toi, spécifiquement.
          </p>
        </Reveal>
      </section>

      {/* WHY YOU FAILED */}
      <section className={s.sectionDarker}>
        <Reveal className={s.containerWide}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionHeader
              label="Ce n'est pas un problème de motivation"
              title={`POURQUOI TU AS *ÉCHOUÉ*\nJUSQU'ICI`}
              centered
            />
            <p className={s.bodyText} style={{ maxWidth: 600, margin: '0 auto' }}>
              Ce n&apos;est pas ta faute. Les solutions que tu as essayées n&apos;étaient tout simplement pas conçues pour ta vie.
            </p>
          </div>

          <div className={s.problemGrid}>
            {[
              { num: '01', title: 'LES PROGRAMMES DE GAMINS', text: "Splits sur 5 jours, 90 minutes par séance, zéro flexibilité. Conçus pour des mecs de 22 ans qui vivent dans une salle de sport. Tu rates lundi ? T'as raté le jour pecs, tant pis. Aucune adaptation. C'est pas fait pour toi." },
              { num: '02', title: "LE FITNESS INSTAGRAM", text: "Si tu voulais un coach qui te file un PDF et te dit de compter tes macros, tu serais pas ici. Tu veux pas juste être \"musclé\" — tu veux sprinter avec tes gamins, bouger sans douleur, te sentir puissant. Les abdos sur Instagram ça intéresse pas ta vie." },
              { num: '03', title: 'LA NUTRITION \"MEAL PREP\"', text: "Tu manges au resto avec des clients mardi. Tu voyages jeudi. T'as un dîner samedi. Et on te demande de peser 150g de poulet avec 200g de riz ? Sérieusement ? Les plans nutrition rigides sont faits pour des gens qui contrôlent chaque repas. Pas pour toi." },
              { num: '04', title: 'ZÉRO PLAN B', text: "C'est LE problème. Ta semaine explose — urgence au taf, gosse malade, voyage imprévu. Ton programme ne prévoit rien. Tu rates, tu culpabilises, tu lâches. 3 semaines de motivation → 1 semaine de merde → abandon. À chaque fois." },
            ].map((item) => (
              <div key={item.num} className={s.problemCard}>
                <span className={s.problemNumber}>{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MID CTA */}
      <section className={s.sectionRed}>
        <div className={s.container} style={{ textAlign: 'center' }}>
          <p className={s.midCtaText}>
            Tu n&apos;as pas un problème de volonté.<br />
            <strong>Tu as un problème de système.</strong><br />
            Et un système, ça se délègue à quelqu&apos;un qui sait le construire.
          </p>
        </div>
      </section>

      {/* THE METHOD — 3 PHASES */}
      <section className={s.sectionDark}>
        <Reveal className={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionHeader
              label="La méthode Athletic Reset"
              title={`3 PHASES.\n90 JOURS.\nUN CORPS D'*ATHLÈTE.*`}
              centered
            />
            <p className={s.bodyText} style={{ maxWidth: 640, margin: '0 auto' }}>
              L&apos;Athletic Reset combine musculation fonctionnelle, mobilité et travail athlétique en un système progressif en 3 phases. Chaque séance dure 60 minutes. 3 fois par semaine. Le reste du temps, tu vis ta vie.
            </p>
          </div>

          {[
            { num: '01', name: 'RÉACTIVATION', weeks: 'Semaines 1 à 4', text: <>On réveille ton corps. Mobilité articulaire, fondations de mouvement, activation musculaire profonde. Dès la semaine 2, tu dors mieux, tu as plus d&apos;énergie, et tu sens que quelque chose a changé. C&apos;est le moment où tu te dis : <strong>&quot;Ok, ça c&apos;est différent de tout ce que j&apos;ai fait avant.&quot;</strong></> },
            { num: '02', name: 'CONSTRUCTION', weeks: 'Semaines 5 à 8', text: <>L&apos;intensité monte. Functional bodybuilding, travail de puissance, séances plus denses. C&apos;est là que le physique commence à changer visiblement. Tu regagnes de la masse musculaire, tu perds du gras, et surtout <strong>tu sens la force revenir</strong>. Ta femme le remarque. Tes collègues commentent.</> },
            { num: '03', name: 'PERFORMANCE', weeks: 'Semaines 9 à 12', text: <>On pousse. Tu fais des choses que tu pensais impossibles. Sprint, explosivité, endurance — ton corps répond à nouveau. C&apos;est la phase où tu prends des vidéos de toi-même parce que <strong>tu es bluffé par ce que tu peux faire</strong>. Plus rapide, plus fort, plus mobile qu&apos;il y a 10 ans.</> },
          ].map((phase) => (
            <div key={phase.num} className={s.phaseCard}>
              <div>
                <div className={s.phaseNumber}>{phase.num}</div>
                <div className={s.phaseLabel}>Phase</div>
              </div>
              <div className={s.phaseContent}>
                <h3>{phase.name}</h3>
                <p className={s.phaseWeeks}>{phase.weeks}</p>
                <p>{phase.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ANTI-DERAILLEMENT */}
      <section className={s.sectionDarker}>
        <Reveal className={s.container} style={{ textAlign: 'center' }}>
          <SectionHeader
            label="Ce qui change tout"
            title={`LE SYSTÈME\n*ANTI-DÉRAILLEMENT*`}
            centered
          />
          <p className={s.bodyText} style={{ maxWidth: 600, margin: '0 auto' }}>
            C&apos;est ça qui te manquait. C&apos;est ça qui fait que cette fois, tu ne lâcheras pas.
          </p>
          <div className={s.antiDerailBox}>
            <h3>QUAND TA SEMAINE EXPLOSE, LE PROGRAMME S&apos;ADAPTE.</h3>
            <p>
              Réunion qui déborde ? Déplacement imprévu ? Nuit blanche avec un gosse malade ? Au lieu de culpabiliser et de tout abandonner, tu as un protocole de secours : des séances courtes de 30 minutes, des ajustements automatiques, un plan B structuré pour chaque situation. <strong>C&apos;est la raison principale pour laquelle mes clients tiennent quand tous les autres programmes échouent.</strong>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ATHLETIC TEST */}
      <section className={s.sectionDark}>
        <Reveal className={s.container} style={{ textAlign: 'center' }}>
          <SectionHeader label="Mesure tes progrès" title={`LE TEST *ATHLÉTIQUE*`} centered />
          <p className={s.bodyText} style={{ maxWidth: 600, margin: '0 auto 24px' }}>
            Pas de promesses vagues. Des chiffres. En début et fin de programme, tu passes un test standardisé : force, mobilité, endurance, explosivité. Tu te filmes. Tu compares. Les résultats parlent d&apos;eux-mêmes.
          </p>
          <p className={s.bodyText} style={{ maxWidth: 600, margin: '0 auto' }}>
            <strong>Ce n&apos;est pas juste une photo avant/après. C&apos;est une preuve objective de ce que ton corps est redevenu capable de faire.</strong>
          </p>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section className={s.sectionDarker}>
        <Reveal className={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionHeader
              label="Ceux qui l'ont vécu"
              title={`ILS ONT FAIT\nL'*ATHLETIC RESET*`}
              centered
            />
          </div>

          {testimonials.map((t) => (
            <div key={t.name} className={s.testimonial}>
              <div className={s.testimonialPhotoGrid}>
                <div className={s.testimonialPhoto}>
                  {t.beforeImg ? (
                    <img src={t.beforeImg} alt={`${t.name} avant`} />
                  ) : (
                    <span className={s.testimonialPhotoPlaceholder}>Photo avant</span>
                  )}
                  <span className={`${s.testimonialPhotoLabel} ${s.labelBefore}`}>Avant</span>
                </div>
                <div className={s.testimonialPhoto}>
                  {t.afterImg ? (
                    <img src={t.afterImg} alt={`${t.name} après`} />
                  ) : (
                    <span className={s.testimonialPhotoPlaceholder}>Photo après</span>
                  )}
                  <span className={`${s.testimonialPhotoLabel} ${s.labelAfter}`}>Après · 90 jours</span>
                </div>
              </div>
              <p className={s.testimonialText}>{t.text}</p>
              <div className={s.testimonialAuthor}>
                <div className={s.testimonialAvatar}>{t.initials}</div>
                <div>
                  <div className={s.testimonialName}>{t.name}</div>
                  <div className={s.testimonialDetail}>{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* COACH */}
      <section className={s.sectionDark}>
        <Reveal className={s.containerWide}>
          <div className={s.coachSection}>
            <div className={s.coachImage}>
              {/* Remplace par : <img src="/images/quentin-coach.jpg" alt="Quentin Randis" /> */}
              <span className={s.coachImagePlaceholder}>— Ta photo ici —</span>
            </div>
            <div>
              <SectionHeader label="Ton coach" title={`QUENTIN\n*RANDIS*`} />
              <p className={s.bodyText}>
                Ancien joueur de football américain. Plus de 10 ans de coaching entre les États-Unis, l&apos;Australie et l&apos;Angleterre. J&apos;ai construit ma méthode à l&apos;intersection du monde athlétique et de la musculation fonctionnelle — loin des splits classiques et des programmes copiés-collés.
              </p>
              <p className={s.bodyText}>
                Je ne suis pas un coach de 24 ans qui vit dans une salle de sport. Je gère un business, je voyage, j&apos;ai des contraintes. <strong>Je comprends ta vie parce que je vis la même.</strong>
              </p>
              <div className={s.coachStats}>
                <div>
                  <div className={s.coachStatNumber}>10+</div>
                  <div className={s.coachStatLabel}>Années de coaching</div>
                </div>
                <div>
                  <div className={s.coachStatNumber}>3</div>
                  <div className={s.coachStatLabel}>Pays</div>
                </div>
                <div>
                  <div className={s.coachStatNumber}>250+</div>
                  <div className={s.coachStatLabel}>Athlètes coachés</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* OFFER */}
      <section className={s.sectionDarker} id="offre">
        <Reveal className={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionHeader label="L'offre" title={`TOUT CE QUI EST\n*INCLUS*`} centered />
          </div>

          <div className={s.offerBox}>
            <SectionHeader label="Athletic Reset — 90 jours" title="" centered />
            <h3 style={{ fontFamily: "var(--font-heading), 'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: 1, marginBottom: 8 }}>
              TA TRANSFORMATION COMPLÈTE
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray-300)' }}>
              Tout ce dont tu as besoin pour retrouver un corps d&apos;athlète.
            </p>

            <div className={s.offerIncludes}>
              {[
                { name: 'Programme Athletic Reset 3 phases — 12 semaines de séances structurées et progressives (3x60min/sem)', value: '900€' },
                { name: "Système Anti-Déraillement — protocoles de secours pour les semaines chaotiques", value: '400€' },
                { name: 'Cadre nutritionnel flexible — principes simples adaptés à ta vie, sans régime rigide', value: '300€' },
                { name: 'Suivi hebdomadaire personnalisé — check-in, ajustements et feedback chaque semaine', value: '600€' },
                { name: "Test Athlétique complet — bilan d'entrée et de sortie filmé avec scores objectifs", value: '200€' },
                { name: 'Kit de démarrage physique — ta game card personnalisée avec tes objectifs', value: '—' },
                { name: 'Graduation Athletic Reset — vidéo récap + visuel de tes résultats', value: '—' },
              ].map((item, i) => (
                <div key={i} className={s.offerItem}>
                  <span className={s.offerCheck}>✓</span>
                  <span className={s.offerItemName}>{item.name}</span>
                  <span className={s.offerItemValue}>{item.value}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--gray-300)', textAlign: 'center', marginBottom: 32, padding: '16px 24px', background: 'rgba(243,62,76,0.06)', border: '1px solid rgba(243,62,76,0.1)' }}>
              <strong style={{ color: 'var(--white)' }}>Dès ton inscription :</strong> questionnaire d&apos;onboarding personnalisé + appel de lancement de 30 min avec Quentin pour démarrer immédiatement.
            </p>

            <p className={s.offerTotal}>Valeur totale : 2 400€</p>
            <div className={s.offerPrice}>997<span className={s.offerPriceSuffix}>€</span></div>
            <p className={s.offerSplit}>ou 3 × 367€ — Paiement sécurisé</p>

            <CTAButton href={PAYMENT_LINK}>REJOINDRE L&apos;ATHLETIC RESET</CTAButton>
            <p style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--gray-600)' }}>
              Places limitées — 10 clients max par cohorte
            </p>
          </div>

          {/* GUARANTEE */}
          <div className={s.guaranteeBox}>
            <div className={s.guaranteeIcon}>↻</div>
            <h3>GARANTIE &quot;RÉSULTATS OU ON CONTINUE&quot;</h3>
            <p>
              Si après 90 jours tes scores athlétiques n&apos;ont pas significativement progressé et que tu as suivi au moins 80% du programme, je continue à te coacher gratuitement jusqu&apos;à ce que les résultats soient là.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className={s.sectionDark}>
        <Reveal className={s.container}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <SectionHeader label="Questions" title={`TU HÉSITES *ENCORE* ?`} centered />
          </div>
          <FAQ items={faqItems} />
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className={s.finalCta}>
        <div className={s.container}>
          <SectionHeader label="C'est le moment" title="" centered />
          <h2 className={s.finalCtaTitle}>
            ARRÊTE D&apos;ATTENDRE<br />LE BON <em>MOMENT.</em>
          </h2>
          <p className={s.finalCtaSub}>
            Le bon moment c&apos;était il y a 5 ans. Le deuxième meilleur moment, c&apos;est maintenant. Dans 90 jours, tu peux être dans la meilleure forme de ta vie — ou exactement au même point qu&apos;aujourd&apos;hui.
          </p>
          <CTAButton href="#offre" subtext="ou 3 × 367€ · Places limitées · Garantie résultats">
            DÉMARRER L&apos;ATHLETIC RESET — 997€
          </CTAButton>
        </div>
      </section>

      <Footer />
    </>
  )
}
