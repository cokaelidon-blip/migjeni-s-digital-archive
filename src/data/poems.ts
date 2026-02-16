export interface Poem {
  id: string;
  title: string;
  year: number;
  excerpt: string;
  emoji: string;
  text: string;
  analysis: string;
}

export const poems: Poem[] = [
  {
    id: "kangaRinise",
    title: "Kanga e Rinisë",
    year: 1936,
    excerpt: "O rini, ti kalove si kanga e bilbilit...",
    emoji: "📜",
    text: `O rini, o rini, ti kalove,
Si kanga e bilbilit n'erë,
E zanin tand asht kush e mori
N'nji shteg t'malit pa'u kthy mbrapa...

O rini, kah shkove? Si dielli
Qi humbi n'perëndim pa u kthy,
Ti ike si nji fllad e lehtë
Qi fryn n'ballë e pastaj s'ndjehet my.`,
    analysis: `**Tema kryesore:** Nostalgjia për rininë e humbur dhe kalueshmëria e kohës.

**Figurat letrare:**
- *Krahasimi:* "Si kanga e bilbilit" — rinia krahasohet me këngën e zogjve, diçka e bukur por kalimtare.
- *Metafora:* "Si dielli qi humbi n'perëndim" — rinia si dielli që perëndon, nuk kthehet më.
- *Personifikimi:* Rinisë i flitet si një qenie të gjallë që ka ikur.

**Mesazhi:** Poeti shpreh dhimbjen për kohën e rinisë që ka ikur përgjithmonë, duke na kujtuar se jeta është e shkurtër dhe momentet e bukura nuk kthehen.

**Stili:** Lirik, elegji, me ton melankolik dhe nostalgji.`
  },
  {
    id: "poemaeMjerimit",
    title: "Poema e Mjerimit",
    year: 1936,
    excerpt: "Mjerimi është i madh, po i madh...",
    emoji: "🖤",
    text: `Mjerimi asht i math, po i math,
Sa kodrat qi na rrethojna rrotull,
Si gjâ ma e tmershme
Se qamet, se mâllimet, se dêshprimet...

Nuk ka fjalë mâ t'egra
Se fjala: bukë!
Kur s'e ke bukën e gojës.`,
    analysis: `**Tema kryesore:** Varfëria dhe mjerimi social si problemi më i madh i shoqërisë shqiptare.

**Figurat letrare:**
- *Krahasimi:* "Sa kodrat qi na rrethojna" — mjerimi krahasohet me madhësinë e maleve.
- *Hiperbola:* Mjerimi paraqitet si diçka kolosale, më e madhe se çdo gjë.
- *Simboli:* "Bukë" — simbolizon nevojat bazë të njeriut, mbijetesën.

**Mesazhi:** Migjeni denonconcën varfërinë dhe padrejtësinë sociale. Fjala "bukë" bëhet thirrje për drejtësi dhe dinjitet njerëzor.

**Konteksti historik:** Shkruar në periudhën e varfërisë së thellë në Shqipëri, poema pasqyron realitetin e hidhur të popullit.`
  },
  {
    id: "blasfemia",
    title: "Blasfemia",
    year: 1936,
    excerpt: "Mallkue u qoftë feja, mallkue Zoti...",
    emoji: "🔥",
    text: `Të mallkuem qofshin ata
qi na sollën fenë e hyjnive,
qi na mbollën besimin e verbët,
qi na shtinë ndër sy perdet e misterit!

Paç, kur lyp njeri bukë,
edhe t'i japin lutje!`,
    analysis: `**Tema kryesore:** Kritika ndaj fesë si instrument shtypjeje dhe mashtrimi.

**Figurat letrare:**
- *Apostrofa:* Poeti i drejtohet drejtpërdrejt fesë dhe besimit, duke i mallkuar.
- *Ironia:* "Kur lyp njeri bukë, t'i japin lutje" — ironi e hidhur ndaj hipokrizisë fetare.
- *Antiteza:* Bukë kundrejt lutjes — nevoja materiale kundrejt premtimeve bosh.

**Mesazhi:** Migjeni e sheh fenë si pengesë për përparimin e popullit, një mjet që i mban njerëzit në injorancë ndërsa vuajnë nga uria.

**Rëndësia:** Kjo poezi ishte shumë e guximshme për kohën e saj dhe u censurua.`
  },
  {
    id: "parathenia",
    title: "Parathënia",
    year: 1936,
    excerpt: "Nuk jam unë poeti qi këndon...",
    emoji: "✨",
    text: `Nuk jam unë poeti qi këndon
me zemër t'gëzueme
kangë t'ëmbla dashunije.

Jam poeti qi këndon
kangën e mjerimit t'math
t'nji populli qi vuan.`,
    analysis: `**Tema kryesore:** Vetëpërcaktimi i poetit si zëri i popullit të vuajtur.

**Figurat letrare:**
- *Antiteza:* "Kangë t'ëmbla dashunije" kundrejt "kangën e mjerimit" — poeti refuzon romantizmin.
- *Anafora:* Përsëritja e "Jam poeti qi..." — thekson misionin e tij.

**Mesazhi:** Migjeni deklaron se nuk është poet i dashurisë, por poet i të shtypurve. Kjo poezi shërben si manifest i tij poetik.

**Rëndësia:** Parathënia hap librin "Vargjet e Lira" dhe përcakton qëllimin e gjithë veprës së Migjenit.`
  },
  {
    id: "recitaliVjetit",
    title: "Recitali i Vjetit",
    year: 1935,
    excerpt: "Vjeti nuk është më i ftohti...",
    emoji: "❄️",
    text: `E nata asht e ftohtë e dimni,
Nji natë e errtë qi s'ka hana,
Nji natë qi shtrihet mbi qytet
Si nji kafshë e ngordhun e ligë.

Nëpër rrugë shkon era e ftohtë
e fryn, e fishkëllen, e qan...`,
    analysis: `**Tema kryesore:** Dimri si metaforë e kushteve të vështira të jetës.

**Figurat letrare:**
- *Krahasimi:* "Si nji kafshë e ngordhun e ligë" — nata krahasohet me diçka të vdekur.
- *Personifikimi:* Era "fryn, fishkëllen, qan" — natyrës i jepen cilësi njerëzore.
- *Atmosfera:* E errët, e ftohtë, depresive — pasqyron gjendjen shpirtërore.

**Mesazhi:** Dimri simbolizon jo vetëm stinën e ftohtë, por edhe gjendjen e mjerueshme të shoqërisë.`
  },
  {
    id: "treguar",
    title: "Treguar",
    year: 1936,
    excerpt: "Pazari i vjetër, pazari i vogël...",
    emoji: "🏪",
    text: `Pazari i vjetër, pazari i vogël,
Me dritare t'thyeme e t'pluhurosuna,
Me rrugë t'ngushta e t'laguna,
Me njerz qi mezi tërheqin kambët...

Aty tregohet jeta
e nji qyteti qi vdes ngadalë.`,
    analysis: `**Tema kryesore:** Dekadenca e qytetit dhe mjerimi urban.

**Figurat letrare:**
- *Përshkrimi realist:* Detajet e pazarit — dritare të thyera, rrugë të ngushta — krijojnë tablonë e varfërisë.
- *Metafora:* "Nji qyteti qi vdes ngadalë" — qyteti si organizëm i gjallë që po shuhet.
- *Sinestezi:* Ndjesi vizuale, fizike dhe emocionale ndërthuren.

**Mesazhi:** Migjeni pikturon degradimin social dhe ekonomik përmes imazheve të forta vizuale të pazarit.`
  },
  {
    id: "bukenTone",
    title: "Bukën tonë të përditshme falna, Zot",
    year: 1936,
    excerpt: "Buke te bardhe, nane, iha qysh kur s'kena hanger!",
    emoji: "🍞",
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
    excerpt: "Luli, fëmija i varfër që shikon botën me sy të mëdhenj...",
    emoji: "👦",
    text: `Luli i Vocërr është tregimi i një fëmije të varfër që përjeton padrejtësitë e botës në mënyrën më të thjeshtë — përmes çizmeve që s'i ka, tollumbave që s'i lozën, dhe diellit që nuk e ngroh mjaftueshëm.

Ecën ngadalë nëpër oborrin e shkollës, me këmbë zbathura, me hundë të kuqe nga ftohti, me grishura në veshje. Shikon shokët e tij që luajnë, por nuk guxon t'u afrohet. Shokët e pasur kanë çizme, kanë tollumba, kanë buzëqeshje.

Mësuesi e shikon Lulin. E shikon me mëshirë, por mëshira nuk mjafton. Ia fal diçka, ndoshta një fjalë të butë, por fjala nuk ngroh këmbët.

Luli hesht. Nuk flet shumë, nuk ankohet. Thjesht shikon — me sy të mëdhenj e të ndjeshëm — botën që i ka kthyer shpinën.

Dielli shndrit mbi oborr, por rrezet e tij nuk arrijnë deri te Luli. Si fluturojnë vjollcat përreth, ashtu fluturon edhe fëmijëria e tij — larg, pa u kthyer.`,
    analysis: `**Tema kryesore:** Varfëria fëmijërore, pabarazia sociale dhe klasore, indiferenca e shoqërisë ndaj fëmijëve të varfër.

**Lloji i veprës:** Tregim i shkurtër realist.

**Personazhi kryesor — Luli:**
- Fëmijë i varfër, i heshtur, i ndjeshëm
- Përfaqëson shtresën e varfër të shoqërisë
- Karakterizohet nga vetmia dhe pafuqia

**Personazhe të tjera:**
- *Mësuesi* — afrohet me mëshirë por nuk ofron zgjidhje reale
- *Shokët* — përfaqësojnë dallimet klasore dhe privilegjin

**Teknikat artistike:**
- *Portreti:* Përshkrim i detajuar fizik — këmbët zbathura, hunda e kuqe, grishurat
- *Simbolet:* Çizmet — simbolizojnë statusin social; Dielli — ngrohtësinë dhe lumturinë e paplotësuar; Tollumbat — fëmijërinë e humbur
- *Kontrasti:* Fëmijët e pasur ↔ Luli i varfër; Dielli ngroh ↔ por jo Lulin
- *Ironia:* Mëshira e mësuesit që nuk sjell ndryshim

**Konflikti:** Konflikt social — Luli kundër pabarazisë dhe mungesës së mundësive.

**Mesazhi:** Varfëria fëmijërore është akuzë e thellë ndaj shoqërisë. Fëmijëria duhet të jetë e ngrohtë dhe e sigurt për të gjithë, por realiteti krijon imazhe groteske dramatike. Heshtja e Lulit "hap gojën" — zbathura, ftohësia dhe vetmia janë akuzë shoqërore.`
  },
  {
    id: "historiaENjenes",
    title: "Historia e njënës nga ato",
    year: 1936,
    excerpt: "Lukja, një grua e shtyrë nga varfëria...",
    emoji: "💔",
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
  }
];
