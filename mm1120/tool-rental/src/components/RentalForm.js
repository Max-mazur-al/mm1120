import React, { useState } from "react";
import { tools } from "../data";

function RentalForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        toolCode: tools[0].code,
        checkoutDate: "",
        returnDate: "",
        discount: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="rental-form">
            <h2>Rent a Tool</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tool:
                    <select
                        name="toolCode"
                        value={formData.toolCode}
                        onChange={handleChange}
                    >
                        {tools.map((tool) => (
                            <option key={tool.code} value={tool.code}>
                                {tool.type} ({tool.brand})
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Checkout Date:
                    <input
                        type="date"
                        name="checkoutDate"
                        value={formData.checkoutDate}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Return Date:
                    <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Discount (%):
                    <input
                        type="number"
                        name="discount"
                        min="0"
                        max="100"
                        value={formData.discount}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Generate Rental Agreement</button>
            </form>
        </div>
    );
}

export default RentalForm;
