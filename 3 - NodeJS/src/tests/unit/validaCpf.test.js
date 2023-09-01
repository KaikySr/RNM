const { validaCpf } = require("../../commom/validaCpf")

describe('Validador de Cpf', () => 
{
    it('deve retornar que o CPF: 123.456.789-01 não válido.', () => 
    {
        const res = validaCpf("123.456.789-09");
        expect(res).toBe(false);
    });

    it('deve retornar que o CPF: 111.111.111-11 não válido.', () => 
    {
        const res = validaCpf("111.111.111-11");
        expect(res).toBe(false);
    });

    it('deve retornar que o CPF: 111.111.11 não válido.', () => 
    {
        const res = validaCpf("111.111.11");
        expect(res).toBe(false);
    });

    it('deve retornar que o CPF: "" é inválido.', () => 
    {
        const res = validaCpf("");
        expect(res).toBe(false);
    });

    it('deve retornar que o CPF: 144.289.499-79 é válido.', () => 
    {
        const res = validaCpf("144.289.499-79");
        expect(res).toBe(true);
    });

    it('deve retornar que o CPF: 146.344.979-80 é válido.', () => 
    {
        const res = validaCpf("146.344.979-80");
        expect(res).toBe(true);
    });

    it('deve retornar que o CPF: 354.069.330-00 é válido.', () => 
    {
        const res = validaCpf("354.069.330-80");
        expect(res).toBe(false);
    });

    it('deve retornar que o CPF: 354.069.330-00 é válido.', () => 
    {
        const res = validaCpf("354.069.330-08");
        expect(res).toBe(false);
    });
})