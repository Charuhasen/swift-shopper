// Import necessary components and modules
"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import GroceryItem from "@/components/grocery_item";
import Link from "next/link";

// Home component
export default function Home() {
    // Input textfield value state
    const [inputHandler, setInputHandler] = useState("");

    // Array of products created by user state
    const [userGroceryList, setUserGroceryList] = useState([]);

    // Add item to grocery list function
    const addToGroceryList = () => {
        setUserGroceryList((prev) => [...prev, inputHandler]);
    };

    // Remove item from grocery list function
    const removeFromGroceryList = (itemToRemove) => {
        const tempList = userGroceryList.filter(
            (item) => item !== itemToRemove
        );
        setUserGroceryList(tempList);
    };

    // Save grocery list to local storage function
    const saveToLocalStorage = () => {
        const data = { groceryList: userGroceryList };
        console.log(data);
        const dataString = JSON.stringify(data);
        localStorage.setItem("GroceryList", dataString);
    };

    // Handle form submission
    const handleSubmit = async () => {
        addToGroceryList();
        setInputHandler("");
    };

    return (
        <div>
            {/* Navbar component */}
            <Navbar />

            {/* Main content */}
            <div className="w-full flex justify-center items-center flex-col min-h-screen">
                <div className="w-100">
                    <div className="flex">
                        {/* Input field for grocery item */}
                        <input
                            type="text"
                            placeholder="grocery item..."
                            className="input input-bordered w-full max-w-xs"
                            value={inputHandler}
                            onChange={(e) => setInputHandler(e.target.value)}
                        />

                        {/* Add button */}
                        <button
                            className="btn btn-active bg-blue-500 text-white ml-5"
                            onClick={handleSubmit}
                        >
                            Add
                        </button>

                        {/* Generate button */}
                        <Link href="/grocery_listings">
                            <button
                                className="btn btn-active bg-green-400 text-white ml-5"
                                onClick={() => {
                                    saveToLocalStorage();
                                }}
                            >
                                Generate
                            </button>
                        </Link>
                    </div>

                    {/* Display grocery list */}
                    <div className="mt-10 w-full rounded-lg">
                        {userGroceryList.length === 0 ? (
                            <div>EMPTY</div>
                        ) : (
                            userGroceryList.map((item, index) => (
                                <GroceryItem
                                    key={index}
                                    groceryItemName={item}
                                    handleClick={removeFromGroceryList}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
