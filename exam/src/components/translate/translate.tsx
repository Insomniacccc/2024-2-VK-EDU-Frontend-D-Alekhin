import React, { useState } from 'react';
import LangSelect from "../lang-select/lang-select.tsx";

import './translate.css';

type TranslateProps = {
    setLangFrom: (lang: string) => void;
    setLangTo: (lang: string) => void;
    setText: (text: string) => void;
    translate: string;
}

function Translate(props: TranslateProps) {
    const { setText, setLangFrom, setLangTo, translate } = props
    const [word, setWord] = useState('');

    return (
        <div className="translate">
            <div>
                <div className='translate__header'>
                    <LangSelect hasAutodetect setLang={setLangFrom} />
                    <LangSelect setLang={setLangTo} />
                </div>
                <div className='translate__body'>
                    <div className='translate__input-container'>
                        <input
                            className="translate__text-input"
                            onChange={(e) => {
                                setWord(e.target.value);
                                setText(e.target.value);
                            }}
                            value={word}
                        />
                    </div>
                    <div className='translate__answer'>
                        {translate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Translate;
