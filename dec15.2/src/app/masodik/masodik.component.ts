import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'masodik',
  templateUrl: './masodik.component.html',
  styleUrl: './masodik.component.css'
})
export class MasodikComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['datum', 'nev', 'fo', 'cim', 'iranyitoszam'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.http.get<any[]>('http://localhost:3000/foglalasok')
      .subscribe(foglalasok => {
        foglalasok = foglalasok.sort((a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime());
        this.dataSource.data = foglalasok;
      });
  }
}