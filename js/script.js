console.log("objects");

document.getElementById("dog1").addEventListener("click",function dog1(){
    var dog1 = {
        name: "John",
        age: 7,
        height:40,
        photo: "images/John.jpeg"
    };
    
    dog1.name = "Tiger";
    $('#result2').hide();
    $('#result1').show();
    document.getElementById("result1").
    // document.getElementById("result1").innerHTML += '</br><img class="img-thumbnail" src="' + dog1.photo + '" alt="Dog1"/>';
    document.getElementById("result1").innerHTML = '</br><img class="img-thumbnail" src="' + dog1.photo + '" alt="Dog1"/>';

    document.getElementById("result1").innerHTML += "</br> The name of the dog is " + dog1.name;
    document.getElementById("result1").innerHTML += "</br> The age of the dog is " + dog1.age;
    document.getElementById("result1").innerHTML += "</br> The height of the dog is " + dog1.height;
    return dog1;
});



document.getElementById("dog2").addEventListener("click",function(){
var dog2 = {
    name: "Sam",
    age: 10,
    height:40,
    breed:"labrador",
    male:"true",
    photo: "images/Sam.jpeg"
};

$('#result1').hide();
$('#result2').show();
document.getElementById("result2").innerHTML = '</br><img class="img-thumbnail imgSize" src="' + dog2.photo + '" alt="Dog2"/>';
document.getElementById("result2").innerHTML += "</br> The name of the dog is " + dog2.name;
document.getElementById("result2").innerHTML += "</br> The age of the dog is " + dog2.age;
document.getElementById("result2").innerHTML += "</br> The height of the dog is " + dog2.height;
document.getElementById("result2").innerHTML += "</br> The breed of the dog is " + dog2.breed;

if (dog2.male === "true") {
    document.getElementById("result2").innerHTML += "</br> The gender of the dog is male";
}
else {
    document.getElementById("result2").innerHTML += "</br> The gender of the dog is female";

}
});


document.getElementById('change').addEventListener('click', function(){
var  changeName = document.getElementById('dogName').value;
console.log(changeName);

});





