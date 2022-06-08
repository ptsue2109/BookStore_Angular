import { Injectable, Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private fireStorage: AngularFireStorage) { }
  ImageThumnail: any = [];
  private basePath = '/uploads';
  ImageList: any = [];
  uploadImg(dataFile: any) {
    const filePath = `${this.basePath}/${dataFile.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    this.fireStorage
      .upload(filePath, dataFile)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadUrl) => {
            this.ImageThumnail = downloadUrl;
            localStorage.setItem('imgThum', this.ImageThumnail);
          });
        })
      )
      .subscribe();
  }
  uploadListImg(listFile: any) {
    for (var i = 0; i < listFile.length; i++) {
      let item = listFile[i];
      const filePath = `${this.basePath}/${item.name}`;
      const storageRef = this.fireStorage.ref(filePath);
      this.fireStorage.upload(filePath, listFile[i])
        .snapshotChanges()
        .pipe(
          finalize(() => {
            storageRef.getDownloadURL().subscribe(downloadUrl => {
              this.ImageList.push({
                name: downloadUrl
              });
              localStorage.setItem('imgList', JSON.stringify(this.ImageList));
            })
          })
        ).subscribe();
    }

  }
}
