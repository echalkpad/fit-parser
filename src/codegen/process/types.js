'use strict';

const cases = require('./cases');

function writeType(type, data) {
	const name = cases.camel(type);
	const pascalCased = cases.pascal(name);
	const basename = [name, 'js'].join('.');
	const filename = path.resolve(targetTypesPath, basename);

	const values = [];
	let maxLength = 0;
	data.values.forEach(value => {
		maxLength = Math.max(maxLength, String(value.value).length + value.name.length + 5);
	});
	++maxLength;

	let i = data.values.length;
	for (let k = 0; k < i; ++k) {
		const value = data.values[k];

		let formatted = `\t${value.value}: '${value.name}'`;

		if (k < i - 1) {
			formatted += ',';
		}

		if (value.comment) {
			formatted += ' '.repeat(maxLength - formatted.length) + ' // ' + value.comment;
		}

		values.push(formatted);
	}

	let content = `'use strict';

/**
 * ${type} ${data.baseType}
 *
 * ${alertHeader}
 */

const BaseType = require('../type');
const FieldTypes = require('../fieldTypes');

const ValuesMap = {
${values.join('\n')}
};

class ${pascalCased} extends BaseType {
	static getValues() {
		return ValuesMap;
	}

	static getSourceType() {
		return FieldTypes.${data.type};
	}
};

module.exports = ${pascalCased};
`;

	if (FieldTypes.Enum === data.mappedType) {
		content += '\n' + data.values.map(value => {
			return `${pascalCased}.${cases.pascal(value.name)} = ${value.value};`;
		}).join('\n');
	}

	fs.writeFileSync(filename, content);
}

module.exports = function(sheet) {
	const types = { };

	let idx = 2;

	let row;
	let currentType;

	while ((row = sheet.row(idx++)) || currentType) {
		if (undefined === row) {
			if (currentType) {
				const name = currentType.name;
				delete currentType.name;

				types[name] = currentType;
			}

			currentType = null;
		} else
		if (undefined !== row['Type Name']) {
			const baseType = row['Base Type'];

			if (undefined === fieldMap[baseType]) {
				throw new Error('No base type found for ' + baseType);
			}

			currentType = {
				name: row['Type Name'],
				baseType: baseType,
				type: fieldTypesNames[fieldMap[baseType]],
				mappedType: fieldMap[baseType],
				values: []
			};
		} else
		if (undefined !== row['Value']) {
			const value = {
				name: row['Value Name'],
				value: Number(row['Value'])
			};

			if (undefined !== row['Comment']) {
				value.comment = row['Comment'].trim();
			}

			currentType.values.push(value);
		}
	}

	Object.keys(types).forEach(type => {
		writeType(type, types[type]);
	});

	return types;
};
