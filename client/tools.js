function lerp(a, b, u){
	return (1 - u) * a + u * b;
}

function lerp3(startarr, endarr, u){
	var r1 = lerp(startarr[0], endarr[0], u);
	var r2 = lerp(startarr[1], endarr[1], u);
	var r3 = lerp(startarr[2], endarr[2], u);
	return [r1, r2, r3];
}

function rgb_to_hsv(colorarr){
	var r = colorarr[0];
	var g = colorarr[1];
	var b = colorarr[2];
	var maxc = Math.max(r,g,b);
	var minc = Math.min(r,g,b);
	var v = maxc;
	if(minc == maxc) return [0,0,v];
	var diff = maxc - minc;
	var s = diff / maxc;
	var rc = (maxc - r) / diff;
	var gc = (maxc - g) / diff;
	var bc = (maxc - b) /diff;
	var h = 0;
	if(r == maxc) h = bc - gc;
	else if(g == maxc) h = 2.0 + rc - bc;
	else h = 4.0 + gc - rc;
	h = (h / 6.0) % 1.0;
	return [h, s, v];
}

function hsv_to_rgb(colorarr){
	var h = colorarr[0];
	var s = colorarr[1];
	var v = colorarr[2];
	if(s == 0.0) return [v,v,v];
	var i = parseInt(Math.floor(h * 6.0), 10);
	var f = (h * 6.0) - i;
	var p = v * (1.0 - s);
	var q = v * (1.0 - s * f);
	var t = v * (1.0 - s * (1.0 - f));
	if(i % 6 == 0) return [v, t, p];
	switch(i){
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
}
