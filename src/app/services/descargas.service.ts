import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DescargasService {

  constructor(private storage: AngularFireStorage) { }

  downloadFile(filePath: string): Observable<string> {
    const ref = this.storage.ref(filePath);
    return ref.getDownloadURL();
  }
}
