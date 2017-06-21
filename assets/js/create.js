/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function() {

  $(function() {

    // debugger;

    $("#addStudentForm").validate({
    // * 4. Make the color of the error text red
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
        first_name: {
          required: "First name is required!",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        last_name: {
          required: "First name is required!",
          minlength: jQuery.validator.format("At least {0} characters required!")
        },
        start_date: {
    // * 3. Use a custom message for one validation
          pattern: "Format must be yyyy-mm-dd"
        },
        sat: {
          min: "The minimum value is 400",
          max: "The maximum value is 1400"
        }
      }

    });

  });
})();
