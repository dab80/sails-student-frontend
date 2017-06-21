/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * 3. Use the live search functionality to make the dropdown searchable
 *
 * 4. Add the user glyphicons next to each student in the list
 *
 * 6. Add a menu header to the dropdown
 *
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

(function() {

  $(function() {

    //   1. When the page is loaded all form fields should be disabled except
    // *    for the dropdown to select a student
    $("#updateStudentForm :input").prop("disabled", true);

    // * 2. Using the bootstrap-selct plugin render dropdown on the page
    $('#employeeId').selectpicker({
      // * 3. Use the live search functionality to make the dropdown searchable
      liveSearch: true,
      // * 6. Add a menu header to the dropdown
      header: 'Select a student',

      //This removes the first line and adds another header
      title: 'Select a student',

      // * 7. Customize further with anything you find intersting
      style: 'btn-info',
      size: 4
    });

    // * 4. (in update.ejs) Add the user glyphicons next to each student in the list

    // * 8. When an student is selected the form fields should be enabled
    $('#employeeId').on('hidden.bs.select', function(e) {
      $("#updateStudentForm :input").prop("disabled", false);
      //      and populated with the data for the selected student

      //-- get the student id
      let student_id = $('#employeeId').val();
      console.log("Student ID = " + student_id);

      //-- create the url
      let update_url = 'http://localhost:1337/student/' + $('#employeeId').val();
      console.log("url = " + update_url);

      let my_var = $.get(update_url, function(data) {
        //-- set the current values for the selected company
        $('#first_name').val(data.first_name);
        $('#last_name').val(data.last_name);
        $('#start_date').val(data.start_date);
        $('#gpa').val(data.gpa);
        $('#sat').val(data.sat);
        $('#major_id').val(data.major_id);
        $('#student_id').val(data.student_id);


      }); //-- end of get requet

      my_var.done(function() {
        return;
      });

    });


  $('#update_button').click(function() {

    console.log("Update button selected...");

  });

    // * 9. Use jQuery validate and add validation to the form with the following requirements
    $("#updateStudentForm").validate({
      // * 10. Make the color of the error text red
      errorClass: "text-danger",
      rules: {
        // *    First Name - required, at least 2 characters
        first_name: {
          required: true,
          minlength: 2
        },
        // *    Last Name  - required, at least 2 characters
        last_name: {
          required: true,
          minlength: 2
        },
        // *	  start_date - make sure date is yyyy-mm-dd
        start_date: {
          required: true,
          // *	  ADD any other validation that makes you happy
          pattern: /^\d{4}-((0\d)|(1[012]))-(([012]\d)|3[01])$/
        },
        // *	  ADD any other validation that makes you happy
        sat: {
          min: 400,
          max: 1400
        }
      },
      messages: {
        // *    First Name - required, at least 2 characters
        first_name: {
          required: "First name is required!",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        // *    Last Name  - required, at least 2 characters
        last_name: {
          required: "First name is required!",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        start_date: {
          // *	  start_date - make sure date is yyyy-mm-dd
          pattern: "Format must be yyyy-mm-dd"
        },
        sat: {
          min: "The minimum value is 400",
          max: "The maximum value is 1400"
        }
      }


    }); //-- end of validate
  }); //-- end of function

})();
