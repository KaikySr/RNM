function validaCpf(cpf) 
{
    if (!cpf) 
        return false;

    const cpfSplit = cpf.replaceAll('.', '').replace('-', '')
    if (cpfSplit.length != 11) 
        return false

    if(cpfSplit == 11111111111)
        return false

    else if(cpfSplit.includes(123456789))
        return false

    var somaDig1 = 0;
    for (let i = 0; i < cpfSplit.length - 2; i++) 
        somaDig1 += Number(cpfSplit[i]) * (10 - i);


    if ((11 - (somaDig1 % 11)) != cpfSplit[9])
    {
        if((11 - (somaDig1 % 11)) > 9)
            somaDig1 = 0;

        if(somaDig1 != cpfSplit[9])
            return false    
    }

    var somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++) 
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    

    if ((11 - (somaDig2 % 11)) > 9) 
    {
        somaDig2 = 0;
        
        if(somaDig2 == cpfSplit[10])
            return true

        return false
    }
        
    return true
}

module.exports = { validaCpf }