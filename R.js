function process(){
	var n1	= document.getElementById("col1").value;
	var n2	= document.getElementById("col2").value;
	var n3	= document.getElementById("col3").value;
	var n4	= document.getElementById("col4").value;
	var n12	= n1 + n2;
	var R;
	var ten	= 1;
	var c	= 0;
	var unit	= new Array;
	var i;
	unit[0]	= "";
	unit[1]	= "K";
	unit[2]	= "M";
	unit[3]	= "G";
	unit[4]	= "T";

	while( n3 >= 3 ){
		c++;
		n3	-=3;
	}
	
	n3	= parseInt(n3);
	for(i=1;i<=n3;i++)
		ten	*= 10;
	R	= parseInt(n12)*ten;
	
	if( n3 == 2){
		c++;
		R	/= 1000;
	}
	
	document.getElementById("output").innerHTML	= '<p>'+n1+n2+'×10^'+document.getElementById("col3").value+'　　誤差±'+n4+'％</p>';
	document.getElementById("output").innerHTML	+= '<p>抵抗値は'+R+'&nbsp;'+unit[c]+'Ω、誤差±'+n4+'％です。</p>';
}
