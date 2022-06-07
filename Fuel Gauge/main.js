//Fuel End Line
function setCircleTo(target, percent)
{  
    var path = target.find('.line').get(0);
    var pathLen = path.getTotalLength();
    var adjustedLen = percent * pathLen / 100;
    path.setAttribute('stroke-dasharray', adjustedLen+' '+pathLen);
}

function setStartTo(target, percent)
{  
    var path = target.find('.line2').get(0);
    var pathLen = path.getTotalLength();
    var adjustedLen = percent * pathLen / 100;
    path.setAttribute('stroke-dasharray', adjustedLen+' '+pathLen);
}

//Fuel End Dot & Needle
function setLevelTo(target, percent)
{  
    var needle = target.find('.needle').get(0);
    var endDot = target.find('.fuel_end').get(0);
    var rotation = percent * 180 / 100;
    needle.setAttribute('transform', 'rotate('+rotation+', 81.3, 58.1)');
    endDot.setAttribute('transform', 'rotate('+rotation+', 81.3, 58.1)');
}

//Fuel Start
function setStartLevelTo(target, percent)
{
    var startDot = target.find('.fuel_start').get(0);
    var rotation = percent * 180 / 100;
    startDot.setAttribute('transform', 'rotate('+rotation+', 81.3, 58.1)');
}

function setGauge(target, fuelStart, fuelEnd){
  setCircleTo(target, fuelEnd);
  setStartTo(target, fuelStart);
  setLevelTo(target, fuelEnd);
  setStartLevelTo(target, fuelStart);
}

//Initialize Gauge Function
setGauge($('#gauge-id'), 100, 100);