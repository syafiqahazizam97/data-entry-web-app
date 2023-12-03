import { Component } from '@angular/core';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private projectService: ProjectService, private notificationService:NotificationService, private router:Router){}

  onSubmit(projects:any){
    
    this.saveProduct(projects);
   
  }

  saveProduct(projects:any) {
    
    this.projectService.createProduct(projects).subscribe(
      (data:any) => {
        console.log('Success:', data);
        this.notificationService.showSuccess('Create successful!');
        this.goToProductList();
      }
    );
  }
  
  goToProductList(){

    this.router.navigate(['/products']);
  }

}
