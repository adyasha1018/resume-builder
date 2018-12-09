import { Component, OnInit } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  providers: [ UploaderService ]

})
export class UploadComponent {
  message: string;
  imgName: string;
  constructor(private uploaderService: UploaderService) { }
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          this.imgName = file.name;
          input.value = null;
          this.message = msg;
        }
      );
    }
  }

}
