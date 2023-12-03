import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = "http://localhost:8095/v1/api/projects";

  constructor(private httpClient: HttpClient) { }

  getAllProjectsList(page:number){
    return this.httpClient.get(this.projectsUrl+'?pageNo='+page);
  }

  getProjectById(id: string):any {
    return this.httpClient.get<any>(this.projectsUrl+id);
  }

  getProjectByCodes(codes: string):any {
    return this.httpClient.get<any>(this.projectsUrl+'/codes/'+codes);
  }

  createProduct(object:any): any {
    return this.httpClient.post(this.projectsUrl, object);
  }

  updateProjectByCode(code: string, object: any):any {
    return this.httpClient.put(this.projectsUrl+'/codes/'+code, object);
  }

  searchProducts(searchTerm: string): any {
    return this.httpClient.get<any[]>(this.projectsUrl+'/search?term='+searchTerm);
  }

  deleteProjectsById(id: string): any{
    return this.httpClient.delete(`${this.projectsUrl}/${id}`);
  }
}
