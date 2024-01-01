import React from "react";

export default function GroceryItem({ groceryItemName, handleClick }) {
    return (
        <div className="mt-3 w-full">
            <button
                className="btn btn-primary w-full"
                onClick={() => {
                    handleClick(groceryItemName);
                }}
            >
                {groceryItemName}
            </button>
        </div>
    );
}
