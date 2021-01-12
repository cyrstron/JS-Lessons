const headers = ['First Name', 'Last Name', 'Birth Year', 'Birth City']

const data = [
    ['Vasya', 'Ivanov', 1987, 'Kharkiv'],
    ['Vanya', 'Vasyliev', 2001, 'Kyiv'],
    ['Albelt', 'Einstein', 1979, 'Ulm'],
    ['Sigmund ', 'Freud', 1856, 'Freiberg in Mähren'],
    ['Werner', 'Heisenberg', 1901, 'Würzburg'],
    ['Marie', 'Curie', 1867, 'Warsaw'],
    ['Emmanuelle', 'Charpentier', 1968, 'Juvisy-sur-Orge'],
    ['Jennifer', 'Doudna', 1964, 'Washington'],
];

class SortingService {
    sort(data) {

    }

    sortNumbers(data) {

    }

    sortStrings(data) {
        
    }
}

class TableRenderer {
    constructor(container) {
        this.container = container;
    }

    render(headers, data) {
        const headerRow = `
            <tr>
                ${headers.map(
                    (header, index) => `<th data-index="${index}">${header}</th>`
                )}
            </tr>
        `;

        const dataRows = data.map((row) => `
            <tr>
                ${row.map((value) => `<td>${value}<td>`)}
            </tr>
        `);

        this.container.innerHTML = `
            <table>
                <thead>
                    ${headerRow}
                </thead>
                <tbody>
                    ${dataRows}
                </tbody>
            </table>
        `;
    }
}

class Table {
    constructor(container, headers, data) {
        this.container = container;
        this.headers = headers;
        this.storage = new DataStorage(data);
        this.renderer = new TableRenderer(container);
    }

    init() {

    }

    sort(index) {
        this.storage.sort((cellValueA, cellValueB) => {});

        this.renderer.render(this.headers, this.da)

    }

}