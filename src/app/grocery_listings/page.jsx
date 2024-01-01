"use client";
import React, { useState, useEffect } from "react";
import organizeGroceryItems from "../../utils/openai";

export default function GroceryListing() {
    const [groceryList, setGroceryList] = useState([]);

    useEffect(() => {
        const storedDataString = localStorage.getItem("GroceryList");
        let storedData = JSON.parse(storedDataString);
        organizeGroceryItems(storedData.groceryList);
    }, []);

    return (
        <div>
            <p></p>
        </div>
    );
}
