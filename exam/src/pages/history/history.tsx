import React from 'react';
import Header from "../../components/header/header.tsx";
import { useSelector, useDispatch } from 'react-redux';
import { clearTranslations, State } from "../../store/index.ts";
import HistoryItem from "../../components/history-item/history-item.tsx";

import './history.css';


function History() {
    const translations = useSelector((state: {translations: State}) => state.translations.translatedWords);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearTranslations());
    };

    return (
        <div className="history">
            <Header />
            <div className="history__content">
                <h2 className="history__title">История</h2>
                <div className="history__clean-container">
                    <button className="history__clean-button" onClick={handleClick}>
                        Очистить историю
                    </button>
                </div>
                <ul className="history__history">
                    {translations.map(({ word, translations, langFrom, langTo }) => (
                        <li key={`${word}-${translations}-${langFrom}-${langTo}`} className="history__item">
                            <HistoryItem langFrom={langFrom} langTo={langTo} input={word} answer={translations}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default History;
