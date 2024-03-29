const profile = {
    Name: 'Tom Holland',
    Age: 27,
    gfName: 'Zendaya',
    job: 'Spider-man'
};
const profile1 = {
    gfName: 'Error',
    job: 'iron Man'
};

// const {gfName, job} = profile;
const {
    gfName,
    job
} = profile1;



const friends = [
    'Shah Rukh Khan', 'Salman Khan', 'Amir khan', 'Saif Ali Khan', 'Hrittik Roshan', 'Ranbeer Kapoor'
];

const [chotoFriend, chotoFriend2, ...remainingFriends] = friends;
console.log(typeof chotoFriend);
console.log(typeof chotoFriend2);
console.log(typeof remainingFriends);
console.log(chotoFriend, chotoFriend2, remainingFriends);