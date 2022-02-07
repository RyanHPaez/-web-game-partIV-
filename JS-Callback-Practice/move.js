function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    //Adding arrow key movement to move function
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
        //switch operator cleaner than if/else statements
        function moveCharacter(){
            switch(direction){
                case 'north':
                    y++
                break;
                case 'south':
                    y--
                break;
                case 'east':
                    x++
                break;
                case 'west':
                    x--
                break;
            }
            //First bonus part attempted
            if(callback){
                callback(direction);
            }
            element.style.left = x + 'px';
            element.style.bottom = y + 'px';
        }
        //Second bonus part attempted, but it doesn't work
        if(0 < x < window.innerWidth - 10 && 0 < y < window.innerHeight - 10){
            setInterval(moveCharacter, 1);
        } else{
            direction = null;
        }
        document.addEventListener('keydown', function(e){
            if(e.repeat){
                return;
            } else{
                switch(e.key){
                    case 'ArrowUp':
                        direction = 'north'
                    break;
                    case 'ArrowDown':
                        direction = 'south'
                    break;
                    case 'ArrowRight':
                        direction = 'east'
                    break;
                    case 'ArrowLeft':
                        direction = 'west'
                    break;
                }
            }
        })
        document.addEventListener('keyup', function(e){
            direction = null;
            callback(direction);
        })

    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
