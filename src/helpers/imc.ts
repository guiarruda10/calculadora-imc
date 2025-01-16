export type Level = {
    title: String;
    color: string;
    icon: 'down' | 'up';
    imc: number[]
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#ADD8E6', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#7cfc00', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E9D502', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#F32013', icon: 'down', imc: [30.1, 99] },
];

export const calcImc= ( height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) { 
            let levelCopy: Level = {...levels[i]};

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}