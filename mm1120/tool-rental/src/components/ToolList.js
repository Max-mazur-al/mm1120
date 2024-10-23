import React from "react";
import { tools } from "../data";

function ToolList() {
    return (
        <div className="tool-list">
            <h2>Tools Available for Rent</h2>
            <table className="tool-table">
                <thead>
                    <tr>
                        <th>Tool Code</th>
                        <th>Tool Type</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((tool) => (
                        <tr key={tool.code}>
                            <td>{tool.code}</td>
                            <td>{tool.type}</td>
                            <td>{tool.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ToolList;
