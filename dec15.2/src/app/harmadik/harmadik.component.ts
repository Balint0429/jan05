import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'harmadik',
  templateUrl: './harmadik.component.html',
  styleUrls: ['./harmadik.component.css']
})
export class HarmadikComponent {
  foglalasForm: FormGroup = new FormGroup({}); 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.foglalasForm = this.fb.group({
      cim: ['', Validators.required],
      datum: [new Date(), Validators.required],
      fo: [2, [Validators.required, Validators.min(2), Validators.max(16)]],
      iranyitoszam: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      nev: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.foglalasForm.valid) {
      // Elküldjük az adatokat a szerverre
      this.http.post('http://localhost:3000/foglalasok', this.foglalasForm.value)
        .subscribe(response => {
          console.log('Sikeres regisztráció', response);
          // Esetleg navigáció vagy más utasítások ide
        });
    }
  }
}