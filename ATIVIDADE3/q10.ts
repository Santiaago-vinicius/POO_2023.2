interface LeituraSensor {
    sensorId: number;
    tipoLeitura: string;
    valor: number;
    timestamp: number;
}

interface Estatisticas {
    media: number;
    maximo: number;
    minimo: number;
}

const leituras: LeituraSensor[] = [
    { sensorId: 1, tipoLeitura: "temperatura", valor: 25, timestamp: 1630268400000 },
    { sensorId: 1, tipoLeitura: "temperatura", valor: 28, timestamp: 1630268460000 },
    // ... outras leituras
];

const relatorioDetalhado: Record<string, Record<string, Estatisticas>> = {};

leituras.forEach(leitura => {
    const { sensorId, tipoLeitura, valor } = leitura;

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

for (const sensorId in relatorioDetalhado) {
    for (const tipoLeitura in relatorioDetalhado[sensorId]) {
        const estatisticas = relatorioDetalhado[sensorId][tipoLeitura];
        const numeroDeLeituras = leituras.filter(leitura => leitura.sensorId === Number(sensorId) && leitura.tipoLeitura === tipoLeitura).length;

        estatisticas.media /= numeroDeLeituras;
    }
}

console.log(relatorioDetalhado);
