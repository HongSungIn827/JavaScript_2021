let output = ''
for(let i = 1 ; i < 10 ; i++)
{
    for(let k = 10 ; k > i ; k--)
    {
        output += ' '
    }
    for(let j = 0 ; j < i ; j++)
    {
        output += '*'
    }
    output += '\n'
}
console.log(output)