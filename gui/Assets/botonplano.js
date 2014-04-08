#pragma strict
var botonplanoGUI : GUISkin;
var plano : GameObject;

var rojoplano=0;
var verdeplano=0;
var azulplano=0;

function Start () {

}

function Update () {
	plano.renderer.material.color=new Color(rojoplano,verdeplano,azulplano);
}


function OnGUI(){

if (botonplanoGUI)
	GUI.skin=botonplanoGUI;
	
	
	
	if(	GUI.Button(Rect(Screen.width/2-55,Screen.height/2-185,110,76),"PLANO"))
		{

				plano = GameObject.CreatePrimitive(PrimitiveType.Plane);
				plano.transform.position = Vector3(-0.8,1.6,-8);
				plano.transform.rotation = Quaternion.Euler (341.2326F, 300.9156F, 46.0082F);
				plano.transform.localScale = new Vector3 (0.03, 0.03, 0.03);
		}	
		
		
		
			rojoplano = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-138-60,
		120,30),rojoplano,0,255);
		
		verdeplano = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-138-30,
		120,30),verdeplano,0,255);
		
		azulplano = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-138,
		120,30),azulplano,0,255);
	
}