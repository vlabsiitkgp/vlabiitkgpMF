function multiplyBy()
{
        num1 = document.getElementById("weight1").value;
        num2 = document.getElementById("weight2").value;
		num3 = document.getElementById("distance").value;
		num4 = document.getElementById("angle").value;
        document.getElementById("result").innerHTML =(num2 * num3 * 100)/((num1+num2)* Math.tan(num4));
}
