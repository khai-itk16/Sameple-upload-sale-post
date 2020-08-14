import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalePost } from '../model/SalePost';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  
  constructor(private http: HttpClient) { }
  
  createSalePost(salePost: SalePost) {
    
    const formData = new FormData()
    
    let lengthOfFiles = salePost.files.length;
    
    for (let i = 0; i < lengthOfFiles; i++) {
      formData.append('files', salePost.files[i]);
    }
    
    formData.append('salePostJson', JSON.stringify(salePost.salePostObj))
    // http://localhost:8080/api/sale-post http://localhost:8080/api/upload
    return this.http.post<any>("http://localhost:8080/api/sale-post", formData, {
    headers: {
      enctype: 'multipart/form-data'
    }
  });
}
}
