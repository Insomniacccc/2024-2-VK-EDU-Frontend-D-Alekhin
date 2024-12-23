import React from 'react';
import langs from '../../constants/languages.json';

import './history-item.css';

function HistoryItem({langFrom, langTo, input, answer}: {langFrom: string, langTo: string, input: string, answer: string}) {
    return (
        <div className="history-item">
            <div className="history-item__langs">
                <span className="history-item__lang">{langs[langFrom]}</span>
                <span className="history-item__lang">{langs[langTo]}</span>
            </div>
            <div className="history-item__words">
                <div className="history-item__input">{input}</div>
                <div className="history-item__answer">{answer}</div>
            </div>
        </div>
    );
}

export default HistoryItem;
