"use client";
import React, { useEffect } from "react";
import organizeGroceryItems from "../../utils/openai";

export default function GroceryListing() {
    useEffect(() => {
        const storedDataString = localStorage.getItem("GroceryList");
        let storedData = JSON.parse(storedDataString);

        if (!Array.isArray(storedData)) {
            storedData = Array.isArray(storedData) ? storedData : [];
        }
        organizeGroceryItems(storedData);
    }, []);

    return (
        <div>
            <p></p>
        </div>
    );
}
