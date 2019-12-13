var x=1;
function togglesidebar()
{
	document.getElementById("sidebar").classList.toggle('active');
	if(x==1){
		document.getElementById('s1').style.transform = "rotate(60deg)";
		document.getElementById('s2').style.transform = "rotate(-60deg)";
		document.getElementById('s3').style.opacity = "0";
		x*=(-1);
	}
	else
	{
		document.getElementById('s1').style.transform = "rotate(0deg)";
		document.getElementById('s2').style.transform = "rotate(0deg)";
		document.getElementById('s3').style.opacity = "1";
		x*=(-1);
	}
}


