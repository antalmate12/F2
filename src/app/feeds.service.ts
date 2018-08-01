import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private httpClient: HttpClient) { }

  public getRSS(): Observable<any> {
    return this.httpClient.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theverge.com%2Frss%2Findex.xml').
    map(this.extractData);
  }
  public extractData(res: Response) {
    let body = res;
    console.log(body);
    return body;
  }
  

  
}
