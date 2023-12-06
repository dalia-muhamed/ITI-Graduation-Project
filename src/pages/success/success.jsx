import React from "react";
import "./success.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../footer/Footer";

const SuccessPage = () => {
  const newSelectedData = useSelector((state) => state.selectedData.data);
  const formData = JSON.parse(localStorage.getItem("formData"));
  const lastFormData = formData[formData.length - 1];
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="TicketWrapper">
      <div className="CustomPrint">
      <Navbar sticky={true} myClass="sticky" navbarItem="" className=""/>
      </div>
      <div className="col-md-5 ps-md-5 pe-lg-5 mx-auto p-sm-5 pb-md-0 pe-md-0 mb-4 mt-5 pt-5 customTicket">
        <div className="border rounded-2 flex-column shadow">
          <p className="bg-black text-center text-white rounded-top-2 fs-6 mb-0">
            Best Rates Guaranteed
          </p>
          <img
            src={newSelectedData[2].images[3]}
            alt="hotel"
            className="w-100"
          />
          <div style={{ padding: "1rem 0.7rem" }}>
            <p className="px-lg-2 fw-bold">{newSelectedData[0].name}</p>
            <p className="px-lg-2 fw-bold">{newSelectedData[1].locationName}</p>
            <hr />
            <ul
              className="list-unstyled px-2 fw-bold d-flex flex-column"
              style={{ gap: "1rem" }}
            >
              <li className="d-flex justify-content-between">
                <span className="text-muted">Check in:</span>
                <span>{lastFormData.checkIn}</span>
              </li>
              {lastFormData.checkOut && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Check out:</span>
                <span className="text-end">{lastFormData.checkOut}</span>
              </li>
              )}
              {lastFormData.room && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Room type:</span>
                <span className="text-end">
                  {lastFormData.bed},{lastFormData.smoking}
                </span>
              </li>
              )}
               {lastFormData.room && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Rooms:</span>
                <span>{lastFormData.room}</span>
              </li>
               )}
               {lastFormData.time && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Time</span>
                <span>{lastFormData.time}PM</span>
              </li>
               )}
               {lastFormData.table && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Tables:</span>
                <span>{lastFormData.table}</span>
              </li>
               )}
               {lastFormData.duration && (
              <li className="d-flex justify-content-between">
                <span className="text-muted">Duration:</span>
                <span>{lastFormData.duration}</span>
              </li>
               )}
              <li className="d-flex justify-content-between">
                <span className="text-muted">Guests:</span>
                <span>{lastFormData.guest}</span>
              </li>
              <li className="d-flex justify-content-between CustomPrint">
                <span className="text-muted">Refundable:</span>
                <span>Yes</span>
              </li>
            </ul>
            <hr />
            <ul
              className="list-unstyled px-2 fw-bold  d-flex flex-column justify-content-start align-content-start"
            >
              {lastFormData.room && (
                <li className="list-unstyled fw-bold  d-flex flex-column justify-content-start align-content-start">
              <li className="text-muted mb-0">Room price:</li>
              <li className="fs-5 mb-2">$150</li>
              </li>
              )}
              {lastFormData.table && (
                <li className="list-unstyled fw-bold  d-flex flex-column justify-content-start align-content-start">
              <li className="text-muted mb-0">Table price:</li>
              <li className="fs-5 mb-2">$50</li>
              </li>
              )}
              {lastFormData.duration && (
                <li className="list-unstyled fw-bold  d-flex flex-column justify-content-start align-content-start">
              <li className="text-muted mb-0">Price per guest:</li>
              <li className="fs-5 mb-2">$50</li>
              </li>
              )}
              <li className="text-muted mb-0 CustomPrint">Occupancy and sales tax:</li>
              <li className="fs-5 mb-2 CustomPrint">$20</li>
              <li className="text-muted mb-0 CustomPrint">
                Tax recovery charges and services fees:
              </li>
              <li className="fs-5 mb-2 CustomPrint">$15</li>
              <li className="text-muted mb-0">Total:</li>
              {lastFormData.room && (
              <li className="fs-5">
                ${lastFormData.room * 150 + lastFormData.guest * 25 + 35}
              </li>
              )}
              {lastFormData.table && (
              <li className="fs-5">
                ${lastFormData.table * 50 + lastFormData.guest * 25 + 35}
              </li>
              )}
              {lastFormData.duration && (
              <li className="fs-5">
                ${lastFormData.guest * 25 + 35}
              </li>
              )}
            </ul>
            <div className="d-flex justify-content-center">
            <button className="btn btn-primary buttonPrint mx-auto fw-bold shadow px-4" onClick={handlePrint}>
              Print Ticket
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="CustomPrint">
      <Footer />
      </div>
    </div>
  );
};

export default SuccessPage;
