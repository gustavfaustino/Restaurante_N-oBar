// swagger/swagger.js

import swaggerAutogen from 'swagger-autogen';

// Defina o caminho para a saída do arquivo de documentação do Swagger
const outputFile = './swagger/swagger-output.json'; // Altere conforme necessário
const endpointsFiles = ['./routes/public.js']; // Adicione suas rotas aqui

const doc = {
    info: {
        version: '1.0.0',
        title: 'NoBar API',
        description: 'Documentação da API de reservas de mesas',
    },
    host: 'localhost:3000', // Altere para o seu host se necessário
    basePath: '/api',
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    import('../server.js'); // Certifique-se de que está importando corretamente o seu servidor
});
