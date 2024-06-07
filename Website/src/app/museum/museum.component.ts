import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    { id: 6 , title: 'Museu do Vaticano', subtitle:'Vaticano', imagesrc:'../../assets/images/museucoches.jpg', description:'The Vatican Museums, located within the walls of Vatican City, are one of the most impressive collections of art and historical artifacts in the world. Founded in the early 16th century, the museums have continually expanded their collection over the centuries, making them a must-see destination for lovers of art, history and culture. One of the main attractions of the Vatican Museums is the Sistine Chapel, famous for its magnificent frescoes, including Michelangelo’s iconic ceiling, which depicts scenes from Genesis and the Last Judgment. This Renaissance masterpiece is a testament to Michelangelo’s artistic genius and is considered one of the greatest achievements in the history of art. In addition to the Sistine Chapel, the Vatican Museums house an impressive collection of art ranging from Egyptian antiquities to Renaissance paintings and classical sculptures. Other highlights include the Borgia Apartments, richly decorated with frescoes by artists such as Raphael and Pinturicchio, and the Gallery of Maps, which displays a series of topographical maps of Italy painted in the 16th century. Other highlights include the Bramante Staircase, a masterpiece of Renaissance architecture, and the Pinacoteca Vaticana, which houses a collection of paintings by artists such as Raphael, Caravaggio and Leonardo da Vinci. In addition, the Vatican Museums also house an impressive collection of religious artefacts, including chalices, vestments and sacred relics. With their vast collection and historical wealth, the Vatican Museums offer visitors a unique opportunity to explore art and human history through the centuries, providing a truly unforgettable experience.'}
  ]

  works = [
    { id: 1, museum: 1, title:'Mona Lisa', imagesrc:'../../assets/images/monalisa.webp', artist: 'Leonardo da Vinci', description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, [and] the most parodied work of art in the world".'},
    { id: 2, museum: 1, title:'Liberty Leading the People', imagesrc:'../../assets/images/La_Liberté_guidant_le_peuple.jpg', artist: 'Eugène Delacroix', description: 'Liberty Leading the People is a painting of the Romantic era by the French artist Eugène Delacroix, commemorating the July Revolution of 1830 that toppled King Charles X.'}
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
