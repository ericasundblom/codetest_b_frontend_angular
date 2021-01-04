import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../services/calculation.service';
import { CalculationInfo } from '../../types/CalculationInfo';

/**
 * logic part for the CalculateComponent
 */
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  form: any = {};
  calculationInfo: CalculationInfo;
  isCalculatedFailed = false;
  errorMessage = '';
  result = '';

  constructor(private calculationService: CalculationService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.calculationInfo = new CalculationInfo(
      this.form.name,
      this.form.totalLoan,
      this.form.interest,
      this.form.years);

    this.calculationService.calculate(this.calculationInfo).subscribe(
      data => {
        console.log(data);
        this.result = data;
        this.isCalculatedFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isCalculatedFailed = true;
      }
    );
  }

}
