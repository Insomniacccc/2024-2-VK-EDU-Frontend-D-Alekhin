import React, { useState } from 'react';
import Header from "../../components/header/header.tsx";
import Translate from "../../components/translate/translate.tsx";
import {getTranslate} from "../../utils/translate.ts";
import { useDispatch } from 'react-redux';
import { addTranslation } from "../../store/index.ts";

function Main() {
    const [langFrom, setLangFrom] = useState<string>('');
    const [langTo, setLangTo] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [translate, setTranslate] = useState<string>('');
    const dispatch = useDispatch();

    const handleClick = async () => {
        const translate = await getTranslate(langFrom, langTo, text);
        setTranslate(translate);

        dispatch(addTranslation({ word: text, translations: translate, langFrom, langTo }));
    };

    return (
        <div>
            <Header />
            <Translate setLangTo={setLangTo} setLangFrom={setLangFrom} setText={setText} translate={translate} />
            <button onClick={handleClick}>Перевести</button>
        </div>
    );
}

export default Main;
