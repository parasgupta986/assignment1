function vowelcounter(name){
    const vowels='aieouAIEOU'
    let vowelCount=0;

for(let i=0;i < name.length;i++){
    if(vowels.includes(name[i])){
        vowelCount++;
      }
    }
    return vowelCount;
}
console.log(vowelcounter("Paras"))