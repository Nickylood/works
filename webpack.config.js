const { dirname } = require('path');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

devServer: {
    static: [
        {
            directory: path.join(__dirname, 'public'),
        },
        {
            directory: path.join(__dirname, 'js'),
            watch: true,
        },
        {
            directory: path.join(__dirname, 'src'),
            watch: true,
        },
    ]
    client: {
        progress: true
    }

    compress: true
    port: 9000
}