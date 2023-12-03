import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  private page: number = 0;
  pages: Array<number> = [];
  projects: Array<any> = [];
  searchedProject:Array<any>=[];

  searchForm: FormGroup;
  constructor(
    private projectService: ProjectService, 
    private router:Router, 
    private formBuilder: FormBuilder ){

    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }


  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getAllProjectsList(this.page).subscribe(
      (data: any) => {

        data.content.sort((a:any, b:any) => a.id - b.id);
        this.projects= data.content;

      },
  
    );
  }

  search(): void {
    const searchTerm = this.searchForm.get('search')?.value;
    this.projectService.searchProducts(searchTerm).subscribe((data: any) => {
      this.searchedProject = data;
    });
  }

  updateProject(codes:string){
    this.router.navigate(['update-product', codes]);
  }
  deleteProjects(id:string){
    this.projectService.deleteProjectsById(id).subscribe(
      (data: any) =>{
      this.getProjects();
    })
  }
}