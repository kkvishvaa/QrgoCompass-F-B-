import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/ShipmentPage.css";

const ShipmentPage = () => {
  const [formData, setFormData] = useState({
    containerId: "",
    route: "",
    numCheckpoints: 1,
  });
  const [shipments, setShipments] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [foundShipment, setFoundShipment] = useState(null);

  const API_URL = "https://qrgocompassb.onrender.com/api/shipments";

  const token = Cookies.get("jwt_token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const createShipment = async () => {
    try {
      const res = await axios.post(`${API_URL}/create`, formData, config);
      alert("Shipment created!");
      setShipments([...shipments, res.data]);
    } catch (err) {
      alert("Error creating shipment");
    }
  };

  const fetchShipments = async () => {
    try {
      const res = await axios.get(API_URL, config);
      setShipments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const searchShipment = async () => {
    try {
      const res = await axios.get(`${API_URL}/${searchId}`, config);
      setFoundShipment(res.data.shipment);
    } catch (err) {
      alert("Shipment not found");
      setFoundShipment(null);
    }
  };

  const deleteShipment = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`, config);
      alert("Shipment deleted");
      setShipments(shipments.filter((s) => s.shipmentId !== id));
    } catch (err) {
      alert("Error deleting shipment");
    }
  };

  useEffect(() => {
    if (!token) {
      alert("Session expired. Please log in again.");
      window.location.href = "/login"; // redirect to login if token is missing
    } else {
      fetchShipments();
    }
  }, []);

  return (
    <div className="shipment-page">
      <h1 className="ship-heading">Shipment Management</h1>

      <div className="section">
        <h2 className="ship-heads">Create Shipment</h2>
        <div className="form">
          <input
            type="text"
            name="containerId"
            placeholder="Container ID"
            onChange={handleChange}
          />
          <input
            type="text"
            name="route"
            placeholder="Route"
            onChange={handleChange}
          />
          <input
            type="number"
            name="numCheckpoints"
            placeholder="Checkpoints"
            onChange={handleChange}
          />
          <button onClick={createShipment}>Create</button>
        </div>
      </div>

      <div className="section">
        <h2 className="ship-heads">Search Shipment</h2>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Shipment ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button onClick={searchShipment}>Search</button>
        </div>
        {foundShipment && (
          <div className="shipment-card">
            <h3>Found Shipment</h3>
            <p><strong>ID:</strong> {foundShipment.shipmentId}</p>
            <p><strong>Status:</strong> {foundShipment.status}</p>
            <p><strong>Route:</strong> {foundShipment.route}</p>
            {foundShipment.checkpoints && foundShipment.checkpoints.map((checkpoint, index) => (
              <div key={index} className="checkpoint-card">
                <p><strong>Checkpoint ID:</strong> {checkpoint.checkpointId}</p>
                <p><strong>Timestamp:</strong> {new Date(checkpoint.timestamp).toLocaleString()}</p>
                <p><strong>Latitude:</strong> {checkpoint.latitude || "N/A"}</p>
                <p><strong>Longitude:</strong> {checkpoint.longitude || "N/A"}</p>
                {checkpoint.qrCodeURL && (
                  <div>
                    <strong>QR Code:</strong>
                    <img
                      src={checkpoint.qrCodeURL}
                      alt={`QR Code for ${checkpoint.checkpointId}`}
                      style={{ maxWidth: "150px", maxHeight: "150px" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h2 className="ship-heads">All Shipments</h2>
        <div className="shipment-list">
          {shipments.map((s) => (
            <div className="shipment-card" key={s.shipmentId}>
              <h3>{s.shipmentId}</h3>
              <p><strong>Container:</strong> {s.containerId}</p>
              <p><strong>Status:</strong> {s.status}</p>
              <p><strong>Route:</strong> {s.route}</p>
              {s.checkpoints && s.checkpoints.map((checkpoint, index) => (
                <div key={index} className="checkpoint-card">
                  <p><strong>Checkpoint ID:</strong> {checkpoint.checkpointId}</p>
                  <p><strong>Latitude:</strong> {checkpoint.latitude || "N/A"}</p>
                  <p><strong>Longitude:</strong> {checkpoint.longitude || "N/A"}</p>
                  {checkpoint.qrCodeURL && (
                    <div>
                      <strong>QR Code:</strong>
                      <img
                        src={checkpoint.qrCodeURL}
                        alt={`QR Code for ${checkpoint.checkpointId}`}
                        style={{ maxWidth: "150px", maxHeight: "150px" }}
                      />
                    </div>
                  )}
                </div>
              ))}
              <button className="delete-btn" onClick={() => deleteShipment(s.shipmentId)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShipmentPage;
