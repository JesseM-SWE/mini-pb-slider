import React from 'react';

const ProgressSummary = () => {
    let completed  = 2
    let total = 10
    let available = 4
    let lock = 4
    let temp = (completed / total) * 100

    let percentage = 25

    return (
        <div>

            <h1>CS Developer Track {temp}</h1>
            <div>
                <div className="row">
                    <p><span style={{
                        fontWeight: 'bold',
                        color: 'green'
                    }}>{completed}</span> of {total} course
                        completed <span style={{
                            fontWeight: 'bold',
                            color: 'blue'
                        }}>{available}</span> available <span style={{
                            fontWeight: 'bold',
                            color: 'grey'
                        }}>{lock}</span> Locked</p>
                </div>
                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar"  style={{
                        width: `${temp}%`,
                        backgroundColor: 'green'
                    }}>{temp}%</div>
                </div>
            </div>
        </div>
    );
};

export default ProgressSummary;