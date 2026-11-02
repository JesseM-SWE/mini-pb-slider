import React from 'react';

const ProgressSummary = ({completedCount, availableCount, lockedCount,len}) => {
    const temp = len > 0 ? (completedCount / len) * 100 : 0;

    return (
        <div>
            <h2>CS Developer Track</h2>

            <div className="bg-white border rounded shadow-sm p-3">

                <div className="row">
                    <p>
                        <span style={{fontWeight: 'bold', color: 'green'}}>
                            {completedCount}
                        </span> of {len} courses completed

                        <span style={{fontWeight: 'bold', color: 'blue', marginLeft: '15px'}}>
                            {availableCount}
                        </span> available

                        <span style={{fontWeight: 'bold', color: 'grey', marginLeft: '15px'}}>
                            {lockedCount}
                        </span> locked
                    </p>
                </div>

                <div className="progress" role="progressbar"
                     aria-valuenow={temp}
                     aria-valuemin="0"
                     aria-valuemax="100">

                    <div className="progress-bar"
                         style={{
                             width: `${temp}%`,
                             backgroundColor: 'green'
                         }}>
                        {temp}%
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgressSummary;