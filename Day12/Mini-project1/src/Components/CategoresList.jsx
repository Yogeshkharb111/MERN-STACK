import { useEffect, useState } from "react";
const CategoryList = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        const result = await response.json();
        console.log(result);
        setData(result);
    };
    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="flex flex-wrap gap-8">
            {data.map((ele) => { 
                return <p key={ele.name} className="p-2  rounded-lg bg-amber-400">{ ele.name}</p>
            })}
        </div>
    );
};
export { CategoryList };