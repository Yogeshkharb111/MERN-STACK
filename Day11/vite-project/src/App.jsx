import { useEffect, useRef, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    console.log("🟡 : timeInSec:", timeInSec);
    const intervalRef = useRef(null);

    useEffect(() => {
        console.log("========= setting interval =====");

        intervalRef.current = setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 1000);
    }, []);

    const handlePause = () => {
        const intervalId = intervalRef.current;
        console.log("🟡 : intervalId:", intervalId);
        clearInterval(intervalId);
    };

    return (
        <div>
            <h2>00:00:{timeInSec}</h2>
            <button onClick={handlePause}>PAUSE</button>
        </div>
    );
};

export default App;