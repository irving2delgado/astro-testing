// script.js
export async function fetchData() {
    try {
        const response = await fetch('https://97877a7d-e0d5-44d8-b07f-ea3e8b682164.mock.pstmn.io/ivan');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}
