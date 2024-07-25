function removeVovels(str){
    let vovels = /[aeiouAEIOU]/g;

    return str.replace(vovels, '')
}
console.log(removeVovels('Hello World!'));
console.log(removeVovels('javascript'));