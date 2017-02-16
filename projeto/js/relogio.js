function desenho() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 9;
    ctx.beginPath();
    ctx.arc(150,150,138,0,Math.PI*2,true);
    ctx.stroke();
    ctx.translate(150,150);

    var h = 95; //Hipotenusa - Distância do centro até o a ponta das marcas
    var hM = 120; //Hipotenusa Maior - Distância do centro até o final das marcas
    var hNum = 80; //Hipotenusa Número - Distância do centro até os números

    for (var i=1; i<=360; i++) {
      var angulo = (2*Math.PI)/360*i;
      var seno = Math.sin(angulo);
      var coseno = Math.cos(angulo);

      if (i % 15 == 0) {
        ctx.lineWidth = 5;
        var co = seno * h;
        var ca = coseno * -h;
        var com = seno * hM;
        var cam = coseno * -hM;
        var conum = seno * hNum;
        var canum = coseno * -hNum;
        ctx.fillText(i/15,conum,canum);
	     
      } 
      ctx.beginPath();
      ctx.moveTo(co,ca);
      ctx.lineTo(com,cam);
      ctx.stroke();
    }
       
      var tempo = new Date();
      var horas = tempo.getHours();
      var minutos = tempo.getMinutes();
      var segundos = tempo.getSeconds();
        
      ctx.save();


      //Ponteiro Hora
      ctx.rotate(Math.PI/12*(horas+(minutos/60)+(segundos/3600)));
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0,10);
      ctx.lineTo(0,-60);
      ctx.stroke();
      ctx.restore();
      ctx.save();
      
      //Ponteiro Minuto
      ctx.rotate(Math.PI/30*(minutos+(segundos/60)));
      ctx.strokeStyle= 'blue';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0,20);
      ctx.lineTo(0,-110);
      ctx.stroke();
      ctx.restore();
      ctx.save();


    }

  }
