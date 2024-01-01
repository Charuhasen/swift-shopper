import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    temperature: 0.1,
});

const organizeGroceryItems = async (groceryItems) => {
    console.log("I AM RECEIVING THESE ITEMS " + groceryItems);
    const groceryCategories = [
        "Produce",
        "Dairy",
        "Meat",
        "Bakery",
        "Frozen Foods",
        "Canned Goods",
        "Beverages",
        "Snacks",
        "Condiments",
        "Grains",
        "Pasta",
        "Sauces",
        "Spices",
        "Baking Supplies",
        "Deli",
        "Cleaning Supplies",
        "Personal Care",
        "Baby Care",
        "Pet Supplies",
        "Health and Wellness",
        "International Foods",
        "Organic",
        "Gluten-Free",
        "Dairy-Free",
        "Vegetarian",
        "Vegan",
        "Miscellaneous",
    ];

    const prompt = `
Given the following grocery items: ${groceryItems.join(",")}.
Categorize each item into the following sections: ${groceryCategories.join(
        ","
    )}.
Return the data in JSON object.

Example:
Given items: "Apple, Milk, Chicken, Bread"
Desired output: { "Produce": ["Apple"], "Dairy": ["Milk"], "Meat": ["Chicken"], "Bakery": ["Bread"], "Miscellaneous": [] }

You will build on this thought process for the provided items.
`;

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You'll receive a list of grocery categories (separated by commas): ${groceryCategories.join(
                    ", "
                )}.`,
            },
            {
                role: "system",
                content:
                    "Assign each grocery item to one of the provided sections and return them in a JSON object.",
            },
            {
                role: "system",
                content:
                    "Do not create new items or sections. Only use the provided sections. Exclude empty sections from the JSON.",
            },
            {
                role: "system",
                content:
                    "The expected JSON format is {section: ['item', 'item'], section: ['item', 'item']}.",
            },
            {
                role: "system",
                content:
                    "Items not fitting into a given section should be placed in a 'Misc' section.",
            },
            {
                role: "system",
                content:
                    "Provide a clear rationale for each item's categorization to demonstrate your thought process.",
            },
            { role: "user", content: prompt },
        ],

        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
        max_tokens: 2048,
    });
    console.log(completion.choices[0].message.content);
    //Return a JSON object
    return JSON.parse(completion.choices[0].message.content);
};

export default organizeGroceryItems;
