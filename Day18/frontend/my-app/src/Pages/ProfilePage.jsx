import { useEffect, useState } from "react";
import { NavBar } from "../Components/NavBar";

const ProfilePage = () => {
    const [products, setProducts] = useState([]);

    // Fetch existing products
    const getData = async () => {
        try {
            const resp = await fetch("http://localhost:2900/api/v1/products", {
                method: "GET",
            });
            const result = await resp.json();
            console.log("result -->", result);

            if (result.isSuccess) {
                setProducts(result.data.products);
            } else {
                console.error("API Error:", result.message);
            }
        } catch (err) {
            console.error("Fetch error:", err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const title = e.target.title.value;
            const price = e.target.price.value;
            const description = e.target.description.value;
            const quantity = e.target.quantity.value;

            const resp = await fetch("http://localhost:2900/api/v1/products", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    price,
                    description,
                    quantity,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (resp.status == "201") {
                alert("Product added !")
                getData();
                console.log(resp);
            } else { 
                const result = await resp.json();
                alert(`Invalid data: ${result.message}`);
            }
           
        } catch (err) {
            console.error("Cannot create product ->", err.message);
            alert(`Cannot create product: ${err.message}`);
        }
    };

    return (
        <div>
            <NavBar />

            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto my-4 flex flex-col gap-5 p-6 bg-blue-200 max-w-sm rounded-lg"
                >
                    <div className="flex gap-4">
                        <label>Title:</label>
                        <input
                            placeholder="Write here ..."
                            name="title"
                            type="text"
                            className="border-1 py-1 px-2 rounded-md"
                        />
                    </div>
                    <div className="flex gap-4">
                        <label>Price:</label>
                        <input
                            placeholder="Enter here ..."
                            name="price"
                            type="number"
                            className="border-1 py-1 px-2 rounded-md"
                        />
                    </div>
                    <div className="flex gap-4">
                        <label>Description:</label>
                        <input
                            placeholder="Description here ..."
                            name="description"
                            type="text"
                            className="border-1 py-1 px-2 rounded-md"
                        />
                    </div>
                    <div className="flex gap-4">
                        <label>Quantity:</label>
                        <input
                            placeholder="Enter quantity ..."
                            name="quantity"
                            type="number"
                            className="border-1 py-1 px-2 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="border-1 py-1 px-2 rounded-md bg-blue-400"
                    >
                        + Add Product +
                    </button>
                </form>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                {products.map((ele) => (
                    <div
                        key={ele._id}
                        className="p-5 px-20 rounded-lg border-1 mt-4 min-w-70"
                    >
                        <p>{ele.title}</p>
                        <p>{ele.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ProfilePage };
