import React, { useState } from "react";
import ToolList from "./components/ToolList";
import RentalForm from "./components/RentalForm";
import RentalAgreement from "./components/RentalAgreement";
import "./styles/styles.css";

function App() {
    const [rentalDetails, setRentalDetails] = useState(null);

    const handleRentalSubmit = (details) => {
        setRentalDetails(details);
    };

    return (
        <div className="app-container">
            <h1>Tool Rental Application</h1>
            {!rentalDetails ? (
                <>
                    <ToolList />
                    <RentalForm onSubmit={handleRentalSubmit} />
                </>
            ) : (
                <RentalAgreement details={rentalDetails} />
            )}
        </div>
    );
}

export default App;
