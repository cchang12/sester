require(['jquery', 'jquery/ui'], function($){ 

$(document).ready(function() {
  var storeURL = window.location.href;
  var storeVal = storeURL.split('?store=')[1];
  setStore(storeVal);
});

$('#00N1a000007135K').change(function() { 
   var storeVal = $(this).val();
   setStore(storeVal);
});

// DatePicker Init & Settings
$(function() {
    $("#date").datepicker({
      minDate: 0,
      showAnim: "fadeIn"
    });
});
$("#date").keypress(function(event) {event.preventDefault();});
// END: DatePicker Init & Settings

// Function to show and hide store info based on Location Dropdown
function setStore(storeClass) {
    var store = storeClass;
    $(".store-active").removeClass("store-active").addClass("store-hidden");
    if ((store == "arlington") || (store == "a0C1a0000032sFp")) {
      $("#00N1a000007135K").val('a0C1a0000032sFp');
      $(".store-arlington").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "bellevue") || (store == "a0C1a0000032sGO")) {
      $("#00N1a000007135K").val('a0C1a0000032sGO');
      $(".store-bellevue").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "costa-mesa") || (store == "a0C1a0000032sFf")) {
      $("#00N1a000007135K").val('a0C1a0000032sFf');
      $(".store-costa-mesa").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "dallas") || (store == "a0C1a0000032sFa")) {
      $("#00N1a000007135K").val('a0C1a0000032sFa');
      $(".store-dallas").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "fullerton") || (store == "a0C1a000002EQmc")) {
      $("#00N1a000007135K").val('a0C1a000002EQmc');
      $(".store-fullerton").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "glendale") || (store == "a0C1a0000032sFz")) {
      $("#00N1a000007135K").val('a0C1a0000032sFz');
      $(".store-glendale").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "houston-clearlake") || (store == "a0C1a0000032sG9")) {
      $("#00N1a000007135K").val('a0C1a0000032sG9');
      $(".store-houston-clearlake").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "houston-loop") || (store == "a0C1a000002ETWl")) {
      $("#00N1a000007135K").val('a0C1a000002ETWl');
      $(".store-houston-loop").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "montclair") || (store == "a0C1a0000032sFk")) {
      $("#00N1a000007135K").val('a0C1a0000032sFk');
      $(".store-montclair").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "riverside") || (store == "a0C1a0000032sG4")) {
      $("#00N1a000007135K").val('a0C1a0000032sG4');
      $(".store-riverside").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "san-diego") || (store == "a0C1a0000032sGT")) {
      $("#00N1a000007135K").val('a0C1a0000032sGT');
      $(".store-san-diego").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "scottsdale") || (store == "a0C1a0000032sGE")) {
      $("#00N1a000007135K").val('a0C1a0000032sGE');
      $(".store-scottsdale").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "seattle") || (store == "a0C1a0000032sGJ")) {
      $("#00N1a000007135K").val('a0C1a0000032sGJ');
      $(".store-seattle").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "torrance") || (store == "a0C1a0000032sGY")) {
      $("#00N1a000007135K").val('a0C1a0000032sGY');
      $(".store-torrance").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "woodland-hills") || (store == "a0C1a0000032sFG")) {
      $("#00N1a000007135K").val('a0C1a0000032sFG');
      $(".store-woodland-hills").removeClass("store-hidden").addClass("store-active");
    } else if ((store == "virtual") || (store == "a0C1a0000032sFL")) {
      $("#00N1a000007135K").val('a0C1a0000032sFL');
      $(".store-virtual").removeClass("store-hidden").addClass("store-active");
    } else {
      $("#00N1a000007135K").val('default');
    }
  }
// END: Function to show and hide store info based on Location Dropdown

// jQuery Phone Mask
// Validate keyCode's
function validate_int(e) {
  if ((e.charCode >= 48 && e.charCode <= 57) || e.keyCode == 9 || e.keyCode == 10 || e.keyCode == 13 || e.keyCode == 8 || e.keyCode == 116 || e.keyCode == 46 || (e.keyCode <= 40 && e.keyCode >= 37)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
}

function phone_number_mask() {
  console.log('Is the phine number mask even called?');
  var mask = "(___) ___-____";
  var val = document.getElementById("mobile");
  var text = "";
  var numbers = [];
  var output = ""
  var lastPosition = 1;
  text = val.value;
  // Get each number in the Phone field
  for (var i = 0; i < text.length; i++) {
    if (!isNaN(text.charAt(i)) && text.charAt(i) != " ") {
      numbers.push(text.charAt(i));
    }
  }
  // Write the mask
  for (var j = 0; j < mask.length; j++) {
    if (mask.charAt(j) == "_") { //replace "_" by a number 
      if (numbers.length == 0)
        output = output + mask.charAt(j);
      else {
        output = output + numbers.shift();
        lastPosition = j + 1; //set caret position
      }
    } else {
      output = output + mask.charAt(j);
    }
  }
  document.getElementById("mobile").value = output;
  document.getElementById("mobile").setSelectionRange(lastPosition, lastPosition);
}

document.getElementById("mobile").onkeypress = validate_int;
document.getElementById("mobile").onkeyup = phone_number_mask;
// END: jQuery Phone Mask

// Function to Run Validation
$('#form').on('submit', function (e) {

  // Function to Validate First and Last Name
  function validateName (name) {
    var valid_name = /^[a-zA-Z_\- ]+$/;
    return valid_name.test(name);
  }

  // Function to Validate Email Address
  function validateEmail(email) {
    var valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid_email.test(email);
  }

  // Function to Validate Phone Number
  function validatePhone(number) {
    var valid_phone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
    return valid_phone.test(number);
  }

  // Set Variables
  var first_name = $("#first_name").val();
    first_name_valid = false;
    last_name = $("#last_name").val();
    last_name_valid = false;
    email = $("#email").val();
    email_valid = false;
    phone = $("#mobile").val();
    phone_valid = false;
    date = $("#date").val();
    date_valid = false;
    time_dropdown = $("#time").val();
    time_dropdown_valid = false;
    location_dropdown = $("#00N1a000007135K").val();
    location_dropdown_valid = false;
    reason_dropdown = $("#00N1a000008kEOX").val();
    reason_dropdown_valid = false;
    dateTimeVal = date + " " + time_dropdown;

  // Validate the First Name (Required)
  if (!validateName(first_name)) {
    $("#firstNameValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#firstNameValidation").removeClass("block-visible").addClass("block-hidden");
    first_name_valid = true;
  }

  // Validate the Last Name (Required)
  if (!validateName(last_name)) {
    $("#lastNameValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#lastNameValidation").removeClass("block-visible").addClass("block-hidden");
    last_name_valid = true;
  }

  // Validate the Email Address (Required)
  if (!validateEmail(email)) {
    $("#emailValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#emailValidation").removeClass("block-visible").addClass("block-hidden");
    email_valid = true;
  }

  // Validate the Phone number (Required)
  if (!validatePhone(phone)) {
    $("#phoneValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#phoneValidation").removeClass("block-visible").addClass("block-hidden");
    phone_valid = true;
  }

  // Validate the Date (Required)
  if (date == "") {
    $("#dateValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#dateValidation").removeClass("block-visible").addClass("block-hidden");
    date_valid = true;
  }

  // Validate the Time (Required)
  if (time_dropdown == "default") {
    $("#timeValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#timeValidation").removeClass("block-visible").addClass("block-hidden");
    time_dropdown_valid = true;
  }

  // Validate Location DropDown (Required)
  if (location_dropdown == "default") {
    $("#locationDropdownValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#locationDropdownValidation").removeClass("block-visible").addClass("block-hidden");
    location_dropdown_valid = true;
  }

  // Validate Reason DropDown (Required)
  if (reason_dropdown == "default") {
    $("#reasonDropdownValidation").removeClass("block-hidden").addClass("block-visible");
  } else {
    $("#reasonDropdownValidation").removeClass("block-visible").addClass("block-hidden");
    reason_dropdown_valid = true;
  }

  // Set the dateTimeVal variable to the the Date/Time value for submission
  $("#00N1a000007134z").val(dateTimeVal);

  // console.log ("First Name: " + first_name + ", Last Name: " + last_name + ", Email: " + email + ", Phone: " + phone + ", Date: " + date + ", Time: " + time_dropdown + ", Date/Time: " + dateTimeVal + ", Location: " + location_dropdown + ", Reason: " + reason_dropdown + ", Captcha: " + captcha);
  // console.log ("First Name: " + first_name_valid + ", Last Name: " + last_name_valid + ", Email: " + email_valid + ", Phone: " + phone_valid + ", Date: " + date_valid + ", Time: " + time_dropdown_valid + ", Location: " + location_dropdown_valid + ", Reason: " + reason_dropdown_valid + ", Captcha: " + captcha_valid);

  if ((first_name_valid == false) || (last_name_valid == false) || (email_valid == false) || (phone_valid == false) || (location_dropdown_valid == false) || (reason_dropdown_valid == false) || (date_valid == false) || (time_dropdown_valid == false)) {

    // Stop form from submitting after showing errors
    e.preventDefault();
    $(".errorsFound").removeClass("block-hidden").addClass("block-visible");

  } else {
    $(".errorsFound").removeClass("block-visible").addClass("block-hidden");
    var response = grecaptcha.getResponse();
    
    if(response.length == 0) {
      e.preventDefault();
      $(".errorsFound").removeClass("block-hidden").addClass("block-visible");
      $("#captchaValidation").removeClass("block-hidden").addClass("block-visible");
    } else {
      $(".errorsFound").removeClass("block-visible").addClass("block-hidden");
      $("#captchaValidation").removeClass("block-visible").addClass("block-hidden");
    }

  }

  if (e.isDefaultPrevented()) {
    return false;
  } else {
    return true;
  }
});
// END: Function to Run Validation
});