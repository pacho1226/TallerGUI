#pragma strict

var contadorcubo = 0;
var contadorcilindros=0;
var contadorplanos=0;
var menu : Texture2D;
var tallerGUI : GUISkin;


function Start () {

}

function Update () {


}

function OnGUI(){

if (tallerGUI)
	GUI.skin=tallerGUI;

GUI.Box(Rect(Screen.width/2-100,Screen.height/2-250,200,400),"MENU");

if(	GUI.Button(Rect(/*posicion ancho "centrado"*/Screen.width/2-60
		,/*posicion alto "centrado"*/Screen.height/2-15+70,
		/*tamaño ancho*/120,/*tamaño alto*/30),"Generar Cubo"))
		{
		contadorcubo+=1;
					var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
					cube.transform.position = Vector3(-0.8,0.8F,-8);
					cube.transform.rotation = Quaternion.Euler (344.3542F, 311.64F, 20.05925F);
					cube.transform.localScale = Vector3 (0.2, 0.2, 0.2);
		}
		GUI.Label(Rect(Screen.width/2+180,Screen.height/2+130,200,200),"Contador cubos "+contadorcubo);
		
if(	GUI.Button(Rect(Screen.width/2-60,Screen.height/2-15-50,120,30),"Contador Cilindro"))
		{
		contadorcilindros+=1;
		
					var cilindro : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
					cilindro.transform.position = Vector3(-0.8,1.2,-8);
					cilindro.transform.rotation = Quaternion.Euler(90, 45, 0);
					cilindro.transform.localScale = Vector3 (0.2, 0.2, 0.2);
		}
		GUI.Label(Rect(Screen.width/2+180,Screen.height/2,200,200),"Contador cilindros "+contadorcilindros);
/*		
posisicon camara

cube.transform.position = Vector3(0,1,-10);
					cube.transform.rotation = Quaternion.Euler (0, 0,0);
					cube.transform.localScale = new Vector3 (1, 1, 1);
*/

if(	GUI.Button(Rect(Screen.width/2-60,Screen.height/2-15-20-140,120,30),"Genarar plano"))
		{
		contadorplanos+=1;
					var plano : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Plane);
					plano.transform.position = Vector3(-0.8,1.6,-8);
					plano.transform.rotation = Quaternion.Euler (341.2326F, 300.9156F, 46.0082F);
					plano.transform.localScale = new Vector3 (0.03, 0.03, 0.03);
		}	
		
	GUI.Label(Rect(Screen.width/2+180,Screen.height/2-120,200,200),"Contador planos "+contadorplanos);
				
				
}
