import React, { useState } from 'react'

function Converter() {
    const [conversionType, setConversionType] = useState("Period to Frequency");
    const [period, setPeriod] = useState(0);
    const [periodUnit, setPeriodUnit] = useState('Seconds');
    const [frequency, setFrequency] = useState(0);
    const [frequencyUnit, setFrequencyUnit] = useState('Hertz');
    const [output, setOutput] = useState(0);

    const handleConversionTypeChange = (event) => {
        setConversionType(event.target.value);
    }

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    }

    const handlePeriodUnitChange = (event) => {
        setPeriodUnit(event.target.value);
    }

    const handleFrequencyChange = (event) => {
        setFrequency(event.target.value);
    }

    const handleFrequencyUnitChange = (event) => {
        setFrequencyUnit(event.target.value);
    }

    const handleConvert = () => {
        // Define conversion factors for different time units
        const timeUnits = {
            Seconds: 1,
            Milliseconds: 1e-3,
            Microseconds: 1e-6,
            Nanoseconds: 1e-9,
            Picoseconds: 1e-12,
        };

        // Define conversion factors for different frequency units
        const frequencyUnits = {
            Hertz: 1,
            Kilohertz: 1e3,
            Megahertz: 1e6,
            Gigahertz: 1e9,
            Terahertz: 1e12,
        };

        // Perform the conversion
        if (conversionType === 'Period to Frequency') {
            const periodInSeconds = period * timeUnits[periodUnit];
            const frequencyHertz = 1 / periodInSeconds;
            setOutput(frequencyHertz / frequencyUnits[frequencyUnit]);
        } else {
            const frequencyHertz = frequency * frequencyUnits[frequencyUnit];
            const periodInSeconds = 1 / frequencyHertz;
            setOutput(periodInSeconds / timeUnits[periodUnit]);
        }
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div className='gap-3'
                style={{
                    width: '50%',
                    height: 'fit-content',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    padding: '30px',
                    borderRadius: '10px',
                    backgroundColor: '#e2725b'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>Period and Frequency Converter</h1>
                </div>
                <select className="form-select" value={conversionType} onChange={handleConversionTypeChange}>
                    <option value="Period to Frequency">Period to Frequency</option>
                    <option value="Frequency to Period">Frequency to Period</option>
                </select>
                {conversionType === "Period to Frequency" ? (
                    <>
                        <div className='gap-2'
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <input type='number' className='form-control w-75' value={period} onChange={handlePeriodChange}></input>
                            <select className="form-select w-25" value={periodUnit} onChange={handlePeriodUnitChange}>
                                <option value="Seconds">Seconds</option>
                                <option value="Milliseconds">Milliseconds</option>
                                <option value="Microseconds">Microseconds</option>
                                <option value="Nanoseconds">Nanoseconds</option>
                                <option value="Picoseconds">Picoseconds</option>
                            </select>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <select className="form-select" value={frequencyUnit} onChange={handleFrequencyUnitChange}>
                                <option value="Hertz">Hertz</option>
                                <option value="Kilohertz">Kilohertz</option>
                                <option value="Megahertz">Megahertz</option>
                                <option value="Gigahertz">Gigahertz</option>
                                <option value="Terahertz">Terahertz</option>
                            </select>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='gap-2'
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <input type='number' className='form-control w-75' value={frequency} onChange={handleFrequencyChange}></input>
                            <select className="form-select w-25" value={frequencyUnit} onChange={handleFrequencyUnitChange}>
                                <option value="Hertz">Hertz</option>
                                <option value="Kilohertz">Kilohertz</option>
                                <option value="Megahertz">Megahertz</option>
                                <option value="Gigahertz">Gigahertz</option>
                                <option value="Terahertz">Terahertz</option>
                            </select>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <select className="form-select" value={periodUnit} onChange={handlePeriodUnitChange}>
                                <option value="Seconds">Seconds</option>
                                <option value="Milliseconds">Milliseconds</option>
                                <option value="Microseconds">Microseconds</option>
                                <option value="Nanoseconds">Nanoseconds</option>
                                <option value="Picoseconds">Picoseconds</option>
                            </select>
                        </div>
                    </>
                )}
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <button type="button" className="btn btn-success" onClick={handleConvert}>Convert</button>
                </div>
                <input type='text' className='form-control' value={output} readOnly></input>
            </div>
        </div>
    )
}

export default Converter