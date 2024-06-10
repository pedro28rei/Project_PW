import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'node:process';
import { isPlatformBrowser } from '@angular/common';

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
    { id: 1, title: 'Louvre Museum', subtitle: 'Paris, France', imagesrc:'../../assets/images/museuLouvre.jpg', lat:48.860294, lng:2.338629, description: 'The Louvre Museum, located in the heart of Paris, is one of the most iconic cultural institutions in the world. With its imposing structure and vast art collection, the Louvre attracts millions of visitors every year, eager to explore its corridors filled with artistic treasures.Founded in 1793, the Louvre began as a royal fortress before transforming into a national museum during the French Revolution. Since then, it has continuously expanded its collection, which ranges from ancient artifacts to modern art masterpieces.However, the Louvre is not limited to European art. Its collection is truly global, including artifacts from Ancient Egypt, treasures from Mesopotamia, Greek and Roman sculptures, among others. This diversity reflects the richness of human history and provides visitors with an enriching and educational experience.In addition to its permanent collections, the Louvre also organizes temporary exhibitions that explore diverse themes and offer new perspectives on art and culture. With so many treasures to discover, a visit to the Louvre Museum is an unforgettable journey through centuries of history and human creativity.' },
    { id: 2, title: 'Coach Museum', subtitle:'Lisbon, Portugal', imagesrc:'../../assets/images/MuseuDosCoches.jpg', lat:38.697616, lng:-9.199745, description:'Located in the heart of Lisbon, the Coach Museum is a cultural gem that delights visitors from all over the world. Founded in 1905, this unique museum is dedicated to preserving and displaying one of the most impressive collections of royal carriages in the world. Upon entering the museum, visitors are transported to a time of splendor and elegance, when carriages were the ultimate symbol of status and power. Here, visitors can admire a vast array of meticulously restored carriages, dating from the 17th to the 19th centuries. In addition to the carriages themselves, the Coach Museum offers an immersive experience through interactive exhibits, informative videos and historical artifacts that help contextualize the role of these vehicles in society in the past. For history and culture enthusiasts, a visit to the Coach Museum is a true journey back in time, providing a fascinating insight into Portugal’s glorious past and its connection to European royalty.'},
    { id: 3, title: 'Vatican Museums', subtitle:'Vaticano', imagesrc:'../../assets/images/MuseuDoVaticano.jpg', lat:41.906487, lng:12.453641, description:'The Vatican Museums, located within the walls of Vatican City, are one of the most impressive collections of art and historical artifacts in the world. Founded in the early 16th century, the museums have continually expanded their collection over the centuries, making them a must-see destination for lovers of art, history and culture. One of the main attractions of the Vatican Museums is the Sistine Chapel, famous for its magnificent frescoes, including Michelangelo’s iconic ceiling, which depicts scenes from Genesis and the Last Judgment. This Renaissance masterpiece is a testament to Michelangelo’s artistic genius and is considered one of the greatest achievements in the history of art. In addition to the Sistine Chapel, the Vatican Museums house an impressive collection of art ranging from Egyptian antiquities to Renaissance paintings and classical sculptures. Other highlights include the Borgia Apartments, richly decorated with frescoes by artists such as Raphael and Pinturicchio, and the Gallery of Maps, which displays a series of topographical maps of Italy painted in the 16th century. Other highlights include the Bramante Staircase, a masterpiece of Renaissance architecture, and the Pinacoteca Vaticana, which houses a collection of paintings by artists such as Raphael, Caravaggio and Leonardo da Vinci. In addition, the Vatican Museums also house an impressive collection of religious artefacts, including chalices, vestments and sacred relics. With their vast collection and historical wealth, the Vatican Museums offer visitors a unique opportunity to explore art and human history through the centuries, providing a truly unforgettable experience.'},
    { id: 4, title: 'Prado Museum', subtitle:'Madrid, Spain', imagesrc:'../../assets/images/MuseuDoPrado.jpg', lat:40.413780, lng:-3.692127, description:'The Prado Museum, located in Madrid, Spain, is one of the most prestigious art institutions in the world. Founded in 1819, the museum houses a vast collection of masterpieces of European painting, with a special emphasis on Spanish, Italian and Flemish art. One of the greatest attractions of the Prado Museum is its collection of Spanish paintings from the 16th to the 19th centuries, which includes works by masters such as Velázquez, Goya and El Greco. Among the most famous paintings are Velázquezs Las Meninas, one of the most celebrated portraits in the history of art, and Goyas The Third of May 1808, a powerful depiction of the horrors of war. In addition to Spanish art, the Prado Museum also has an impressive collection of Italian paintings, including works by Titian, Raphael and Tintoretto, and an extensive selection of Flemish and Dutch paintings, with particular emphasis on Rembrandt and Rubens. In addition to paintings, the Prado Museum also houses a collection of sculptures, drawings, prints and decorative arts, offering visitors a comprehensive overview of European art through the centuries. With its vast collection and international prestige, the Prado Museum is a must-see destination for art and culture lovers, providing an enriching and educational experience for visitors from around the world.'},
  ]

  hours = [
    {museum: 1, day: 1, opens:'9:00', closes:'18:00'},
    {museum: 1, day: 2, opens:'9:00', closes:'18:00'},
    {museum: 1, day: 4, opens:'9:00', closes:'21:00'},
    {museum: 1, day: 5, opens:'9:00', closes:'18:00'},
    {museum: 1, day: 6, opens:'9:00', closes:'21:00'},
    {museum: 1, day: 7, opens:'9:00', closes:'18:00'},

    {museum: 2, day: 1, opens:'10:00', closes:'18:00'},
    {museum: 2, day: 2, opens:'10:00', closes:'18:00'},
    {museum: 2, day: 4, opens:'10:00', closes:'21:00'},
    {museum: 2, day: 5, opens:'10:00', closes:'18:00'},
    {museum: 2, day: 6, opens:'10:00', closes:'21:00'},
    {museum: 2, day: 7, opens:'10:00', closes:'18:00'},

    {museum: 3, day: 1, opens:'8:00', closes:'19:00'},
    {museum: 3, day: 2, opens:'8:00', closes:'19:00'},
    {museum: 3, day: 3, opens:'8:00', closes:'19:00'},
    {museum: 3, day: 4, opens:'8:00', closes:'19:00'},
    {museum: 3, day: 5, opens:'8:00', closes:'19:00'},
    {museum: 3, day: 6, opens:'8:00', closes:'19:00'},

    {museum: 4, day: 1, opens:'10:00', closes:'19:00'},
    {museum: 4, day: 2, opens:'10:00', closes:'20:00'},
    {museum: 4, day: 3, opens:'10:00', closes:'20:00'},
    {museum: 4, day: 4, opens:'10:00', closes:'20:00'},
    {museum: 4, day: 5, opens:'10:00', closes:'20:00'},
    {museum: 4, day: 6, opens:'10:00', closes:'20:00'},
    {museum: 4, day: 7, opens:'10:00', closes:'20:00'}

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
    { id: 9, museum: 2, title:'Carruagem de D. João V', imagesrc:'../../assets/images/carruagemDJOAOV.jpg', description:'A masterpiece of the Baroque style, this carriage is richly ornamented with gilded details and exuberant carvings, representing the height of luxury in the 18th century.'},
    { id:10, museum: 2, title:'Carruagem da Coroa', imagesrc:'../../assets/images/CarruagemCoroa.jpg', description:'One of the most imposing pieces in the museum, this carriage was commissioned by King João VI and is adorned with symbols of the Portuguese monarchy, including the royal crown and coat of arms.'},
    { id:11, museum: 2, title:'Berlinda da Rainha D. Maria Pia', imagesrc:'../../assets/images/BerlindaRainhaDMariaPia.jpg', description:'This elegant carriage was used by Queen Maria Pia, wife of King Luís I, and stands out for its sophistication and delicate details.'},
    { id:12, museum: 2, title:'Carruagem de Gala de D. Maria II', imagesrc:'../../assets/images/CarruagemGalaMariaII.jpg', description:'A stunning piece that reflects the neoclassical style of the 19th century, this carriage was used on ceremonial occasions by Queen Maria II.'},
    { id:13, musuem: 2, title:'Carruagem de D. Carlos I', iamgesrc:'../../assets/images/CarruagemDCARLOSI.jpg', description:'This carriage, used by the last king of Portugal, is a stunning example of late 19th century design and engineering, with exquisite detailing and a majestic appearance.' },
    { id:14, museum: 2, title:'Carruagem de D. Fernando II', imagesrc:'../../assets/images/CarruagemDFernandoII.jpg', description:'Commissioned by King Ferdinand II, this carriage stands out for its elegant design and its association with 19th century romanticism.'},
    { id:15, museum: 2, title:'Carruagem da Princesa D. Isabel Maria', imagesrc:'../../assets/images/CarruagemPricnesaIsabel.jpg', description:'Used by Princess Isabel Maria, this carriage is a notable example of the Rococo style, with graceful curves and elaborate decorations.'},

    /*museu do vaticano*/

    { id: 16, museum: 3, title:'Teto da Capela Sistina por Michelangelo', imagesrc:'../../assets/images/TetoCapela.jpg', description:'One of the most famous works of art in the world, the ceiling of the Sistine Chapel features a series of spectacular frescoes depicting scenes from Genesis, including the famous creation of Adam.'},
    { id: 17, museum: 3, title:'Juízo Final por Michelangelo', imagesrc:'../../assets/images/JuizoFinal.jpg', description:'Located on the wall behind the altar of the Sistine Chapel, this gigantic fresco depicts the Last Judgment and is one of Michelangelos most impressive and controversial works.' },
    { id: 18, museum: 3, title:'Esfera Armilar e Muralha de Areia de Belvedere', imagesrc:'../../assets/images/Esfera Armilar', description:'Ancient sculptures dating back to Ancient Rome, these works represent the artistic skill of the sculptors of the time and are impressive examples of classical art.'},
    { id: 19, museum: 3, title:'Afrescos nos Apartamentos de Rafael', imagesrc:'../../assets/images/Afrescos', description:'The frescoes painted by Raphael and his team in the Raphael Apartments depict scenes from papal life and are considered some of the Renaissance masters finest works.'},
    { id: 20, museum: 3, title:'Escadaria de Bramante', imagesrc:'../../assets/images/EscadariaBramante', description:'A masterpiece of Renaissance architecture, this spiral staircase was designed by Donato Bramante and is one of the museums most beautiful architectural features.'},
    { id: 21, museum: 3, title:'Pinacoteca Vaticana', imagesrc:'../../assets/images/PinacotecaVaticana', description:'This gallery houses a collection of Renaissance and Baroque paintings by artists such as Raphael, Caravaggio, Leonardo da Vinci and Titian, offering a comprehensive overview of Italian art.'},
    { id: 22, museum: 3, title:'Laocoonte e Seus Filhos', imagesrc:'../../assets/images/LaocoonteeFilhos', description:'An ancient Greek sculpture depicting the Trojan priest Laocoon and his sons being attacked by serpents is one of the most famous works of classical sculpture.'},


    /* museu do prado*/

    { id: 23, museum: 4, title:'As Meninas ', imagesrc:'../../assets/images/AsMeninas ', author:'Diego Velázquez', description:'One of the most famous paintings in the world, this complex and intriguing portrait is a 17th-century masterpiece and a symbol of Velázquezs genius.'},
    { id: 24, museum: 4, title:'O 3 de Maio de 1808 em Madrid', imagesrc:'../../assets/images/O3deMaiode1808emMadrid', author:'Francisco de Goya', description:'This monumental painting depicts the massacre of Spanish citizens by French troops during the Peninsular War and is a powerful symbol of resistance and patriotism.'},
    { id: 25, museum: 4, title:'A Rendição de Breda ', imagesrc:'../../assets/images/ARendiçãodeBreda ', author:'Diego Velázquez', description:'Also known as "The Lances", this historical painting depicts the surrender of the city of Breda during the Eighty Years War and is one of Velázquezs most important works.'},
    { id: 26, museum: 4, title:'A Maja Despida', imagesrc:'../../assets/images/AMajaDespida',author:'Francisco de Goya', description:': This nude portrait, which generated controversy at the time of its creation, is one of the most sensual and intriguing works in the Prado Museum.'},
    { id: 27, museum: 4, title:'O Jardim das Delícias Terrenas', imagesrc:'../../assets/images/OJardimdasDelíciasTerrenas',author:'Hieronymus Bosch', description:'This surrealist triptych painting is a vivid representation of heaven, earth and hell, full of symbolism and imagination.'},
    { id: 28, museum: 4, title:'O Lavrador de Parma ', imagesrc:'../../assets/images/OLavradordeParma', author:'Giuseppe Arcimboldo', description:'This unique work depicts a human face composed of a variety of fruits, vegetables and flowers, demonstrating Arcimboldos skill and creativity.'},
    { id: 29, museum: 4, title:'A Anunciação', imagesrc:'../../assets/images/AAnunciação', author:'Fra Angelico', description:'This beautiful Renaissance fresco depicts the moment when the angel Gabriel announces to the Virgin Mary that she will give birth to Jesus, capturing the serenity and reverence of the event.'}
  ]
  workImageSrc: string | undefined;
  workTitle: string | undefined;
  workArtist: string | undefined;
  workDescription: string | undefined;

  /*audios = [
    { id: 1, museum: 1, title:'Louvre', src:'<source src="../../assets/audios/audiolouvre.mp3">'},
    { id: 2, museum: 3, title:'Vaticano', src:'<source src="../../assets/audios/audiovaticano.mp3">'},
    { id: 3, museum: 4, title:'Prado', src:'<source src="../../assets/audios/audioprado.mp3">'}
  ]*/
  audioTitle: string | undefined;
  audioSrc: string | undefined;
  audioTranscript: string | undefined;

  videos = [
    { id: 1, museum: 1, title:'Muoseu louvre', src:'<source src="../../assets/videos/videolouvre.mp4">', thumbnail:'../../assets/images/museulouvre.png', transcript: 'museulouvre'},
    { id: 2, museum: 2, title:'Museu Coches', src:'<source src="../../assets/videos/videocoches.mp4">', thumbnail:'../../assets/images/museucoches.png', transcript: 'museucoches'},
    { id: 3, museum: 3, title:'Museu  Vatiadno', src:'<source src="../../assets/videos/videovaticano.mp4">', thumbnail:'../../assets/images/museulouvre.png', transcript: 'museuvaticano'},
    { id: 4, museum: 4, title:'Museu  Prado', src:'<source src="../../assets/videos/videoprado.mp4">', thumbnail:'../../assets/images/museulouvre.png', transcript: 'museuprado'}
  ]
  videoTitle: string | undefined;
  videoSrc: string | undefined;
  videoDescription: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  lat: number = 0;
  lng: number = 0;
  mid: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.item = this.items.find(item => item.id === id);
      this.lat = this.item.lat;
      this.lng = this.item.lng;
      this.mid = this.item.id;
    });
    if (isPlatformBrowser(this.platformId) && this.item) {
      this.loadLeaflet();
    }
  }

  async loadLeaflet() {
    const L = await import('leaflet');
    this.loadMap(L);
  }

  loadMap(L: any): void {
    const map = L.map('map').setView([this.lat, this.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([this.lat, this.lng]).addTo(map)
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

  scrollToDiv(divId: string) {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeLanguage(){
    this.router.navigate(['/pt/museum', this.mid]);
  }
}
