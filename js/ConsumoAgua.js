'use strict';

$(function(){
    var CONSUMO = 8.3;
	
    $('#resultado-consumo').hide();
    
    $('#frmConsumoAgua').on('submit', function(){
        var tempo = $('#tempoChuveiro').val(),
            qtosBanhos = $('#qtosBanhos').val(),
            consumoDia = tempo * qtosBanhos * CONSUMO,
            resultado,
            totalAno = consumoDia * 365,
            economia = qtosBanhos * 365 * CONSUMO;
			
		$('#consumo-agua').hide();
        
        resultado = '<p>Considerando que você toma ' + qtosBanhos + ' banhos<sup>1</sup> de '+tempo+' minutos por dia, o seu consumo é de: </p>' +
                              '<ul>' +
                                '<li><span class="destaque">' + consumoDia.toFixed(2) + ' litros</span> de água por dia;</li>' + 
                                //'<li><span class="destaque">' + (consumoDia * 7).toFixed(2) + ' litros</span> de água  por semana;</li>' + 
                                '<li><span class="destaque">' + (consumoDia * 31).toFixed(2) + ' litros</span> de água por mês</li>' + 
                                '<li><span class="destaque">' + totalAno.toFixed(2) + ' litros</span> de água por ano</li>' +             
                              '</ul>' +
                              (tempo > 1 ? 
                               '<p>Se você demorasse <b>um minuto</b> a menos no seu banho, você teria uma economia de  <span class="destaque">'+ (economia * 100 / totalAno).toFixed(2) + '%</span> do seu consumo anual, <u>o suficiente para saciar <span class="destaque">'+(economia/2).toFixed(0)+' pessoas</span></u><sup>2</sup> por um dia!<p>'
                               : '' ); //+ '</br> O tempo recomendado de banho é ';
        $('#resultado-consumo').show();
        $('#dados-consumo').html(resultado);
        return false;
    });
	
	$('#novamente').on('click', function(){
		$('#consumo-agua').show();
		$('#resultado-consumo').hide();
	});
}());