type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = 
`
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

//code here
const array = data.trim().split('\n');
const users : User[]= [];
let splitted: string[];
let isPremium: boolean;

for(let i : number = 0; i < array.length; i++){
    const [name, ageString, premiumUserString] = array[i].split(',');
    const premiumUser = premiumUserString === '1';

    users[i] = {
        name: name,
        age: Number(ageString),
        premiumUser: premiumUser,
    }

    //<-- 旧バージョン
    // splitted = array[i].split(',');
    // if(splitted[2] == '0') isPremium = false;
    // else isPremium = true;
    // users[i] = {
    //     name: splitted[0],
    //     age: Number(splitted[1]),
    //     premiumUser: isPremium,
    // };
}

for (const user of users){
    if (user.premiumUser){
        console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else{
        console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
}