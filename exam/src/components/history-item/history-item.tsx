import React from 'react';

import './history-item.css';

function HistoryItem({langFrom, langTo, input, answer}: {langFrom: string, langTo: string, input: string, answer: string}) {
    return (
        <div className="history-item">
            <div>
                <span className="history-item__lang">{langFrom}</span>
                <span className="history-item__lang">{langTo}</span>
            </div>
            <div>
                <span className="history-item__input">{input}</span>
                <span className="history-item__answer">{answer}</span>
            </div>
        </div>
    );
}

export default HistoryItem;
