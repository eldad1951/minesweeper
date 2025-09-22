'use strict'
var  gLevel 
var  gBourdModel  
 

const bomp =  '💥'
 const flag = '🚩' 
function easyGame()   {
  gLevel = {size:4,mines:2}
  
 // var bourd = builtbort(gLevel.size,gLevel.size) 
  
   gBourdModel = buildBoard()
   console.log("my table before " ,gBourd)
   renderBoard(gBourdModel)
   alert ("i am in the stsrat")
   levelGame()
   console.log("my table   after 1 "  , gBourdModel)
} 
function mediumGame()   {
   document.querySelector('.lost').style.display='none'	
   
  gLevel = {size:8,mines:4}
   
   gBourdModel = buildBoard()
   console.log(gBourdModel)
   renderBoard(gBourdModel)
   levelGame()
}
function diffcultGame()   {
  gLevel = {size:12,mines:32}
   document.querySelector('.lost').style.display='none'	
  gBourdModel = buildBoard()
   console.log(gBourdModel)
   renderBoard(gBourdModel)
   levelGame()

}
function  buildBoard() {
	// TODO: Create the  suit Matrix (4*4 8*8 12*12)
	const board = createModel(gLevel.size,gLevel.size)

	// TODO:
    for (var i = 0; i < board.length; i++){
        for (var j = 0; j < board[i].length; j++){
                            
            
         board[i][j]= {mineAroundCount : 0, IsRvaled: false,
             IsMine : false,IsMarked:false}
          }
        }
      //place the bomp at model  randomali
	  for (i = 1;i < gLevel.mines + 1;i++) { 
		var placeline = getRandomIntInclusive(0, gLevel.size - 1 )
	    var placecolm = getRandomIntInclusive(0, gLevel.size - 1 )
      board[placeline][placecolm].IsMine = true
 //     board[2][3].IsMine = true
        alert ("mine1 " + placeline +  ' ' + placecolm)	
	  }
//	  alert ("mine1 " + placeline +  ' ' + placecolm)	
	  return board
 } 
 function renderBoard(board) {
  
	const elBoard = document.querySelector('.model')
	 
	var strHTML = ''
    
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n'
		for (var j = 0; j < board[0].length; j++) {
		//	const currCell = board[i][j]

		//	var cellClass = getClassName({ i: i, j: j })

		//	if (currCell.type === FLOOR) cellClass += ' floor'
		//	else if (currCell.type === WALL) cellClass += ' wall'

			// strHTML += '\t<td class="cell ' + cellClass + '"  onclick="moveTo(' + i + ',' + j + ')" >\n'
			strHTML += `<td class="cell-${gLevel.size} cell-${i}-${j} " onmousedown ="onCellMouseDown(event,${i},${j})">`

		//	if (currCell.gameElement === GAMER) {
		//		strHTML += GAMER_IMG
		//	} else if (currCell.gameElement === BALL) {
		//		strHTML += BALL_IMG
		    strHTML += '</td>\n'
		}

			strHTML += '</tr>\n' 
		}
		 
	// console.log('strHTML is:')
	// console.log(strHTML)
	 elBoard.innerHTML = strHTML
	console.log(strHTML)
	console.log("my table   after 2 "  , gBourdModel)
	 
} 

function countNeibor(row,col,table)  {	
 // alert (" tav tav " + table[i])
  var countNeibur = 0

	for (var i = row - 1; i <= row + 1; i++) {


	  	if (i < 0 || i >= table[i].length) continue

	  	for (var j = col - 1; j <= col + 1; j++) {
	  
	 		if (i === row && j === col) continue
	 		if (j < 0 || j >= table[i].length) continue
			if (table[i][j].IsMine )   {
               countNeibur++
      
			}  
		}
	}
	return countNeibur
	
}
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function onCellMouseDown(ev,i,j) { 
   
 //  alert ("my giga is " + gBourdModel[0] ) 
   if (ev.button === 0) { 
//	  alert ("left")
	  console.log( JSON.stringify(gBourdModel))
   //  alert(gBourdModel[0].length)
	//  alert ("my giga is " + gBourdModel[0] ) 
	 if  (isBomp(i,j))  { 
		     var audio = new Audio("bomp.mp3") 
			  audio.play()  
             document.querySelector('.lost').style.display='block'
			 return
	 } 

	   updateDom(i,j,gBourdModel)
    }
	else
		if (ev.button === 2)
	  		alert ("right")


}
function  updateDom(i,j,tav)  {
  const classCell = '.' + getClass(i,j)
  //alert ("dory dory " + dd)	
  const cellLocation = document.querySelector(classCell)
 //  alert("after afTER  AFTER " + gBourdModel[0].length)
   var count = countNeibor(i,j,gBourdModel ) 
   cellLocation.innerText =  count 
 //   cellLocation.innerText = 20

}
function getClass(i,j) {
	return `cell-${i}-${j}`
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function startGame() { 
  
    gLevel = {size:4,mines:2}
  
 // var bourd = builtbort(gLevel.size,gLevel.size) 
  
   gBourdModel = buildBoard()
   console.log(gBourdModel)
   renderBoard(gBourdModel)
    
   levelGame()
  
   
}
function createModel(rows, cols) {
    const mat = []
    for (var i = 0; i < rows; i++) {
        const row = []
        for (var j = 0; j < cols; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}
function countNeibor(row,col,gBourdModel)  {	
  
  var countNeibur = 0
     
	for (var i = row - 1; i <= row + 1; i++) {

        if (i >=   gLevel.size) continue
	  	if (i < 0 || i >= gBourdModel[i].length) continue

	  	for (var j = col - 1; j <= col + 1; j++) {
	  
	 		if (i === row && j === col) continue
	 		if (j < 0 || j >= gBourdModel[i].length) continue
			if (gBourdModel[i][j].IsMine )   {
               countNeibur++
      
			}  
		}
	}
	return countNeibur
	
}
function isBomp(i,j)  { 
 if (gBourdModel[i][j].IsMine) 
	return true



}
function levelGame()      {
	
 var levelG = document.querySelector('.level')
 switch(gLevel.size)  {
   case 4:
	levelG.innerText = 'easy game'
	break
   case 8:
	levelG.innerText = 'mduim  game'
	break	
    case 12:
	levelG.innerText = 'difficult game'
	break
	default :
	break	
 }


}

 
 