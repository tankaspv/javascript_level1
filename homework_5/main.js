// Первое: 
//  Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

var newCell;
var content = document.getElementById('content');
var count = 0;

function makeChessField() {
    for( var i = 1; i <= 64 ; i++ ) {
        newCell = document.createElement("div");

        if ( count % 2) {
            newCell.className = "chess_cell white";
        } else {
            newCell.className = "chess_cell";
        };

        content.appendChild(newCell);
        console.log("create new cell");
        count += ((count + 2) % 9) ? 1 : 2;
    }
};

makeChessField();