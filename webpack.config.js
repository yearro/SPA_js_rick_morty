const path = require('path'); // Librería que facilita el manejo de rutas de archivos
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para trabajar con archivos HTML.
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {  // Configuración de webpack.
  entry: './src/index.js', // Archivo a transformar.
  output: { // Es donde se vaciará el proyecto transformado para producción
    path: path.resolve(__dirname, 'dist'),  // Lugar donde exportará el proyecto.
    filename: 'main.js' // Nombre del archivo final para producción.
  },
  resolve: {
    extensions: ['.js'], // Extensiones de archivos a transformar.
  },
  module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    rules: [
      {
        test: /\,js?$/, // Expresión para encontrar los archivos a utilizar.
        exclude: /node_modules/,    // Para no incorporar el contenido de la carpeta al proyecto
        use: {
          loader: 'babel-loader',    // Conecta babel con webpack para hacer el transpilado
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,   // Cómo vamos a inyectar un valor a un archivo HTML.
      template: './public/index.html', // Ubicación del template principal
      filename: './index.html' // Nombre del archivo en producción
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/styles/style.css', to: '' },
      ],
    })
  ]
}
