#pragma strict
var cube : GameObject;
var rojocube=0;
var verdecube=0;
var azulcube=0;
var botoncuboGUI : GUISkin;
function Start () {

}

function Update () {
	cube.renderer.material.color=new Color(rojocube,verdecube,azulcube);
}

function OnGUI(){

if (botoncuboGUI)
	GUI.skin=botoncuboGUI;
	
if(	GUI.Button(Rect(/*posicion ancho "centrado"*/Screen.width/2-55
		,/*posicion alto "centrado"*/Screen.height/2-185+90+122+10,
		/*tamaño ancho*/110,/*tamaño alto*/101),"CUBO"))
		{
				cube=GameObject.CreatePrimitive(PrimitiveType.Cube);
				cube.transform.position = Vector3(-0.8,0.8F,-8);
				cube.transform.rotation = Quaternion.Euler (344.3542F, 311.64F, 20.05925F);
				cube.transform.localScale = Vector3 (0.2, 0.2, 0.2);
		}
		
		rojocube =parseFloat( GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-25+120,
		120,30),rojocube,0,255));
	
		verdecube = parseFloat(GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-25+120+30,
		120,30),verdecube,0,255));
		
		azulcube = parseFloat(GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-25+120+60,
		120,30),azulcube,0,255));
}