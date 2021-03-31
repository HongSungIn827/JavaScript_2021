let output = ''
for(let i = 1 ; i < 10 ; i++)
{
    for(let j = 0 ; j < i ; j++)
    {
        output += ' '
    }
    for(let k = 10 ; k > i ; k--)
    {
        output += '*'
    }
    output += '\n'
}
console.log(output)