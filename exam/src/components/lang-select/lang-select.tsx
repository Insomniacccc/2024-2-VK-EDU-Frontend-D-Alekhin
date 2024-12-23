import React, {useEffect, useState} from 'react';
import langs from '../../constants/languages.json';

import './lang-select.css';

function LangSelect({ hasAutodetect, setLang }: {hasAutodetect?: boolean, setLang: (key: string) => void }): JSX.Element {
    const langsKeys = hasAutodetect ? Object.keys(langs) : Object.keys(langs).slice(1);
    const langsKeysToShow = langsKeys.slice(0, 3);
    const [chosenLang, setChosenLang] = useState(langsKeysToShow[0]);

    useEffect(() => {
        setLang(chosenLang);
    }, [chosenLang, setLang]);

    return (
        <div className="lang-select">
            {langsKeysToShow.map((key: string) => (
                <button
                    key={key}
                    className={chosenLang === key ? 'lang-select__lang lang-select__lang_chosen' : 'lang-select__lang'}
                    onClick={() => {
                        setChosenLang(key)
                        setLang(key)
                    }}
                >
                    {langs[key]}
                </button>
            ))}

        </div>
    );
}

export default LangSelect;
