// 8 sanatçı × 3 eser = 24 eser
// Öğrenci adları yok, numara bazlı
// Veriyi buradan düzenleyebilirsiniz

import hatayiMotifi from '../assets/Hatayi-Motifi.jpg';
import gulMotifi from '../assets/Gul-Motifi.jpg';
import lalezarMotifi from '../assets/Lalezar-Motifi.jpg';

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

const placeholderStudents = Array.from({ length: 7 }, (_, si) => ({
  id: si + 2,
  works: [
    {
      id: 1,
      title: `Eser ${(si + 1) * 3 + 1}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
    {
      id: 2,
      title: `Eser ${(si + 1) * 3 + 2}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
    {
      id: 3,
      title: `Eser ${(si + 1) * 3 + 3}`,
      description: 'Eser açıklaması buraya eklenecek.',
      medium: 'Teknik belirtilmedi',
      year: 2026,
      image: null,
    },
  ],
}));

export const students = [student1, ...placeholderStudents];
