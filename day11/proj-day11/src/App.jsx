import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        console.log("Timer running state changed", isTimerRunning);

        let intervalId = null;
        if (isTimerRunning) {
            intervalId = setInterval(() => {
                // setTimeInSec((prev) => prev + 1);
                setTimeInSec((prev) => {
                    return prev + 1;
                });
            }, 5); //st1
        }

        return () => {
            console.log("Cleaning up interval...");
            clearInterval(intervalId);
        };
    }, [isTimerRunning]);

    const handlePause = () => {
        if (isTimerRunning) {
            setIsTimerRunning(false);
        }
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
    };

    const handleLap = () => {
        console.log("Lap time", timeInSec);
        setLaps((prev) => {
            const temp = [...prev];
            temp.push(timeInSec);
            return temp;
        });
    };

    const handleReset = () => {
        setTimeInSec(0);
        setIsTimerRunning(false);
        setLaps([]); //clear laps when resetting
    };

    const hours = Math.floor(timeInSec / 3600) // derived state variable
        .toString()
        .padStart(2, "0");

    const minutes = Math.floor((timeInSec % 3600) / 60)
        .toString()
        .padStart(2, "0");

    const seconds = (timeInSec % 60).toString().padStart(2, "0");

    return (
        <div className="container">
        <h2 className="time-display">
            {hours}:{minutes}:{seconds}
        </h2>
        <div className="controls">
            {isTimerRunning ? (
                <button onClick={handlePause}>PAUSE</button>
            ) : (
                <button onClick={handlePlay}>PLAY</button>
            )}
            <button onClick={handleLap}>LAP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
        <div className="laps">
            {laps.map((elem, idx) => {
                return <p key={idx}>Lap {idx + 1}: {elem} sec</p>;
            })}
        </div>
    </div>
    );
};

export default App;