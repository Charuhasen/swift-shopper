"use client";
import React, { useState, useEffect } from "react";
import organizeGroceryItems from "../../utils/openai";
import Category from "@/components/category";

export default function GroceryListing() {
    const [groceryList, setGroceryList] = useState({});

    useEffect(() => {
        const storedDataString = localStorage.getItem("GroceryList");
        let storedData = JSON.parse(storedDataString);

        // Assuming organizeGroceryItems is an async function
        organizeGroceryItems(storedData.groceryList).then((organizedData) => {
            setGroceryList(organizedData);
        });
    }, []);

    return (
        <div className="w-full flex justify-center items-center flex-col min-h-screen">
            {console.log(
                "Page trying to render: " + JSON.stringify(groceryList)
            )}
            {Object.keys(groceryList).map((categoryName) => (
                <Category
                    key={categoryName}
                    categoryName={categoryName}
                    categoryItems={groceryList[categoryName]}
                />
            ))}
        </div>
    );
}
