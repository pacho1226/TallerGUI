
var salud = 100.0;
/*var pausado=false;*/
var menu : Texture2D;
var contadorGUI : GUISkin;


function Start () {

}

function Update () {

/*
if(Input.GetKeyDown(KeyCode.Escape))
	{
		if(pausado)	
			pausado=false;
		else
			pausado=true;
	}*/

}

function OnGUI(){

if (contadorGUI)
	GUI.skin=contadorGUI;


GUI.Box(Rect(Screen.width/2+150,Screen.height/2-15-190,209,79),"       Contador Plano");
GUI.Box(Rect(Screen.width/2+150,Screen.height/2-15-70,209,79), "       Contador Cilindro");
GUI.Box(Rect(Screen.width/2+150,Screen.height/2-15+60,209,79), "       Contador Cubo");

	
				
				
}
