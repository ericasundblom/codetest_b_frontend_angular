/**
 * Class to package form info to backend
 */
export class CalculationInfo {
    name: string;
    totalLoan: number;
    interest: number;
    years: number;

    constructor(name: string, totalLoan: number, interest: number, years: number) {
        this.name = name;
        this.totalLoan = totalLoan;
        this.interest = interest;
        this.years = years;
    }
}