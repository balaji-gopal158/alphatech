import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>('https://api-alphatech.onrender.com/alphatech/api/product')
      .subscribe((res) => {
        this.products = res.products || [];
        console.log('this.products',this.products)
      });
  }
  }


