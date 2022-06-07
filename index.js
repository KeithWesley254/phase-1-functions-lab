// Code your solution in this file!
function distanceFromHqInBlocks(starting){
    return Math.abs(starting-42)
}

function distanceFromHqInFeet(starting){
    const blocks=distanceFromHqInBlocks(starting);
    return blocks * 264
}

function distanceTravelledInFeet(starting, stopping){
    const dual= (Math.abs(starting-stopping)) * 264
    return dual
}

function calculatesFarePrice(starting,stopping){

    const moved= distanceTravelledInFeet(starting, stopping)
    
    if(moved >400 && moved <2000){
        return(moved - 400) * 0.02;
    }else if(moved < 400){
        return 0;
    }else if(moved > 2000 && moved <2500){
        return 25;
    }else if(moved > 2500){
        return 'cannot travel that far';
    }
}