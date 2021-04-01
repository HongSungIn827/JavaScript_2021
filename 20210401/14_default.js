function master(name, age)
{
    name = name == undefined ? '루니' : name
    age = age == undefined ? 5 : age

    // name = name || '루니'
    // age = age || 10

    console.log('Seize the day! ' + name + '님')
    console.log('당신의 나이는 ' + age + '세 입니다.')
}
master()
master('라둥이',20)
master('리라',10)