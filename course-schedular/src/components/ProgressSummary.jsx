import React from 'react';

const ProgressSummary = ({completedCount,availableCount,lockedCount}) => {
    const temp = (completedCount / 10) * 100;




    return (
        <div>

            <h1>CS Developer Track {temp}</h1>
            <div>
                <div className="row">
                    <p><span style={{
                        fontWeight: 'bold',
                        color: 'green'
                    }}>{completedCount}</span> of {10} course
                        completed <span style={{
                            fontWeight: 'bold',
                            color: 'blue'
                        }}>{availableCount}</span> available <span style={{
                            fontWeight: 'bold',
                            color: 'grey'
                        }}>{lockedCount}</span> Locked</p>
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