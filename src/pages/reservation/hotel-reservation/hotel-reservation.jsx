import React from "react";
import InputHolder from "../../../components/input/input";
import "./hotel-reservation.css";
import Hotelbg from "./header-bg.jpg";
import { useState } from "react";

const HotelReservation = () => {
  const [formInputs, setFormInputs] = useState({
    firstNameGuest: "",
    lastNameGuest: "",
    firstNameBilling: "",
    lastNameBilling: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    csv: "",
    check:""
  });

  const [formErrs, setFormErrs] = useState({
    firstNameGuestErr: "",
    lastNameGuestErr: "",
    firstNameBillingErr: "",
    lastNameBillingErr: "",
    emailErr: "",
    phoneErr: "",
    cityErr: "",
    postalCodeErr: "",
    cardNumberErr: "",
    csvErr: "",
    checkErr:""
  });

  const handleChange = (e) => {
    // console.log("validation");
    switch (e.target.id) {
      case "firstNameGuest":
        setFormInputs({ ...formInputs, firstNameGuest: e.target.value });
        break;
      case "lastNameGuest":
        setFormInputs({ ...formInputs, lastNameGuest: e.target.value });
        break;
      case "firstNameBilling":
        setFormInputs({ ...formInputs, firstNameBilling: e.target.value });
        break;
      case "lastNameBilling":
        setFormInputs({ ...formInputs, lastNameBilling: e.target.value });
        break;
      case "email":
        setFormInputs({ ...formInputs, email: e.target.value });
        break;
      case "phone":
        setFormInputs({ ...formInputs, phone: e.target.value });
        break;
      case "city":
        setFormInputs({ ...formInputs, city: e.target.value });
        break;
      case "postalCode":
        setFormInputs({ ...formInputs, postalCode: e.target.value });
        break;
      case "cardNumber":
        setFormInputs({ ...formInputs, cardNumber: e.target.value });
        break;
      case "csv":
        setFormInputs({ ...formInputs, csv: e.target.value });
        break;
      case "check":
        setFormInputs({ ...formInputs, check: !formInputs.check });
        break;
      default:
        return;
    }
  };

const validateErrors = () =>{
  setFormErrs({
    firstNameGuestErr:!formInputs.firstNameGuest.length?"This field is required!":'',
    lastNameGuestErr:!formInputs.lastNameGuest.length?"This field is required!":'',
    firstNameBillingErr:!formInputs.firstNameBilling.length?"This field is required!":'',
    lastNameBillingErr:!formInputs.lastNameBilling.length?'This field is required!':"",
    emailErr: !formInputs.email.length ?"This field is required!" :!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(formInputs.email)? "Invalid email format!": "",
    cityErr: !formInputs.city.length ?"This field is required!":"",
    phoneErr: !formInputs.phone.length ?"This field is required!":"",
    postalCodeErr: !formInputs.postalCode.length ?"This field is required!":"",
    cardNumberErr: !formInputs.cardNumber.length ? "This field is required!" : !/^\d{16}$/.test(formInputs.cardNumber) ? "Invalid card number format! (16 Digits)" : "",
    csvErr: !formInputs.csv.length ? "This field is required!" : !/^\d{3}$/.test(formInputs.csv) ? "It should be 3 digits only!" : "",
    checkErr: !formInputs.check ?"You must confirm the terms and conditions":"",
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  validateErrors();

  // Check if there are any form errors
  const hasErrors = Object.values(formErrs).some((error) => error !== "");

  if (!hasErrors) {
    // Retrieve existing data from local storage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];

    // Check if the new entry already exists in the array
    const isDuplicate = existingData.some((entry) =>
      Object.keys(entry).every((key) => entry[key] === formInputs[key])
    );

    if (!isDuplicate) {
      // Create a new entry with the current form inputs
      const newEntry = {
        firstNameGuest: formInputs.firstNameGuest,
        lastNameGuest: formInputs.lastNameGuest,
        firstNameBilling: formInputs.firstNameBilling,
        lastNameBilling: formInputs.lastNameBilling,
        email: formInputs.email,
        phone: formInputs.phone,
        city: formInputs.city,
        postalCode: formInputs.postalCode,
        cardNumber: formInputs.cardNumber,
        csv: formInputs.csv,
        check: formInputs.check
      };

      // Add the new entry to the existing data array
      const newData = [...existingData, newEntry];

      // Save the updated data to local storage
      localStorage.setItem("formData", JSON.stringify(newData));
    }

    // Reset form inputs and errors
    setFormInputs({
      firstNameGuest: "",
      lastNameGuest: "",
      firstNameBilling: "",
      lastNameBilling: "",
      email: "",
      phone: "",
      city: "",
      postalCode: "",
      cardNumber: "",
      csv: "",
      check: ""
    });
    setFormErrs({
      firstNameGuestErr: "",
      lastNameGuestErr: "",
      firstNameBillingErr: "",
      lastNameBillingErr: "",
      emailErr: "",
      phoneErr: "",
      cityErr: "",
      postalCodeErr: "",
      cardNumberErr: "",
      csvErr: "",
      checkErr: ""
    });

    // Redirect or perform any other actions after successful form submission
    // ...
  }
};

  return (
    <div className="container hotel-custom">
      <p className="fw-bold ms-5 my-5 fs-2 ps-md-5">Complete Your Booking</p>
      <div className="row">
        <div className="col-md-8">
          <div className="row bg-secondary-subtle p-5 border border-2 border-black rounded-2 mb-5 shadow">
            <div className="col-md-12">
              <div className="fs-3 fw-bold mb-3">Guest Details</div>
              <form action="" method="" id="reserveForm" name="reserveForm">
                <div className="d-flex justify-content-between flex-wrap reserve-modify mb-4">
                  <div className=" mb-3 inputs-modify">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">First Name</label>
                      <InputHolder
                        type="text"
                        id="firstNameGuest"
                        placeholder="EX: Barry"
                        value={formInputs.firstNameGuest}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.firstNameGuestErr && <span className="text-danger">{formErrs.firstNameGuestErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">Last Name</label>
                      <InputHolder
                        type="text"
                        id="lastNameGuest"
                        placeholder="EX: weasly"
                        value={formInputs.lastNameGuest}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.lastNameGuestErr && <span className="text-danger">{formErrs.lastNameGuestErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">Bed Preference</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue="King size">
                          King size
                        </option>
                        <option value="Queen size">Queen size</option>
                        <option value="Single bed">Single bed</option>
                        <option value="Twin bed">Twin bed</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput2">
                        Smoking Preference
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue="Non-smoking">
                          Non-smoking
                        </option>
                        <option value="Smoking">Smoking</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="fs-3 fw-bold mb-3">Billing Details</div>
                <div className="d-flex justify-content-between flex-wrap reserve-modify mb-4">
                  <div className=" mb-3 inputs-modify">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">First Name</label>
                      <InputHolder
                        type="text"
                        id="firstNameBilling"
                        placeholder="EX: Barry"
                        value={formInputs.firstNameBilling}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.firstNameBillingErr && <span className="text-danger">{formErrs.firstNameBillingErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">Last Name</label>
                      <InputHolder
                        type="text"
                        id="lastNameBilling"
                        placeholder="EX: weasly"
                        value={formInputs.lastNameBilling}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.lastNameBillingErr && <span className="text-danger">{formErrs.lastNameBillingErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">Email address</label>
                      <InputHolder
                        type="email"
                        id="email"
                        placeholder="www.example@gmail.com"
                        value={formInputs.email}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.emailErr && <span className="text-danger">{formErrs.emailErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">Phone number</label>
                      <InputHolder
                        type="number"
                        id="phone"
                        placeholder="phone number"
                        value={formInputs.phone}
                        handleChange={handleChange}
                        className="form-control"
                      />
                      {formErrs.phoneErr && <span className="text-danger">{formErrs.phoneErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">Billing address</label>
                      <InputHolder
                        type="text"
                        id="formGroupExampleInput"
                        placeholder="Billing address"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">City</label>
                      <InputHolder
                        type="text"
                        id="city"
                        placeholder="City"
                        value={formInputs.city}
                        handleChange={handleChange}
                        className="form-control"
                      />
                        {formErrs.cityErr && <span className="text-danger">{formErrs.cityErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput2">Country</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue="Egypt" >Egypt</option>
                        <option value="Italy">Italy</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Greece">Greece</option>
                        <option value="Lebanon">Lebanon</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">ZIP/Postal code</label>
                      <InputHolder
                        type="number"
                        id="postalCode"
                        placeholder="ZIP/Postal code"
                        value={formInputs.postalCode}
                        handleChange={handleChange}
                        className="form-control"
                      />
                        {formErrs.postalCodeErr && <span className="text-danger">{formErrs.postalCodeErr}</span>} 
                    </div>
                  </div>
                </div>
                <div className="fs-3 fw-bold mb-3">Special Requests*</div>
                <textarea
                  className="form-control fs-5"
                  rows="4"
                  maxLength={150}
                ></textarea>
                <small>*special requests cannot be guaranteed</small>
                <div className="fs-3 fw-bold mb-3 mt-4">
                  Payment and Confirmation
                </div>
                <div className="d-flex justify-content-between flex-wrap reserve-modify mb-4">
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput2">
                        Choose card type
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue="Visa" >
                          Visa
                        </option>
                        <option value="Master Card">Master Card</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Depit card">Depit card</option>
                      </select>
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">Card Number</label>
                      <InputHolder
                        type="number"
                        id="cardNumber"
                        placeholder="16 Digits"
                        value={formInputs.cardNumber}
                        handleChange={handleChange}
                        className="form-control"
                      />
                        {formErrs.cardNumberErr && <span className="text-danger">{formErrs.cardNumberErr}</span>} 
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group pe-lg-3">
                      <label for="formGroupExampleInput">CSV</label>
                      <InputHolder
                        type="number"
                        id="csv"
                        placeholder="3 Digits"
                        value={formInputs.csv}
                        handleChange={handleChange}
                        className="form-control"
                      />
                        {formErrs.csvErr && <span className="text-danger">{formErrs.csvErr}</span>}
                    </div>
                  </div>
                  <div className="inputs-modify mb-3">
                    <div className="form-group ps-lg-3">
                      <label for="formGroupExampleInput">Card Expiry</label>
                      <InputHolder
                        type="month"
                        min="2023-10"
                        id="formGroupExampleInput"
                        placeholder="oct/2023"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div>
                      <InputHolder
                        type="checkbox"
                        id="check"
                        checked
                        value={formInputs.check}
                        handleChange={handleChange}
                        className="form-check-input d-inline-block"
                      />
                      {formErrs.checkErr && <span className="text-danger">{formErrs.checkErr}</span>}
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      ></label>
                      <span className="ps-3">
                        I agree to the terms and conditions and understanding
                        the cancellation policy
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary ps-3 py-3  text-white rounded-2 mb-4">
                  <p className="mb-0  fs-5">Total: $150</p>
                  <small className="mt-0">
                    Total includes tax recovery charges and service fees.
                  </small>
                </div>
                <div className=" d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn bg-primary text-bold fs-4 shadow text-white mx-auto"
                    onClick={handleSubmit}
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4 ps-md-5 pe-lg-5">
          <div className="border border-2 border-secondary-subtle rounded-2 flex-column shadow">
            <p className="bg-black text-center text-white rounded-top-2 fs-6">
              Best rates guaranteed
            </p>
            <img src={Hotelbg} alt="hotel" className="w-100" />
            <p className="px-lg-2 fw-bold">Hotel name</p>
            <p className="px-lg-2 fw-bold">loation</p>
            <hr />
            <ul className="list-unstyled px-2 fw-bold">
              <li className="d-flex justify-content-between">
                <span className="text-muted">Check in:</span>
                <span>check in date</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Check out:</span>
                <span>check out date</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Room type:</span>
                <span>king size, non smoking</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Check out:</span>
                <span>check out date</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Rooms:</span>
                <span>2</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Guests:</span>
                <span>3</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-muted">Refundable:</span>
                <span>Yes</span>
              </li>
            </ul>
            <hr />
            <ul className="list-unstyled px-2 fw-bold">
              <li className="text-muted">Room price:</li>
              <li className="fs-5">$150</li>
              <li className="text-muted">Hotel occupancy and sales tax:</li>
              <li className="fs-5">$20</li>
              <li className="text-muted">
                Tax recovery charges and services fees:
              </li>
              <li className="fs-5">$15</li>
              <li className="text-muted">Total:</li>
              <li className="fs-5">$180</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelReservation;
