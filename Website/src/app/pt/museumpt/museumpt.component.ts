import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'node:process';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-museumpt',
  standalone: true,
  imports: [],
  templateUrl: './museumpt.component.html',
  styleUrl: './museumpt.component.css'
})
export class MuseumptComponent implements OnInit {
  item: any;
  items = [
    { id: 1, title: 'Museu Louvre', subtitle: 'Paris, França', imagesrc:'../../../assets/images/museuLouvre.jpg', lat:48.860294, lng:2.338629, description: 'O Museu do Louvre, situado no coração de Paris, é uma das mais emblemáticas instituições culturais do mundo. Com sua imponente estrutura e vasta coleção de arte, o Louvre atrai milhões de visitantes todos os anos, ansiosos por explorar seus corredores repletos de tesouros artísticos.  Fundado em 1793, o Louvre começou como uma fortaleza real antes de se transformar em um museu nacional durante a Revolução Francesa. Desde então, tem expandido continuamente sua coleção, que abrange desde artefatos da antiguidade até obras-primas da arte moderna.  No entanto, o Louvre não se limita apenas à arte europeia. Sua coleção é verdadeiramente global, incluindo artefatos do Egito Antigo, tesouros da Mesopotâmia, esculturas gregas e romanas, entre outros. Esta diversidade reflete a riqueza da história da humanidade e proporciona aos visitantes uma experiência enriquecedora e educativa.  Além das suas coleções permanentes, o Louvre também organiza exposições temporárias que exploram temas diversos e oferecem novas perspetivas sobre a arte e a cultura. Com tantos tesouros para descobrir, uma visita ao Museu do Louvre é uma jornada inesquecível através dos séculos de história e criatividade humana' },
    { id: 2 ,title: 'Museu dos Coches', subtitle:'Lisboa, Portugal', imagesrc:'../../../assets/images/MuseuDosCoches.jpg', lat:38.697616, lng:-9.199745, description:'Localizado no coração de Lisboa, o Museu dos Coches é uma jóia cultural que encanta visitantes de todo o mundo. Fundado em 1905, este museu singular é dedicado à preservação e exibição de uma das mais impressionantes coleções de carruagens reais do mundo.  Ao adentrar o museu, os visitantes são transportados para uma época de esplendor e elegância, quando as carruagens eram o símbolo máximo de status e poder. Aqui, é possível admirar uma vasta variedade de carruagens meticulosamente restauradas, que datam desde o século XVII até ao século XIX.   Além das carruagens em si, o Museu dos Coches oferece uma experiência imersiva através de exposições interativas, vídeos informativos e artefatos históricos que ajudam a contextualizar o papel desses veículos na sociedade de outrora.  Para os entusiastas da história e da cultura, uma visita ao Museu dos Coches é uma verdadeira viagem no tempo, proporcionando uma visão fascinante do passado glorioso de Portugal e da sua ligação à realeza europeia.' },
    { id: 3 ,title: 'Museu do Vaticano', subtitle:'Vaticano', imagesrc:'../../../assets/images/MuseuDoVaticano.jpg', lat:41.906487, lng:12.453641, description:'Os Museus do Vaticano, localizados dentro dos muros da Cidade do Vaticano, são uma das mais impressionantes coleções de arte e artefatos históricos do mundo. Fundados no início do século XVI, os museus têm expandido continuamente sua coleção ao longo dos séculos, tornando-se um destino imperdível para os amantes da arte, da história e da cultura.  Uma das principais atrações dos Museus do Vaticano é a Capela Sistina, famosa pelos seus magníficos afrescos, incluindo o icônico teto pintado por Michelangelo, que retrata cenas do Gênesis e o Juízo Final. Esta obra-prima renascentista é um testemunho da genialidade artística de Michelangelo e é considerada uma das maiores realizações da história da arte.  Além da Capela Sistina, os Museus do Vaticano abrigam uma impressionante coleção de arte que abrange desde antiguidades egípcias até pinturas renascentistas e esculturas clássicas. Destacam-se também os Apartamentos Borgia, ricamente decorados com afrescos de artistas como Rafael e Pinturicchio, e a Galeria dos Mapas, que exibe uma série de mapas topográficos da Itália pintados no século XVI.  Outros destaques incluem a Escadaria de Bramante, uma obra-prima da arquitetura renascentista, e a Pinacoteca Vaticana, que abriga uma coleção de pinturas de artistas como Rafael, Caravaggio e Leonardo da Vinci. Além disso, os Museus do Vaticano também possuem uma impressionante coleção de artefatos religiosos, incluindo cálices, paramentos e relíquias sagradas.  Com sua vasta coleção e riqueza histórica, os Museus do Vaticano oferecem aos visitantes uma oportunidade única de explorar a arte e a história da humanidade através dos séculos, proporcionando uma experiência verdadeiramente inesquecível.'},
    { id: 4, title:'Museu do Prado', subtitle:'Madrid, Espanha', imagesrc:'../../../assets/images/MuseuDoPrado.jpg', lat:40.413780, lng:-3.692127, description:'O Museu do Prado, localizado em Madrid, Espanha, é uma das mais prestigiadas instituições de arte do mundo. Fundado em 1819, o museu abriga uma vasta coleção de obras-primas da pintura europeia, com ênfase especial na arte espanhola, italiana e flamenga. Uma das maiores atrações do Museu do Prado é a sua coleção de pinturas espanholas dos séculos XVI ao XIX, que inclui obras de mestres como Velázquez, Goya e El Greco. Entre as pinturas mais famosas estão "As Meninas" de Velázquez, um dos retratos mais célebres da história da arte, e "O 3 de Maio de 1808" de Goya, uma representação poderosa dos horrores da guerra. Além da arte espanhola, o Museu do Prado também possui uma impressionante coleção de pinturas italianas, incluindo obras de Ticiano, Rafael e Tintoretto, e uma extensa seleção de pinturas flamengas e holandesas, com destaque para Rembrandt e Rubens. Além das pinturas, o Museu do Prado abriga também uma coleção de esculturas, desenhos, gravuras e artes decorativas, oferecendo aos visitantes uma visão abrangente da arte europeia ao longo dos séculos. Com sua vasta coleção e seu prestígio internacional, o Museu do Prado é um destino imperdível para os amantes da arte e da cultura, proporcionando uma experiência enriquecedora e educativa para os visitantes de todo o mundo.'}
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
    {museum: 4, day: 7, opens:'10:00', closes:'20:00'},

  ]

   works = [
    // Museu do Louvre
    { 
      id: 1, 
      museum: 1, 
      title: 'Mona Lisa', 
      imagesrc: '../../../assets/images/monalisa.webp', 
      artist: 'Leonardo da Vinci', 
      description: 'A Mona Lisa é um retrato de meio corpo pintado pelo artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica do Renascimento italiano, foi descrita como "a obra de arte mais conhecida, mais visitada, mais escrita, mais cantada e mais parodiada do mundo".' 
    },
    { 
      id: 2, 
      museum: 1, 
      title: 'A Liberdade Guiando o Povo', 
      imagesrc: '../../../assets/images/La_Liberté_guidant_le_peuple.jpg', 
      artist: 'Eugène Delacroix', 
      description: 'A Liberdade Guiando o Povo é uma pintura do Romantismo do artista francês Eugène Delacroix, comemorando a Revolução de Julho de 1830 que derrubou o Rei Carlos X.' 
    },
    { 
      id: 3, 
      museum: 1, 
      title: 'Vénus de Milo', 
      imagesrc: '../../../assets/images/venusdemilo.jpg', 
      artist: 'Alexandre de Antioquia', 
      description: 'Uma escultura grega antiga que representa a deusa do amor e da beleza, é uma das esculturas mais famosas do mundo clássico.' 
    },
    { 
      id: 4, 
      museum: 1, 
      title: 'Vitória de Samotrácia', 
      imagesrc: '../../../assets/images/vitoriasamotracia.jpg', 
      artist: 'Desconhecida', 
      description: 'Esta escultura de mármore representa a deusa grega Nike, personificação da vitória, e é uma das obras mais impressionantes da arte helénica.' 
    },
    { 
      id: 5, 
      museum: 1, 
      title: 'A Escola de Atenas de Rafael', 
      imagesrc: '../../../assets/images/escoladeantesrafael.jpg', 
      artist: 'Rafael', 
      description: 'Esta famosa pintura renascentista retrata os maiores filósofos da Grécia Antiga reunidos num cenário monumental, simbolizando conhecimento e sabedoria.' 
    },
    { 
      id: 6, 
      museum: 1, 
      title: 'O Código de Hamurábi', 
      imagesrc: '../../../assets/images/CodigoHamurábico.jpg', 
      artist: 'Hamurabi', 
      description: 'Um antigo conjunto de leis inscritas numa estela de pedra, é uma das formas de legislação mais antigas conhecidas e oferece insights sobre a civilização mesopotâmica.' 
    },
    { 
      id: 7, 
      museum: 1, 
      title: 'Grande Esfinge de Tânis', 
      imagesrc: '../../../assets/images/GrandeEsfingeTanis.jpg', 
      artist: 'Desconhecido', 
      description: 'Esta colossal escultura representa um dos símbolos mais reconhecíveis do Antigo Egito e é uma das maiores esfinges preservadas.' 
    },
  
    // Museu dos Coches
    { 
      id: 9, 
      museum: 2, 
      title: 'Carruagem de D. João V', 
      imagesrc: '../../../assets/images/carruagemDJOAOV.jpg', 
      description: 'Uma obra-prima do estilo Barroco, esta carruagem é ricamente ornamentada com detalhes dourados e exuberantes entalhes, representando o auge do luxo no século XVIII.' 
    },
    { 
      id: 10, 
      museum: 2, 
      title: 'Carruagem da Coroa', 
      imagesrc: '../../../assets/images/CarruagemCoroa.jpg', 
      description: 'Uma das peças mais imponentes do museu, esta carruagem foi encomendada pelo Rei João VI e está adornada com símbolos da monarquia portuguesa, incluindo a coroa real e o brasão de armas.' 
    },
    { 
      id: 11, 
      museum: 2, 
      title: 'Berlinda da Rainha D. Maria Pia', 
      imagesrc: '../../../assets/images/BerlindaRainhaDMariaPia.jpg', 
      description: 'Esta elegante carruagem foi usada pela Rainha Maria Pia, esposa do Rei Luís I, e destaca-se pela sua sofisticação e detalhes delicados.' 
    },
    { 
      id: 12, 
      museum: 2, 
      title: 'Carruagem de Gala de D. Maria II', 
      imagesrc: '../../../assets/images/CarruagemGalaMariaII.jpg', 
      description: 'Uma peça deslumbrante que reflete o estilo neoclássico do século XIX, esta carruagem foi usada em ocasiões cerimoniais pela Rainha Maria II.' 
    },
    { 
      id: 14, 
      museum: 2, 
      title: 'Carruagem de D. Fernando II', 
      imagesrc: '../../../assets/images/CarruagemDFernandoII.jpg', 
      description: 'Encomendada pelo Rei Fernando II, esta carruagem destaca-se pelo seu design elegante e pela sua associação com o romantismo do século XIX.' 
    },
    { 
      id: 15, 
      museum: 2, 
      title: 'Carruagem da Princesa D. Isabel Maria', 
      imagesrc: '../../../assets/images/CarruagemPricnesaIsabel.jpg', 
      description: 'Usada pela Princesa Isabel Maria, esta carruagem é um exemplo notável do estilo Rococó, com curvas graciosas e decorações elaboradas.' 
    },
  
    // Museu do Vaticano
    { 
      id: 16, 
      museum: 3, 
      title: 'Teto da Capela Sistina por Michelangelo', 
      imagesrc: '../../../assets/images/tetocapela.jpg', 
      description: 'Uma das obras de arte mais famosas do mundo, o teto da Capela Sistina apresenta uma série de espetaculares frescos que retratam cenas do Gênesis, incluindo a famosa criação de Adão.' 
    },
    { 
      id: 17, 
      museum: 3, 
      title: 'Juízo Final por Michelangelo', 
      imagesrc: '../../../assets/images/JuizoFinal.jpg', 
      description: 'Localizado na parede atrás do altar da Capela Sistina, este gigantesco fresco retrata o Juízo Final e é uma das obras mais impressionantes e controversas de Michelangelo.' 
    },
    { 
      id: 18, 
      museum: 3, 
      title: 'Esfera Armilar e Muralha de Areia de Belvedere', 
      imagesrc: '../../../assets/images/Esfera Armilar e Muralha de Areia de Belvedere.jpg', 
      description: 'Esculturas antigas que datam da Roma Antiga, estas obras representam a habilidade artística dos escultores da época e são impressionantes exemplos da arte clássica.' 
    },
    { 
      id: 19, 
      museum: 3, 
      title: 'Afrescos nos Apartamentos de Rafael', 
      imagesrc: '../../../assets/images/Afrescos nos Apartamentos de Rafael.jpg', 
      description: 'Os frescos pintados por Rafael e sua equipa nos Apartamentos de Rafael retratam cenas da vida papal e são considerados algumas das melhores obras do mestre renascentista.' 
    },
    { 
      id: 20, 
      museum: 3, 
      title: 'Escadaria de Bramante', 
      imagesrc: '../../../assets/images/EscadariaBramante.jpg', 
      description: 'Uma obra-prima da arquitetura renascentista, esta escadaria em espiral foi desenhada por Donato Bramante e é uma das características arquitetónicas mais belas do museu.' 
    },
    { 
      id: 21, 
      museum: 3, 
      title: 'Pinacoteca Vaticana', 
      imagesrc: '../../../assets/images/PinacotecaVaticana.jpg', 
      description: 'Esta galeria abriga uma coleção de pinturas renascentistas e barrocas de artistas como Rafael, Caravaggio, Leonardo da Vinci e Ticiano, oferecendo uma visão abrangente da arte italiana.' 
    },
  
    // Museu do Prado
    { 
      id: 23, 
      museum: 4, 
      title: 'As Meninas', 
      imagesrc: '../../../assets/images/AsMeninas.jpg', 
      author: 'Diego Velázquez', 
      description: 'Uma das pinturas mais famosas do mundo, este retrato complexo e intrigante é uma obra-prima do século XVII e um símbolo do génio de Velázquez.' 
    },
    { 
      id: 24, 
      museum: 4, 
      title: 'O 3 de Maio de 1808 em Madrid', 
      imagesrc: '../../../assets/images/O3deMaiode1808emMadrid.jpg', 
      author: 'Francisco de Goya', 
      description: 'Esta monumental pintura retrata o massacre de cidadãos espanhóis por tropas francesas durante a Guerra Peninsular e é um poderoso símbolo de resistência e patriotismo.' 
    },
    { 
      id: 25, 
      museum: 4, 
      title: 'A Rendição de Breda', 
      imagesrc: '../../../assets/images/A Rendição de Breda.jpg', 
      author: 'Diego Velázquez', 
      description: 'Também conhecida como "As Lanças", esta pintura histórica retrata a rendição da cidade de Breda durante a Guerra dos Oitenta Anos e é uma das obras mais importantes de Velázquez.' 
    },
    { 
      id: 26, 
      museum: 4, 
      title: 'A Maja Despida', 
      imagesrc: '../../../assets/images/AMajaDespida.jpg', 
      author: 'Francisco de Goya', 
      description: 'Este retrato nu, que gerou controvérsia na época da sua criação, é uma das obras mais sensuais e intrigantes do Museu do Prado.' 
    },
    { 
      id: 28, 
      museum: 4, 
      title: 'O Lavrador de Parma', 
      imagesrc: '../../../assets/images/O Lavrador de Parma.jpg', 
      author: 'Giuseppe Arcimboldo', 
      description: 'Esta obra única retrata um rosto humano composto por uma variedade de frutas, legumes e flores, demonstrando a habilidade e criatividade de Arcimboldo.' 
    },
    { 
      id: 29, 
      museum: 4, 
      title: 'A Anunciação', 
      imagesrc: '../../../assets/images/AAnunciação.jpg', 
      author: 'Fra Angelico', 
      description: 'Este belo fresco renascentista retrata o momento em que o anjo Gabriel anuncia à Virgem Maria que ela dará à luz Jesus, capturando a serenidade e a reverência do evento.' 
    }
  ];
  
  workImageSrc: string | undefined;
  workTitle: string | undefined;
  workArtist: string | undefined;
  workDescription: string | undefined;

  audios = 
  [
    { id: 1, museum: 1, title:'Louvre', src:'<source src="../../../assets/audios/audiolouvre.mp3">'},
    { id: 2, museum: 3, title:'Vaticano', src:'<source src="../../../assets/audios/audiovaticano.mp3">'},
    { id: 3, museum: 4, title:'Prado', src:'<source src="../../../assets/audios/audioprado.mp3">'}
  ]

  audioTitle: string | undefined;
  audioSrc: string | undefined;
  audioTranscript: string | undefined;

  videos = 
  [
    { id: 1, museum: 1, title:'Muoseu louvre', src:'<source src="../../../assets/videos/videolouvre.mp4">', thumbnail:'../../assets/images/museuLouvre.jpg', transcript: 'Museu do Louvre'},
    { id: 2, museum: 2, title:'Museu Coches', src:'<source src="../../../assets/videos/videocoches.mp4">', thumbnail:'../../../assets/images/MuseuDosCoches.jpg', transcript: 'Museu Dos Coches'},
    { id: 3, museum: 3, title:'Museu  Vatiadno', src:'<source src="../../../assets/videos/videovaticano.mp4">', thumbnail:'../../../assets/images/MuseuDoVaticano.jpg', transcript: 'Museu do Vaticano'},
    { id: 4, museum: 4, title:'Museu  Prado', src:'<source src="../../../assets/videos/videoprado.mp4">', thumbnail:'../../../assets/images/MuseuDoPrado.jpg', transcript: 'Museu do Prado'}
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
    this.router.navigate(['/museum', this.mid]);
  }

}
