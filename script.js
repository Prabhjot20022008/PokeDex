const pokeBtn = document.querySelector("#poke-btn");
const input = document.querySelector("#input");
const pokeballImg = document.querySelector(".pokeball-img");
const pokeOutput = document.querySelector(".poke-output");
const oakSmile =document.querySelector(".oak-smile");
const oakAngry =document.querySelector(".oak-angry");
const oakPara = document.querySelector("#oak-para");
const pokeName = document.querySelector(".poke-name");
const pokeType = document.querySelector("#poke-type");

const pokemonList = [
  ["Pikachu", "Electric"],
  ["Charizard", "Fire/Flying"],
  ["Blastoise", "Water"],
  ["Venusaur", "Grass/Poison"],
  ["Gengar", "Ghost/Poison"],
  ["Dragonite", "Dragon/Flying"],
  ["Arcanine", "Fire"],
  ["Machamp", "Fighting"],
  ["Gyarados", "Water/Flying"],
  ["Alakazam", "Psychic"],
  ["Snorlax", "Normal"],
  ["Lapras", "Water/Ice"],
  ["Jolteon", "Electric"],
  ["Flareon", "Fire"],
  ["Vaporeon", "Water"],
  ["Scizor", "Bug/Steel"],
  ["Tyranitar", "Rock/Dark"],
  ["Ampharos", "Electric"],
  ["Umbreon", "Dark"],
  ["Espeon", "Psychic"],
  ["Houndoom", "Dark/Fire"],
  ["Kingdra", "Water/Dragon"],
  ["Blaziken", "Fire/Fighting"],
  ["Swampert", "Water/Ground"],
  ["Sceptile", "Grass"],
  ["Gardevoir", "Psychic/Fairy"],
  ["Aggron", "Steel/Rock"],
  ["Flygon", "Ground/Dragon"],
  ["Salamence", "Dragon/Flying"],
  ["Metagross", "Steel/Psychic"],
  ["Torterra", "Grass/Ground"],
  ["Infernape", "Fire/Fighting"],
  ["Empoleon", "Water/Steel"],
  ["Luxray", "Electric"],
  ["Roserade", "Grass/Poison"],
  ["Garchomp", "Dragon/Ground"],
  ["Lucario", "Fighting/Steel"],
  ["Gliscor", "Ground/Flying"],
  ["Mamoswine", "Ice/Ground"],
  ["Togekiss", "Fairy/Flying"],
  ["Serperior", "Grass"],
  ["Emboar", "Fire/Fighting"],
  ["Samurott", "Water"],
  ["Zoroark", "Dark"],
  ["Chandelure", "Ghost/Fire"],
  ["Haxorus", "Dragon"],
  ["Hydreigon", "Dark/Dragon"],
  ["Volcarona", "Bug/Fire"],
  ["Sylveon", "Fairy"],
  ["Noivern", "Flying/Dragon"],
  ["Decidueye", "Grass/Ghost"],
  ["Incineroar", "Fire/Dark"],
  ["Primarina", "Water/Fairy"],
  ["Lycanroc", "Rock"],
  ["Toxapex", "Water/Poison"],
  ["Kommo-o", "Dragon/Fighting"],
  ["Zeraora", "Electric"],
  ["Dragapult", "Dragon/Ghost"],
  ["Corviknight", "Flying/Steel"],
  ["Rillaboom", "Grass"],
  ["Cinderace", "Fire"],
  ["Inteleon", "Water"],
  ["Grimmsnarl", "Dark/Fairy"],
  ["Toxtricity", "Electric/Poison"],
  ["Sirfetch’d", "Fighting"],
  ["Urshifu", "Fighting/Dark"],
  ["Calyrex", "Psychic/Grass"],
  ["Kleavor", "Bug/Rock"],
  ["Basculegion", "Water/Ghost"],
  ["Sneasler", "Fighting/Poison"],
  ["Annihilape", "Fighting/Ghost"],
  ["Armarouge", "Fire/Psychic"],
  ["Ceruledge", "Fire/Ghost"],
  ["Miraidon", "Electric/Dragon"],
  ["Koraidon", "Fighting/Dragon"],
  ["Tinkaton", "Fairy/Steel"],
  ["Flutter Mane", "Ghost/Fairy"],
  ["Iron Valiant", "Fairy/Fighting"],
  ["Clodsire", "Poison/Ground"],
  ["Grafaiai", "Poison/Normal"],
  ["Lokix", "Bug/Dark"],
  ["Orthworm", "Steel"],
  ["Glimmora", "Rock/Poison"],
  ["Baxcalibur", "Dragon/Ice"],
  ["Farigiraf", "Normal/Psychic"],
  ["Bombirdier", "Flying/Dark"],
  ["Revavroom", "Steel/Poison"],
  ["Kingambit", "Dark/Steel"],
  ["Dudunsparce", "Normal"],
  ["Toedscruel", "Ground/Grass"],
  ["Iron Treads", "Ground/Steel"],
  ["Sandy Shocks", "Electric/Ground"],
  ["Roaring Moon", "Dragon/Dark"],
  ["Slither Wing", "Bug/Fighting"],
  ["Chi-Yu", "Dark/Fire"],
  ["Wo-Chien", "Dark/Grass"],
  ["Ting-Lu", "Dark/Ground"],
  ["Chien-Pao", "Dark/Ice"],
  ["Iron Hands", "Fighting/Electric"],
  ["Iron Bundle", "Ice/Water"]
];

const btnCallBack = () => {
    console.log("clicked");
    let pokeNum = input.value;
    // console.log(pokeNum);
    if(pokeNum>0 && pokeNum<=100){
        console.log("right");
        pokeballImg.classList.add("hide");
        pokeOutput.classList.remove("hide");
        oakSmile.classList.remove("hide");
        oakAngry.classList.add("hide");
        oakPara.innerText = "Enter any";
        pokeName.innerText = pokemonList[pokeNum-1][0];
        pokeType.innerText = pokemonList[pokeNum-1][1];
    }
    else{
        pokeballImg.classList.remove("hide");
        pokeOutput.classList.add("hide");
        oakSmile.classList.add("hide");
        oakAngry.classList.remove("hide");
        oakPara.innerText = "I said a";
    }
};

pokeBtn.addEventListener("click",btnCallBack);