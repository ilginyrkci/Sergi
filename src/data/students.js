// 8 sanatçı × 3 eser = 24 eser
// Öğrenci adları yok, numara bazlı
// Veriyi buradan düzenleyebilirsiniz

import hatayiMotifi from '../assets/Hatayi-Motifi.jpg';
import gulMotifi from '../assets/Gul-Motifi.jpg';
import lalezarMotifi from '../assets/Lalezar-Motifi.jpg';
import kocboynuzu from '../assets/Koc-boynuzu-Motifi.jpeg';
import salmotifi from '../assets/Sal-Motifi.jpeg';
import yildizmotifi from '../assets/Yildiz-Motifi.jpeg';
import akrepmotifi from '../assets/Akrep-Motifi.jpeg';
import ejdermotifi from '../assets/Ejder-Motifi.jpeg';
import kazayağımotifi from '../assets/Kazayağı-Motifi.jpeg';

const student1 = {
  id: 1,
  works: [
    {
      id: 1,
      title: 'Hatayi Motifi',
      titleEn: 'Hatayi Motif',
      description:
        'Hatayi motifi; doğadaki çiçeklerin dikine olarak dizayn edilmesiyle ortaya çıkan kadim bir desendir. Köken olarak Orta Asya, Türkistan\'da ortaya çıktığı düşünülmektedir. Anadolu\'ya Selçuklu zamanında taşınmış olup, oradaki medeniyetlerin anlamlarıyla harmanlanmıştır. Tam stilize çiçek olarak adlandırılan motif, geleneksel süsleme sanatlarımızda ana motiflerin başında gelmektedir. Osmanlı döneminde sık kullanılan hatayi motifi; çini, tezhip, halı ve kilim dokumada, tekstilde ve cilt sanatlarında sıkça kullanılmıştır ve kullanım alanı genişledikçe desen çeşitlenmiştir. Motif olarak incelediğimizde, bitkisel motiflerden olan hatayi motifi bazen orta kısımda simetriyi bozan yapraklar ve kıvrımlar olsa da temel olarak kendi düzeninde kullanılan simetrik bir desendir. Marul çiçeği, narçiçeği, şakayık ve yapraklar desenin ana öğelerini oluşturmaktadır. Bu proje kapsamında bu desenin merkezini küçülterek ve yaprakların simetrisine dikkat ederek hayatın içindeki alanı simgelemek istenmiştir',
      shortDesc: 'Hatayi motifi; doğadaki çiçeklerin dikine olarak dizayn edilmesiyle ortaya çıkan kadim bir desendir.',
      medium: 'Dijital İllüstrasyon / Osmanlı Minyatür Yorumu',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: hatayiMotifi,
      tags: ['Osmanlı', 'Hatayi', 'Geleneksel'],
      color: 'from-red-900/40 to-yellow-900/30',
      accentColor: 'text-red-400',
      accentBorder: 'border-red-500/30',
    },
    {
      id: 2,
      title: 'Gül Motifi',
      titleEn: 'Rose Motif',
      description:
        'Gül motifi geleneksel desenlerimiz içerisinde, köklü bir arka plana sahip bir motiftir. Bitkisel kökenli bir motif olan gül motifi, çiçeklerin kraliçesi olmasıyla akıllara kazınmıştır. Gül motifi, bütün din ve kültürlerde sık sık kullanılmıştır. İslam felsefesine göre peygamber efendimizle bağdaşmaktadır ve ilahi güzelliği simgelemektedir. Sembol olarak gonca halinde işlenmiş gül birliği, açılmış halde işlenmesi ise birliğin çokluğunu anlatmaktadır. Bu projede çini üzerinden yaygın gördüğümüz gül motiflerini günümüzü göz önüne alarak revize ederken, gül motifini hem açık hem de kapalı olarak birlikte kullandık. Bu birleşimde insan hayatında iç ve dış birliğin birlikte anlamlı olduğu anlatılmak istenmiştir',
      shortDesc: 'Osmanlı küşfe ve çini sanatının en sevilen gül motifini çağdaş dijital teknikle yeniden yorumlayan eser.',
      medium: 'Dijital İllüstrasyon / Geometrik Süsleme',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: gulMotifi,
      tags: ['Gül', 'Osmanlı', 'Geleneksel'],
      color: 'from-amber-900/40 to-orange-900/30',
      accentColor: 'text-amber-400',
      accentBorder: 'border-amber-500/30',
    },
    {
      id: 3,
      title: 'Lalezar Motifi',
      titleEn: 'Lalezar Motif',
      description:
        'Türk kültür coğrafyasının en karakteristik ve ikonik simgelerinden biri olan lale, Orta Asya\'dan Anadolu\'ya taşınan estetik mirasın en sade temsilcisidir. İstanbul\'un fethinin ardından şehrin kamusal ve saray bahçelerinde sistematik olarak yetiştirilmeye başlanan lale, özellikle Kanuni Sultan Süleyman döneminde saray baş mimarları ve nakkaşları tarafından yoğun bir melezleme çalışmasına tabi tutulmuş; ince, uzun, hançeri yapraklı ve badem formlu meşhur İstanbul Lalesi bu dönemde tezyinatın (süsleme sanatlarının) ana odağı haline gelmiştir. Geleneksel Türk sanatında tek bir lale motifi ilahi birliği ve zarafeti simgelerken, lalelerin yan yana gelerek ritmik bir düzen oluşturmasıyla elde edilen sonsuz kompozisyonlara Lalezar (Lale Bahçesi) adı verilmiştir. Lalezar deseni; saray kaftanından mintanına, çinilerden tezhip ve ebru sanatına, cami, türbe ve medrese duvarlarından halı-kilim dokumalarına kadar klasik Osmanlı estetiğinin geometrik düzenini ve doğaya olan saygısını temsil eden en görkemli bezeme biçimlerinden biridir. Bu proje kapsamında Lalezar motifi, çağdaş tasarım ilkeleri doğrultusunda dikkatli bir biçimsel evrimle yeniden yorumlanmıştır. Lale motifinin klasik kıvrımları ve badem formu, günümüzün geometrik yalınlığıyla birleştirilerek, birlik ve bütünlük çağrışımlarıyla revize edilmiştir.',
      shortDesc: 'Türk kültür coğrafyasının en karakteristik simgelerinden biri olan lale, Orta Asya\'dan Anadolu\'ya taşınan estetik mirasın en sade temsilcisidir.',
      medium: 'Dijital İllüstrasyon / İznik Çini Yorumu',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: lalezarMotifi,
      tags: ['Lale', 'İznik', 'Osmanlı'],
      color: 'from-blue-900/40 to-teal-900/30',
      accentColor: 'text-teal-400',
      accentBorder: 'border-teal-500/30',
    },
  ],
};

const student2 = {
  id: 2,
  works: [
    {
      id: 1,
      title: 'Koçboynuzu Motifi',
      titleEn: 'Ram\'s Horn Motif',
      description: 'Anadolu el sanatlarının, özellikle de Güneydoğu ve Doğu Anadolu bölgesinde sık kullanılan motiflerden olan "Eli Belinde" ve "Koç Boynuzu" motifleri, insanlık tarihinin en eski evrensel arketiplerinden biri olan dişil ve eril enerjinin kozmik dengesini simgeler. Ortada yer alan ve kollarını yukarı kaldırmış bir insan figürünü andıran "Eli Belinde" motifi; kadınlığı, doğurganlığı, bereketi, anacı koruyuculuğu ve yaşamın sürekliliğini temsil eden dişil bir semboldür. Figürün iki yanında yer alan kıvrımlı "Koç Boynuzu" motifi ise göçebe kültürlerde hayvancılığın önemine bağlı olarak doğmuş; gücü, cesareti, kahramanlığı ve eril koruyuculuğu simgeler. Bu iki zıt ama tamamlayıcı motifin geleneksel dokuma kompozisyonlarında bir arada kullanılması, sadece estetik bir bezeme düzeni oluşturmakla kalmaz; kadın erkek dengesini, aile birliğini, evrendeki zıt güçlerin uyumunu ve kötü enerjilere karşı bütüncül bir savunma kalkanını estetik bir dille ifade eder. Bu proje kapsamında, Anadolunun bu en güçlü toplumsal ve kozmik denge sembolü, geleneksel biçimsel sınırlarından arındırılarak tamamen modern olarak günümüze uyarlanmıştır.Revizemizde eli belinde ve koç boynuzu figürlerinin birbirine kenetlenen ritmik hatları evrende birlikteliği simgelemektedi',
      shortDesc: 'Güç ve bereketi simgeleyen geleneksel Anadolu koçboynuzu motifinin dijital yorumu.',
      medium: 'Dijital İllüstrasyon / Geleneksel Dokuma Yorumu',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: kocboynuzu,
      tags: ['Anadolu', 'Geometrik', 'Geleneksel'],
      color: 'from-orange-900/40 to-red-900/30',
      accentColor: 'text-orange-400',
      accentBorder: 'border-orange-500/30',
    },
    {
      id: 2,
      title: 'Şal Motifi',
      titleEn: 'Paisley Motif',
      description: 'Kökleri Orta Asya coğrafyasına dayanan şal motifi, Güneydoğu Anadolu bölgesinin tekstil, halı, kilim ve geleneksel yazma baskı sanatında köklü bir sembolik arka plana sahiptir. Biçimsel olarak damla, yaprak veya tohuma benzeyen kıvrımlı formuyla doğanın en yalın karşılıklarından biri olan şal motifi; evrensel ve bölgesel mitolojide yaşamın başlangıcını, doğurganlığı, bereketi ve sürekliliği simgeler. Klasik süsleme sanatlarında etrafını saran simetrik yaprak ve çiçek formlarıyla birlikte Güneydoğu Anadolu’nun bereketli topraklarını ve bitki çeşitliliğini yüzeylere aktaran bezeme düzeni, sadece estetik bir değer taşımakla kalmaz; keskin kavisleriyle kötü enerjileri bertaraf ettiğine inanılan koruyucu, tılsımlı bir görsel iletişim dili niteliği taşır. Bu proje kapsamında, Güneydoğu Anadolu el sanatları hafızasında doğanın organik canlılığını temsil eden Şal desenini, bitkisel isleme motifi olması göz önüne alınarak; geleneksel bağlamından koparılmadan tamamen modern ve keskin bir grafik dille yeniden kurgulanmıştır. Güneydoğu bölgesinden aldığımız bu deseni, çalıştığımız revize haliyle birlikte köklerimiz ne kadar derinde ve bundan haberdar isek o kadar köklü olduğumuzu simgelenmesi amaçlanmıştır.',
      shortDesc: 'Zarafet ve hayat ağacını simgeleyen klasik şal motifinin dijital dünyadaki yansıması.',
      medium: 'Dijital İllüstrasyon / Klasik Süsleme',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: salmotifi,
      tags: ['Şal', 'Kıvrımlı', 'Klasik'],
      color: 'from-purple-900/40 to-indigo-900/30',
      accentColor: 'text-purple-400',
      accentBorder: 'border-purple-500/30',
    },
    {
      id: 3,
      title: 'Yıldız Motifi',
      titleEn: 'Star Motif',
      description: 'İslam sanat ve mimarisinin, özellikle de Anadolu Selçuklu dönemi çini, taş ve ahşap işçiliğinin en karakteristik sembollerden biri olan Geometrik Yıldız ve Çiçek (Rozet) motifinin anlamı; evrensel nizamın, bütünün ve ilahi dengenin somut birer matematiksel dışavurumudur. Kökeni İslamiyet öncesi Orta Asya’ya kadar uzanan ve Selçuklu kültürüyle zirve noktasına ulaşan yıldız formlu çokgen yapılarıyla, tesadüfi birer süsleme olmanın ötesinde evrenin kusursuz düzenini, sonsuzluğu ve yaratılıştaki muazzam bütünlüğü simgeler. Merkezden dışa doğru simetrik ve ritmik bir düzenle yayılan rozet çiçek formları ise doğanın estetik dilini geometrinin soyut gücüyle birleştirerek; Güneydoğu Anadolu başta olmak üzere Anadolu’nun farklı yerlerinde asırlardır kullanılmaktadır. Bu proje kapsamında Geometrik Yıldız ve Çiçek motifi, geleneksel bağlamındaki karmaşık örgü nizamından arındırılarak tamamen modern, yalın ve minimalist bir grafik dille yeniden kurgulanmıştır. Tasarımda, şal motifini merkezden yayılan bir düzenle dağılan simetrik yaprakları ve yıldız hatları günümüze uyarladık. Bu revize ile evrensel ve içsel düzeni simgelenmesi amaçlanmı',
      shortDesc: 'Sonsuzluğu ve evrensel düzeni temsil eden geometrik yıldız motifinin modern tasarımı.',
      medium: 'Dijital İllüstrasyon / Geometrik Tasarım',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: yildizmotifi,
      tags: ['Yıldız', 'Geometrik', 'Selçuklu'],
      color: 'from-blue-900/40 to-cyan-900/30',
      accentColor: 'text-cyan-400',
      accentBorder: 'border-cyan-500/30',
    },
  ],
};

const student3 = {
  id: 3,
  works: [
    {
      id: 1,
      title: 'Akrep Motifi',
      titleEn: 'Scorpion Motif',
      description: 'Anadolu dokuma kültürünün ve halk inançlarının en çarpıcı sembollerinden biri olan Akrep motifi, insanın doğanın zorlu ve tehlikeli güçlerine karşı geliştirdiği zihinsel ve sanatsal bir savunma mekanizmasıdır. Kırsal yaşamda zehirli hayvanlardan korunmak amacıyla halı, kilim ve heybelerde sıklıkla dokunan bu motif, yalnızca fiziksel bir tehlikeyi savuşturma arzusunu değil; aynı zamanda kötü niyetli dış etkenlere, nazara ve şeytani ruhlara karşı görünmez bir koruma tılsımını ifade eder. Keskin hatlı bacakları ve yukarı kıvrılmış iğnesiyle betimlenen form, korkulan gücün ustaca evcilleştirilip bir kalkana dönüştürülmesini simgeler. Bu proje kapsamında, Anadolu’nun bu geleneksel koruma ve güç simgesi olan Akrep motifi, arkaik ve sert dokuma kalıplarından arındırılarak tamamen modern, dinamik ve keskin bir grafik dille yeniden yorumlanmıştır. Tasarımda akrebin karakteristik kıvrımları ve köşeli anatomisi, günümüz dijital estetiğiyle birleştirilerek içsel gücü ve koruyucu enerjiyi simgelemesi amaçlanmıştır.',
      shortDesc: 'Kötülüklerden korunmayı ve savunmayı simgeleyen geleneksel akrep motifinin dijital yorumu.',
      medium: 'Dijital İllüstrasyon / Geleneksel Dokuma Yorumu',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: akrepmotifi,
      tags: ['Anadolu', 'Tılsım', 'Geleneksel'],
      color: 'from-zinc-900/40 to-slate-900/30',
      accentColor: 'text-zinc-400',
      accentBorder: 'border-zinc-500/30',
    },
    {
      id: 2,
      title: 'Ejder Motifi',
      titleEn: 'Dragon Motif',
      description: 'Orta Asya Türk mitolojisinin ve Selçuklu-Osmanlı klasik sanatının en görkemli ikonografik unsurlarından biri olan Ejder (Ejderha) motifi, evrenin kozmik dengesini, su kaynaklarını, gökleri ve gizli hazineleri koruyan efsanevi bir gücün temsilcisidir. Çoğu zaman hayat ağacının dibinde veya bulutların arasında iki ejderhanın birbirine dolandığı figürler halinde karşımıza çıkan bu desen; bereketin, bereket getiren bahar yağmurlarının, kudretin ve ilahi bilgeliğin sembolü olarak taş işlemeciliğinden çini sanatına kadar geniş bir yelpazede kullanılmıştır. Gökyüzü ve yeraltı dünyası arasındaki geçişi sağlayan bu mitolojik yaratık, yenilmez bir koruyucu olarak Anadolu efsanelerinde derin izler bırakmıştır. Bu proje kapsamında, asırlardır mimari eserleri ve el sanatlarını süsleyen Ejder motifi, karmaşık ve geleneksel formlarından soyutlanarak daha minimal, çağdaş ve estetik bir forma kavuşturulmuştur. Ejderhanın kıvrımlı ve akışkan gövdesi dijital dünyanın pürüzsüz çizgileriyle harmanlanmış, eski çağların efsanevi gücünün günümüze taşınması hedeflenmiştir.',
      shortDesc: 'Güç, hakimiyet ve bilgeliği temsil eden mitolojik ejder motifinin modern tasarımı.',
      medium: 'Dijital İllüstrasyon / Mitolojik Tasarım',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: ejdermotifi,
      tags: ['Mitoloji', 'Güç', 'Klasik'],
      color: 'from-emerald-900/40 to-green-900/30',
      accentColor: 'text-emerald-400',
      accentBorder: 'border-emerald-500/30',
    },
    {
      id: 3,
      title: 'Kazayağı Motifi',
      titleEn: 'Goose Foot Motif',
      description: 'Anadolu göçebe ve Yörük kültürünün en temel ve yaygın damgalarından biri olan Kazayağı motifi, görsel sadeliğinin ardında çok katmanlı bir toplumsal hafıza barındırır. Üç çatallı bir kuş ayağını andıran bu geometrik form; aile birliğini, bereketi, çoğalmayı ve soyun kesintisiz devamlılığını simgeler. Kuşların gökyüzü ile yeryüzü arasındaki özgür uçuşundan ilham alınarak oluşturulan bu desen, aynı zamanda kısmetin, şansın ve ilahi bir habercinin gelişiyle ilişkilendirilir. Dokuma tezgâhlarında ilmek ilmek işlenen Kazayağı, ailenin dağılmadan bir arada kalması ve ocağın tüterek soyun sürmesi için edilen sessiz bir duanın görsel karşılığıdır. Bu proje kapsamında, geleneksel Türk dokumalarındaki değişmez yerini koruyan Kazayağı motifi, köşeli ve klasik örgü düzeninden sıyrılarak daha modern, ritmik ve serbest bir tasarım anlayışıyla yeniden ele alınmıştır. Üçlü yapının birleşme noktasındaki sağlamlık vurgulanırken, evrensel aile bağlarının ve köklerimize olan bağlılığın dijital bir iz düşümü olarak sunulmuştur.',
      shortDesc: 'Şans, bereket ve aile birliğini simgeleyen kazayağı motifinin dijital estetiği.',
      medium: 'Dijital İllüstrasyon / Geometrik Dokuma',
      dimensions: '4000 × 4000 px',
      year: 2026,
      image: kazayağımotifi,
      tags: ['Kazayağı', 'Bereket', 'Geometrik'],
      color: 'from-rose-900/40 to-pink-900/30',
      accentColor: 'text-rose-400',
      accentBorder: 'border-rose-500/30',
    },
  ],
};

const placeholderStudents = Array.from({ length: 5 }, (_, si) => ({
  id: si + 4,
  works: [
    {
      id: 1,
      title: `Eser ${(si + 3) * 3 + 1}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
    {
      id: 2,
      title: `Eser ${(si + 3) * 3 + 2}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
    {
      id: 3,
      title: `Eser ${(si + 3) * 3 + 3}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
  ],
}));

export const students = [student1, student2, student3, ...placeholderStudents];
