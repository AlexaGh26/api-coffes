export const handlerCoffe = async () => {
    const response = await fetch(
        "https://api.sampleapis.com/coffee/hot"
    );

    if (!response.ok) {
        throw new Error(`Error in API coffes: ${response.status}`);
    }

    const data = await response.json();

    return data;
};
