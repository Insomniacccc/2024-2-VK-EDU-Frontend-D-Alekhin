import React from 'react';
import Header from "../../components/header/header.tsx";
import { useSelector } from 'react-redux';
import { State } from "../../store/index.ts";
import HistoryItem from "../../components/history-item/history-item.tsx";

import './history.css';


function History() {
    const translations = useSelector((state: {translations: State}) => state.translations.translatedWords);

    return (
        <div className="history">
            <Header />
            <div className="history__content">
                <h2 className="history__title">История</h2>
                <div className="history__clean-container">
                    <button className="history__clean-button">
                        Очистить историю
                    </button>
                </div>
                <div>
                    {translations.map(({ word, translations, langFrom, langTo }) => (
                        <HistoryItem langFrom={langFrom} langTo={langTo} input={word} answer={translations} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default History;
