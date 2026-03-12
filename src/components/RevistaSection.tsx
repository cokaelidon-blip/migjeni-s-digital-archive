import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, HelpCircle, MessageSquare, Users, BookMarked } from "lucide-react";

const quizQuestions = [
  {
    q: "1. Cili është emri i plotë i shkrimtarit të njohur si Migjeni?",
    options: ["a) Millosh Nikolla Gjergji", "b) Gjergj Millosh Nikolla", "c) Millosh Gjergj Nikolla", "d) Nikolla Millosh Gjergji"],
    correct: 2,
  },
  {
    q: '2. Në cilën vepër të tij përfshihet poema e njohur "Poema e Mjerimit"?',
    options: ["a) Vargjet e Lira", "b) Novelat e Qytetit të Veriut", "c) Lulet e Verës", "d) Këngët e Milosaos"],
    correct: 0,
  },
  {
    q: "3. Në veprat e tij, Migjeni kritikon më shpesh:",
    options: ["a) jetën aristokrate", "b) varfërinë dhe hipokrizinë shoqërore", "c) luftërat ndërkombëtare", "d) teknologjinë moderne"],
    correct: 1,
  },
  {
    q: "4. Në cilin qytet ka jetuar dhe punuar si mësues Migjeni?",
    options: ["a) Tiranë", "b) Pukë", "c) Korçë", "d) Vlorë"],
    correct: 1,
  },
  {
    q: "5. Një tipar i rëndësishëm i stilit të Migjenit është:",
    options: ["a) përdorimi i mitologjisë klasike", "b) realizmi kritik dhe revoltë sociale", "c) romantizmi idealist", "d) satira politike e drejtpërdrejtë"],
    correct: 1,
  },
  {
    q: "6. Në prozën e tij, personazhet zakonisht janë:",
    options: ["a) figura heroike", "b) njerëz të zakonshëm që vuajnë varfërinë", "c) mbretër dhe princa", "d) luftëtarë historikë"],
    correct: 1,
  },
  {
    q: "7. Në cilën periudhë historike shkroi kryesisht Migjeni?",
    options: ["a) Rilindja Kombëtare", "b) periudha mes dy luftërave botërore", "c) pas Luftës së Dytë Botërore", "d) periudha osmane"],
    correct: 1,
  },
  {
    q: "8. Cila nga këto vepra lidhet me prozën e Migjenit?",
    options: ["a) Vargjet e Lira", "b) Novelat e Qytetit të Veriut", "c) Bagëti e Bujqësi", "d) Historia e Skënderbeut"],
    correct: 1,
  },
];

const letters = [
  {
    from: "Franz Kafka",
    date: "Tiranë, 15 mars 1937",
    preview: "Shkruaj këto rreshta me një ndjenjë të thellë respekti...",
    content: `I nderuar Migjen,

Edhe pse na ndajnë gjuhë, vende dhe rrugë jete të ndryshme, më duket se flasim për të njëjtin njeri: atë që jeton i shtypur nga rrethana që nuk i ka zgjedhur vetë. Kur lexoj vargjet dhe prozën tënde, ndiej të njëjtën ankth që më ka shoqëruar gjatë shkrimit tim — ndjesinë se bota është më e rëndë se shpatullat e njeriut.

Ti flet për varfërinë dhe padrejtësinë me zë të hapur, pa e zbukuruar realitetin. Edhe unë, në mënyrën time, jam përpjekur të tregoj se sa i vogël ndihet njeriu përballë forcave që nuk i kupton dhe nuk i kontrollon.

Më prek guximi yt për të thënë të vërtetën ashtu siç është, edhe kur ajo dhemb. Letërsia jote nuk kërkon të qetësojë lexuesin, por ta zgjojë.

Edhe pse jeta jote ishte e shkurtër, fjala jote mbetet e fortë. Ajo dëshmon se letërsia nuk matet me vite, por me thellësinë e mendimit dhe ndjeshmërinë ndaj njeriut.

Me respekt të thellë,
Franz Kafka`,
  },
  {
    from: "Fan Noli",
    date: "Tiranë, 15 mars 1937",
    preview: "Lexova poezitë e tua dhe ndjeva dhimbjen e atyre që vuajnë...",
    content: `I nderuar Migjen,

Shkruaj këto rreshta me një ndjenjë të thellë respekti për veprën tënde dhe guximin me të cilin denoncon mjerimin dhe padrejtësitë e shumta që shtrijnë hije mbi jetën e shqiptarëve. Lexova poezitë e tua dhe ndjeva dhimbjen e atyre që vuajnë në heshtje; fjala jote është si zë që zgjon ndërgjegjen dhe përkujton se përmirësimi shoqëror kërkon veprim dhe guxim.

Mos u lodh kurrë në rrugën e të shkruarit dhe të thënit të vërtetën. Edhe pse ndonjëherë pesimizmi mund të duket i fuqishëm, kujto se zëri yt ka fuqinë të ngrejë shpirtin e të tjerëve dhe të nxjerrë në pah padrejtësitë që duhet të luftohen.

Shpresoj që të kesh forcën dhe vendosmërinë për të vazhduar rrugën tënde.

Me respekt dhe admirim,
Fan Noli`,
  },
  {
    from: "Artur Rembo",
    date: "Paris, 12 tetor 1890",
    preview: "Po të shkruaj nga një kohë që nuk bindet, nga një shpirt...",
    content: `Migjen i nderuar,

Po të shkruaj nga një kohë që nuk bindet, nga një shpirt që ka mësuar herët se poezia nuk është stoli, por plagë. Fjalët e tua më kanë ardhur jo si jehonë, por si goditje e drejtë: të zhveshura, të ftohta, të vërteta. Dhe pikërisht për këtë, të çmoj.

Në vargjet e tua gjej një revoltë që nuk kërkon duartrokitje, por drejtësi. Ti nuk i këndon botës siç do të donte ajo të ishte, por siç është: e thyer, e pabarabartë, e lodhur nga hipokrizia.

Ndjej se kemi ngjashmëri jo vetëm në vepra, por në karakter. Të dy jemi shpirtra të paduruar me gënjeshtrën, të dy kemi refuzuar të shkruajmë për t'u pëlqyer.

Nëse poezia është një akt rebelimi, atëherë ti je një rebel i ndershëm.

Me respekt dhe afërsi shpirtërore,
Artur Rembo`,
  },
  {
    from: "Lasgush Poradeci",
    date: "",
    preview: "Të shkruaj këto rreshta nga qetësia e liqenit tim...",
    content: `I dashur Migjen,

Të shkruaj këto rreshta nga qetësia e liqenit tim, aty ku natyra flet me zërin e vet dhe shpirti gjen prehje në heshtjen e bukurisë. Kam lexuar fjalët e tua dhe ndjej forcën e tyre si një klithmë të thellë që troket mbi ndërgjegjen e çdo njeriu.

Ndërsa unë kërkoj të gjej paqen te bukuria e natyrës, besoj se rrugët tona nuk janë të ndryshme në thelb. Ti ngre krye ndaj padrejtësisë, unë përpiqem të ngre shpirtin e njeriut përmes reflektimit.

Revolta jote dhe qetësia ime janë dy anët e së njëjtës medalje: ti godet me fjalë, unë përpiqem të shëroj me bukuri; ti zgjon ndërgjegjen, unë ngre shpirtin.

Me respekt dhe mendim të thellë,
Lasgush Poradeci`,
  },
  {
    from: "Albert Kamy",
    date: "",
    preview: "Edhe pse nuk na bashkoi koha, na bashkon njeriu...",
    content: `I dashur Migjen,

Edhe pse nuk na bashkoi koha, na bashkon njeriu. Duke lexuar vargjet e tua dhe prozën tënde, ndiej se dhimbja që ti ke parë në rrugët e vendit tënd është e njëjtë me atë që unë kam ndjerë përballë heshtjes së botës.

Tek ti, vuajtja ka fytyrë, ka emra, ka trupa të lodhur dhe shpresa të thyera. Tek unë, ajo shpesh është e heshtur dhe filozofike, por po aq e rëndë.

Letërsia jote më kujton se absurdi nuk është vetëm mendim, por edhe uri, sëmundje dhe padrejtësi.

Nëse fjala ka ende fuqi, atëherë veprat tona janë dëshmi se njeriu nuk duhet të heshtë.

Me respekt dhe solidaritet njerëzor,
Albert Kamy`,
  },
];

const comparisons = [
  {
    title: "Migjeni dhe Kafka",
    icon: "🖊️",
    shared: [
      "Pasqyrimi i njeriut të shtypur",
      "Ndjenja e ankthit dhe absurdit",
      "Kritikë e fortë ndaj shoqërisë",
      "Personazhe të izoluar dhe të vetmuar",
      "Letërsia si revoltë e heshtur",
    ],
    differences: [
      "Migjeni paraqet realitetin drejtpërdrejt, Kafka përdor simbolikë dhe absurditet",
      "Migjeni denoncon hapur varfërinë, Kafka kritikon sisteme të paemërta",
      "Te Migjeni rebelimi është i zëshëm, te Kafka i heshtur dhe i brendshëm",
      "Gjuha e Migjenit është e ashpër dhe tronditëse, ajo e Kafkës e ftohtë",
    ],
  },
  {
    title: "Migjeni dhe Fan Noli",
    icon: "🏛️",
    shared: [
      "Kritikë e fortë ndaj realitetit shoqëror",
      "Letërsia si mjet ndërgjegjësimi",
      "Vuajtja e njeriut dhe kundërshtimi i padrejtësive",
      "Frymë revolte kundër shtypjes shoqërore",
    ],
    differences: [
      "Migjeni përqendrohet te mjerimi shoqëror, Noli te çështjet kombëtare",
      "Revolta e Migjenit është emocionale, e Nolit e vetëdijshme dhe e organizuar",
      "Migjeni përdor gjuhë simbolike dhe tronditëse, Noli stil retorik dhe solemn",
      "Njeriu te Migjeni është viktimë, te Noli faktor aktiv i historisë",
    ],
  },
  {
    title: "Migjeni dhe Lasgush Poradeci",
    icon: "🌊",
    shared: [
      "Poetë të shquar të letërsisë shqipe moderne",
      "I përkasin gjysmës së parë të shekullit XX",
      "Sollën risi të rëndësishme në poezinë shqipe",
      "Ndikuan nga rrymat letrare evropiane",
      "Kontribut të madh në modernizimin e poezisë shqipe",
    ],
    differences: [
      "Migjeni është poet i realizmit kritik, Lasgushi i lirizmit dhe simbolizmit",
      "Migjeni përqendrohet te problemet shoqërore, Lasgushi te bota e brendshme",
      "Migjeni ka frymë pesimiste, Lasgushi frymë harmonike dhe meditative",
      "Migjeni përdor vargun e lirë, Lasgushi vargun e rregullt me rime",
    ],
  },
  {
    title: "Migjeni dhe Artur Rembo",
    icon: "🔥",
    shared: [
      "Rebelimi si pikënisje poetike — poezia si akt rebelimi, jo zbukurim estetik",
      "Thyerja e normave tradicionale — refuzojnë format klasike, sjellin poezi të ashpër dhe tronditëse",
      "Figura të errëta dhe vizione tronditëse — gjuhë e fortë, metafora dhimbjeje",
      "Poeti si zë i vuajtjes njerëzore — flasin në emër të të shtypurve dhe të harruarve",
    ],
    differences: [
      "Migjeni pasqyron realitet konkret shqiptar, Rembo shpik botë simbolike",
      "Migjeni bën revoltë sociale, Rembo kërkon çlirimin metafizik të shpirtit",
      "Migjeni zgjedh gjuhë të drejtpërdrejtë dhe realiste, Rembo fshihet pas simbolikës së errët",
      "Migjeni mbetet zë unik origjinal i letërsisë shqipe, jo imitim evropian",
    ],
  },
  {
    title: "Migjeni dhe Albert Kamy",
    icon: "🌍",
    shared: [
      "Trajtimi i vuajtjes njerëzore si element qendror",
      "Njeriu i shtypur nga rrethana të padrejta",
      "Refuzojnë idealizimin e realitetit",
      "Fryma e revoltës e vetëdijshme dhe kritike",
    ],
    differences: [
      "Migjeni pasqyron dhimbjen konkrete shoqërore, Kamy krizën universale filozofike",
      "Kamy përdor konceptin e absurdit, Migjeni denoncimin e drejtpërdrejtë",
      "Migjeni synon zgjimin e ndërgjegjes shoqërore, Kamy të shpjegojë ekzistencën",
    ],
  },
];

const QuizSection = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? quizQuestions.filter((q, i) => answers[i] === q.correct).length
    : 0;

  return (
    <div className="space-y-6">
      {quizQuestions.map((q, qi) => (
        <div key={qi} className="bg-card border border-border rounded-xl p-5">
          <p className="font-semibold text-foreground mb-3">{q.q}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {q.options.map((opt, oi) => {
              const isSelected = answers[qi] === oi;
              const isCorrect = oi === q.correct;
              let cls = "px-4 py-2 rounded-lg border text-sm text-left transition-all cursor-pointer ";
              if (!submitted) {
                cls += isSelected
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 text-muted-foreground";
              } else {
                if (isCorrect) cls += "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                else if (isSelected) cls += "border-destructive bg-destructive/10 text-destructive";
                else cls += "border-border text-muted-foreground opacity-60";
              }
              return (
                <button
                  key={oi}
                  className={cls}
                  onClick={() => !submitted && setAnswers((a) => ({ ...a, [qi]: oi }))}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
        >
          Dërgo përgjigjet
        </button>
      ) : (
        <div className="text-center p-6 bg-primary/10 border border-primary/30 rounded-xl">
          <p className="text-2xl font-bold text-primary mb-1">
            {score} / {quizQuestions.length}
          </p>
          <p className="text-muted-foreground">
            {score === quizQuestions.length
              ? "Perfekt! Njeh mirë Migjenin 🎉"
              : score >= 5
              ? "Shumë mirë! Vazhdo kështu 👏"
              : "Provo përsëri — lexo më shumë rreth Migjenit 📖"}
          </p>
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="mt-4 px-4 py-2 border border-primary text-primary rounded-lg text-sm hover:bg-primary/10 transition-colors"
          >
            Provo përsëri
          </button>
        </div>
      )}
    </div>
  );
};

const RevistaSection = () => {
  const [activeTab, setActiveTab] = useState<"krahasime" | "letra" | "quiz" | "interviste">("krahasime");
  const [openLetter, setOpenLetter] = useState<number | null>(null);
  const [openComparison, setOpenComparison] = useState<number | null>(null);

  const tabs = [
    { id: "krahasime" as const, label: "Krahasime", icon: <Users className="w-4 h-4" /> },
    { id: "letra" as const, label: "Letra", icon: <MessageSquare className="w-4 h-4" /> },
    { id: "quiz" as const, label: "Quiz", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "interviste" as const, label: "Intervistë", icon: <BookMarked className="w-4 h-4" /> },
  ];

  return (
    <section id="revista" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Revista
            </h2>
          </div>
          <p className="text-primary font-semibold text-lg italic mb-1">
            "Zëri i Realitetit Shqiptar"
          </p>
          <p className="text-muted-foreground">
            Botimi nr. 16 · Mars 2026 · K.Poka, O.Hata, G.Islamaj, S.Metalia, D.Neçi, G.Lushi
          </p>
          <p className="text-muted-foreground text-sm mt-2 italic">
            "Përditë shoh qartë e ma qartë dhe vuej thellë e ma thellë."
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Krahasime */}
            {activeTab === "krahasime" && (
              <div className="space-y-4">
                {comparisons.map((comp, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenComparison(openComparison === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{comp.icon}</span>
                        <h3 className="font-playfair text-xl font-bold text-foreground">{comp.title}</h3>
                      </div>
                      {openComparison === i ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openComparison === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                                <span>✓</span> Të përbashkëtat
                              </h4>
                              <ul className="space-y-2">
                                {comp.shared.map((item, j) => (
                                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-green-500 mt-0.5">•</span> {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                <span>↔</span> Ndryshimet
                              </h4>
                              <ul className="space-y-2">
                                {comp.differences.map((item, j) => (
                                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-primary mt-0.5">•</span> {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            {/* Letra */}
            {activeTab === "letra" && (
              <div className="space-y-4">
                {letters.map((letter, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenLetter(openLetter === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                    >
                      <div>
                        <p className="font-playfair text-lg font-bold text-foreground">
                          Letër nga {letter.from}
                        </p>
                        {letter.date && (
                          <p className="text-xs text-muted-foreground mt-0.5">{letter.date}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1 italic">"{letter.preview}"</p>
                      </div>
                      {openLetter === i ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openLetter === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5">
                            <div className="border-l-4 border-primary/30 pl-4">
                              <p className="text-sm text-foreground leading-relaxed whitespace-pre-line font-serif italic">
                                {letter.content}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            {/* Quiz */}
            {activeTab === "quiz" && (
              <div>
                <p className="text-center text-muted-foreground mb-8">
                  Sa mirë e njeh Migjenin? Provo njohuritë e tua!
                </p>
                <QuizSection />
              </div>
            )}

            {/* Intervistë */}
            {activeTab === "interviste" && (
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">
                    Reflektimi Migjenian
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Intervistë me Selin, nxënëse maturante — mbi forcën dhe aktualitetin e fjalës migjeniane
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      q: "Kujt i flet Migjeni në të vërtetë në veprën e tij?",
                      a: "Migjeni i flet njeriut të zakonshëm, atij që jeton mes vështirësive dhe padrejtësive. Në të njëjtën kohë, ai i drejtohet edhe ndërgjegjes shoqërore, duke kërkuar që shoqëria të mos mbyllë sytë përballë realitetit.",
                    },
                    {
                      q: "Çfarë e bën fjalën e Migjenit kaq tronditëse për lexuesin?",
                      a: "Fjala e tij është tronditëse sepse është e sinqertë dhe e zhveshur nga çdo zbukurim. Migjeni nuk përdor fjalë të bukura për të fshehur dhimbjen, por e shpreh atë hapur dhe drejtpërdrejt.",
                    },
                    {
                      q: "Pse dhimbja te Migjeni nuk paraqitet si e heshtur, por si revoltë?",
                      a: "Sepse Migjeni nuk e pranon dhimbjen si fat të pashmangshëm. Ai e kthen vuajtjen në revoltë, duke protestuar ndaj shkaqeve që e krijojnë atë — si padrejtësia dhe pabarazia shoqërore.",
                    },
                    {
                      q: "Çfarë simbolizon errësira që shfaqet shpesh në veprën e Migjenit?",
                      a: "Errësira simbolizon gjendjen shpirtërore të njeriut dhe realitetin e vështirë shoqëror. Ajo përfaqëson mungesën e shpresës, por edhe të vërtetën që shpesh fshihet ose mohohet.",
                    },
                    {
                      q: "Pse Migjeni konsiderohet një shkrimtar rebel për kohën e tij?",
                      a: "Ai konsiderohet rebel sepse sfidoi normat, mendësitë dhe hipokrizinë shoqërore. Migjeni guxoi të thoshte atë që shumë nuk kishin kurajë ta pranonin.",
                    },
                    {
                      q: "A mund të flasim për shpresë në veprën e Migjenit, edhe pse ajo duket e errët?",
                      a: "Po, sepse vetë fakti që Migjeni shkruan dhe kritikon është një formë shprese. Shpresa nuk paraqitet drejtpërdrejt, por lind nga ndërgjegjësimi dhe dëshira për ndryshim.",
                    },
                    {
                      q: "Pse lexuesi nuk mbetet indiferent pas leximit të Migjenit?",
                      a: "Sepse Migjeni e përball lexuesin me realitetin dhe e detyron të reflektojë. Ai nuk lejon një lexim të qetë, por kërkon reagim dhe mendim kritik.",
                    },
                    {
                      q: "Çfarë vlerash përcjell Migjeni për brezin e ri sot?",
                      a: "Migjeni na mëson të mos heshtim përballë padrejtësisë, të mendojmë kritikisht dhe të kemi guximin për të thënë të vërtetën.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-border last:border-0 pb-5 last:pb-0">
                      <p className="font-semibold text-foreground mb-2">❓ {item.q}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-4 border-l-2 border-primary/40">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RevistaSection;
