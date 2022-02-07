const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif');
//Changes character's appearance based on direction
function handleDirectionChange(direction){
    switch(direction){
        case 'null':
            character.src = 'assets/green-character/static.gif'
        break;
        case 'north':
            character.src = 'assets/green-character/north.gif'
        break;
        case 'south':
            character.src = 'assets/green-character/south.gif'
        break;
        case 'east':
            character.src = 'assets/green-character/east.gif'
        break;
        case 'west':
            character.src = 'assets/green-character/west.gif'
        break;
    }
}
move(character).withArrowKeys(100, 250, handleDirectionChange);
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


