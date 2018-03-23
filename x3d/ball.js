
document.getElementById("id_version").innerHTML = "Bussiness version number  2018.03.23.3"

var stare = {y:0, directie:1};

setInterval(deseneaza, 30, stare);



function deseneaza(x)
{
	var t = document.getElementById("id_transform");
	var z = x.y -5
	t.setAttribute("translation", "0 " + z + " 0");
	x.y += x.directie/5;
	if (x.y > 10)
		x.directie = -1;
	else
		if (x.y < 0)
			x.directie = 1;
}