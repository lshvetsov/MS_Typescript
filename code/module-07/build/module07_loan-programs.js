"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateConventionalLoanPayment = exports.calculateInterestOnlyLoanPayment = void 0;
/*  TODO Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    let payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
/*  TODO Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    let interest = calculateInterestRate(loanTerms.interestRate);
    let payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
function calculateInterestRate(interestRate) {
    let interest = interestRate / 1200;
    return interest;
}
