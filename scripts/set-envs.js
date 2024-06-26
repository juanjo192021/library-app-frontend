const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts'

const envFileContent = `
export const environment = {
    baseUrl: "${ process.env['BASE_URL'] }",
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync( targetPath, envFileContent );
