import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Translation {
    word: string;
    translations: string;
    langFrom: string;
    langTo: string;
}

interface State {
    translatedWords: Translation[];
}

const loadState = (): State => {
    try {
        const serializedState = localStorage.getItem('translationsState');
        if (serializedState === null) {
            return { translatedWords: [] }; // Возвращаем пустой стейт при отсутствии сохраненной информации
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Could not load state", error);
        return { translatedWords: [] }; // Возвращаем пустой стейт в случае ошибок
    }
};

const saveState = (state: State): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('translationsState', serializedState);
    } catch (error) {
        console.error("Could not save state", error);
    }
};

const initialState: State = loadState();

const translationSlice = createSlice({
    name: 'translations',
    initialState,
    reducers: {
        addTranslation: (state, action: PayloadAction<Translation>) => {
            state.translatedWords.push(action.payload);
        },
        clearTranslations: (state) => {
            state.translatedWords = [];
        },
    },
});

export const { addTranslation, clearTranslations } = translationSlice.actions;

const store = configureStore({
    reducer: {
        translations: translationSlice.reducer
    }
});

store.subscribe(() => {
    saveState(store.getState().translations);
});

export { store, State, Translation };
