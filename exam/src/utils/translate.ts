export async function getTranslate(langFrom: string, langTo: string, text: string): Promise<string | null> {

    try {
        const encodedText = encodeURIComponent(text);

        const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${langFrom}|${langTo}&of=json`;
        const response = await fetch(url);

        const data = await response.json();

        const translatedText = data?.responseData?.translatedText;
        return translatedText
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
}
