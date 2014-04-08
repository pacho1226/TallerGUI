#pragma strict

var menu : Texture2D;
var tallerGUI : GUISkin;




function Start () {

}

function Update () {

}

function OnGUI(){

if (tallerGUI)
	GUI.skin=tallerGUI;

GUI.Box(Rect(Screen.width/2-100,Screen.height/2-230,200,400),"MENU");


}
