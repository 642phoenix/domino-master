const DB = {
    cpu:{
			score:0,
			displayName:"",
			hand:[]																	
    },
    user:{
			score:0,
			displayName:"",
			hand:[]			
    },
    bones:{
        doubleSix:{
            value:[6,6],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixFive:{
            value:[6,5],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixFour:{
            value:[6,4],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixThree:{
            value:[6,3],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixTwo:{
            value:[6,2],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixOne:{
            value:[6,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        sixZero:{
            value:[6,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleFive:{
            value:[5,5],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fiveFour:{
            value:[5,4],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fiveThree:{
            value:[5,3],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fiveTwo:{
            value:[5,2],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fiveOne:{
            value:[5,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fiveZero:{
            value:[5,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleFour:{
            value:[4,4],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fourThree:{
            value:[4,3],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fourTwo:{
            value:[4,2],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fourOne:{
            value:[4,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        fourZero:{
            value:[4,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleThree:{
            value:[3,3],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        threeTwo:{
            value:[3,2],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        threeOne:{
            value:[3,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        threeZero:{
            value:[3,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleTwo:{
            value:[2,2],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        twoOne:{
            value:[2,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        twoZero:{
            value:[2,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleOne:{
            value:[1,1],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        oneZero:{
            value:[1,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        },
        doubleZero:{
            value:[0,0],
            location:"boneyard",
            img:{
                L:"",
                R:"",
                U:"",
                D:""
            }
        }


    }
}

let numOfDomLeft = 4;

let myArray = Array.from(Object.keys(DB.bones))
console.log(myArray)

$(document).on('ready', boneyardHandler())

function boneyardHandler(){
    document.getElementById("box").style.display = "block"
}

function choseDomino(e){
	e.target.className = "emptyPlaceholder"
	let index = Math.floor(Math.random() * numOfDomLeft)
	let domino = myArray[index]
	while(DB.bones[domino].location != "boneyard"){
		index = Math.floor(Math.random() * numOfDomLeft)
		domino = myArray[index]
	}
	console.log(DB.bones[domino].location)
	DB.user.hand.push(DB.bones[domino])
	console.log(DB.user.hand)
}

// ====================================================================

//codewars

// function spinWords(string){
//     let words = string.split(" ")
//     for( let i = 0; i < words.length; i++ ){
//         if(words[i].length > 4){
//             words[i] = words[i].split("").reverse().join("")
//         }
//     }
//     return words.join(" ")
//   }

//   console.log(spinWords("Welcome"))


// ====================================================================

//codewars

// function isValidWalk(walk) {
//   let X = 0 ;
//   let Y = 0 ;
// 	let min = 0;
//   for( let i = 0; i < 10 ; i++ ){
//     switch(walk[i]){
//         case "n":
//             Y++
//             break
//         case "s":
//             Y--
//             break
//         case "e":
//             X--
//             break
//         case "w":
//             X++
//             break
//     }
// 		min++
//   }
//   console.log(X,Y, min)
  
//   return X === 0 && Y === 0 && walk.length === 10 ? true : false
// }


// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // => true
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // => false
// console.log(isValidWalk(['w'])) // => false
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // => false