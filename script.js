

const analyses = [
    {
        id: 1,
        title: "The Ramayana",
        author: "Valmiki",
        lens: "Cultural and Archetypal (Mythological) Lens",
        category: "archetypal",
        cover: "images/THE RAMAYANA.jpg",
        snippet: "An exploration of the Hindu concept of Dharma, heroic exile, and the tension between public duty and personal devotion.",
        full: `
            <p>Through an archetypal and cultural lens, Valmiki’s <em>The Ramayana</em> functions as far more than an ancient adventure epic; it serves as a foundational moral blueprint centered on the Hindu concept of <em>Dharma</em> (cosmic order, duty, and righteousness). Rama embodies the archetype of the ideal king and dutiful son, willingly accepting fourteen years of exile to honor his father Dasharatha’s word. His journey into the Dandaka forest alongside Sita and Lakshmana represents the classic heroic initiation, where detachment from royal privilege tests the purity of his character against external chaos, symbolized by the demon king Ravana.</p>
            <p>However, reading the epic critically also reveals the tension between public duty (<em>Rajadharma</em>) and personal devotion. While Sita represents unwavering fidelity and spiritual resilience during her captivity in Lanka, her subsequent trial by fire (<em>Agni Pariksha</em>) highlights the rigid patriarchal expectations embedded within ancient societal codes. Even Ravana is not a one-dimensional villain; as a learned devotee of Shiva whose fatal flaw (<em>hamartia</em>) is unchecked pride and desire, he illustrates how intellect without moral restraint leads to ruin. Ultimately, <em>The Ramayana</em> demonstrates how cultural myths preserve a civilization’s ethical ideals while inviting modern readers to examine the personal sacrifices demanded by strict societal duty.</p>
        `
    },
    {
        id: 2,
        title: "Anna Karenina (2012 Film Adaptation)",
        author: "Leo Tolstoy (Adapted by Tom Stoppard, Directed by Joe Wright)",
        lens: "Formalist (Mise-en-Scène) and Feminist Lens",
        category: "feminist",
        cover: "images/ANNA KARENINA.jpg",
        snippet: "A Formalist and Feminist examination of nineteenth-century Russian aristocracy staged as a literal theater of social hypocrisy.",
        full: `
            <p>Joe Wright’s 2012 adaptation of Leo Tolstoy’s <em>Anna Karenina</em> brilliantly merges Formalist theatricality with a sharp Feminist critique of nineteenth-century Russian aristocracy. By staging the majority of the film inside a dilapidated, confined theater, the production turns setting into metaphor: high society is literally a stage where aristocrats perform artificial morality under the constant gaze of their peers. The choreographed transitions, mechanical train motifs, and claustrophobic lighting underscore how every gesture in Imperial Russia is governed by rigid social scripts.</p>
            <p>Viewed through a Feminist lens, this theatrical artifice exposes a devastating double standard. While Count Vronsky and Anna’s brother, Stiva Oblonsky, engage in extramarital affairs without losing their social standing or autonomy, Anna is systematically ostracized for choosing passionate authenticity over a loveless marriage to Karenin. Karenin himself is trapped by the preservation of public image rather than genuine moral conviction. Contrastingly, the only scenes filmed in natural, open outdoor locations belong to Konstantin Levin, whose agrarian life represents authenticity outside aristocratic hypocrisy. Anna’s tragic descent is therefore not a product of personal moral failure, but the result of a patriarchal society that punishes women who step outside the roles written for them.</p>
        `
    },
    {
        id: 3,
        title: "Hope for the Flowers",
        author: "Trina Paulus",
        lens: "Existentialist and Psychological Lens",
        category: "existential",
        cover: "images/Hope for the Flowers.jpg",
        snippet: "An allegory probing the absurdity of the modern rat race and the psychological courage required for authentic self-transformation.",
        full: `
            <p>Trina Paulus’s <em>Hope for the Flowers</em> is a deceptively simple allegory that probes deep existential questions about ambition, conformity, and self-actualization. Through an Existentialist lens, the "caterpillar pillar" a writhing mass of caterpillars climbing over one another toward an unseen top represents the absurdity of the modern rat race. Stripe’s initial compulsion to abandon love and trample others reflects <em>bad faith</em>: sacrificing authentic existence for external validation and blind societal competition without knowing what actually lies at the summit.</p>
            <p>Yellow serves as the psychological catalyst for authentic transformation. Unlike Stripe, Yellow listens to her internal intuition and accepts the terrifying vulnerability of the cocoon. In psychological terms, the cocoon represents the death of the ego a period of darkness, stillness, and surrender required before genuine growth can occur. When Stripe finally realizes that the top of the pillar offers nothing but more pillars, his decision to descend and enter his own cocoon marks his existential awakening. Paulus illustrates that true fulfillment is never achieved by climbing over others to remain a high-ranking caterpillar, but by having the courage to let go of who we are so we can become who we are meant to be.</p>
        `
    },
    {
        id: 4,
        title: "FlickerFadeGone",
        author: "Carljoe Javier",
        lens: "Postmodern and Reader-Response Lens",
        category: "postmodern",
        cover: "images/FlickerFadeGone.jpg",
        snippet: "A postmodern look at arcade culture, digital escapism, and how contemporary youth use virtual spaces to buffer real-world grief.",
        full: `
            <p>Carljoe Javier’s <em>FlickerFadeGone</em> captures the fragmented, hyper-mediated reality of contemporary youth through the lens of arcade culture and digital escapism. Analyzed through a Postmodern and Reader-Response framework, the story blurs the boundary between virtual simulation and lived emotional trauma. The protagonist retreats into the rhythmic, predictable mechanics of video games—where patterns can be memorized, enemies defeated, and lives restarted with another token to cope with the unpredictable pain of real-world loss and romantic disconnection.</p>
            <p>The title itself <em>FlickerFadeGone</em> evokes the visual decay of an 8-bit sprite disappearing from a CRT screen after losing a life. In a game, fading out is temporary; in reality, when people fade from our lives, the absence is permanent. As a reader immersed in gaming and technology, this narrative resonates deeply because it exposes how digital spaces often act as emotional buffers. Javier shows that while virtual worlds offer temporary refuge and a sense of control, true healing requires stepping away from the screen to confront the messy, unscripted realities of human grief and connection.</p>
        `
    },
    {
        id: 5,
        title: "The Odyssey",
        author: "Homer",
        lens: "Archetypal (Hero’s Journey) and Cultural Lens",
        category: "archetypal",
        cover: "images/The Odyssey.jpg",
        snippet: "Odysseus’s ten-year voyage home to Ithaca examined through the Greek ideals of cunning (metis) and sacred hospitality (xenia).",
        full: `
            <p>Homer’s <em>The Odyssey</em> shifts the ancient Greek heroic ideal from brute battlefield strength to <em>metis</em> cunning, adaptability, and intellectual endurance. Analyzed through Joseph Campbell’s Archetypal Hero’s Journey, Odysseus’s ten-year voyage home to Ithaca is a psychological odyssey through temptation and ego. Encounters with the Lotus-Eaters, Circe, and Calypso test his memory and commitment to home (<em>nostos</em>), while his confrontation with the Cyclops Polyphemus exposes how his pride boasting his real name brings Poseidon’s wrath upon his crew.</p>
            <p>Culturally, the epic is anchored by the sacred Greek law of <em>xenia</em> (hospitality between host and guest). Both the monstrous Polyphemus and the arrogant suitors in Ithaca violate <em>xenia</em>, justifying their eventual downfall. Furthermore, Penelope emerges as Odysseus’s intellectual equal, using the weaving of Laertes’s shroud and the test of the marriage bed to defend her household through wit rather than force. <em>The Odyssey</em> ultimately affirms that true heroism lies in perseverance, loyalty, and the wisdom gained through suffering.</p>
        `
    },
    {
        id: 6,
        title: "Ang Huling El Bimbo",
        author: "Eraserheads (Ely Buendia) / Musical by Dingdong Novenario & Dexter M. Santos",
        lens: "Marxist, Social Realism, and Reader-Response Lens",
        category: "social",
        cover: "images/Ang Huling El Bimbo.jpg",
        snippet: "Beneath its nostalgic OPM melody lies a devastating social critique of class divide, lost youthful idealism, and systemic exploitation.",
        full: `
            <p>Analyzed through a Marxist and Social Realist lens, <em>Ang Huling El Bimbo</em> transforms a beloved OPM anthem of youthful nostalgia into a searing indictment of socioeconomic inequality in the Philippines. In both the original narrative ballad and its stage musical adaptation, the bond forged among college friends Hector, Emman, and Anthony alongside Joy a working class vendor trying to survive in Manila exposes how social class dictates human destiny. While the three men eventually ascend into comfortable professional lives despite their compromises, Joy is systematically pushed to the margins by poverty, exploitation, and institutional neglect.</p>
            <p>Through a Reader-Response lens, the recurring motif of dancing the "El Bimbo" shifts from a warm memory of first love into a haunting symbol of guilt and inaction. The tragedy of Joy’s sudden death on a narrow, rain-slicked street forces both the characters and the audience to confront the moral cost of apathy. Ultimately, the work reveals that nostalgia can sometimes mask complicity, challenging us to recognize how easily society abandons the vulnerable when youthful idealism gives way to adult self-preservation.</p>
        `
    },
    {
        id: 7,
        title: "The Song of Roland",
        author: "Anonymous (Traditionally attributed to Turoldus)",
        lens: "Historical-Cultural and Chivalric Archetypal Lens",
        category: "archetypal",
        cover: "images/The Song of Roland.jpg",
        snippet: "A medieval French epic examining feudal loyalty, Christian chivalry, and the fatal tension between heroic valor and prudence.",
        full: `
            <p>Viewed through a Historical-Cultural lens, <em>The Song of Roland</em> stands as the foundational <em>chanson de geste</em> of medieval Europe, codifying the values of feudal fealty, Christian crusading zeal, and chivalric honor under Emperor Charlemagne. The narrative frames the Battle of Roncevaux Pass not merely as a military ambush, but as a cosmic struggle between loyalty and treachery, personified by the noble Roland and his envious stepfather, Ganelon. Every action on the battlefield is governed by feudal obligation where a vassal owes absolute devotion to his lord and to God, and cowardice is a fate worse than death.</p>
            <p>Applying an Archetypal Tragic lens, however, exposes the central conflict between <em>prouesse</em> (heroic valor) and <em>sapience</em> (wisdom), famously summarized in the line, "Roland is fierce and Oliver is wise." When outnumbered by the Saracen forces, Oliver repeatedly begs Roland to blow his Oliphant horn to summon Charlemagne’s main army, but Roland’s <em>démesure</em> excessive pride and obsession with personal reputation causes him to refuse until it is too late. Roland’s eventual decision to sound the horn with his dying breath marks his spiritual humility and redemption, illustrating how medieval literature wrestled with the thin line between noble sacrifice and destructive hubris.</p>
        `
    },
    {
        id: 8,
        title: "The Book of Job",
        author: "Anonymous (Biblical Wisdom Literature)",
        lens: "Existentialist and Philosophical (Theodicy) Lens",
        category: "existential",
        cover: "images/The Book of Job.jpg",
        snippet: "A profound philosophical reckoning with innocent suffering, dismantling rigid dogma in search of authentic faith and cosmic humility.",
        full: `
            <p><em>The Book of Job</em> confronts one of humanity’s oldest philosophical and theological crises: why innocent people suffer in a moral universe. Analyzed through a Philosophical and Existentialist lens, the poem systematically dismantles the orthodox doctrine of "retributive justice" championed by Job’s companions Eliphaz, Bildad, and Zophar who insist that prosperity is always a reward for virtue and suffering is always proof of hidden sin. Stripped of his wealth, children, and health, Job refuses to act in <em>bad faith</em> by confessing to transgressions he did not commit; instead, he insists on his integrity and demands an honest dialogue with God.</p>
            <p>When God finally answers Job out of the whirlwind, He notably bypasses legalistic explanations of human suffering and instead unveils the vast, untamable majesty of creation, symbolized by Behemoth and Leviathan. Rather than crushing Job, this cosmic perspective liberates him from the narrow, transactional view of morality held by his friends. <em>The Book of Job</em> ultimately teaches that authentic resilience does not come from pretending pain is deserved, but from having the honesty to wrestle with grief and the humility to accept that human reason cannot reduce the universe to a simple transaction.</p>
        `
    },
    {
        id: 9,
        title: "The Iliad",
        author: "Homer",
        lens: "Classical Tragedy and Humanist Psychological Lens",
        category: "classical",
        cover: "images/The Iliad.jpg",
        snippet: "An unflinching portrait of Achilles’s consuming rage, the glory and horror of the Trojan War, and the redemptive power of shared grief.",
        full: `
            <p>Homer’s <em>The Iliad</em> opens with a single explosive theme <em>menis</em> (wrath) and uses the final year of the Trojan War to dissect the heroic code of honor (<em>timê</em>) and immortal glory (<em>kleos</em>). Through a Classical Tragic lens, the epic traces how Achilles’s wounded pride over Agamemnon’s insult spirals into catastrophic grief when his beloved companion, Patroclus, is slain by Hector. Consumed by vengeance, Achilles returns to the battlefield like an unstoppable force of nature, desecrating Hector’s body in a futile attempt to silence his own survivor’s guilt. Contrasted against Achilles’s fury is Hector, whose tragic farewell to his wife Andromache and infant son Astyanax highlights the heavy domestic cost of war.</p>
            <p>Viewed through a Humanist Psychological lens, the true emotional peak of <em>The Iliad</em> is not a martial victory, but the quiet, devastating encounter in Book 24 when the aging Trojan King Priam sneaks into the Greek camp to ransom Hector’s corpse. As Priam kneels and kisses the hands of the man who killed his son, Achilles sees his own aging father, Peleus, in the grieving king. Their shared weeping dissolves the boundary between Greek and Trojan, proving that even in a world governed by war and fate, empathy and shared mortality remain the highest expressions of humanity.</p>
        `
    },
    {
        id: 10,
        title: "The Panchatantra",
        author: "Vishnu Sharma",
        lens: "Didactic (Moral-Philosophical) and Political Realism (Niti) Lens",
        category: "classical",
        cover: "images/The Panchatantra.jpg",
        snippet: "Ancient Indian animal fables woven into frame narratives that teach pragmatic statecraft, discernment, and the art of wise living.",
        full: `
            <p>Attributed to the scholar Vishnu Sharma, <em>The Panchatantra</em> ("The Five Treatises") uses interconnected animal fables to impart <em>niti</em> the wise, pragmatic conduct of life and political statecraft. Analyzed through a Didactic and Political Realism lens, the collection was designed not as a book of idealistic moralizing, but as a practical manual to awaken intelligence and strategic discernment in three young princes. Across its five sections covering the fracturing of alliances, the winning of friends, war and peace, the loss of gains, and hasty actions animals mirror the ambitions, follies, and court intrigues of human society.</p>
            <p>In the first treatise, the scheming jackals Karataka and Damanaka manipulate fear and suspicion to destroy the friendship between the lion king Pingalaka and the bull Sanjivaka, illustrating how misinformation and whispered counsel can destabilize power. Conversely, the second treatise demonstrates how weak creatures a dove, mouse, crow, deer, and tortoise overcome predators through mutual trust and coordinated intelligence. By blending wit, poetry, and realpolitik, <em>The Panchatantra</em> endures as a timeless guide to critical thinking, teaching readers how to guard against deceit while cultivating genuine alliances.</p>
        `
    },
    {
        id: 11,
        title: "The Tale of Genji",
        author: "Murasaki Shikibu",
        lens: "Aesthetic (Mono no Aware), Psychological, and Feminist Lens",
        category: "feminist",
        cover: "images/The Tale of Genji.jpg",
        snippet: "The world’s first psychological novel, capturing the fleeting beauty of Heian court life and the quiet constraints placed on aristocratic women.",
        full: `
            <p>Written in the eleventh century by noblewoman and lady-in-waiting Murasaki Shikibu, <em>The Tale of Genji</em> is widely celebrated as the world’s first psychological novel. Viewed through the traditional Japanese aesthetic lens of <em>mono no aware</em> a bittersweet sensitivity to the transience of beauty and human life the narrative follows the "Shining Prince" Hikaru Genji through the refined world of the Heian imperial court. Every poetic exchange, seasonal kimono, and moonlit courtship is suffused with the Buddhist awareness of impermanence (<em>mujo</em>), reminding the reader that passion, youth, and political glory inevitably fade into memory.</p>
            <p>Simultaneously, applying a Feminist and Psychological lens uncovers the emotional toll of polygonal marriage politics on Heian women. Confined behind screens and curtains, figures such as the proud Lady Aoi, the tragically possessive Lady Rokujo (whose repressed jealousy manifests as a vengeful spirit), and Genji’s lifelong love, Murasaki, navigate a world where their security depends entirely on male affection. Shikibu’s intricate interior monologues expose the stark contrast between the exquisite aesthetic surface of courtly romance and the profound vulnerability of the women trapped within it.</p>
        `
    },
    {
        id: 12,
        title: "The Mahabharata",
        author: "Vyasa",
        lens: "Moral-Philosophical (Deontological) and Archetypal Lens",
        category: "existential",
        cover: "images/The Mahabharata.jpg",
        snippet: "An epic examination of moral ambiguity, dynastic conflict, and Arjuna’s crisis of conscience on the battlefield of Kurukshetra.",
        full: `
            <p>Vyasa’s <em>The Mahabharata</em> is a monumental exploration of ethical complexity, familial rivalry, and the catastrophic consequences of ambition. Analyzed through a Moral Philosophical lens, the dynastic struggle between the Pandavas and the Kauravas refuses to reduce human conflict into simple binaries of pure good versus pure evil. Instead, the epic repeatedly places its heroes in <em>Dharmasankata</em> moral dilemmas where every available choice violates some aspect of <em>Dharma</em> (righteous duty). From Yudhishthira’s disastrous gambling match and the public humiliation of Draupadi to the morally compromised tactics used to fell Bhishma, Drona, and Karna, the narrative demonstrates that war leaves no participant unstained.</p>
            <p>At the heart of this crisis sits the <em>Bhagavad Gita</em>, where the warrior prince Arjuna drops his bow on the brink of the Kurukshetra war, paralyzed by grief at the prospect of slaying his own kinsmen and revered teachers. Through an Archetypal and Deontological lens, Lord Krishna’s counsel introduces the philosophy of <em>Nishkama Karma</em> performing one’s moral duty selflessly without attachment to personal gain or ego. <em>The Mahabharata</em> thus serves as an exhaustive mirror of human nature, teaching that true righteousness requires constant self-examination, restraint, and spiritual accountability amidst a flawed world.</p>
        `
    },
    {
        id: 13,
        title: "Psalm 91",
        author: "Anonymous (Traditionally attributed to Moses or King David)",
        lens: "Formalist (Poetic Imagery) and Reader-Response Lens",
        category: "classical",
        cover: "images/Psalm 91.jpg",
        snippet: "A lyric masterpiece of Hebrew poetry using sheltering metaphors and shifting voices to anchor the human spirit amidst fear and crisis.",
        full: `
            <p><em>Psalm 91</em> stands as one of the most enduring lyric poems in biblical literature, offering a profound meditation on vulnerability, trust, and spiritual refuge. Analyzed through a Formalist lens, the psalm derives its power from Hebrew parallelism, vivid sensory contrasts, and a deliberate three-part shift in grammatical voice. It opens with a personal declaration in the first person ("my refuge and my fortress"), transitions into a reassuring second-person address ("you will not fear the terror of night"), and culminates in the direct first-person voice of God promising protection and deliverance ("Because he loves me, I will rescue him"). Metaphors of avian shelter—"under his wings" are juxtaposed against terrifying images of unseen plague, flying arrows, and lions.</p>
            <p>Through a Reader-Response lens, the poem’s enduring resonance lies in its refusal to deny the existence of danger. Rather than promising a world free of crisis, the text acknowledges that life is surrounded by "the pestilence that stalks in the darkness," yet provides an internal architecture of peace and courage. Whether read in moments of personal anxiety or collective uncertainty, <em>Psalm 91</em> demonstrates how poetic imagery can transform paralyzing fear into resilient hope.</p>
        `
    }
];


const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');
const themeToggle = document.getElementById('themeToggle');
const analysesGrid = document.getElementById('analysesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const counterEl = document.getElementById('analysesCounter');

const modal = document.getElementById('readerModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalLens = document.getElementById('modalLens');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalText = document.getElementById('modalText');
const modalBgCover = document.getElementById('modalBgCover');
const modalPrevBtn = document.getElementById('modalPrevBtn');
const modalNextBtn = document.getElementById('modalNextBtn');

const backToTopBtn = document.getElementById('backToTop');

let currentActiveFilter = 'all';
let currentModalIndex = 0;


function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function buildCard(analysis) {
    const card = el('article', 'analysis-card');
    card.dataset.id = analysis.id;

    const imageWrap = el('div', 'card-image');
    const img = document.createElement('img');
    img.src = analysis.cover;
    img.alt = 'Cover image for ' + analysis.title;
    img.loading = 'lazy';
    imageWrap.appendChild(img);

    const button = el('button', 'read-btn');
    button.type = 'button';
    button.dataset.id = analysis.id;
    button.setAttribute('aria-label', 'Read analysis of ' + analysis.title);
    button.appendChild(el('span', '', 'Read Full Analysis'));
    const arrow = el('span', '', '\u2192');
    arrow.setAttribute('aria-hidden', 'true');
    button.appendChild(arrow);

    card.append(
        imageWrap,
        el('span', 'lens-badge', analysis.lens),
        el('h3', '', analysis.title),
        el('p', 'author', 'by ' + analysis.author),
        el('p', '', analysis.snippet),
        button
    );
    return card;
}

function buildEmptyState() {
    const box = el('div', 'analyses-empty');
    box.append(
        el('p', 'analyses-empty-title', 'No analyses found'),
        el('p', '', 'Try adjusting your search terms or selecting a different filter.')
    );
    return box;
}

function renderCards() {
    if (!analysesGrid) return;

    const visible = analyses.filter(item => {
        return currentActiveFilter === 'all' || item.category === currentActiveFilter;
    });

    if (counterEl) {
        counterEl.textContent = 'Showing ' + visible.length + ' of ' + analyses.length + ' Masterpiece Analyses';
    }

    analysesGrid.replaceChildren();
    if (visible.length === 0) {
        analysesGrid.appendChild(buildEmptyState());
        return;
    }
    visible.forEach(analysis => analysesGrid.appendChild(buildCard(analysis)));
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveFilter = btn.dataset.filter || 'all';
        renderCards();
    });
});

renderCards();


function updateModalContent(index) {
    if (!modal || index < 0 || index >= analyses.length) return;
    currentModalIndex = index;
    const analysis = analyses[index];

    modalLens.textContent = analysis.lens;
    modalTitle.textContent = analysis.title;
    modalAuthor.textContent = 'by ' + analysis.author;
    modalText.innerHTML = analysis.full;

    if (modalBgCover && analysis.cover) {
        modalBgCover.style.backgroundImage = 'url("' + analysis.cover + '")';
    }

    const modalBody = modal.querySelector('.modal-body');
    if (modalBody) modalBody.scrollTop = 0;

    if (modalPrevBtn) modalPrevBtn.disabled = index === 0;
    if (modalNextBtn) modalNextBtn.disabled = index === analyses.length - 1;
}

function openModal(analysisId) {
    const index = analyses.findIndex(a => a.id === analysisId);
    if (index === -1 || !modal) return;

    updateModalContent(index);
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (analysesGrid) {
    analysesGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.read-btn');
        if (btn) openModal(parseInt(btn.dataset.id, 10));
    });
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => updateModalContent(currentModalIndex - 1));
if (modalNextBtn) modalNextBtn.addEventListener('click', () => updateModalContent(currentModalIndex + 1));

document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('visible')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft') updateModalContent(currentModalIndex - 1);
    else if (e.key === 'ArrowRight') updateModalContent(currentModalIndex + 1);
});


if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
}


const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
}

requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.add('theme-ready'));
});

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}


if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 350);
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (
            !href ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('javascript:') ||
            link.target === '_blank' ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey
        ) {
            return;
        }

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const targetPath = href.split('#')[0].split('?')[0];

        const isCurrentHome = (currentPath === 'profile.html' || currentPath === 'index.html' || currentPath === '');
        const isTargetHome = (targetPath === 'profile.html' || targetPath === 'index.html');

        if (targetPath === currentPath || (isCurrentHome && isTargetHome)) {
            return;
        }

        e.preventDefault();
        document.body.classList.add('page-leaving');
        setTimeout(() => {
            window.location.href = href;
        }, 220);
    });
});

window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        document.body.classList.remove('page-leaving');
    }
});

