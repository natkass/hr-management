// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/candidates/candidate-list/candidate-list.component';
import { CandidateFormComponent } from './features/candidates/candidate-form/candidate-form.component';
// import { DepartmentListComponent } from './features/departments/department-list/department-list.component';
// import { DepartmentFormComponent } from './features/departments/department-form/department-form.component';
// import { EmployeeListComponent } from './features/employees/employee-list/employee-list.component';
// import { EmployeeFormComponent } from './features/employees/employee-form/employee-form.component';
// import { SalaryListComponent } from './features/salaries/salary-list/salary-list.component';
// import { SalaryFormComponent } from './features/salaries/salary-form/salary-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'candidates/add', component: CandidateFormComponent },
  { path: 'candidates/new', component: CandidateFormComponent },
//   { path: 'departments', component: DepartmentListComponent },
//   { path: 'departments/new', component: DepartmentFormComponent },
//   { path: 'employees', component: EmployeeListComponent },
//   { path: 'employees/new', component: EmployeeFormComponent },
//   { path: 'salaries', component: SalaryListComponent },
//   { path: 'salaries/new', component: SalaryFormComponent },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
