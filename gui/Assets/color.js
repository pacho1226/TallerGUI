#pragma strict


var ColorGUI : GUISkin;
function Start () {

}

function Update () {

}
function OnGUI(){

if (ColorGUI)
	GUI.skin=ColorGUI;

GUI.Box(Rect(Screen.width/2-100+250,Screen.height/2-250+10,202,136),"Color Plano");
GUI.Box(Rect(Screen.width/2-100+250,Screen.height/2-250+150,202,136),"Color Cilindro");
GUI.Box(Rect(Screen.width/2-100+250,Screen.height/2-250+180+110,202,136),"Color Cubo");

GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-65,200,400),"Rojo");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-35,200,400),"Verde");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-5,200,400),"Azul");

GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-65+140,200,400),"Rojo");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-35+140,200,400),"Verde");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-5+140,200,400),"Azul");

GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-65+280+10,200,400),"Rojo");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-35+280+10,200,400),"Verde");
GUI.Label(Rect(Screen.width/2-100+250+20,Screen.height/2-138-5+280+10,200,400),"Azul");


}