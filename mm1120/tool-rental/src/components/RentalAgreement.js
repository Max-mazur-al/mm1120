import React from "react";
import { tools, rentalCharges } from "../data";

function RentalAgreement({ details }) {
    const tool = tools.find((t) => t.code === details.toolCode);
    const dailyCharge = rentalCharges.find(
        (charge) => charge.type === tool.type
    ).dailyCharge;

    const chargeableDays = calculateChargeableDays(
        details.checkoutDate,
        details.returnDate,
        tool.type
    );
    const prediscountAmount = chargeableDays * dailyCharge;
    const discountAmount = (prediscountAmount * details.discount) / 100;
    const finalAmount = prediscountAmount - discountAmount;

    function calculateChargeableDays(checkoutDate, returnDate, toolType) {
        const checkout = new Date(checkoutDate);
        const returnD = new Date(returnDate);
        const days = (returnD - checkout) / (1000 * 60 * 60 * 24);

        // You could add logic here for excluding weekend/holiday days
        return days;
    }

    return (
        <div className="rental-agreement">
            <h2>Rental Agreement</h2>
            <p>Tool Code: {tool.code}</p>
            <p>Tool Type: {tool.type}</p>
            <p>Tool Brand: {tool.brand}</p>
            <p>Checkout Date: {details.checkoutDate}</p>
            <p>Return Date: {details.returnDate}</p>
            <p>Daily Charge: ${dailyCharge.toFixed(2)}</p>
            <p>Chargeable Days: {chargeableDays}</p>
            <p>Pre-discount Amount: ${prediscountAmount.toFixed(2)}</p>
            <p>Discount: {details.discount}%</p>
            <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
            <p>Final Amount: ${finalAmount.toFixed(2)}</p>
        </div>
    );
}

export default RentalAgreement;
