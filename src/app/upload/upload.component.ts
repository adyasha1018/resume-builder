import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',

})
export class UploadComponent {
  url = '';

  constructor() { }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]); // read file as data url
    }
  }
}
