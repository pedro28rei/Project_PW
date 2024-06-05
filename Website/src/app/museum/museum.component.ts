import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    { id: 2, title: 'Item 2', subtitle: 'Description for Item 2', imagesrc:'../../assets/images/museuLouvre2.jpg', description: 'Sample Text' }
    // more items...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; // convert to number
      this.item = this.items.find(item => item.id === id);
    });
  }

}
