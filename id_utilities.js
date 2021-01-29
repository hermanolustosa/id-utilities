/*
	ID JS file
	Available at: https://github.com/hermanolustosa/id-utilities
*/

var random_alpha_string = function(length) {
   var result           = "";
   var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   var charactersLength = characters.length;

   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
};

var dig = function(n1, n2, n3, n4) { 
  var nums = n1.split("").concat(n2.split(""), n3.split(""));
  var x = 0;    
  if (n4) nums[9] = n4;
  for (var i = (n4 ? 11:10), j = 0; i >= 2; i--, j++) x += parseInt(nums[j]) * i;
  return (x % 11) < 2 ? 0 : 11 - (x % 11); 
};

var add_padding = function(number){
    var len = number.length;
    
    for(var i = len; i <3; i++){
        number = "0" + number;
    }
    
    return number;
};

var random = function() {
  var number = Math.floor(Math.random() * 999);
  return add_padding(number.toString()); 
};

var create_cpf = function() {
  var n1 = random();
  var n2 = random(); 
  var n3 = random();
  var d1 = dig(n1, n2, n3);
  return  n1+"."+n2+"."+n3+"-"+d1+dig(n1, n2, n3, d1);
};

var convert_email = function(email) {

    var convert = function(l) {
        return l.replace(/[\t\x20]$/gm, "").replace(/=?(?:\r\n?|\n)/g, "").replace(/=([a-fA-F0-9]{2})/g, function(n, m) {
            var o = parseInt(m, 16);
            return String.fromCharCode(o);
        });
    };
    
    return convert(email); 
};

var extract_token = function(email) {
	var startDelimiter = "token=";
	var finalDelimiter = "\\s";
	var strMatch = email.match(new RegExp(startDelimiter + "(.*)" + finalDelimiter));
	var token = strMatch[1].split(/\s+/)[0].replace('"', '');
	return token;
};




