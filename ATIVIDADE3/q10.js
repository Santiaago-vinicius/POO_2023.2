var leituras = [
    { sensorId: 1, tipoLeitura: "temperatura", valor: 25, timestamp: 1630268400000 },
    { sensorId: 1, tipoLeitura: "temperatura", valor: 28, timestamp: 1630268460000 },
    // ... outras leituras
];
var relatorioDetalhado = {};
leituras.forEach(function (leitura) {
    var sensorId = leitura.sensorId, tipoLeitura = leitura.tipoLeitura, valor = leitura.valor;
    if (!relatorioDetalhado[sensorId]) {
        relatorioDetalhado[sensorId] = {};
    }
    if (!relatorioDetalhado[sensorId][tipoLeitura]) {
        relatorioDetalhado[sensorId][tipoLeitura] = { media: 0, maximo: -Infinity, minimo: Infinity };
    }
    relatorioDetalhado[sensorId][tipoLeitura].media += valor;
    relatorioDetalhado[sensorId][tipoLeitura].maximo = Math.max(relatorioDetalhado[sensorId][tipoLeitura].maximo, valor);
    relatorioDetalhado[sensorId][tipoLeitura].minimo = Math.min(relatorioDetalhado[sensorId][tipoLeitura].minimo, valor);
});
var _loop_1 = function (sensorId) {
    var _loop_2 = function (tipoLeitura) {
        var estatisticas = relatorioDetalhado[sensorId][tipoLeitura];
        var numeroDeLeituras = leituras.filter(function (leitura) { return leitura.sensorId === Number(sensorId) && leitura.tipoLeitura === tipoLeitura; }).length;
        estatisticas.media /= numeroDeLeituras;
    };
    for (var tipoLeitura in relatorioDetalhado[sensorId]) {
        _loop_2(tipoLeitura);
    }
};
for (var sensorId in relatorioDetalhado) {
    _loop_1(sensorId);
}
console.log(relatorioDetalhado);
