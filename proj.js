let enter = document.getElementById("enter");
let picker = document.getElementById("picker");
var pass = document.getElementById("pswd");
var email = document.getElementById("email");
var fName = document.getElementById("textbox");
var lab1 = document.getElementById("lab1");
var lab2 = document.getElementById("lab2");
var arr = ["raymond.ogaraga@hotmail.com", "rain4all@few-all.us", "live_now@die_morrow.never.co", "24_hours@mins_seconds.com", "outlook_2023@yes.ng", "ease@hotmail.co", "use@gmail.com", "country4country@city-city.xyz", "example.example@network-sev.org", "bless_you-4me@yahoo.co.uk", "open41.close81@self.co.com", "ex_2003@you-serv.net", "example@example.com"]

// creating random acceptable email from array[arr];
const randNum = Math.floor(Math.random() * arr.length);
let txt3 = arr[randNum];
// validations begin with pick and enter
picker.onclick = (e) => {
    lab2.textContent = "";
    e.preventDefault();
    lab2.textContent += txt3;
}

enter.addEventListener("click", (e) => {
    e.preventDefault();
    //creating regex.
    let txt = /^([a-zA-Z0-9-._]+)@([a-zA-Z-._]+).([a-zA-Z]{2})$/;
    let txt2 = txt.exec(email.value);
    let nam = /([a-zA-Z]+){3}/;
    let nam2 = nam.test(fName.value);
    let pas = /([a-zA-Z0-9!@#.,$%&+-_*)]{5})/;
    let pas2 = pas.test(pass.value);

    { (nam2 === true && fName.value != "") ? alert("Valid Name(s) entered!") : alert("Invalid Name entered!"), fName.value = "" };
    { (pass.value != "" && pas2 === true) ? alert("Valid password entered!") : alert("Invalid password entered!"), pass.value = "" };
    if (email.value != "" && txt2 && !(lab1.innerHTML.match(email.value))) {
        alert("E-mail address is available!");
        alert("Valid e-mail entered!");
        lab1.textContent += email.value + ' ,' + '\n';
        lab1.style.textDecoration = "none";
        email.value = "";
        lab1.style.color = "darkgreen";
    }

    else {
        alert("Invalid e-mail entered!");
        alert("E-mail address is in use!");
        email.value = "";
    }

}); 