// src/app/features/candidates/candidate-form/candidate-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../../../core/services/candidate.service';
import { Candidate } from '../../../core/models/candidate.model';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent {
  candidate: Candidate = { name: '', position: '' };

  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.candidateService.addCandidate(this.candidate).subscribe(() => {
      this.router.navigate(['/candidates']);
    });
  }
}
