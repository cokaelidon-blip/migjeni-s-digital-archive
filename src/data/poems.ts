export interface Poem {
  id: string;
  title: string;
  year: number;
  excerpt: string;
  emoji: string;
  text: string;
  analysis: string;
  author?: string;
  type: "poezi" | "proze";
}

export const poems: Poem[] = [
  {
    id: "recitaliMalsorit",
    title: "Recitali i Malsorit",
    year: 1936,
    excerpt: "Malet e heshtuna thërrasin, me zâ të randë...",
    emoji: "⛰️",
    author: "Klevisa Tafhasi",
    type: "poezi",
    text: `O, si nuk kam një grusht të fortë
t'i bij mu në zemër malit që s'bëzanë,
ta dij dhe ai se ç'domethanë i dobët
n'agoni të përdihet si vigan i vramë.

Unë lugat si hij' e trazueme,
trashigimtar i vuejtjes dhe i durimit,
endem mbi bark të malit me ujën e zgjueme
dhe me klithma të pakënaqura t'instinktit.

Mali hesht. Edhe pse përditë
mbi lëkurë të tij, në lojë varrimtare,
kërkoj me gjetë një kafshatë ma të mirë...
Por më rren shaka, shpresa gënjeshtare.

Mali hesht, dhe në heshtje qesh.
E unë vuej, dhe në vuejtje vdes.

Po unë, kur? heu! kur kam për t'u qesh?
Apo ndoshta duhet ma parë të vdes?

O, si nuk kam një grusht të fuqishëm!
Malit, që hesht, mu në zemër me ia njesh!
Ta shof si dridhet nga grusht' i paligjshëm...
E unë të kënaqem, të kënaqem tu' u qesh.`,
    analysis: `**Tema:** Tema kryesore e poezisë është vuajtja dhe revolta e njeriut të varfër përballë jetës së ashpër. Migjeni paraqet dramën e malsorit që jeton në varfëri dhe lufton çdo ditë për mbijetesë.

**Personazhet:**
- *Malësori* – personazhi kryesor. Ai përfaqëson njeriun e shtypur dhe të varfër që jeton mes vuajtjesh, por që brenda vetes ka revoltë dhe dëshirë për të ndryshuar fatin e tij.
- *Mali* – paraqitet në mënyrë simbolike dhe përmes personifikimit. Ai përfaqëson natyrën e ashpër dhe një botë të pandjeshme ndaj vuajtjes së njeriut.

**Motivet:**
- *Motivi i vuajtjes* – malsori është "trashëgimtar i vuajtjes dhe i durimit".
- *Motivi i revoltës* – dëshira për të goditur malin me një grusht të fortë tregon revoltën e brendshme.
- *Motivi i zhgënjimit dhe mungesës së shpresës* – malsori ndihet i mashtruar nga "shpresa gënjeshtare".

**Figurat letrare:**
- *Metafora* – "trashigimtar i vuejtjes dhe i durimit".
- *Personifikimi* – "Mali hesht", "në heshtje qesh".
- *Krahasimi* – "si vigan i vramë".
- *Hiperbola* – dëshira për të goditur malin me grusht.
- *Pyetja retorike* – "Po unë, kur?… kur kam për t'u qesh?".

**Simbolika:**
- *Mali* simbolizon jetën e vështirë, fatin e pamëshirshëm dhe shoqërinë që nuk reagon ndaj vuajtjes.
- *Grushti* simbolizon revoltën dhe dëshirën për të ndryshuar realitetin e padrejtë.

**Mesazhi:** Vuajtja dhe varfëria e njeriut mund të krijojnë revoltë të fortë ndaj një bote të padrejtë. Migjeni kritikon realitetin shoqëror dhe tregon se njeriu i shtypur kërkon dinjitet, drejtësi dhe ndryshim.

*Punoi: Klevisa Tafhasi*`
  },
  {
    id: "naTbirShekullit",
    title: "Na t'bir e shekullit t'ri",
    year: 1936,
    excerpt: "Na të birtë e shekullit të ri, filizat e një toke së rimun me lot...",
    emoji: "✊",
    author: "Orjada Deda",
    type: "poezi",
    text: `Na të birtë e shekullit të ri,
që plakun e lamë në "shejtnin" e tij
e çuem grushtin për me luftue
ndër lufta të reja
dhe me fitue...

Na të birtë e shekullit të ri,
filizat e një toke së rimun me lot,
ku djersë e ballit u dikonte kot -
se dheu ynë qe kafshatë e huej
dhe në marrzi duhej shum shtRejtë t'u paguhej.

Na të birtë e shekullit të ri,
vllazën të lindun e të rritun në zi,
kur tinglloi çast' i ynë i mbramë
edhe fatlumë
ditëm me thanë :
S'duem me humbë
në lojë të përgjaktë të historis njerzore,
jo! jo! s'i duem humbjet prore -
duem ngadhnim!
ngadhnim, ndërgjegje dhe mendimi të lirë!

S'duem, për hir
të kalbsinave të vjetra, që kërkojnë "shejtnim",
të zhytemi prap në pellgun e mjerimit
që të vajtojmë prap kangën e trishtimit,
kangën monotone, pa shpirt, të sklavnis -
të jem' një thumb i ngulun ndër trutë e njerzis.

Na të birtë e shekullit të ri,
me hovin ton e të ndezun peshë,
ndër lufta të reja kemi m'u ndeshë
dhe për fitore kem' me ra fli.`,
    analysis: `**Lloji i veprës:** Poezi lirike me karakter shoqëror dhe protestues.

**Tema:** Revolta e brezit të ri kundër padrejtësive shoqërore dhe kundër mentalitetit të vjetër.

**Ideja:** Brezi i ri është i vetëdijshëm për mjerimin dhe hipokrizinë e kohës së vet dhe nuk pranon të heshtë. Ai kërkon përmbysje të realitetit të kalbur.

**Motivet kryesore:** Mjerimi, Zemërimi, Përmbysja, Brezi i ri, E ardhmja

**Subjekti:** Poeti flet në emër të rinisë së kohës së tij. Ata e shohin realitetin e hidhur, ndihen të zhgënjyer dhe shpërthejnë në revoltë. Nuk pajtohen me shoqërinë e padrejtë dhe kërkojnë ndryshim rrënjësor.

**Mesazhi:** Mos u pajto me padrejtësinë. Brezi i ri duhet të zgjohet dhe të luftojë për një botë më të drejtë.

**Qëndrimi i autorit:** Rebel, Ironik, Kritik, Sfiduese

**Figuracioni letrar:**
- *Metafora* – rinia si forcë shpërthyese
- *Antiteza* – e vjetra ↔ e reja
- *Ironia* – ndaj shoqërisë dhe hipokrizisë
- *Përsëritje* – për theksim emocional
- *Epitetet e forta* – për të theksuar mjerimin

**Gjuha:** E drejtpërdrejtë, e ashpër, me ngarkesë emocionale, pa zbukurime romantike.

**Stili:** Modern, i çliruar nga rregullat tradicionale. Shpreh mendim kritik dhe filozofik.

**Metrika:** Varg i lirë, pa skemë të rregullt rimash, numër i pabarabartë rrokjesh, ritëm i brendshëm i krijuar nga përsëritjet dhe theksi emocional.

*Punoi: Orjada Deda*`
  },
  {
    id: "kangetEPaKendueme",
    title: "Kangët e pa këndueme",
    year: 1936,
    excerpt: "Thellë në veten teme flejnë kangët e pakëndueme...",
    emoji: "🌋",
    author: "Aleida Kastrati",
    type: "poezi",
    text: `Thellë në veten teme flejnë kangët e pakëndueme
të cilat ende vuejtja as gëzimi s'i nxori,
të cilat flejnë e presin një ditë ma të lumnueme
me shpërthye, m'u këndue pa frigë e pa zori.

Thelltë në veten teme kangët e miajesin...
e unë jam vullkani që fle i fashitun,
por kur t'i vijë dita të gjitha ka me i qitun
në një mijë ngjyra të bukra që nuk vdesin.

Por a do të vijë dita kangët me u zgjue?
Apo ndoshta shekujt me ne prap po tallen?
Jo! Jo! Se liria filloi me lulzue
dhe e ndjej nga Dielli valën.

O kangët që fleni reliktet e mia
q'ende s'keni prekun as një zemër të huej,
vetëm unë me ju po kënaqem si fëmia
unë- djepi juej; ndoshta vorri juej.`,
    analysis: `**Autori dhe rryma letrare:** Migjeni është përfaqësues i realizmit kritik me elemente moderniste. Në veprat e tij trajton konfliktin mes idealit dhe realitetit, revoltën e brendshme, mjerimin dhe krizën shpirtërore. Kjo poezi ka karakter introspektiv dhe filozofik.

**Tema:** Tema kryesore është forca krijuese që fle brenda individit dhe pritja për momentin e lirisë për ta shprehur atë.

**Subjekti:** Subjekti lirik është individual. Poeti flet në vetën e parë dhe shpreh gjendjen e tij të brendshme. Ai e paraqet veten si një vullkan të fashitur, që ruan brenda energji të fuqishme krijuese. Kangët përfaqësojnë potencialin e tij artistik që pret kohën e duhur për të shpërthyer.

**Ideja:** Ideja kryesore është se krijimtaria dhe shpresa nuk zhduken, edhe kur shtypen. Ato mund të qëndrojnë të fshehura për një kohë, por në momentin e duhur do të dalin në dritë. Poeti shpreh besimin se liria do të vijë dhe do t'i japë mundësi shpërthimit të artit.

**Mesazhi:** Mesazhi i poezisë është se arti i vërtetë kërkon liri. Pa liri, krijimtaria mbetet e mbyllur brenda shpirtit. Por kur lind liria, ajo shpërthen në forma të bukura që nuk vdesin.

**Motivet kryesore:** Krijimtaria e fshehur, Pritja, Shpresa, Liria, Revolta e brendshme, Dyshimi për të ardhmen

**Figurat letrare:**
- *Metafora:* "Kangët e pakëndueme" – simbol i ideve të pashprehura. "Unë jam vullkani që fle i fashitun" – simbol i forcës së përmbajtur. "Djepi… vorri" – simbol i fillimit dhe fundit të krijimtarisë.
- *Personifikimi:* "Kangët flejnë" – idetë paraqiten si qenie të gjalla.
- *Pyetje retorike:* "A do të vijë dita…?" – shpreh pasiguri dhe ankth.
- *Alegoria:* "Dielli" – simbol i lirisë dhe shpresës.
- *Përsëritja:* "Jo! Jo!" – thekson vendosmërinë dhe optimizmin.

*Punoi: Aleida Kastrati*`
  },
  {
    id: "njeNatePaGjume",
    title: "Një natë pa gjumë",
    year: 1936,
    excerpt: "Pak dritë! Pak dritë! Pak dritë, o shok, o vlla...",
    emoji: "🌙",
    author: "Anxhela Sala",
    type: "poezi",
    text: `Pak dritë! Pak dritë! Pak dritë, o shok, o vlla.
Të lutem, pak dritë në kët natë kur shpirti vuen,
kur të dhemb e s'di ç'të dhemb, e syni gjum nuk ka,
urren nuk din ç'urren, don e s'din se ç'don.

Pak dritë! 0 burrë! 0 hero' ngado që të jesh. ...
Burrë që shkatrron edhe që ndërton sërish!
Pak dritë vetëm, të lutem, mshirë të kesh,
se do çmendem në kët natë pa gjumë dhe pa pishë.

Oh! ta kisha pishën të madhe edhe të ndezun!
Me flakën e pishës në qiellin e ksaj nate
ta shkruejshe kushtrimin... Ehu Burrë i tretun
Do ta shifsha vallen tande në majë të një shpate.

Porpishë nuk karn e vetëmjanë burrat, shokët...
Dergjem n'errsin pa gjumë dhe pa dritë...
Askush s'më ndigjon, çirren kot më kot...
Hesht more, hesht! por qindro, o shpirt.

Gjeli këndon dhe thotë se asht afër drita
- Gjel, rren a s'rren? cila asht fjala ejote?
Kur ti këndon thonë se asht afer drita...
Por un s'besoj sonte në Çalët e ksaj bote.

Hiqmuni qafe, mendimet
Ojastëk ty të rroki, të përqafoj si shpëtimin,
më fal atë që due: gjumin dhe andm'min
e dy buzve që pëshpërisin ngushllimin.`,
    analysis: `**Tema:** Tema kryesore e poezisë është vuajtja e thellë shpirtërore e njeriut, errësira morale dhe sociale, si edhe mungesa e shpresës në një shoqëri të padrejtë.

**Shekulli dhe rryma letrare:** Shekulli XX, Realizëm kritik (me elemente ekspresioniste)

**Ideja kryesore:** Migjeni shpreh gjendjen e ankthit dhe dëshpërimit të njeriut që kalon një natë pa gjumë, i mbytur nga mendimet, dhimbja dhe errësira. Kërkesa e vazhdueshme për "pak dritë" simbolizon thirrjen për shpëtim, drejtësi dhe ndryshim, por kjo thirrje mbetet pa përgjigje.

**Subjekti lirik:** Subjekti lirik është "unë"-ja poetike, një njeri i vetmuar, i lodhur shpirtërisht, që flet në emër të atyre që vuajnë dhe nuk gjejnë mbështetje.

**Figurat letrare:**
- *Simboli:* Drita → shpresë, drejtësi, ndërgjegje shoqërore. Errësira / nata → vuajtje, padije, mjerim.
- *Përsëritja:* "Pak dritë! Pak dritë!" → thekson dëshpërimin dhe lutjen e fortë
- *Metafora:* "shpirti vuen", "dergjem n'errsin" → gjendje e rëndë psikologjike
- *Personifikimi:* gjeli këndon dhe thotë → shpresë e rreme, pritje mashtruese

**Gjuha dhe stili:** Gjuha është e drejtpërdrejtë, e fortë dhe protestuese, tipike për Migjenin. Toni është i errët, dramatik dhe pesimist, duke pasqyruar realitetin e dhimbshëm të kohës.

**Mesazhi:** Poezia përcjell mesazhin se njeriu që jeton në mjerim dhe padrejtësi humbet besimin te fjalët dhe premtimet boshe. Migjeni kërkon zgjimin e ndërgjegjes njerëzore dhe një ndryshim.

*Punoi: Anxhela Sala*`
  },
  {
    id: "poemaEMjerimit",
    title: "Poema e mjerimit",
    year: 1936,
    excerpt: "Mjerimi tërbohet, mjerimi punon, mjerimi rrit fëmin...",
    emoji: "😢",
    author: "Gabriela Lushi",
    type: "poezi",
    text: `Kafshatë që s'kapërdihet asht, or vlla, mjerimi,
kafshatë që të mbetë në fyt edhe të ze trishtimi
kur shef ftyra të zbeta edhe sy të jeshilta
që të shikojnë si hije dhe shtrijnë duert e mpita
edhe ashtu të shtrime mbrapa teje mbesin
të tanë jetën e vet derisa të vdesin.
E mbi ta n'ajri, si në qesëndi,
therin qiellën kryqat e minaret e ngurta,
profetënt dhe shejtënt në fushqeta të shumngjyrta shkëlqejnë.
E mjerimi mirfilli ndien tradhti.
Mjerimi ka vulën e vet të shëmtueme;
asht e neveritshme, e keqe, e turpshme;
balli që e ka, syt që e shprehin,
buzët që më kot mundohen ta mshefin
janë fëmitë e padijes e flitë e përbuzjes,
të mbetunat e flliqta rreth e përqark tryezës
mbi të cilën hangri darkën një qen e pamshirshëm
me bark shekulluer, gjithmon i pangishëm.
Mjerimi s'ka fat. Por ka vetëm zhele,
zhele fund e majë, flamujt e një shprese
të shkyme dhe të coptuem me të dalun bese.
Mjerimi tërbohet në dashuni epshore.
Nëpër skaje t'errta, bashkë me qej, mij, mica,
mbi pecat e mykta, të qelbta, të ndyta, të lagta
lakuriqen mishnat, si zhangë; të verdhë e pisa;
kapërthehen ndjenjat me fuqi shtazore,
kafshojnë, përpijnë, thithen, puthen buzët e ndragta
edhe shuhet uja, dhe fashitet etja
n'epshin kapërthyes, kur mbytet vetvetja.
Dhe aty zajnë fillin të marrët, shërbtorët dhe lypsat
që nesër do linden me na i mbushë rrugat.
Mjerimi në dritzën e synit te kërthini
dridhet posi flaka e mekun qirini
nën tavan të tymuem dhe plot merimanga,
ku hije njerzish dridhen ndër mure plot danga,
ku foshnja e smueme qan si shpirt' i keq
tu' ndukë gjitë e shterruna të së zezës amë,
e kjo prap shtazanë, mallkon zot e dreq,
mallkon frytn e vet, mallkon barrn e randë.
Foshnj' e saj nuk qesh, por vetëm lëngon,
e ama s'e don, por vetëm mallkon.
Vall sa i trishtueshëm asht djepi i skamit
ku foshnjën përkundin lott edhe të fshamit!
Mjerimi rrit fëmin në hijen e shtëpive
të nalta, ku nuk mrrin zani i lypsis,
ku nuk mund t'u prishet qetsia zotnive
kur bashkë me zoja flejnë në shtretënt e lumnis.
Mjerimi pjek fëmin para se të burrnohet;
don ta msojë t'i iki grushtit q'i kërcnohet,
atij grusht që në gjumë e shtërngon për fytit
kur fillojnë kllapitë e etheve prej unit
dhe fytyrën e fëmis e mblon hij' e vdekjes,
një stoli e kobshme në vend të buzqeshjes.
Një fryt kurse piqet dihet se ku shkon
qashtu edhe fëmia në bark të dheut mbaron.
Mjerimi punon, punon dit e natë
tu' i vlue djersa në gjoks edhe në ballë,
tue u zhigatun deri në gjujë në baltë
e prap zorrët nga uja i bahen palë-palë.
Shpërblim qesharak! Për qindenjë afsh
në ditë vetëm: lekë tre-katër dhe "marsh!".
Mjerimi kaiher' i ka faqet e lustrueme,
buzët e pezmatueme, mollzat e ngjyrueme,
trupin përmendore e një tregtis së ndytë,
që asht i gjikuem të bijë në shtrat të vet i dytë;
dhe për at shërbim ka për të marrë do franga
ndër çarçafë, ndër fëtyra dhe në ndërgjegje danga.
Mjerimi gjithashtu len dhe në trashigim
jo veç nëpër banka dhe në gja të patundshme,
por eshtnat e shtrembta e në gjoks ndoj dhimbë,
mund që të len kujtim ditën e dikurshme
kur pullaz' i shtëpis u shemb edhe ra
nga kalbsin' e kohës, nga pesha e qiellit,
kur mbi gjithçka u ndi një i tmerrshmi za
plot mallkim dhe lutje si nga fund i ferrit,
ish zan' i njeriut që vdiste nën tra.
Kështu nën kambë të randë të zotit t'egërsuem
thotë prifti vdes ai që çon jetë të dhunuem.
Dhe me këto kujtime, ksi lloj fatkeqësinash
mbushet got' e helmit në trashigim brezninash.
Mjerimi ka motër ngushulluese gotën.
Në pijetore të qelbta, pranë tryezës plot zdrale
të neveritshme, shpirti me etje derdh gotën
në fyt për me harrue nandhetenand' halle.
E gota e turbull, gota satanike
tu' e ledhatue e pickon si gjarpni
dhe kur bie njeriu, si gruni nga drapni,
nën tryezë qan-qeshet në formë tragjikomike.
Të gjitha hallet skami në gotë i mbyt
kur njëqind i derdh një nga një në fyt.
Mjerimi ndez dëshirat si hyjet errsina
dhe bajnë tym si hejt q'i ban shkrum shkreptima.
Mjerimi s'ka gëzim, por ka vetëm dhimba,
dhimba paduruese që të bajnë të çmendesh,
që t'apin litarin të shkojsh fill' e të varesh
ose bahe fli e mjerë e paragrafesh.
Mjerimi s'don mshirë. Por don vetëm të drejt!
Mshirë? Bijë bastardhe e etënve dinakë,
të cilt në mnyrë pompoze posi farisejt
i bijnë lodërtinës me ndjejt dhelparak
tu' ia lëshue lypsiti një grosh të holl' në shplakë.
Mjerimi asht një njollë e pashlyeme
në ballë të njerzimit që kalon nëpër shekuj.
Dhe kët njollë kurr nuk asht e mundshme
ta shlyejnë paçavrat që zunë myk ndër tempuj.`,
    analysis: `**Tema:** Tema kryesore e poemës është mjerimi shoqëror dhe njerëzor, i shfaqur në të gjitha format e tij.

**Subjekti:** Paraqet mjerimin si një realitet të gjithanshëm që shoqëron jetën e njeriut nga lindja deri në vdekje. Poema përshkruan vuajtjen e shtresave të varfra përmes pamjeve të urisë, sëmundjes, punës së rëndë pa shpërblim, degradimit moral dhe shpirtëror. Mjerimi shfaqet në fëmijërinë e dënuar që në djep, në rininë e shtyrë drejt epshit dhe alkoolit, si edhe në trashëgiminë e dhimbshme brez pas brezi.

**Lloji i vargut:** Varg i lirë, pa numër të rregullt rrokjesh dhe pa rimë të qëndrueshme. Ritmi krijohet nga emocionet dhe përsëritjet e fjalëve ("Mjerimi…"). Ky lloj vargu i jep poezisë forcë shprehëse.

**Rima e përdorur:** Rimë e lirë, jo e rregullt. Ka rimë të pjesshme: mjerimi – trishtimi; lagta – ndragta; mbesin – desin.

**Figurat letrare:**
- *Personifikimi:* "Mjerimi punon", "Mjerimi rrit fëmin", "Mjerimi ndez dëshirat"
- *Metafora:* "Mjerimi asht një njollë e pashlyeme"
- *Simboli:* gota → harresa e dhimbjes; djepi i skamit → lindja në varfëri
- *Kontrasti:* jeta e të varfërve ↔ jeta e të pasurve në luks
- *Hiperbola:* theksimi i madh i vuajtjes dhe dhimbjes.
- *Epitetet:* "tavan i tymuem", "zhele të coptueme", "buzët e ndragta".

**Mesazhi:** Mjerimi nuk kërkon mëshirë, por drejtësi. Migjeni dënon shoqërinë që pranon mjerimin si normalitet dhe kritikon ashpër institucionet fetare dhe shtresat e pasura që mbyllin sytë përballë vuajtjes njerëzore.

*Punoi: Gabriela Lushi*`
  },
  {
    id: "bukenTone",
    title: "Bukën tonë të përditshme falna, Zot",
    year: 1936,
    excerpt: "Buke te bardhe, nane, iha qysh kur s'kena hanger!",
    emoji: "🍞",
    author: "Ansuel Sokoli",
    type: "proze",
    text: `– Lil! Hajde, nanë, hajde, me ra me fjete, se te ka shtrue nana.

– Jo pra, jo! Aspak! S'due me fjete! Due me prite babën.

– Po baba vjen vone, moj nanë. Hajde, te paste nana.

– Jo, praaa…

– Po te dëftoj nje prralle te re te bukur.

– Cilen? – ngau djali nga dhoma e zjarrmit, iu avit s'ames dhe e shikonte me shkelqim ne sy.

– Nje te re… U, po te mesoj uratë…

– Jo, jo, s'due uratë, due prralle…

– Mire pra, prralle. Por edhe ti me e mesue permendsh?!

– Pooo – dhe u fut femija nder shtresa dhe e ama u shtri prane tij.

– Hajt, nanë, prrallen…

– Ndegjo, pra. Venia veshin mire dhe thueje ti mbas meje. Ati yne qe rri ne qiejt…

– Aty yne… uf… jo, jo, thueje ti vete ma pare.

– Mire pra: Ati yne qe rri ne qiell, shejtnue qofte emni i yt, te mbrije mbrentimi yt, te bahet vullneti i yt sikur ne qiell edhe ne toke…

– U nane, po kjo nuk asht prralle! Kjo eshte uratë! E din edhe Zefi, ia ka mesue gjyshja…

– E, a shef sa mire e din Zefi?… Duhet edhe ti me xanë.

– Mire, pra… Si fillon? – dhe strukej Lili ne prehen te s'ames. Kryet i mbshteti nder gji te saj, NDIENTE ERE NANE.

– Ati yne qe rri…, – shqyptonte nga nje rrokje e ama e Lili persrite. I ndalohej vemendja nder fjale qe s'kuptonte, por makinalisht vazhdonte te persrisi fjalet nga buza e s'ames.

– Buken tone te perditshme epna sotn, – vazhdonte e ama uratën.

Mbas ketyne fjalve te persrituna, Lili mbet:

– Buke te bardhe, nane, iha qysh kur s'kena hanger! – dhe çok kryet me ia pa ftyren s'ames.

– Hajt, tash me e thane ti vete deri ketu…

– Po… e dij. Si fillon?

– Ati yne…

– Ati yne, buken e bardha na fal…

T'amen e zu gazi, dhe nisi te qesh heshtaz, por e zu kolli:

– Jo, more… ti i re shum per shkurt…

– Uuu, kjo prralle asht shum e gjate, s'e due – jo, aspak, – u zemrue Lili.

– Sa mire Zefi e din uratën? E ti s'e din. Marre!

– Pooo, posi… ai nuk din asnje prralle qe dij une. Ai asht qyqe. Ta kam rrahe, t'i kam ra grusht, pse me ka thane se s'kena çka me hanger dhe pse s'ia kena pague paret per qira.

– Si, more, me i ra djalit te zotnis?! Te rafte pika duerve!

– Po fort, pra! Tash e mbys.

– Besa, s'guxon ma me e preke me dore… Jo, moj nane nuk duhesh me e rrahe Zefin…, – ndrroi e ama me te bute.

– Po, po pse me më thane ai mue se s'kena buke me hanger, – shfajesohej Lili e zani i dridhej gjithnje ma teper. Ishte gati te zhgrehet ne vaj.

E ama e muer me te mire. Ia kruente kryet. Dhe shpejt e zu gjumi.

Lili merrte fryme te rregullt. E ama u suell ne shpine dhe ashtu e shtrime ne shtrese kundronte neper gjysemerrsinen e dhomes. Llamba, e ulun gati krejt, leshonte ere vojguri nen tavanin e ulte te dhomes.

Ia digjte cipen e holle te hundes se ftofun, nga e cila kullonte uje. Ajo e fshinte me gisht. Ndiente, ashtu e shtrime, si e terheq shtresa, e thith, e perpin ne nje gjum te rande si plumbi e te pakuptueshem si errsina. Por, mendimi, si nje korb i zi, ka ba çerdhen ne nje skaj te trunit ne rrashte, pjell te keqen mbas te keqes dhe s'len me fjete.

Diku nga fundi i mides i doli si nje te dridhun, diçka si afsh i nje dashjes, i nje deshires, i nje nevojes se domosdoshme. Edhe çudi! Ashtu e lodhun, e undhsme dhe me shpirt e vujtun, ajo n'at çast deshronte, si net e para te marteses, t'i shtrohej deshirem me gjith zjarrmin e nje trupi qe vuen. Aty, aty asht harresa, shpetimi, e vetmja kenaqsi e jetes se saj varfanjake.

Por edhe njajo pune bahet shpejt e hidhet si berthame e kumlles se gjelbert dhe pa pjek… Ne kesi nate, kur trupi zgjohet nga zjarrmi i etheve te mfshehta, njajo deshire asht si deshira e njeriut, i cili mbasi ka vendose te mbytet, hidhet n'uje, i zehet fryma, mbytet, mbytet me siguri dhe qe ndien kenaqesi bash pse mbytet.

Kola sonte ende s'ka ardhe, por ka me ardhe. Te vije. Kola nuk asht ma Kola qe ishte. Kola i mire, i qeshun, me duer plot qe vinte ne shtepi nuk asht ma, – por asht Kola pa pune. C'e do burrin pa pune? – i tha nje shoqe keto dite. Dhe grueja e votres nuk ndjen shume per burrin pa pune. Po burri me çka dallohet nga grueja? Jo vetem me pantallona, por me punen qe ban per t'i sigurue grues miregjendjen.

Dhe pikerisht me njate dallohet. E kur burri s'e ka at pune, atehere ç'e do? Te na leshojne vete ta fitojme jetesen, – por as njate s'te lane, te qesin ngatresa, – i tha grues se Kolës nje shoqe e cila gjithastu e kishte burrin pa pune. Ajo, bile, dhe i uha dhete leke. Dhe i tha:

– Kur te kesh nevoje te madhe, eja tek une.

Grueja e ndershme e Kolës desh t'i thoshte kesaj grueje: jo, moj grue, une nuk vij ne shtepi tande – pse e tane bota fliste per te se nuk asht e ndershme. Ajo desh t'i thoshte njashtu, por te dhet leket, qe i kishte shtrengue fort ne dore, i thane: ndal! Dhe ajo te gjitha ato mendime te keqija i kaperdin. E kur i kaperdin, nuk i duken gjithaq te keqija.

E sonte burri i saj ka me ardhe. Por, burri pa pune, a asht burr? Grues s'i bahet, s'i duket se asht burr. Dhe sonte kur te vije, ka per te hyme si ne shtepi te huej, pa te drejta dhe marreveshje. E nder shtresa, rate, kur dora ka me udhtue me gjete harresen, grueja ka me i thane: mos me prek.

Po Lili ç'ka pat? Pse u zbe qe nga maja e hundes deri te veshet? E syt pse i xhixhellojne ne zjarrmi? Mos e zu malli per baben? Per baben qe shkoi diku, nga do t'i bije çukulada…

– Mos harro me i prue Lilit çukulade, – i tha nana babës, kur ky me nje valixhe te shkyeme, marrun uha, nisej nga dera e me sy te turbullt shikonte femin.

U nis, shkoi ne kryeqytet. Atje, i thane, se ka me gjete pune. E keshilloi me gjithe mend dhe zoti Filipi. I dha diçka edhe per udhtim, uha. E shoqja nuk bezani fare kur i shoqi ia tha mendimin e vet. E Kolën, kur kjo s'bani za, diçka e theri thelle mfshehtas ne zemer. Por u nis, me vendim te preme qe t'u dergoje femis dhe grues sa me parë per jetese. Me gjith vendim te preme te tij, kaluen disa dit te mira e ai nuk i lajmoi gja shtepis. E shoqja priti dy jave rresht, dit' e nate, ndoj lajm, leter a pare, por kur s'erdh gja, e kojet e bukes munguen e vdekja ne rini nuk pritet me duer kryq, ajo ndryshoi jeten.

Po Lili? Lili çka pat? – Jo, s'e zu malli per babën. As per çukulade… Por u zbardh, u zbe qe nga balli nen floke deri ne bire te mjekres se holle, e ne mes te fetyres syt i qitshin shkendija.

– Nanë, uj…uje nanë, – dhe ne jastek sillte kryet here ne nje ane, here ne tjetren, me gishta qe dridheshin kapte safen e ujit dhe s'e leshonte pa e pi deri ne fund. E e ama ia terhiqte:

– Mjaft, moj nanë… Lil, mjaft ke pi…

Dhe per nje muej, i cili ka 30 dite, dite per dite e zune Lilin ethet. Kur ish nder ethe, i skuqeshin mollzat e syt zvogloheshin; e me tekaluemen e tyne zbehesh dhe qante ose pse nana nuk ia plotsonte deshiren, ose pse i pelqente te qaje. Me qa, kur ke vner dhe ethe, asht nje ngushllim ndosha, kushedi.

– Uf, si ma plase shpirtin, – i thoshte e ama kur ky qante. E Lili vazhdonte te qaje jo pse ia plaste shpirtin s'ames, por pse i pelqente te ndegjoje si i oshtin zani i vet nder veshe dhe i pelqente te qaje nga inati, nga inati. Pse mos te qaj? Po fort! – mendonte Lili me vete.

Pau e ama se si Lili u zverdh si drita e bishtukut e ethet nuk po e lene. Dhe e dinte se duhet me thirre mjekun, me ble barna, me i ba Lilit minester per me hanger, me pime limonade ne vend t'ujit kur ka zjarrmi, me u veshe trashe kur del perjashta, te gjitha keto i din e ama e Lilit, i ka mesue te zotnia kur, si vajze sherbetore, por…

Dhe nje dite, kur Lilin, mbas etheve te forta e zu gjumi, e ama e ndryni shtepine dhe shkoi te grueja qe i kish dhane uha dhete leke. Shkoi shpejt, pa kthye djathtas e as majtas dhe pa u mendue ma gjate, por me vendim te preme, si dhe burri i saj, per me gjete te hollat e nevojshme qe i duheshin per mjekimin e Lilit.`,
    analysis: `**Tema kryesore:** Varfëria dhe jeta e vështirë e njerëzve të varfër që luftojnë për bukën e gojës.

**Lloji i veprës:** Tregim me temë shoqërore.

**Gjuha dhe stili:** Gjuha është e thjeshtë, por me ndjenja të forta. Autori përdor fjalë që prekin zemrën dhe tregojnë realitetin e hidhur.

**Konflikti:** Konflikti kryesor është lufta për mbijetesë — njeriu kundër varfërisë.

**Përmbajtja e shkurtër:** Ngjarja tregon jetën e një familjeje shumë të varfër. Ata nuk kanë bukë për të ngrënë dhe jetojnë me shpresë dhe lutje. Titulli lidhet me lutjen drejtuar Zotit për bukën e përditshme.

**Personazhet:**
- *Nëna* — personazhi kryesor. Përjeton dhimbjen e varfërisë, shqetësohet për fëmijët dhe mban peshën e familjes.
- *Lili (fëmija)* — tregon pafajësinë dhe urinë. E bën gjendjen edhe më të dhimbshme.
- *Kola (babai)* — paraqitet si i pafuqishëm përballë varfërisë, largohet për të kërkuar punë.

**Figurat letrare:**
- *Simboli:* Buka — simbolizon jetën dhe mbijetesën. Zoti — simbolizon shpresën.
- *Ironia:* Njerëzit luten për bukën e përditshme, por prapë mbeten të uritur.
- *Kontrasti:* Shpresës dhe realitetit të hidhur; lutjes dhe mungesës së bukës.
- *Metafora:* Varfëria paraqitet si një forcë që shtyp njerëzit, sikur të ishte një armik.

**Mesazhi:** Varfëria është e padrejtë dhe e dhimbshme, sidomos për fëmijët. Autori kërkon më shumë ndjeshmëri dhe drejtësi për njerëzit e varfër.`
  },
  {
    id: "luliVocerr",
    title: "Luli i Vocërr",
    year: 1936,
    excerpt: "A skush s'e njef Lulin. As shokët e tij, që përpara tij lozin...",
    emoji: "👦",
    author: "Lorenc Halili",
    type: "proze",
    text: `A skush s'e njef Lulin. As shokët e tij, gë perpara tij lozin, nuk e njofin. Ma mirë me thanë se e njofin, por ata lozın për hesap të vet e Luli i shikon për hesap të vet. Sot gjithkush ka punët dhe telashet e veta, ashtu dhe fëmijt, ashtu dhe Luli.
- More Lul! Shum herët ke fillue me shikue punën tande.

Kur Luli hyn n'oborr te shkollës, buza i geshet nga pak, po askuj asnje fjalë s'i thotë. Ecën ngadalë, tue shikue djathtas e majtas, por gjithnjë tue ecé, derisa të mrrije në cak të vet. Aty te dera e rruginës shkollore shumë i pelqen të gendrojë. Aty asht caku i tij, i praruem me rrezet e ngrofta të diellit në këto ditët e vjeshtës. Mbështetet Luli për mur, grushtat e vegjël i shtie ndër xhepa, hundën picrrake të kuqun nga të ftohtit e mëngjesit ia sjell diellit dhe... shikon. Gjaja qé ma tepër ia tërhjek vrejtën janë çizmet, qü i kanë të veshun disa shokë të tij. Sa të bukra janë! Si shkëlqejnë! - mendon Luli dhe pa dashje i shkojnë syt ndër tollumbat e veta, nëpër të cilat shifen fare mirë te pesë gishtat e kambve të zbathuna.

Nga kureshta i afrohet një shoku që ka çizmet ma të reja. Ulet dhe shef në lustrin e çizmës kambët e veta të zhathuna - aq shumë shkëlqejshin çizmet!!! Mbasi shoku me çizme fluturoi, Luli ngadale shkoi te caku i vet, në diell, t'i ngrofi kambet.
- Po kur nuk ka diell, si ia ban i shkreti Lul? Ndoshta ia bajne disi hallin apostujt e mëshirsë dhe të dashunis... Ndoshta, ndoshta...

Nganjëherë i afrohet mësuesi Lulit. Dhe kur e ka ftyrën e dlirtë dhe pa puça, mësuesi ia ledhaton faqet, gushën, e Luli i afrohet, ia merr dorën, e shikon me sy pllumbi dhe kishte dashtë ti fali diçka mësuesit. Por vjollca nuk ka. E Luli i vocërr çka mund ti fali mësuesit tjetër? Veç në ia falte tollumbat e veta, qü kanë hapun gojën si me dashtë me e hangër mësuesin. Po, po, tollumbat e Lulit të vocërr kanë me e hangër mësuesin.`,
    analysis: `**Historiku i krijimit:** "Luli i Vocërr" është shkruar në vitet '30-të të shekullit XX, periudhë kur Shqipëria përballej me varfëri të thellë, mungesë arsimimi dhe pabarazi sociale të dukshme. Migjeni, i cili ka punuar si mësues, sjell një përshkrim realist të jetës së fëmijëve të varfër.

**Zhanri i veprës:** Prozë e shkurtër, Tregim realist, Tregim me karakter social, Realizëm kritik.

**Tematika:**
- Varfëria dhe mjerimi i fëmijërisë
- Pabarazia shoqërore
- Mungesa e lumturisë së fëmijërisë
- Vetmia dhe dëshira e paplotësuar
- Mëshira si zgjidhje e përkohshme, jo si shpëtim

**Problematika:** Varfëria ekstreme e Lulit; dallimet klasore mes fëmijëve; indiferenca e shoqërisë; sistemi që ofron mëshirë, jo zgjidhje reale.

**Sistemi i personazheve:**
- *Luli* – personazhi kryesor; i heshtur, i turpshëm dhe i vetmuar; përfaqëson shtresën e varfër.
- *Shokët* – të pasur ose më të privilegjuar; përfaqësojnë kontrastin klasor.
- *Mësuesi* – i butë dhe mëshirues; i pafuqishëm për të ndryshuar varfërinë.

**Konflikti:**
- *Konflikti i jashtëm:* Luli kundër realitetit të varfërisë dhe pabarazisë.
- *Konflikti i brendshëm:* Dëshira për të pasur si shokët ↔ ndërgjegjësimi për varfërinë.
- Konflikti është më shumë psikologjik dhe social sesa fizik.

**Veçoritë artistike:**
1. *Portreti:* Hundë picrrake, këmbë të zbathura, grushta të vegjël — domethënës për statusin e Lulit.
2. *Peizazhi:* Dielli i vjeshtës simbolizon ngrohtësinë dhe shpresën.
3. *Rrëfimi:* Në vetën e tretë; narratori ndërhyn me pyetje retorike.
4. *Monologu i brendshëm:* Mendimet e Lulit për çizmet dhe mungesën e mundësive.
5. *Antiteza:* Çizmet ↔ këmbët e zbathura; ngrohtësia ↔ ftohtësia e jetës.
6. *Groteska:* Tollumbat që "hapin gojën" krijojnë imazh grotesk dhe dramatik.

**Mesazhi:** Varfëria vret dinjitetin. Fëmijëria nuk duhet të jetë luftë për mbijetesë. Mëshira nuk mjafton; duhet ndryshim i thellë shoqëror. Luli hesht, por heshtja e tij është akuzë ndaj shoqërisë.

*Punoi: Lorenc Halili*`
  },
  {
    id: "historiaENjenes",
    title: "Historia e njënës nga ato",
    year: 1936,
    excerpt: "Lukja, një grua e shtyrë nga varfëria...",
    emoji: "💔",
    author: "Emanuel Molla",
    type: "proze",
    text: `Kjo pjesë rrëfen historinë tragjike të Lukes, një grua e shtyrë nga varfëria të bëhet prostitutë. Ajo shfrytëzohet nga shoqëria, ëndërron një jetë të qetë familjare, por përfundon e zhgënjyer, e varfëruar dhe në fund çmendet.

Lukja ishte vajzë e varfër. Jeta ia kishte mbyllur të gjitha dyert. Shoqëria e shikonte me përbuzje, por njëkohësisht e shfrytëzonte. Studentët dhe klientët e quan "hyjneshë" — por vetëm sa ishte mall tregu.

Ajo kurseu para — napolona — me shpresën se do të shpëtonte. Me ato para u martua me një kallajxhi. Dëshironte një jetë normale, familjare, me dinjitet.

Por martesa dështoi. Burri i saj ishte i pafuqishëm ekonomikisht. Paratë u shpenzuan. Ëndrrat u thyen. Lukja ra përsëri në mjerim — më thellë se kurrë.

Në fund, Lukja çmendet. Ecën nëpër rrugë duke qeshur: "Hi-hi-hi..." — një qeshje që nuk ishte gëzim, por shkatërrimi i plotë i një shpirti njerëzor.

Autori paraqet dramën e individit që shkatërrohet nga kushtet sociale dhe ekonomike. Nuk e gjykon Luken, por e mëshiron dhe e kupton.`,
    analysis: `**Tema kryesore:** Mjerimi dhe padrejtësia sociale, shfrytëzimi i gruas, hipokrizia e shoqërisë, shkatërrimi i ëndrrave njerëzore.

**Lloji i veprës:** Prozë e shkurtër (novelë realiste me frymë kritike sociale).

**Konteksti:** Vepra lidhet me realitetin shqiptar të kohës: varfëri ekstreme, mungesë mundësish për gratë, mentalitet patriarkal dhe hipokrit, përplasja mes moralit të shpallur dhe jetës reale.

**Struktura:**
1. Paraqitja e Lukes dhe mënyra si e shikon shoqëria
2. Shpjegimi filozofik i gjendjes njerëzore
3. Përpjekja e saj për një jetë normale (kursimi i parave dhe martesa)
4. Dështimi ekonomik dhe martesor
5. Rënia morale dhe psikologjike
6. Fundi tragjik — çmendia dhe përjashtimi nga shoqëria

**Personazhet:**
- *Lukja* — personazhi kryesor; viktimë e varfërisë dhe simbol i gruas së shtypur
- *Studentët dhe klientët* — përfaqësojnë hipokrizinë mashkullore
- *Burri (kallajxhiu)* — simbol i dështimit ekonomik dhe egoizmit
- *Shoqëria/turma* — personazh kolektiv që shfrytëzon dhe pastaj përjashton

**Figurat letrare:**
- *Ironia:* Shoqëria e quan Luken "hyjneshë", por e përdor
- *Kontrasti:* Ëndrrës për jetë familjare dhe realitetit brutal
- *Simbolizmi:* Çmendia si shkatërrim shpirtëror; Napolonat (paratë) si iluzion; "Hi-hi-hi" — ironia tragjike

**Simbolikat:**
- Trupi i Lukes — kthimi i njeriut në mall tregu
- Martesa — ëndrra për normalitet që shkatërrohet
- Çmendia — fundi i pashmangshëm i një jete pa dinjitet

**Mesazhi:** Shoqëria që krijon varfëri, krijon edhe "mëkatin". Njeriu nuk bie nga natyra, por nga kushtet ku jeton. Hipokrizia morale është më e dëmshme se vetë mjerimi. Çdo individ ka nevojë për dinjitet, jo vetëm për mbijetesë.`
  },
  {
    id: "bukuriaQeVret",
    title: "Bukuria që vret",
    year: 1936,
    excerpt: "Hana e zbetë, si fytyra e nji të vdekuri, kundron nga kupa e qiellës...",
    emoji: "❄️",
    author: "Elena Ceku",
    type: "proze",
    text: `Hana e zbetë, si fytyra e nji të vdekuri, kundron nga kupa e qiellës. Kundron botën e maleve të kristalizueme nga bora. Kundron kasollat e kristalizueme të katundit, të cilat as frymë nuk marrin. Të gjitha janë mbështjellë në bardhsin e borës. Vret shpirtin e malsorit siç vret shpirtin e artistit shtatorja e barshë e nji grue së lakuriqët.

E në kasolle, e cila gjëmon nën barrën e borës, derdhen dy ngjyra kuq e zi. I kuq zjarmi i votrës në mes të kasolless, e i zi rrethi. Të zeza, t'errta janë skutat e kasolles, nga ndigjohet blegrim i mekun i ndoj delja ose kumbona e lopës. E dhe ato i vret buluria e bardhë. Nga goja u del avulli i afsheve që ngrihet n'ajr, bjen mbi qimet e tyne si brymë dhe kristalizohet. Heshtje. Gjithçkafja e kristalizueme.

Nji dorë shtrihet, zen nji dru e shpupurish zjarmin. Rropos nji "botë gacash". Flaka lëpin errësinën e shkëndijat kërcejnë nën tra dhe nëpër fëtyra rreth votrës. E trupnat e njerzve dridhen, nëpër korriz u përshkohet të ftoftit, që vjen nga skutat, andej nga errsina. Brrr…uf..andej mbrapa shpinet përpijnë errsina me të ftohtit e saj.

-Po shiko mos ngrinë Laroja??

Dhe çohen, i lëshojnë vend rreth zjarmit Larojës, lopës së shtëpisë. Të nxehet dhe ky pjestar familje në kasollen e kristalizueme. E Laroja din si duhet me u shtrimë rreth zjarmit. Po me trupin e saj të math, gati shtypi dy vocrrakë, të cilët i kish zanë gjumi pranë zjarmit.

E kur, andej nga mesnata, acarimi arrin dhe kulmin e vet, atëhere ndër bagëti fillon nji lëvizje. Po, nji lëvizje. Nji nga nji u aviten njerëyve e me syt e vet si me u lutë: "na lëshoni dhe neve të ngrofemi pak rreth yjarmit, se u ngrimë". Dhe njeryit kundrejt njerzve s'kanë mëshirë, po kundrejt shtazve -po. Prandej çohen, ua lëshojnë bagëtis vendin rreth votrës, e ata vetë shkojnë n'errësinë që përpinë.

…..Dhe agimi zbardhë me bukurinë e bardhë që vret. Çohen njerzit me trupnat e mpime dhe me kujtim në ndërgjegje se u kalua dhe nji natë e vështirë. U çuen, por nuk çohet nji vocrrak. Dora e s'amës shtrihet bi të dhe mÇat çast nji britmë e tmerrshme shpoi zemrat e kasolles. Dhimba e nji nanës i shkrinë zemrat në vaj, por ç'e do kur nuk shkrin zemrën e vocrrakut.

Po, ishte ngrimë lokia e nanës. Gjaku i tij i kuq dhe i purpurt ish ngrimë ndër dej dhe në zemër, ish bamë kristal, ish ba rubis, për gjerdhanët e metresave. E trupi i vocrrakut, i lokes së nanës, ishte bamë nji shtatore e ngurët e yhgulun nga gjini i nanës.

Merrnje dhe çonje në qytet kët shtatore. Vendosnje në nji shesh! dhe si përmendore kushtonja ndokujt. Kushtonja atij që ka ma shumë merita për kët vend! Po, ndoj ministrit o deputeti, o ndokuj tjetër… E në rasë se nuk gjeni ndoj njeri që ka merita të mjaftueshme, atëherë kushtonja atij që ka merita ma pak: perëndis klasike.`,
    analysis: `**Hyrje:** Vepra letrare "Bukuria që vret" është një poezi me frymë realiste dhe me theks të fortë kritik social. Në këtë vepër, Migjeni paraqet dramën e varfërisë ekstreme në malet shqiptare, ku bukuria e borës kontrastohet me vdekjen dhe mjerimin.

**Tema dhe ideja:** Tema kryesore është kontrasti midis bukurisë dhe mjerimit. Ideja që përcillet është se bukuria nuk është e mjaftueshme për ta shpëtuar njeriun nga një realitet i ashpër dhe i padrejtë. Titulli "Bukuria që vret" është metaforik dhe përmbledh gjithë kuptimin e veprës.

**Personazhet:**
- *Fëmija (vocrraku)* — viktima e pafajshme e varfërisë dhe të ftohtit
- *Nëna* — simbolizon dhimbjen e nënës që humbet fëmijën
- *Familja fshatare* — përfaqëson popullin e varfër malësor
- *Laroja (lopa)* — tregon se kafshët dhe njerëzit ndajnë të njëjtin mjerim

**Figurat letrare:**
- *Metafora:* "Bukuria që vret" — bora e bukur sjell vdekje
- *Kontrasti (antiteza):* bukuri ↔ mjerim; bardhësia e borës ↔ vdekja e fëmijës
- *Personifikimi:* bukuria paraqitet si forcë që vepron; kasolla "gjëmon"
- *Ironia:* Në fund, autori propozon ta bëjnë fëmijën e ngrirë përmendore — ironi e hidhur ndaj politikanëve
- *Simboli:* Kristalizimi — ngurtësimi i jetës; rubini — gjaku i varfërve shndërrohet në stoli për të pasurit

**Gjendjet shpirtërore:** Trishtim, Dhimbje, Keqardhje, Revoltë, Dëshpërim

**Mesazhi:** Mesazhi i kësaj vepre është se bukuria e jashtme nuk mjafton për të garantuar lumturinë. Në një shoqëri të padrejtë, edhe ajo që është më e bukur mund të shkatërrohet. Migjeni na fton të reflektojmë për realitetin dhe të mos qëndrojmë indiferentë ndaj vuajtjes së të tjerëve.

*Punoi: Elena Ceku*`
  },
  {
    id: "adonQymyrZotni",
    title: "A don qymyr zotni?",
    year: 1936,
    excerpt: "Dy thasë qymyr mi kal. Pranë, malsorja. Trotuari me blok dyqanesh...",
    emoji: "⛏️",
    author: "Atnisa Domi",
    type: "proze",
    text: `Dy thasë qymyr mi kal. Pranë, malsorja. Trotuari me blok dyqanesh djathtas, ashtu edhe majtas. Kali dhe malsorja në parakalim. Qymyri në konkurs. Shikon njeriu artist dhe ia prish sytë kjo dis-harmoni. Një disonancë e vrazhdë. Malsorja i fryn hundët, prodhimin e njesh për trotuar dhe gishtat i fshin për xhubletë. Veprim i thjeshtë, por motiv delikat për një piktor. Thupra në dorë të malsores shkrryhet përtokë dhe shkruen një vijë kilometri gjatë rrugës. Q'ashtu malsorja nënvizon mendimet e veta.

- A do qymyr, zotni?
- Sa?
- Dymbëdhetë lekë… Po ndalu, thuej ti sa. Pse po hik?

Në kët vapë dymbëdhjetë lekë? – pyet një tjetër tue perqeshë.
- Po sa jep ti, pra?
- Jo, mue nuk më duhet.

Vërtet vapë ban. Pa kujt i duhet qymyri. Po e mbaj dhjetë lekë, mendon malsorja dhe hec nëpër hije rrugës së qytetit. Kali lëviz në symbyllë. Ndoshta andron. Tash në pleqni andrron dashnin' e dikurshme të pelës. Malsorja s'e nget. Nuk e trazon në knaqsi të tij të pamvarshme. Asht duruese. Kur dalin në diell, përdhe shkrryhet një hije. Dy hije. Dy hie të ngatrrueme, të kapërthyeme, hieja e kalit dhe hija e malsores. Nuk mund ti dallojsh këto dy hie. Nuk mund t'i këputish. Njana pa tjetrën nuk shkojnë. S'kanë vlerë. Se vetëm bashkë përbajnë një tansi. Një tansi jetsore. Krk-krk kthehet qymyri në shtëpinë të kalit, krk, krk, krk dhe krizmat monotone të patkojve të kalit, që ndeshin për gurë.

Malsorja çon kryet. Shikon diellin… koha me u nisë. Me u kthye në malsi. E qymyri s'u shit. Vendosi ta japi ma lirë.

O ti djalë, sa asht sahati?

Djaloshin e tërheq bukuria e malsores. Miqësisht i afrohet dhe i thotë sa asht ora. E pyet sa e mban qymyrin. Ban pazarllëk, edhe pse s'ka qëllim ta blejë. Por malsorja asht e bukur dhe e re. Pse mos të kuvendojë pak me të? "Asht e ndytë, – konstaton djaloshi. Sa teveqelë janë këto katundarët. Nuk të kuptojnë. Duhet me i thanë… dhe atë që nuk thohet". Kështu mendon djaloshi dhe e shikon malsoren si bir zotnie shërbtoren e re të veten. Teveqele! Teveqele! S'kupton asgja!. Dhe djaloshi shkon në punë të vet.

E malsorja fillon të shqetësohet për kthimin në malsi. Shikon diellin, si gjithnjë po afrohet nga perëndimi. Si ka për t'u kthye në malci nëpër terr? Me të vërtetë, ajo nuk dron prej lugetënve dhe bubezhelave por… T'ishte plakë nuk do kishte aspak frikë, por… Kujtohet si nja dy tri herësh i janë vu mbrapa do njerëz, dhe së pari nuk dinte se ç'lypshin prej saj… Pra, nuk i ndron bubazhelat si qytetarët, por njerëzit… Njerëzit i ka ajo frigë. E pse? Pse asht e re dhe pak e bukur.

Një dhimbë e kandshme shtrëngon zemrën e malsores.

- Sa e ke at qymyr fisnike?

Malsorja siellet. E njef njeriun q'e pyet. Ja ka shite edhe nji herë qymyrin. I thotë:
- Tetë lekë!
- Jo, shtrejt e ke… Më ke idhnue atë ditë, – i thotë njeriu dhe shikon majtas e djathtas.

Malsorja qeshet, disi e turpnueme. E mshef ftyrën. Kuqet. Nuk i çon sytë në njeriun. Pyet e frigueme:
- Sa për ty pra?
- Pesë!
- Merre shtatë!
- Hajde për gjashtë!

Malsorja rri pezull. Mendohet. Shikon diellin.
- Ja pash hajrin! – thotë, dhe i shkon mbrapa blesit. E ai njeri q'aty, ai që tash po ec përpara saj, peshon shumë randë në kujtesën e malsores, e cila kuqet e skuqet nga turpi.`,
    analysis: `**Autori:** Migjeni — Vëllimi: Vargjet e Lira. Rryma: Realizëm kritik. Lloji i veprës: Novel.

**Tema:** Humbja e dinjitetit dhe objektivizimi i gruas; varfëria ekstreme që të detyron të pranosh çdo kusht.

**Subjekti:** Një malësore zbret në qytet për të shitur qymyr me kalin e saj. Në vapën e ditës, ajo përballet me talljet dhe përbuzjen e qytetarëve. Një djalosh i ri afrohet jo për të blerë, por për të shfrytëzuar bukurinë e saj. Në fund, e detyruar nga koha dhe mungesa e të ardhurave, ia shet qymyrin një njeriu që e shfrytëzon, duke e nënshtruar edhe më tepër.

**Figurat letrare:**
- *Simbolika:* Qymyri simbolizon varfërinë dhe mundimin e malësorëve.
- *Metafora:* "Shkruen një vijë kilometri gjatë rrugës"
- *Personifikimi:* Kali "andrron" për dashurinë e dikurshme
- *Onomatope:* Tingujt "Krk-krk" dhe "krismat monotone të patkojve"

**Gjuha:** E pasur, figurative dhe me ngarkesë të fortë emocionale.

**Qëllimi:** Ekspozon hipokrizinë dhe indiferencën e shtresave të larta të qytetit ndaj vuajtjeve të malësorëve.

**Mesazhi:** Kur varfëria të merr gjithçka, njeriu mbetet vetëm trup që shitet për një copë bukë, sepse dinjiteti bëhet luks që s'ka të holla ta paguajë.

*Punoi: Atnisa Domi*`
  },
];

export const poemList = poems.filter(p => p.type === "poezi");
export const proseList = poems.filter(p => p.type === "proze");
