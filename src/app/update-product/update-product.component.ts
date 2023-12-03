import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  projects: Array<any> = [];
  code: string = '';

  constructor(private projectService: ProjectService, private notificationService: NotificationService,
    private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.code = this.activateRoute.snapshot.params['code'];
    this.projectService.getProjectByCodes(this.code).subscribe(
      (data: any) => {
        this.projects = data;
      }
    );
  }

  onSubmit(projects:any) {

    this.updateProject(projects);
  }

  updateProject(projects:any) {
    this.projectService.updateProjectByCode(this.code, projects).subscribe(
      (data:any) => {
      this.notificationService.showSuccess('Update successful!');
      this.goToProductList();
      }
    );
  }

  goToProductList() {

    this.router.navigate(['/products']);
  }



}
