//alert('test')
allpic=['0.png','1.png','2.png','3.png'];
allbt=['bt0','bt1','bt2','bt3'];
allmanbt=['角色一','角色二','角色三','角色四']
fxfappend=[ [false,false,false,false],
			[false,false,false,false],
			[false,false,false,false],
			[false,false,false,false]];
nowplace=0;
window.addEventListener('load',loadsu)
function loadsu(){
	bt0=document.getElementById('bt0');
	bt1=document.getElementById('bt1');
	bt2=document.getElementById('bt2');
	bt3=document.getElementById('bt3');
	bt0.addEventListener('mouseup',change);
	bt1.addEventListener('mouseup',change);
	bt2.addEventListener('mouseup',change);
	bt3.addEventListener('mouseup',change);
	pic=document.getElementById('pic');
	
	manbts=document.getElementsByClassName('manbt');
	for(var i=0;i<manbts.length;i++){
		manbts[i].addEventListener('mousedown',changeman);
	}

	mans=document.getElementsByClassName('man');
	//console.log(mans);
	for(var i=0;i<mans.length;i++){
		mans[i].addEventListener('mousedown',drag);
	}
}
function change(self){
	before=[]
	for(var i=0;i<4;i++){
		before.push(fxfappend[i][nowplace])
	}
	switch(this.id){
		case allbt[0]:
			pic.src='sourse/'+allpic[0];
			nowplace=0;
			
			break;
		case allbt[1]:
			pic.src='sourse/'+allpic[1];
			nowplace=1;
			break;
		case allbt[2]:
			pic.src='sourse/'+allpic[2];
			nowplace=2;
			break;
		case allbt[3]:
			pic.src='sourse/'+allpic[3];
			nowplace=3;
			break;
	}
	for(var i=0;i<4;i++){
		if(fxfappend[i][nowplace]!=before[i]){
			id='man'+i
			man=document.getElementById(id);
			man.classList.toggle('append');
			man.classList.toggle('unappend');
		}

	}
}
function drag(e){
	var it=this;
	it.style.position="absolute";
	var move =function(e){ 
		it.style.top=e.clientY-10+"px";
		it.style.left=e.clientX-5+"px"
	}
	var end = function(e){		
		document.removeEventListener("mousemove",move);
		document.removeEventListener("mouseup",end)	
	}
	document.addEventListener("mousemove",move);
	document.addEventListener("mouseup",end);
}

function changeman(){
	var man='';
	switch(this.innerHTML){
		case allmanbt[0]:
			man=document.getElementById('man0');
			break;
		case allmanbt[1]:
			man=document.getElementById('man1');
			break;
		case allmanbt[2]:
			man=document.getElementById('man2');
			break;
		case allmanbt[3]:
			man=document.getElementById('man3');
			break;
	}
	man.classList.toggle('append');
	man.classList.toggle('unappend');
	num=man.id.replace('man','');
	if(fxfappend[num][nowplace]){
		fxfappend[num][nowplace]=false;
	}
	else{
		for(var i=0;i<4;i++){
			fxfappend[num][i]=false;
		}
		fxfappend[num][nowplace]=true;
	}
	
}
