/* 
{
1- we can declare var variable many time but we cant do that with let and const
2- we can access to var variable before declare but we cant with let and const


}
  

1- some functions from Number class :
    A- toString() => return string from number    
    B- tofixed(k) => Rounding numbers after k and return String 
    C- parseInt("number") => return the integer from the first not String 
    D- parseFloat("number") => return float not String
    E- Number.isInteger() => return true or false 
    F-Number.isNAN() => return true or false 
2- some functions from Math class : 
    A- round() => Round the number after the comma to the nearest ten
    B- ceil() => round number to top 
    C- floor() => round number to down
    D- min(), max()
    E- pow()
    F- random() => give us random number 
    G- trunc() => delete all number after comma 
3- some functions from String :
    A- console.log(variable[index of letter]) => return the letter 
    B- console.log(variable.charAt(inedx of letter))=> letter 
    C- console.log(variable.length)=> number of letters  
    D- trim() => delete all white spaces before and after the String
    E- toUpperCase() => make all letters big
    F- toLowerCase() => make all letters small
    G- we can use many functions in one line one().two().three(). .. 
    H- indexOf(value [mand], start of [opt]) => return index of first letter 
    J- lastIndexOf(value [mand] , start of [opt] )
    K- slice(value of first letter [mand] , end of slice [opt] not include end)
  *** slice can take negative value 
    L- repeat(number of copies)
    M- split(from any char you want to cut? , how many times want cut) and return array
    N- subString(first index, last index) 
    *** subString do swap between parametars if the last smaller than the first
    **  subString : any negative value consider it zero
    O- subStr(the first index , number of character that you want)
    P- includes(value) => true or false 
    Q- startWith(value that we are searching it, start from where)
    R- endWith(value , length) => true or false
4-Conditional ternary Operator : 
    condition number one ? if true : condition number two ? if true : else
5- if return value of smth is falsee value like (0 or "" or flase ) and we dont want to show it we write this :
 console.log(value || alternative value )
6- to declare array we have two ways :
    A- let Array-name = new Array();
    B- let Array-name = [ , , , ]
7- there are some functions to use inside arrays :
    A- unshift("","") => to add one or more elemets in start of array
    B- push("","") => add one or more elements but in the end 
    C- shift() => remove the first element from array and return it 
    D- pop() => remove the last element from array and return it 
    E- slice ()  return a new array and the old array still as was it
    F- splice(start from where not index , delete count , "value one" , "value two") and return a new array
    G- concat(name of first array , another value, ...) => to merge arrays with each other 
    H- join("separetor") => to return all elements of array like a String 
8- we can use label inside any loop to control it 
    EX: 
        labelname : for ( ; ;  ){
        if(sth) {
            break labelname;
               }
        }
9- The abbreviated loop : 
        let i=0;
    for ( ; ; ) {
        block code 
        increment i ;
        condition
    }
10- functions : 
    A- we can add default value for parameters : 
        funName(x1="default value" , x2="default value")
    B- if we dont know how many parameters we have we can use (...name) to take unlimte parameter as an array (name)
    C- Anonymous functions => Unnamed and made for a specific task
        for ex :
        function () {
            block of code 
        }
    D- Arrow function : 
        1- if there are no param and one statment then the arrow finction is 
            let print = () => 10; // will return 10
        2- if there are one param and one statment then => 
            let print = num => num; // will return num
        3- if there are more one param and one statment then => 
            let print = (num1, num2) => num1 + num2;
         *_*_*_*   in 1 + 2 + 3  if there are more one statment then we have to put {
            statments
            }
        4- to call arrow function :
            console.log(print(100, 50));
11- scope (global and local) :
    "let" does not "override" the variable outside the "block",
     but rather creates a "block" variable, 
     but the "var" overrides the variable outside the "block"
     in all cases except the "block" of "function"
12-  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.
        1- Map : 
            --- method creates a new array
            --- populated with the results of calling a provided function on every element
            --- in the calling array.

            Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
            - Element => The current element being processed in the array.
            - Index => The index of the current element being processed in the array.
            - Array => The Current Array
        2- filter : 
            --- method creates a new array
            --- with all elements that pass the test implemented by the provided function.

            Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
            - Element => The current element being processed in the array.
            - Index => The index of the current element being processed in the array.
            - Array => The Current Array
        3- reduce : 
            --- method executes a reducer function on each element of the array,
            --- resulting in a single output value.

            Syntax
            reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
            - Accumulator => the accumulated value previously returned in the last invocation
            - Current Val => The current element being processed in the array
            - Index => The index of the current element being processed in the array.
            ---------- Starts from index 0 if an initialValue is provided.
            ---------- Otherwise, it starts from index 1.
            - Array => The Current Array
  13- we can make object in four ways :
  Note : this from wa3 school 
            1- let name = {}
            2- let name = new Object({})
            3- let name = Object.creat(prototype object)
            4- let name = Object.assign(target object, obj1,obj2,...)
    - we can know how many nested objects the parent object has in this way :
            let lengthObject= Object.keys(objectName).length;
    - we can know if the object has specific propety witb this way :
            objectname.hasOwnProperty(value)
    - we can access to values of properties in this way :
            Object.value(objectName)
    14- ********** DOM ********** => Document Object Modul
                (All the functions mentioned below we put before it document.)
        1- getElementById("idName")
        2- getElementsByTagName("Tagname") => return collection (like array) of elements
        3- getElementsByClassName("class name") => return collection (like array) of elements 
        4- querySelector("Css selectors") => return first element in page
        5- querySelectorAll("Css selector") => return collection (like array) of elementsx
        6- title => return page title
        7- body => return page body
        8- forms => returm all forms like an array
        9- links => return all links like an array
        10- innerHtml => return the code of html
        11- textContent => return the result of html code 
        12- we can Overreide attributes directly like this : 
             document.querySelector("Css slector").atrrName = "new value"
        13- we can access to attr value by functions : 
            A- element.getAttribute("AttrName")
            B- element.setAttribute("AttrName" , "new value")
        14- we can know all attributes by :
            element.attributes 
        15- we can check if the element has specific Atrr or not : 
            element.hasAttribute("AtrrName")
        16- we can remove Atrributes by :  
            element.removeAttribute("AttrName")    
        17- we can check if the element has (((((Attributessss or not)))))
            element.hasAttributes()
        18- to create element  : 
            document.createElement("ele name")
        19- to create Attr :
            document.createAttribute("Attr Name")
        20- to Add Attr to element we have two ways :
           *********** if the Attr name is exist (Atrr from the common Attr)
            A- element.AttrName= "value"
            B- element.setAttributes("AtrrName", "new value") but here we must give it value
            C- element.setAttributeNode(**** variable **** name) here we dont have to give it value 
           *********** but if we want to generate attribute not found before then we can't use "A" way 
        21- to append smth inside element :
            element.appendChild("Node") *** Node means => variable contains text or element
        22- to create textNode : 
            document.createTextNode("Text")
        23- we can get all "elements" inside specific element by :
            element.children
        24- we can get all "Nodes" inside element by : 
            element.childNode
        25- we can get first and last node by :
            element.firstChild || element.lastChild
        26- we can get first and last element by : 
            element.firstElement || element.lastElement
    27- ********** Events **********
            --- onclick
            --- oncontextmenu
            --- onmouseenter
            --- onmouseleave

            --- onload
            --- onscroll
            --- onresize

            --- onfocus
            --- onblur
            --- onsubmit
    28- to prevent an event we can use : 
            e.preventDefault();
    29- we can return the first element inside an element :
            element.firstChild;
    30- we can remove element :
            element.removeChild(element);
    31- Class List in DOM :
            element.classList; => return all classes in element and some informations
            element.calssList.length;
            element.classList.contains("class name") => return true or false
            element.classList.item("indexes")=> return name of  class in that index || if the index out of range return null 
            element.classList.add(many class name )
            element.classList.remove(many class name)
            element.classList.toggle(class name) => if this class doesnt exist ,then will be added else will be removed 
    32- to add or change or remove Inline Css style from js we have many ways :
           A- element.style.cssCode = "Value"; => camel case 
           B- element.style.cssText = "Normal Css Code ";
           C- element.style.removeProperty("Property name");
           D- element.style.setProperty("PropertyName" , "Value" , "Priority");
    33- to add or remove from the css file by js :
            document.styleSheets[0].rules[0].style.(All ways in inline css style )
            34- before [Element || String] => element.before() 
            35- after  [Element || String] => element.after()
    36- append [Element || String] => element.append()
    37- prepend [Element || String] => element.prepend()
    38- remove() => to remove element from the DOM
    39- nextSibling || previousSibling => to get the next or previous thing (comment or text ...)
    40- nextElementSibling || previousElementSibling => to get the next or previous Element 
    41- parentElement => element.parent to get the parent 
    42- cloneNode(true||false) => true : clone all childes ; false : clone just the element without its childes
    43- element.addEventListener("name of event" , function name {
        block of code 
    })
    **** in this way of event we can do alot of event to the same element  

    **************************** BOM ****************************
    1- alert("message")
    2- confirm("message ") => return boolean value
    3- prompt ()
    4- settimeout(function  , timeout , if the named function has param put it here  ) => it makes us call function after specific time 
        the settimeout function return number and this number is his id 
    5- clearTimeout(settimeout id ) 
    6-  setIterval(function , time) => this function call it self until we force it to stop in clearIterval function 
    7- clearIterval (id of setInterval);
    8- location object : all of them can set and get 
        A- location.host => return name of website and src port 
        B- location.hostname => return just the name of the website 
        C- location.protocol => return the curent protocol 
        D- location.relod() 
        E- location.replace("new url")
        F- location.assign("new url")
    9- History object : 
        A- history.length => return number of urls inside the history 
        B- back() => go the to previous page 
        C- forward() => go to the forward page
        D- go() => position in history 
    10- scrollTo(x,y || options)
    11- scrollBy(x,y || options)
    12- window.scroll(y||x) => return the current position by px  
    13- localStorage 
      => we can set with three ways :
        A- localStorage.setItem("key" ,"value") ;
        B- localStorage."key" = "value";
        C- localStorgae["key"] = "value";
      => we can get with also three ways : 
        A- localStorage.get("key");
        B- localStorage["key"];
        C- localStorage.key; 
    14- sessionStorage => (تختفظ ببيانات المستخدم في نفس الجلسة فقط اي عندالخروج من المتصفح يتم مسحها )
    
    */

let tasksDiv = document.getElementById("tasks");
let addTask = document.getElementById("add");
let index = 0;
let tasks = [];
if (JSON.parse(localStorage.getItem("tasks"))) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  add();
}
addTask.addEventListener("click", function () {
  let tilte = prompt("ما هو عنوان المهمة الجديدة");
  if (tilte) {
    tasks.push({
      isDone: false,
      title: tilte,
      date: getDate(),
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    add();
  }
});
function add() {
  tasksDiv.innerHTML = "";
  index = 0;
  if (tasks) {
    for (let task of tasks) {
      if (task.isDone) {
        tasksDiv.innerHTML += standardElement(
          task.title,
          task.date,
          index,
          "#43e14370",
          "لم تتم  "
        );
      } else {
        tasksDiv.innerHTML += standardElement(task.title, task.date, index);
      }
      index++;
    }
  }
}

function standardElement(
  title,
  date,
  index,
  backgroundColor = "unset",
  doneText = "تم"
) {
  return `
  <div class="row" style="background-color : ${backgroundColor}">
    <div class="left">
    <button class="btn btn-red" onclick="deleteTask(${index})" >حذف</button>
    <button class="btn btn-blue" onclick= "update(${index})">تعديل</button>
    <button class="btn btn-green"  onclick="done(${index})">${doneText}</button>
    </div>
    <div class="right">
    <div class="top"> ${title} </div>
    <div class="bottom">${date}</div>
    </div>
    </div>
    `;
}

function getDate() {
  const time = new Date();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const day = time.getDate();
  return `${day}/${month}/${year}`;
}
function deleteTask(index) {
  let isConfermed = confirm(`هل انت متأكد من حذف ال ${tasks[index].title}`);
  if (isConfermed) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    add();
  }
}

function update(index) {
  let newTitle = prompt("ما هو العنوان الجديد ؟");
  if (newTitle) {
    tasks[index].title = newTitle;
    console.log(newTitle, index);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    add();
  }
}
function done(index) {
  tasks[index].isDone = !tasks[index].isDone;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  add();
}
