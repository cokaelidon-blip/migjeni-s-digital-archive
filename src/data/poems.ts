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
  }
];
