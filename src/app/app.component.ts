import { Component } from '@angular/core';
import { UploadFileService } from './service/upload-file.service';
import { SalePost } from './model/SalePost';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private uploadFileService: UploadFileService) { }
  
  createSalePost() {
    
    let salePost = new SalePost();
    
    salePost.files = $('input[name="files"]').prop('files');
    
    console.log(salePost);
    
    this.uploadFileService.createSalePost(salePost).subscribe(
      res => { console.log(res) },
      error => { console.log(error) }
      );
    }
  }
  