import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { title } from 'node:process';

declare var bootstrap: any;

@Component({
  selector: 'app-museum',
  standalone: true,
  imports: [],
  templateUrl: './museum.component.html',
  styleUrl: './museum.component.css'
})
export class MuseumComponent implements OnInit {

  
  item: any;
  items = [
    { id: 1, title: 'Louvre Museum', subtitle: 'Paris, France', imagesrc:'../../assets/images/museuLouvre.jpg', description: 'The Louvre Museum, located in the heart of Paris, is one of the most iconic cultural institutions in the world. With its imposing structure and vast art collection, the Louvre attracts millions of visitors every year, eager to explore its corridors filled with artistic treasures.<br><br>Founded in 1793, the Louvre began as a royal fortress before transforming into a national museum during the French Revolution. Since then, it has continuously expanded its collection, which ranges from ancient artifacts to modern art masterpieces.<br><br>However, the Louvre is not limited to European art. Its collection is truly global, including artifacts from Ancient Egypt, treasures from Mesopotamia, Greek and Roman sculptures, among others. This diversity reflects the richness of human history and provides visitors with an enriching and educational experience.<br><br>In addition to its permanent collections, the Louvre also organizes temporary exhibitions that explore diverse themes and offer new perspectives on art and culture. With so many treasures to discover, a visit to the Louvre Museum is an unforgettable journey through centuries of history and human creativity.' },
    { id: 2, title: 'Museu Louvre', subtitle: 'Paris, France', imagesrc:'../../assets/images/museuLouvre2.jpg', description: 'O Museu do Louvre, situado no coração de Paris, é uma das mais emblemáticas instituições culturais do mundo. Com sua imponente estrutura e vasta coleção de arte, o Louvre atrai milhões de visitantes todos os anos, ansiosos por explorar seus corredores repletos de tesouros artísticos.  Fundado em 1793, o Louvre começou como uma fortaleza real antes de se transformar em um museu nacional durante a Revolução Francesa. Desde então, tem expandido continuamente sua coleção, que abrange desde artefatos da antiguidade até obras-primas da arte moderna.  No entanto, o Louvre não se limita apenas à arte europeia. Sua coleção é verdadeiramente global, incluindo artefatos do Egito Antigo, tesouros da Mesopotâmia, esculturas gregas e romanas, entre outros. Esta diversidade reflete a riqueza da história da humanidade e proporciona aos visitantes uma experiência enriquecedora e educativa.  Além das suas coleções permanentes, o Louvre também organiza exposições temporárias que exploram temas diversos e oferecem novas perspetivas sobre a arte e a cultura. Com tantos tesouros para descobrir, uma visita ao Museu do Louvre é uma jornada inesquecível através dos séculos de história e criatividade humana' },
    { id: 3 ,title: 'Museu dos Coches', subtitle:'Lisboa, Portugal', imagesrc:'../../assets/images/museucoches.jpg', description:'Localizado no coração de Lisboa, o Museu dos Coches é uma jóia cultural que encanta visitantes de todo o mundo. Fundado em 1905, este museu singular é dedicado à preservação e exibição de uma das mais impressionantes coleções de carruagens reais do mundo.  Ao adentrar o museu, os visitantes são transportados para uma época de esplendor e elegância, quando as carruagens eram o símbolo máximo de status e poder. Aqui, é possível admirar uma vasta variedade de carruagens meticulosamente restauradas, que datam desde o século XVII até ao século XIX.   Além das carruagens em si, o Museu dos Coches oferece uma experiência imersiva através de exposições interativas, vídeos informativos e artefatos históricos que ajudam a contextualizar o papel desses veículos na sociedade de outrora.  Para os entusiastas da história e da cultura, uma visita ao Museu dos Coches é uma verdadeira viagem no tempo, proporcionando uma visão fascinante do passado glorioso de Portugal e da sua ligação à realeza europeia.' },
    { id: 4 ,title: 'Coach Museum', subtitle:'Lisboa, Portugal', imagesrc:'../../assets/images/museucoches.jpg', description:'Located in the heart of Lisbon, the Coach Museum is a cultural gem that delights visitors from all over the world. Founded in 1905, this unique museum is dedicated to preserving and displaying one of the most impressive collections of royal carriages in the world. Upon entering the museum, visitors are transported to a time of splendor and elegance, when carriages were the ultimate symbol of status and power. Here, visitors can admire a vast array of meticulously restored carriages, dating from the 17th to the 19th centuries. In addition to the carriages themselves, the Coach Museum offers an immersive experience through interactive exhibits, informative videos and historical artifacts that help contextualize the role of these vehicles in society in the past. For history and culture enthusiasts, a visit to the Coach Museum is a true journey back in time, providing a fascinating insight into Portugal’s glorious past and its connection to European royalty.'},
    { id: 5 ,title: 'Museu do Vaticano', subtitle:'Vaticano', imagesrc:'../../assets/images/museucoches.jpg', description:'Os Museus do Vaticano, localizados dentro dos muros da Cidade do Vaticano, são uma das mais impressionantes coleções de arte e artefatos históricos do mundo. Fundados no início do século XVI, os museus têm expandido continuamente sua coleção ao longo dos séculos, tornando-se um destino imperdível para os amantes da arte, da história e da cultura.  Uma das principais atrações dos Museus do Vaticano é a Capela Sistina, famosa pelos seus magníficos afrescos, incluindo o icônico teto pintado por Michelangelo, que retrata cenas do Gênesis e o Juízo Final. Esta obra-prima renascentista é um testemunho da genialidade artística de Michelangelo e é considerada uma das maiores realizações da história da arte.  Além da Capela Sistina, os Museus do Vaticano abrigam uma impressionante coleção de arte que abrange desde antiguidades egípcias até pinturas renascentistas e esculturas clássicas. Destacam-se também os Apartamentos Borgia, ricamente decorados com afrescos de artistas como Rafael e Pinturicchio, e a Galeria dos Mapas, que exibe uma série de mapas topográficos da Itália pintados no século XVI.  Outros destaques incluem a Escadaria de Bramante, uma obra-prima da arquitetura renascentista, e a Pinacoteca Vaticana, que abriga uma coleção de pinturas de artistas como Rafael, Caravaggio e Leonardo da Vinci. Além disso, os Museus do Vaticano também possuem uma impressionante coleção de artefatos religiosos, incluindo cálices, paramentos e relíquias sagradas.  Com sua vasta coleção e riqueza histórica, os Museus do Vaticano oferecem aos visitantes uma oportunidade única de explorar a arte e a história da humanidade através dos séculos, proporcionando uma experiência verdadeiramente inesquecível.'},
    { id: 6 , title: 'Museu do Vaticano', subtitle:'Vaticano', imagesrc:'../../assets/images/museucoches.jpg', description:'The Vatican Museums, located within the walls of Vatican City, are one of the most impressive collections of art and historical artifacts in the world. Founded in the early 16th century, the museums have continually expanded their collection over the centuries, making them a must-see destination for lovers of art, history and culture. One of the main attractions of the Vatican Museums is the Sistine Chapel, famous for its magnificent frescoes, including Michelangelo’s iconic ceiling, which depicts scenes from Genesis and the Last Judgment. This Renaissance masterpiece is a testament to Michelangelo’s artistic genius and is considered one of the greatest achievements in the history of art. In addition to the Sistine Chapel, the Vatican Museums house an impressive collection of art ranging from Egyptian antiquities to Renaissance paintings and classical sculptures. Other highlights include the Borgia Apartments, richly decorated with frescoes by artists such as Raphael and Pinturicchio, and the Gallery of Maps, which displays a series of topographical maps of Italy painted in the 16th century. Other highlights include the Bramante Staircase, a masterpiece of Renaissance architecture, and the Pinacoteca Vaticana, which houses a collection of paintings by artists such as Raphael, Caravaggio and Leonardo da Vinci. In addition, the Vatican Museums also house an impressive collection of religious artefacts, including chalices, vestments and sacred relics. With their vast collection and historical wealth, the Vatican Museums offer visitors a unique opportunity to explore art and human history through the centuries, providing a truly unforgettable experience.'},
    { id: 7, tittle:'Museu do Prado', subtitle:'Madrid, Espanha', imagesrc:'../../assets/images/prado.jpg', description:'O Museu do Prado, localizado em Madrid, Espanha, é uma das mais prestigiadas instituições de arte do mundo. Fundado em 1819, o museu abriga uma vasta coleção de obras-primas da pintura europeia, com ênfase especial na arte espanhola, italiana e flamenga. Uma das maiores atrações do Museu do Prado é a sua coleção de pinturas espanholas dos séculos XVI ao XIX, que inclui obras de mestres como Velázquez, Goya e El Greco. Entre as pinturas mais famosas estão "As Meninas" de Velázquez, um dos retratos mais célebres da história da arte, e "O 3 de Maio de 1808" de Goya, uma representação poderosa dos horrores da guerra. Além da arte espanhola, o Museu do Prado também possui uma impressionante coleção de pinturas italianas, incluindo obras de Ticiano, Rafael e Tintoretto, e uma extensa seleção de pinturas flamengas e holandesas, com destaque para Rembrandt e Rubens. Além das pinturas, o Museu do Prado abriga também uma coleção de esculturas, desenhos, gravuras e artes decorativas, oferecendo aos visitantes uma visão abrangente da arte europeia ao longo dos séculos. Com sua vasta coleção e seu prestígio internacional, o Museu do Prado é um destino imperdível para os amantes da arte e da cultura, proporcionando uma experiência enriquecedora e educativa para os visitantes de todo o mundo.'},
    { id: 8, title:'Prado Museum', subtitle:'Madrid, Espanha', imagesrc:'../../.assets/images/prado,jpg', description:'The Prado Museum, located in Madrid, Spain, is one of the most prestigious art institutions in the world. Founded in 1819, the museum houses a vast collection of masterpieces of European painting, with a special emphasis on Spanish, Italian and Flemish art. One of the greatest attractions of the Prado Museum is its collection of Spanish paintings from the 16th to the 19th centuries, which includes works by masters such as Velázquez, Goya and El Greco. Among the most famous paintings are Velázquezs Las Meninas, one of the most celebrated portraits in the history of art, and Goyas The Third of May 1808, a powerful depiction of the horrors of war. In addition to Spanish art, the Prado Museum also has an impressive collection of Italian paintings, including works by Titian, Raphael and Tintoretto, and an extensive selection of Flemish and Dutch paintings, with particular emphasis on Rembrandt and Rubens. In addition to paintings, the Prado Museum also houses a collection of sculptures, drawings, prints and decorative arts, offering visitors a comprehensive overview of European art through the centuries. With its vast collection and international prestige, the Prado Museum is a must-see destination for art and culture lovers, providing an enriching and educational experience for visitors from around the world.'},
  ]

  works = [
    /*museu louvre */ 
    { id: 1, museum: 1, title:'Mona Lisa', imagesrc:'../../assets/images/monalisa.webp', artist: 'Leonardo da Vinci', description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world".'},
    { id: 2, museum: 1, title:'Liberty Leading the People', imagesrc:'../../assets/images/La_Liberté_guidant_le_peuple.jpg', artist: 'Eugène Delacroix', description: 'Liberty Leading the People is a painting of the Romantic era by the French artist Eugène Delacroix, commemorating the July Revolution of 1830 that toppled King Charles X.'},
    { id: 3, museum: 1, title:'Vénus de Milo', imagesrc:'../../assets/images/venusdemilo.jpg', artist:' Alexandre de Antioquia', description:'An ancient Greek sculpture depicting the goddess of love and beauty, it is one of the most famous sculptures of the classical world.'},
    { id:4, museum: 1, title: 'Vitória de Samotrácia', imagesrc:'../../assets/images/vitoriasamotracia.jpg', artist:'descpnhecida', description:'This marble sculpture represents the Greek goddess Nike, personification of victory, and is one of the most impressive works of Hellenic art.'},
    { id:5, museum: 1, title: 'A Escola de Atenas de Rafael', imagesrc:'../../assets/images/escoladeantesrafael.jpg', artist:'Rafael', description:'This famous Renaissance painting depicts the greatest philosophers of Ancient Greece gathered in a monumental setting, symbolizing knowledge and wisdom.'},
    { id:6, museum: 1, title:'O Código de Hamurábi', imagesrc:'../../assets/images/CodigoHamurábico.jpg', artist:'Hamurabi', description:'An ancient set of laws inscribed on a stone stele, it is one of the oldest known forms of legislation and offers insights into Mesopotamian civilization.'},
    { id:7, museum: 1, title:'Grande Esfinge de Tanis', imagesrc:'../../assets/images/GrandeEsfingeTanis.jpg', artist:'desconhecido', description:'This colossal sculpture represents one of the most recognizable symbols of Ancient Egypt and is one of the largest preserved sphinxes.'},
    { id:8, museum: 1, title:'O Rapto das Sabinas de Jacques-Louis David', imagesrc:'../../assets/RaptoSabrinas.jpg', artist:'Rômulo', description:'A masterpiece of neoclassicism depicting an episode from the Roman zodiac, demonstrating the artists skill in capturing drama and emotion.'},
    
    /*museu dos coches */
    { id: 9, museum: 3, title:'Carruagem de D. João V', imagesrc:'../../assets/images/carruagemDJOAOV.jpg', description:'A masterpiece of the Baroque style, this carriage is richly ornamented with gilded details and exuberant carvings, representing the height of luxury in the 18th century.'},
    { id:10, museum: 3, title:'Carruagem da Coroa', imagesrc:'../../assets/images/CarruagemCoroa.jpg', description:'One of the most imposing pieces in the museum, this carriage was commissioned by King João VI and is adorned with symbols of the Portuguese monarchy, including the royal crown and coat of arms.'},
    { id:11, museum: 3, title:'Berlinda da Rainha D. Maria Pia', imagesrc:'../../assets/images/BerlindaRainhaDMariaPia.jpg', description:'This elegant carriage was used by Queen Maria Pia, wife of King Luís I, and stands out for its sophistication and delicate details.'},
    { id:12, museum: 3, title:'Carruagem de Gala de D. Maria II', imagesrc:'../../assets/images/CarruagemGalaMariaII.jpg', description:'A stunning piece that reflects the neoclassical style of the 19th century, this carriage was used on ceremonial occasions by Queen Maria II.'},
    { id:13, musuem: 3, title:'Carruagem de D. Carlos I', iamgesrc:'../../assets/images/CarruagemDCARLOSI.jpg', description:'This carriage, used by the last king of Portugal, is a stunning example of late 19th century design and engineering, with exquisite detailing and a majestic appearance.' },
    { id:14, museum: 3, title:'Carruagem de D. Fernando II', imagesrc:'../../assets/images/CarruagemDFernandoII.jpg', description:'Commissioned by King Ferdinand II, this carriage stands out for its elegant design and its association with 19th century romanticism.'},
    { id:15, museum: 3, title:'Carruagem da Princesa D. Isabel Maria', imagesrc:'../../assets/images/CarruagemPricnesaIsabel.jpg', description:'Used by Princess Isabel Maria, this carriage is a notable example of the Rococo style, with graceful curves and elaborate decorations.'},

    /*museu do vaticano*/

    { id: 16, museum: 5, title:'Teto da Capela Sistina por Michelangelo', imagesrc:'../../assets/images/TetoCapela.jpg', description:'One of the most famous works of art in the world, the ceiling of the Sistine Chapel features a series of spectacular frescoes depicting scenes from Genesis, including the famous creation of Adam.'},
    { id: 17, museum: 5, title:'Juízo Final por Michelangelo', imagesrc:'../../assets/images/JuizoFinal.jpg', description:'Located on the wall behind the altar of the Sistine Chapel, this gigantic fresco depicts the Last Judgment and is one of Michelangelos most impressive and controversial works.' },
    { id: 18, museum: 5, title:'Esfera Armilar e Muralha de Areia de Belvedere', imagesrc:'../../assets/images/Esfera Armilar', description:'Ancient sculptures dating back to Ancient Rome, these works represent the artistic skill of the sculptors of the time and are impressive examples of classical art.'},
    { id: 19, museum: 5, title:'Afrescos nos Apartamentos de Rafael', imagesrc:'../../assets/images/Afrescos', description:'The frescoes painted by Raphael and his team in the Raphael Apartments depict scenes from papal life and are considered some of the Renaissance masters finest works.'},
    { id: 20, museum: 5, title:'Escadaria de Bramante', imagesrc:'../../assets/images/EscadariaBramante', description:'A masterpiece of Renaissance architecture, this spiral staircase was designed by Donato Bramante and is one of the museums most beautiful architectural features.'},
    { id: 21, museum: 5, title:'Pinacoteca Vaticana', imagesrc:'../../assets/images/PinacotecaVaticana', description:'This gallery houses a collection of Renaissance and Baroque paintings by artists such as Raphael, Caravaggio, Leonardo da Vinci and Titian, offering a comprehensive overview of Italian art.'},
    { id: 22, museum: 5, title:'Laocoonte e Seus Filhos', imagesrc:'../../assets/images/LaocoonteeFilhos', description:'An ancient Greek sculpture depicting the Trojan priest Laocoon and his sons being attacked by serpents is one of the most famous works of classical sculpture.'},


    /* museu do prado*/

    { id: 23, museum: 7, title:'As Meninas ', imagesrc:'../../assets/images/AsMeninas ', author:'Diego Velázquez', description:'One of the most famous paintings in the world, this complex and intriguing portrait is a 17th-century masterpiece and a symbol of Velázquezs genius.'},
    { id: 24, museum: 7, title:'O 3 de Maio de 1808 em Madrid', imagesrc:'../../assets/images/O3deMaiode1808emMadrid', author:'Francisco de Goya', description:'This monumental painting depicts the massacre of Spanish citizens by French troops during the Peninsular War and is a powerful symbol of resistance and patriotism.'},
    { id: 25, museum: 7, title:'A Rendição de Breda ', imagesrc:'../../assets/images/ARendiçãodeBreda ', author:'Diego Velázquez', description:'Also known as "The Lances", this historical painting depicts the surrender of the city of Breda during the Eighty Years War and is one of Velázquezs most important works.'},
    { id: 26, museum: 7, title:'A Maja Despida', imagesrc:'../../assets/images/AMajaDespida',author:'Francisco de Goya', description:': This nude portrait, which generated controversy at the time of its creation, is one of the most sensual and intriguing works in the Prado Museum.'},
    { id: 27, museum: 7, title:'O Jardim das Delícias Terrenas', imagesrc:'../../assets/images/OJardimdasDelíciasTerrenas',author:'Hieronymus Bosch', description:'This surrealist triptych painting is a vivid representation of heaven, earth and hell, full of symbolism and imagination.'},
    { id: 28, museum: 7, title:'O Lavrador de Parma ', imagesrc:'../../assets/images/OLavradordeParma', author:'Giuseppe Arcimboldo', description:'This unique work depicts a human face composed of a variety of fruits, vegetables and flowers, demonstrating Arcimboldos skill and creativity.'},
    { id: 29, museum: 7, title:'A Anunciação', imagesrc:'../../assets/images/AAnunciação', author:'Fra Angelico', description:'This beautiful Renaissance fresco depicts the moment when the angel Gabriel announces to the Virgin Mary that she will give birth to Jesus, capturing the serenity and reverence of the event.'}
  ]
  workImageSrc: string | undefined;
  workTitle: string | undefined;
  workArtist: string | undefined;
  workDescription: string | undefined;

  audios = [
    { id: 1, museum: 1, title:'Never Gonna Give You Up', src:'<source src="../../assets/audios/NeverGonnaGiveYouUp.mp3">', transcript: 'We\'re no strangers to love<br>You know the rules and so do I (do I)<br>A full commitment\'s what I\'m thinking of<br>You wouldn\'t get this from any other guy<br>I just wanna tell you how I\'m feeling<br>Gotta make you understand<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>We\'ve known each other for so long<br>Your heart\'s been aching, but you\'re too shy to say it (say it)<br>Inside, we both know what\'s been going on (going on)<br>We know the game and we\'re gonna play it<br>And if you ask me how I\'m feeling<br>Don\'t tell me you\'re too blind to see<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>We\'ve known each other for so long<br>Your heart\'s been aching, but you\'re too shy to say it (to say it)<br>Inside, we both know what\'s been going on (going on)<br>We know the game and we\'re gonna play it<br>I just wanna tell you how I\'m feeling<br>Gotta make you understand<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you'}
  ]
  audioTitle: string | undefined;
  audioSrc: string | undefined;
  audioTranscript: string | undefined;

  videos = [
    { id: 1, museum: 1, title:'Fernando Mendes', src:'<source src="../../assets/videos/FernandoMendes.mp4">', thumbnail:'../../assets/images/FernandoMendes.png', transcript: 'Espetáculo'}
  ]
  videoTitle: string | undefined;
  videoSrc: string | undefined;
  videoDescription: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; // convert to number
      this.item = this.items.find(item => item.id === id);
    });
  }
  
  openModalWork(id: number) {
    const selectedWork = this.works.find(img => img.id === id);
    if (selectedWork) {
      this.workImageSrc = selectedWork.imagesrc;
      this.workTitle = selectedWork.title;
      this.workArtist = selectedWork.artist;
      this.workDescription = selectedWork.description;
      const modalElement = document.getElementById('workModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  
  openModalAudio(id: number) {
    const selectedAudio = this.audios.find(aud => aud.id === id);
    if (selectedAudio) {
      this.audioTitle = selectedAudio.title;
      this.audioSrc = selectedAudio.src;
      this.audioTranscript = selectedAudio.transcript;
      const modalElement = document.getElementById('audioModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  
  openModalVideo(id: number) {
    const selectedVideo = this.videos.find(vid => vid.id === id);
    if (selectedVideo) {
      this.videoTitle = selectedVideo.title;
      this.videoSrc = selectedVideo.src;
      this.videoDescription = selectedVideo.transcript;
      const modalElement = document.getElementById('videoModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}
