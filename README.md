# Calculadora de IMC

## Descrição

Este projeto é uma calculadora de Índice de Massa Corporal (IMC) desenvolvida em ReactJS. A aplicação calcula o IMC de uma pessoa com base no peso e altura fornecidos e retorna a classificação do IMC de acordo com os critérios da Organização Mundial da Saúde (OMS):

- **Magreza**
- **Normal**
- **Sobrepeso**
- **Obesidade**

## Funcionalidades

- Entrada de peso e altura do usuário.
- Cálculo automático do IMC.
- Classificação do IMC baseada no resultado obtido.
- Interface amigável e fácil de usar.

## Tecnologias Utilizadas

- ReactJS 
- TypeScript
- Vite

## Instalação

1. Clone este repositório:

```bash
$ git clone https://github.com/guiarruda10/calculadora-imc
```

2. Navegue até o diretório do projeto:

```bash
$ cd calculadora-imc
```

3. Instale as dependências necessárias:

```bash
# Exemplo para Node.js
$ npm install
```

4. Execute a aplicação:

```bash
# Exemplo para Node.js
$ npm run dev
```

## Como Usar

1. Insira o **peso** em quilogramas (kg).
2. Insira a **altura** em metros (m).
3. Pressione o botão para calcular o IMC.
4. Veja o resultado do IMC e a classificação correspondente.

## Fórmula do IMC

O IMC é calculado usando a seguinte fórmula:

IMC = peso / (altura * altura)

## Classificação do IMC

| Faixa de IMC      | Classificação |
|-------------------|---------------|
| Menor que 18,5    | Magreza       |
| Entre 18,5 e 24,9| Normal        |
| Entre 25 e 29,9  | Sobrepeso     |
| Maior ou igual a 30 | Obesidade    |


## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Desenvolvido por Guilherme Maglhães de Arruda.
