$(document).ready(function() {
  $('#calculateBtn').click(function() {
    // Get input values
    var name = $('#employeeName').val().trim();
    var hours = parseFloat($('#hoursWorked').val());
    var rate = parseFloat($('#ratePerHour').val());
    
    // Validate inputs
    if (name === '' || isNaN(hours) || isNaN(rate)) {
      alert('Please enter valid details in all fields.');
      return;
    }
    
    // Calculate payroll details
    var grossPay = hours * rate;
    var tax = grossPay * 0.10;  // 10% tax deduction
    var netPay = grossPay - tax;
    
    // Create table row
    var row = '<tr>' +
                '<td>' + name + '</td>' +
                '<td>' + hours.toFixed(2) + '</td>' +
                '<td>' + rate.toFixed(2) + '</td>' +
                '<td>' + grossPay.toFixed(2) + '</td>' +
                '<td>' + tax.toFixed(2) + '</td>' +
                '<td>' + netPay.toFixed(2) + '</td>' +
              '</tr>';
    
    // Append the new row to the table body
    $('#payrollTable tbody').append(row);
    
    // Optionally, clear the form for the next input
    $('#payrollForm')[0].reset();
  });
});