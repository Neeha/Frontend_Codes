<html>
<head>
<title>
CALCULATOR 
</title>

<style>
table
{
	box-sizing: border-box;
	background: radial-gradient(circle, #fff 20%, #ccc);
	background-size: cover;
	border-radius: 3px;
	table-layout:fixed;
	width:400px;
}
input
{
	font:35px Tahoma, sans-serif;
	background: radial-gradient(circle, #fff 20%, #ddd);
}
input.operand
{
	background:#a7f2f7;
	box-shadow: 0px 4px #42eef9, 0px 10px 15px rgba(0, 0, 0, 0.2);

}
input.main
{
	font:bold 30px Estrangelo Edessa, sans-serif;
	background:#f5b252;	
	box-shadow: 0px 4px #c78107, 0px 10px 15px rgba(0, 0, 0, 0.2);
}
input.keys
{
	background:#8ddb8f;
	box-shadow: 0px 4px #067518, 0px 10px 15px rgba(0, 0, 0, 0.2);
}
</style>

<script language="javascript" type="text/javascript">
<!--
function validate(op)
{
	var data;
	data=document.forms.calc.result.value;	
	if(( data==""||data==null )&&op!=="-")
	{
		alert("Enter a number! ");
		document.forms.calc.result.value='';
		return false;
	}
	document.forms.calc.result.value+=op;
}

function factorial(num)
{
	var fact;
	fact=2;
	for(i=3;i<=num;i++)
		fact=fact*i;
	return fact;
}
//-->
</script>
</head>

<body>
<center>
<br /><br /><br /><br /><br />

<form name="calc" method="get">
<table border=5 cellpadding=2 width="270" height="350">

<tr>
<td colspan=4><input id="ans" type="text" name="result"></td>
</tr>

<tr align="center"> 
<td colspan=2><input type="button" class="main" value="C" style="width:100%; height:100%;" 

OnClick="calc.result.value=''"/></td>
<td colspan=2><input type="button" class="main" value="ON/OFF" style="width:100%; height:100%;" 

OnClick="calc.result.value=''"/></td>
</tr>

<tr align="left"> 
<td><input type="button" class="keys" value="1/x" name="den" style="width:100%; height:100%;" 

OnClick="calc.result.value=1/calc.result.value"/></td>
<td ><input type="button" class="keys" value="x*x" name="square" style="width:100%; height:100%;" 

OnClick="calc.result.value*=calc.result.value"/></td>
<td><input type="button" class="keys" value="%" name="per" style="width:100%; height:100%;" 

OnClick="calc.result.value=calc.result.value/100"/></td>
<td><input type="button" class="keys" value="x!" name="fact" style="width:100%; height:100%;" 

OnClick="calc.result.value=factorial(calc.result.value)"/></td>
</tr>

<tr align="center"> 
<td><input type="button" class="keys" value="7" name="seven" style="width:100%; height:100%;" 

OnClick="calc.result.value+='7'"/></td>
<td><input type="button" class="keys" value="8" name="eight" style="width:100%; height:100%;" 

OnClick="calc.result.value+='8'"/></td>
<td><input type="button" class="keys" value="9" name="nine" style="width:100%; height:100%;" 

OnClick="calc.result.value+='9'"/></td>
<td><input type="button" class="operand" value="/" name="div" style="width:100%; height:100%;" 

onClick="validate('/')";/></td>
</tr>

<tr align="center">
<td><input type="button" class="keys" value="4" name="four" style="width:100%; height:100%;" 

OnClick="calc.result.value+='4'"/></td>
<td><input type="button"  class="keys" value="5" name="five" style="width:100%; height:100%;" 

OnClick="calc.result.value+='5'"/></td>
<td><input type="button"  class="keys" value="6" name="six" style="width:100%; height:100%;" 

OnClick="calc.result.value+='6'"/></td>
<td><input type="button" class="operand"  value="*" name="mul" style="width:100%; height:100%;" 

OnClick="validate('*')";/></td>
</tr>

<tr align="center">
<td><input type="button"  class="keys" value="1" name="one" style="width:100%; height:100%;" 

OnClick="calc.result.value+='1'"/></td>
<td><input type="button"  class="keys" value="2" name="two" style="width:100%; height:100%;" 

OnClick="calc.result.value+='2'"/></td>
<td><input type="button"  class="keys" value="3" name="three" style="width:100%; height:100%;" 

OnClick="calc.result.value+='3'"/></td>
<td><input type="button" value="-" class="operand"  name="sub" style="width:100%; height:100%;" 

OnClick="validate('-')";/></td>
</tr>

<tr align="center">
<td><input type="button"  class="keys" value="0" name="zero" style="width:100%; height:100%;" 

OnClick="calc.result.value+='0'"/></td>
<td><input type="button"  class="keys" value="." name="dot" style="width:100%; height:100%;" 

OnClick="calc.result.value+='.'"/></td>
<td><input type="button" class="main" value="=" name="equals" style="width:100%; height:100%;" 

OnClick="calc.result.value=eval(calc.result.value)"/></td>
<td><input type="button" value="+" class="operand"  name="add" style="width:100%; height:100%;" 

OnClick="validate('+');"/></td>
</tr>

</table>
</form>
</center>
</body>
</html>
