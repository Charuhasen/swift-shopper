import React from "react";

export default function Category({ categoryName, categoryItems }) {
    return (
        <div>
            <div className="collapse bg-blue-600 mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium text-white">
                    {categoryName}
                </div>

                <div className="collapse-content">
                    {categoryItems ? (
                        categoryItems.map((item) => (
                            <div
                                key={item + Math.random()}
                                className="flex justify-between items-center bg-red-300 rounded mt-2 p-3 "
                            >
                                <p className="rounded text-white">{item}</p>
                                <button className="btn btn-circle btn-outline text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Nothing here</p>
                    )}
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
}
