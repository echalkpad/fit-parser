'use strict';

const xlsx = require('xlsx');

const ColumnNames = 'ABCDEFGHIJKLMNOPQRST'.split('');

class Sheet {
	constructor(sheet) {
		this.sheet = sheet;

		const header = [];
		ColumnNames.every((columnName, idx) => {
			const data = sheet[[columnName, 1].join('')];

			if (undefined === data) {
				return false;
			}

			header.push(data['v']);

			return true;
		});

		this.header = header;
	}

	row(rowIndex) {
		const data = { };

		this.header.forEach((title, idx) => {
			const cellData = this.sheet[[ColumnNames[idx], rowIndex].join('')];

			if (undefined !== cellData) {
				data[title] = cellData['v'];
			}
		});

		return Object.keys(data).length ? data : undefined;
	}
}

module.exports = class XLSX {
	constructor(filename) {
		this.workbook = xlsx.readFile(filename, {
			cellHTML: false,
			cellFormula: false
		});
	}

	sheet(name) {
		const sheet = this.workbook.Sheets[name];

		if (undefined === sheet) {
			throw new Error('Sheet doesn\'t exists');
		}

		return new Sheet(sheet);
	}
}
