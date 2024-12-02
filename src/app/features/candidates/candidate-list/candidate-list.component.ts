// src/app/features/candidates/candidate-list/candidate-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../../../app/core/services/candidate.service';
import { Candidate } from '../../../core/models/candidate.model';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
displayedColumns: any;

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data) => {
      this.candidates = data;
    });
  }
}
