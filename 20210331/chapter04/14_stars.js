let output = ''
for(let i = 1 ; i < 10 ; i++)
{
    for(let j = 10 ; j > i ; j--)
    {
        output += ' '
    }
    for(let k = 0 ; k < 2*i-1 ; k++)
    {
        output += '*'
    }
    output += '\n'
}
console.log(output)