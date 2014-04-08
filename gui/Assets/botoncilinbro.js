#pragma strict
var cilindro : GameObject;
var rojocilindro=0;
var verdecilindro=0;
var azulcilindro=0;
var botoncilindroGUI : GUISkin;
function Start () {

}

function Update () {
	cilindro.renderer.material.color=new Color(rojocilindro,verdecilindro,azulcilindro);
}

function OnGUI(){

if (botoncilindroGUI)
	GUI.skin=botoncilindroGUI;
	
if(	GUI.Button(Rect(Screen.width/2-55,Screen.height/2-185+90+5,110,101),"CILINDRO"))
		{
				cilindro = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
				cilindro.transform.position = Vector3(-0.8,1.2,-8);
				cilindro.transform.rotation = Quaternion.Euler(90, 45, 0);
				cilindro.transform.localScale = Vector3 (0.2, 0.2, 0.2);
		}
		
		
				rojocilindro = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-55,
		120,30),rojocilindro,0,255);
		
		verdecilindro = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2-25,
		120,30),verdecilindro,0,255);
		
		azulcilindro = GUI.HorizontalSlider(Rect(Screen.width/2-100+250+20+50,Screen.height/2+5,
		120,30),azulcilindro,0,255);
}