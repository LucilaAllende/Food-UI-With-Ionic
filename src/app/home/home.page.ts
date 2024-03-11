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
						"image": "offer.jpg"
					},
					{
						"id": 2,
						"title": "New Arrivals",
						"description": "Discover our latest menu additions!",
						"image": "new.jpg"
					}
				],
				"featured": [
					{
						"id": 1,
						"name": "Margherita Pizza",
						"description": "Classic Italian pizza topped with tomatoes, mozzarella, and basil.",
						"price": 10.99,
						"image": "margherita.jpg"
					},
					{
						"id": 2,
						"name": "Cheeseburger",
						"description": "Juicy beef patty topped with melted cheese, lettuce, and tomato.",
						"price": 8.99,
						"image": "cheeseburger.jpg"
					}
				]
			}
			this.highlights = res.highlights;
			this.featured = res.featured;
	}

}
