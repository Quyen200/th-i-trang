 // đối tượng Validator
 function Validator(options) {
     function getParent(element, selector) {
         while (element.parentElement) {
             if (element.parentElement.matches(selector)) {
                 return element.parentElement;
             }
             element = element.parentElement;
         }
     }

     var selectorRules = {};

     // hàm thực hiện validate
     function validate(inputElement, rule) {
         //  value: inputElement
         // test function: rule.test
         var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
         var errorMessage;

         //  lấy ra các rules của selector
         var rules = selectorRules[rule.selector];

         // lập qua từng rules và kiểm tra
         // nếu có lỗi dừng việc kiểm tra
         for (var i = 0; i < rules.length; ++i) {
             errorMessage = rules[i](inputElement.value);
             if (errorMessage) break;
         }

         if (errorMessage) {
             errorElement.innerText = errorMessage;
             getParent(inputElement, options.formGroupSelector).classList.add('invalid');
         } else {
             errorElement.innerText = "";
             getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
         }

         return !errorMessage;
     };

     //  lấy elment của form validate
     var formElement = document.querySelector(options.form);
     if (formElement) {
         // khi submit form
         formElement.onsubmit = function(e) {
             e.preventDefault();

             var isFormValid = true;

             //  lập qua từng rules và validate
             options.rules.forEach(function(rule) {
                 var inputElement = formElement.querySelector(rule.selector);
                 var isValid = validate(inputElement, rule);
                 if (!isValid) {
                     isFormValid = false;
                 }
             })

             if (isFormValid) {
                 // trường hợp submit với javascript
                 if (typeof options.onSubmit === 'function') {
                     var enableInputs = formElement.querySelectorAll('[name]');
                     var formValues = Array.from(enableInputs).reduce(function(values, input) {
                         values[input.name] = input.value;
                         return values;
                     }, {});
                     options.onSubmit(formValues);
                 }
                 //  trường hợp submit với hành vi mặc định
                 else {
                     formElement.submit();
                 }
             } else {
                 console.log('có lỗi');
             }
         }


         // lặp qua mỗi rule vã xử lý (lắng nghe sự kiện blur,input,... )
         options.rules.forEach(function(rule) {

             // Lưu lại các rules cho mỗi input
             if (Array.isArray(selectorRules[rule.selector])) {
                 selectorRules[rule.selector].push(rule.test);
             } else {
                 selectorRules[rule.selector] = [rule.test];
             }

             var inputElement = formElement.querySelector(rule.selector);
             if (inputElement) {
                 // xử lý trường hợp BLUR ra ngoài khố input
                 inputElement.onblur = function() {
                         validate(inputElement, rule);
                     }
                     //  xử lý mỗi khi nhập vào input
                 inputElement.oninput = function() {
                     var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                     errorElement.innerText = "";
                     getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                 }
             }
         })
     }
 }

 // định nghĩa rules
 //  nguyên tắc của các rules ;
 // 1. khi có lỗi => trả ra messae lỗi
 // 2. khi hợp lệ => ko trả ra cái gì (undefined)
 Validator.isRequired = function(selector, message) {
     return {
         selector: selector,
         test: function(value) {
             return value.trim() ? undefined : message || "Vui lòng nhập trường này !"
         }
     }
 }

 Validator.isEmail = function(selector) {
     return {
         selector: selector,
         test: function(value) {
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
             return regex.test(value) ? undefined : 'Trường này là email !'
         }
     }
 }

 Validator.minLength = function(selector, min, message) {
     return {
         selector: selector,
         test: function(value) {
             return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu  ${min} kí tự !`
         }
     }
 }

 Validator.isConfirmed = function(selector, getConfirmValue, message) {
     return {
         selector: selector,
         test: function(value) {
             return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
         }
     }

 }