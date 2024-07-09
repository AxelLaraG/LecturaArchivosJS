const fs = require('fs');
const path = require('path');

function encontrar_pdfs(ruta) {
    const pdfs = [];
    const archivos = fs.readdirSync(ruta);
    for (const archivo of archivos) {
        const rutaCompleta = path.join(ruta, archivo);
        const stats = fs.statSync(rutaCompleta);
        if (stats.isFile() && archivo.endsWith(".pdf")) {
            pdfs.push(rutaCompleta);
        } else if (stats.isDirectory()) {
            pdfs.push(...encontrar_pdfs(rutaCompleta));
        }
    }
    return pdfs;
}

const ruta_entrada = "Path";
const pdfs_encontrados = encontrar_pdfs(ruta_entrada);
console.log(pdfs_encontrados);
