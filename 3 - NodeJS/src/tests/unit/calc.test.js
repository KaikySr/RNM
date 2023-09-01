const { Soma, Sub, Mult, Div } = require("../../commom/calc")

describe('Calculadora', () => 
{
    it('deve retornar o resultado da soma de 1+2', () => 
    {
        const res = Soma(1,2);
        expect(res).toBe(3);
        expect(res).toBeCloseTo(3,1)
    });

    it('deve retornar o resultado da subtração de 2-1', () => 
    {
        const res = Sub(2,1);
        expect(res).toBe(1);
    });

    it('deve retornar o resultado da multiplicação de 2*2', () => 
    {
        const res = Mult(2,2);
        expect(res).toBe(4);
    });

    it('deve retornar o resultado da divisão de 6/2', () => 
    {
        const res = Div(10,3);
        expect(res).toBe(3.3333333333333335);
    });
})