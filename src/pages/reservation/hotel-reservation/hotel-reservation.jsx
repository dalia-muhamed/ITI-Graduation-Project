import React from "react";
import InputHolder from "../../../components/input/input";
import "./hotel-reservation.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../footer/Footer";
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
    month: "",
    check: false,
    bed: "King size",
    smoking: "Non-smoking",
    room: "1",
    guest: "1",
    checkIn: "",
    checkOut: "",
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
    checkErr: "",
    monthErr: "",
    checkInErr: "",
    checkOutErr: "",
  });

  const newSelectedData = useSelector((state) => state.selectedData.data);

  const navigate = useNavigate();
  emailjs.init("SH6vVPq0np3hs37kv");
  const sendEmail = async () => {
    try {
      const emailParams = {
        mailto: formInputs.email,
        subject: "Congratulations! Booking Successful",
        message: `
         Successful Booking
          
        Booking Details:
        - Check-In Date: ${formInputs.checkIn}
        - Check-Out Date: ${formInputs.checkOut}
        - Room Type: ${formInputs.room}
        - Bed Type: ${formInputs.bed}
        - Smoking Preference: ${formInputs.smoking}
        - Number of Guests: ${formInputs.guest}
    
        Thank you for choosing our services!`,
        to_name: formInputs.firstNameGuest,
        from_name: "Travelia",
        reply_to: formInputs.email,
      };

      // Send the email using Email.js
      await emailjs.send("service_rna51rk", "template_qkiwwum", emailParams);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

 

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormInputs({ ...formInputs, [e.target.name]: e.target.checked });
    } else {
      setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    }
  };

  const validateErrors = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const [selectedYear, selectedMonth] = formInputs.month.split("-");
    const [checkedYear, checkedMonth, checkedDay] =
      formInputs.checkIn.split("-");
    const [checkedOutYear, checkedOutMonth, checkedOutDay] =
      formInputs.checkOut.split("-");
    const checkInDate = new Date(checkedYear, checkedMonth - 1, checkedDay);
    const checkOutDate = new Date(
      checkedOutYear,
      checkedOutMonth - 1,
      checkedOutDay
    );

    setFormErrs({
      firstNameGuestErr: !formInputs.firstNameGuest.length
        ? "This field is required!"
        : "",
      lastNameGuestErr: !formInputs.lastNameGuest.length
        ? "This field is required!"
        : "",
      firstNameBillingErr: !formInputs.firstNameBilling.length
        ? "This field is required!"
        : "",
      lastNameBillingErr: !formInputs.lastNameBilling.length
        ? "This field is required!"
        : "",
      emailErr: !formInputs.email.length
        ? "This field is required!"
        : !/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(formInputs.email)
        ? "Invalid email format!"
        : "",
      cityErr: !formInputs.city.length ? "This field is required!" : "",
      phoneErr: !formInputs.phone.length ? "This field is required!" : "",
      postalCodeErr: !formInputs.postalCode.length
        ? "This field is required!"
        : "",
      cardNumberErr: !formInputs.cardNumber.length
        ? "This field is required!"
        : !/^\d{16}$/.test(formInputs.cardNumber)
        ? "Invalid card number format! (16 Digits)"
        : "",
      csvErr: !formInputs.csv.length
        ? "This field is required!"
        : !/^\d{3}$/.test(formInputs.csv)
        ? "It should be 3 digits only!"
        : "",
      monthErr: !formInputs.month.length
        ? "This field is required!"
        : `${selectedYear}-${selectedMonth}` < `${currentYear}-${currentMonth}`
        ? "Sorry, can't complete with expired card"
        : "",
      checkInErr: !formInputs.checkIn.length
        ? "This field is required!"
        : checkInDate < currentDate
        ? "Sorry, this date is invalid"
        : "",
      checkOutErr: !formInputs.checkOut.length
        ? "This field is required!"
        : checkOutDate < checkInDate
        ? "Sorry, this date is invalid"
        : "",
      checkErr: !formInputs.check
        ? "You must confirm the terms and conditions"
        : "",
    });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    validateErrors();
    setFormSubmitted(true);
  };
  useEffect(() => {
    if (formSubmitted) {
      // Reset the formSubmitted flag
      setFormSubmitted(false);
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
            month: formInputs.month,
            check: formInputs.check,
            bed: formInputs.bed,
            smoking: formInputs.smoking,
            room: formInputs.room,
            guest: formInputs.guest,
            checkIn: formInputs.checkIn,
            checkOut: formInputs.checkOut,
          };

          // Add the new entry to the existing data array
          const newData = [...existingData, newEntry];

          // Save the updated data to local storage
          localStorage.setItem("formData", JSON.stringify(newData));
          sendEmail();
          navigate("/reservation/successfully");
        }
      }
    }
  }, [formSubmitted, formErrs,formInputs]);
  return (
    <div className="">
      <Navbar sticky={true} myClass="sticky" navbarItem="" />
      <div className="container hotel-custom">
        <h1 className=" ms-5 my-5 fs-2 ps-md-5 heading-reservation">
          Complete Your Booking
        </h1>
        <div className="row">
          <div className="col-md-8">
            <div className="row p-5 border rounded-2 mb-5 shadow">
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
                          name="firstNameGuest"
                        />
                        {formErrs.firstNameGuestErr && (
                          <span className="text-danger">
                            {formErrs.firstNameGuestErr}
                          </span>
                        )}
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
                          name="lastNameGuest"
                        />
                        {formErrs.lastNameGuestErr && (
                          <span className="text-danger">
                            {formErrs.lastNameGuestErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group pe-lg-3">
                        <label for="formGroupExampleInput">
                          Bed Preference
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={formInputs.bed}
                          onChange={handleChange}
                          name="bed"
                        >
                          <option defaultValue="King size">King size</option>
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
                          value={formInputs.smoking}
                          onChange={handleChange}
                          name="smoking"
                        >
                          <option defaultValue="Non-smoking">
                            Non-smoking
                          </option>
                          <option value="Smoking">Smoking</option>
                        </select>
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group pe-lg-3">
                        <label for="formGroupExampleInput2">Rooms</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={formInputs.room}
                          onChange={handleChange}
                          name="room"
                        >
                          <option defaultValue="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group ps-lg-3">
                        <label for="formGroupExampleInput2">Guests</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={formInputs.guest}
                          onChange={handleChange}
                          name="guest"
                        >
                          <option defaultValue="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                          <option value="6">Six</option>
                          <option value="7">Seven</option>
                        </select>
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group pe-lg-3">
                        <label for="formGroupExampleInput">Check-in Date</label>
                        <InputHolder
                          type="date"
                          min="2024-10"
                          id="date"
                          value={formInputs.checkIn}
                          handleChange={handleChange}
                          name="checkIn"
                          className="form-control"
                        />
                        {formErrs.checkInErr && (
                          <span className="text-danger">
                            {formErrs.checkInErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group ps-lg-3">
                        <label for="formGroupExampleInput">
                          Check-out Date
                        </label>
                        <InputHolder
                          type="date"
                          min="2024-10"
                          id="date"
                          value={formInputs.checkOut}
                          handleChange={handleChange}
                          name="checkOut"
                          className="form-control"
                        />
                        {formErrs.checkOutErr && (
                          <span className="text-danger">
                            {formErrs.checkOutErr}
                          </span>
                        )}
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
                          name="firstNameBilling"
                        />
                        {formErrs.firstNameBillingErr && (
                          <span className="text-danger">
                            {formErrs.firstNameBillingErr}
                          </span>
                        )}
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
                          name="lastNameBilling"
                        />
                        {formErrs.lastNameBillingErr && (
                          <span className="text-danger">
                            {formErrs.lastNameBillingErr}
                          </span>
                        )}
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
                          name="email"
                        />
                        {formErrs.emailErr && (
                          <span className="text-danger">
                            {formErrs.emailErr}
                          </span>
                        )}
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
                          name="phone"
                        />
                        {formErrs.phoneErr && (
                          <span className="text-danger">
                            {formErrs.phoneErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group pe-lg-3">
                        <label for="formGroupExampleInput">
                          Billing address
                        </label>
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
                          name="city"
                        />
                        {formErrs.cityErr && (
                          <span className="text-danger">
                            {formErrs.cityErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group pe-lg-3">
                        <label for="formGroupExampleInput2">Country</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option defaultValue="Egypt">Egypt</option>
                          <option value="Italy">Italy</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Greece">Greece</option>
                          <option value="Lebanon">Lebanon</option>
                        </select>
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group ps-lg-3">
                        <label for="formGroupExampleInput">
                          ZIP/Postal code
                        </label>
                        <InputHolder
                          type="number"
                          id="postalCode"
                          placeholder="ZIP/Postal code"
                          value={formInputs.postalCode}
                          handleChange={handleChange}
                          className="form-control"
                          name="postalCode"
                        />
                        {formErrs.postalCodeErr && (
                          <span className="text-danger">
                            {formErrs.postalCodeErr}
                          </span>
                        )}
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
                          <option defaultValue="Visa">Visa</option>
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
                          name="cardNumber"
                        />
                        {formErrs.cardNumberErr && (
                          <span className="text-danger">
                            {formErrs.cardNumberErr}
                          </span>
                        )}
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
                          name="csv"
                        />
                        {formErrs.csvErr && (
                          <span className="text-danger">{formErrs.csvErr}</span>
                        )}
                      </div>
                    </div>
                    <div className="inputs-modify mb-3">
                      <div className="form-group ps-lg-3">
                        <label for="formGroupExampleInput">Card Expiry</label>
                        <InputHolder
                          type="month"
                          min="2024-10"
                          id="month"
                          value={formInputs.month}
                          handleChange={handleChange}
                          name="month"
                          className="form-control"
                        />
                        {formErrs.monthErr && (
                          <span className="text-danger">
                            {formErrs.monthErr}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div>
                        <InputHolder
                          type="checkbox"
                          id="check"
                          checked={formInputs.check}
                          value={formInputs.check}
                          handleChange={handleChange}
                          className="form-check-input d-inline-block"
                          name="check"
                        />
                        {formErrs.checkErr && (
                          <span className="text-danger">
                            {formErrs.checkErr}
                          </span>
                        )}
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
                    <p className="mb-0 fs-5">
                      Total: $
                      {formInputs.room * 100 + formInputs.guest * 25 + 35}
                    </p>
                    <small className="mt-0">
                      Total includes tax recovery charges and service fees.
                    </small>
                  </div>
                  <div className=" d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn bg-primary fw-bold fs-4 shadow text-white mx-auto btn-form"
                      onClick={handleSubmit}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 ps-md-5 pe-lg-5 mx-auto">
            <div className="border rounded-2 flex-column shadow">
              <p className="bg-black text-center text-white rounded-top-2 fs-6 mb-0">
                Best Rates Guaranteed
              </p>
              <img
                src={newSelectedData[2].images[0]}
                alt="hotel"
                className="w-100"
              />
              <div style={{ padding: '1rem 0.7rem' }}>
                <p className="px-lg-2 fw-bold">{newSelectedData[0].name}</p>
                <p className="px-lg-2 fw-bold">
                  {newSelectedData[1].locationName}
                </p>
                <hr />
                <ul
                  className="list-unstyled px-2 fw-bold d-flex flex-column"
                  style={{ gap: '1rem' }}
                >
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Check in:</span>
                    <span>{formInputs.checkIn}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Check out:</span>
                    <span className="text-end">{formInputs.checkOut}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Room type:</span>
                    <span className="text-end">
                      {formInputs.bed},{formInputs.smoking}
                    </span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Rooms:</span>
                    <span>{formInputs.room}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Guests:</span>
                    <span>{formInputs.guest}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-muted">Refundable:</span>
                    <span>Yes</span>
                  </li>
                </ul>
                <hr />
                <ul
                  className="list-unstyled px-2 fw-bold  d-flex flex-column"
                  style={{ gap: '1rem' }}
                >
                  <li className="text-muted">Room price:</li>
                  <li className="fs-5">$150</li>
                  <li className="text-muted">Hotel occupancy and sales tax:</li>
                  <li className="fs-5">$20</li>
                  <li className="text-muted">
                    Tax recovery charges and services fees:
                  </li>
                  <li className="fs-5">$15</li>
                  <li className="text-muted">Total:</li>
                  <li className="fs-5">
                    ${formInputs.room * 150 + formInputs.guest * 25 + 35}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HotelReservation;
