import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      candidates: [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', appliedPosition: 'Developer', status: 'Pending' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', appliedPosition: 'Designer', status: 'Selected' },
      ],
      employees: [
        { id: 1, name: 'Alice Johnson', departmentId: 1, salaryId: 1, email: 'alice@example.com', phone: '5556667777' },
      ],
      departments: [
        { id: 1, name: 'Engineering', location: 'New York' },
      ],
      salaries: [
        { id: 1, employeeId: 1, amount: 70000, paymentDate: '2024-01-01' },
      ],
    };
  }
}
