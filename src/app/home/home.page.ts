import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { categories } from 'src/assets/data/home';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categories: any = categories;
	highlights: any = [];
	featured: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
/* 		this.http
			.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
			.subscribe((res: any) => {
        console.log(res);
				this.categories = res.categories;
				this.highlights = res.highlights;
				this.featured = res.featured;
			}); */
			const res = {
				"highlights": [
					{
						"id": 1,
						"title": "Special Offer",
						"description": "Get 20% off on selected items!",
						"img": "../../assets/data/banner_highlight.jpg"
					},
					{
						"id": 2,
						"title": "New Arrivals",
						"description": "Discover our latest menu additions!",
						"img": "../../assets/data/banner_highlight.jpg"
					}
				],
				"featured": [
					{
						"id": 1,
						"name": "Margherita Pizza",
						"description": "Classic Italian pizza topped with tomatoes, mozzarella, and basil.",
						"rating": "3.8 Good",
						"price": 10.99,
						"distance": "2.7 km away",
						"img": "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg"
					},
					{
						"id": 2,
						"name": "Cheeseburger",
						"description": "Juicy beef patty topped with melted cheese, lettuce, and tomato.",
						"rating": "3.8 Good",
						"price": 8.99,
						"distance": "2.7 km away",
						"img": "https://f.roocdn.com/images/menu_items/5250429/item-image.jpg"
					}
				]
			}
			this.highlights = res.highlights;
			this.featured = res.featured;
	}

}
