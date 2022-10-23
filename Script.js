const hours = document.querySelector("#Hours > input");
const week = document.querySelector("#Week > input");
const date = document.querySelector("#Date > input");
const month = document.querySelector("#Month > input");
const year = document.querySelector("#Year > input");
const keyword = document.querySelector("#Keyword > textarea");
const message = document.querySelector("#Message > textarea");

const constant = document.querySelector("#Constant > input");
const outputBox = document.querySelector("#OutputBox > textarea");

//alphabet transformation
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabet2 ="zyxwvutsrqp"
var alphabet3 ="                          abcdefghi"



// function to create the every constant
function createConstant(num) {
    num = num
         .toString()
         .split('')
         .map(Number)
         .reduce(function (a, b) {
             return a + b;
         }, 0);

  if (num > 9){
    num = num
            .toString()
            .split('')
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            }, 0);
  }

  return num
}

// function to create the weekDay constant
function weekConstant(num) {
  return num = 7 - num + 1
}

//function that merge every constant
function finalConstant() {
  var hoursConst = createConstant(hours.value);
  var weekConst = weekConstant(week.value)
  var dateConst = createConstant(date.value)
  var monthConst = createConstant(month.value)
  var yearConst = createConstant(year.value)

  var finalConst =createConstant(hoursConst + weekConst + dateConst + monthConst + yearConst);
  constant.value = finalConst;
  return finalConst
}

function startTransform(keyword, text) {
console.log(keyword, text)

     var noSpaceMessage = text.split(" ").join("");
     var keywordHelper = keyword;
     var mess = " ";
     var messageLetters = noSpaceMessage.split("")
   for (i = 0; i <= messageLetters.length - 1; i++) {
          keywordHelper += keyword;
     }
  keyword = keywordHelper.split("")

   for (var i = 0; i < messageLetters.length; i++) {
     if (alphabet.indexOf(keyword[i]) >= 13) {
       if (alphabet.indexOf(messageLetters[i]) + finalConstant() > 25) {
         mess += alphabet3[Math.abs(alphabet.indexOf(messageLetters[i]) + finalConstant())]
       } else {
           mess += alphabet[alphabet.indexOf(messageLetters[i]) - finalConstant()]
       }
     }
   if (alphabet.indexOf(keyword[i]) >= 13) {
     if (alphabet.indexOf(messageLetters[i]) - finalConstant() > 0) {
       mess += alphabet2[Math.abs(alphabet.indexOf(messageLetters[i]) - finalConstant()) - 1 ]
     } else {
       mess += alphabet[alphabet.indexOf(messageLetters[i]) - finalConstant()]
     }
   }
  }
   return output = mess
}


function transform() {
  var keywordConst = keyword
  var messageConst = message
  var startTransformConst = startTransform(keyword.value, message.value)


  outputBox.value = startTransformConst
}

function finalTransform() {
  finalConstant()

  transform()
}

function main() {
  hours.addEventListener("input", finalTransform);
  week.addEventListener("input", finalTransform);
  date.addEventListener("input", finalTransform);
  month.addEventListener("input", finalTransform);
  year.addEventListener("input", finalTransform);
  keyword.addEventListener("textarea", finalTransform);

  constant.addEventListener("input", finalTransform);
  message.addEventListener("textarea", finalTransform);
  outputBox.addEventListener("textarea", finalTransform);
}
main()
