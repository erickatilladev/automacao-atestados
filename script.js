// Função que envia notificações por e-mail sobre o status do atestado médico.
function enviarNotificacaoAtestado(e) {
    // Obtém a planilha ativa e a linha onde ocorreu a edição.
    var sheet = e.source.getActiveSheet(); 
    var linha = e.range.getRow(); 
    
    // Define os números das colunas correspondentes aos dados necessários.
    var statusColuna = 11; // Coluna K - Status do atestado
    var emailColuna = 10;  // Coluna J - E-mail do colaborador
    var nomeColuna = 2;    // Coluna B - Nome do colaborador
    var dataColuna = 5;    // Coluna E - Data do atestado
    var rejeicaoColuna = 12; // Coluna L - Motivo da rejeição
    
    // Obtém os valores das células editadas na linha correspondente.
    var status = sheet.getRange(linha, statusColuna).getValue();
    var email = sheet.getRange(linha, emailColuna).getValue();
    var nome = sheet.getRange(linha, nomeColuna).getValue();
    var dataAtestado = sheet.getRange(linha, dataColuna).getValue();
    var motivoRejeicao = sheet.getRange(linha, rejeicaoColuna).getValue();
    
    // Inicializa os dados do e-mail.
    var assunto = "Atualização do Status do Seu Atestado Médico"; // Assunto do e-mail
    var mensagem = ""; // Inicializa a mensagem como vazia
  
    // Verifica o status do atestado e cria a mensagem apropriada para o colaborador.
    if (status === "Recebido") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Confirmamos o recebimento do seu atestado médico datado de " + dataAtestado + ". " +
                 "O documento está em análise e você será informado(a) assim que houver uma atualização no status.\n\n" +
                 "Atenciosamente,\nColégio Atilla Curumim";
    } else if (status === "Aprovado e lançado em folha") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Seu atestado médico, datado de " + dataAtestado + ", foi aprovado e lançado em folha.\n\n" +
                 "Atenciosamente,\nColégio Atilla Curumim";
    } else if (status === "Rejeitado") {
      mensagem = "Prezado(a) " + nome + ",\n\n" +
                 "Seu atestado médico, datado de " + dataAtestado + ", foi rejeitado. " +
                 "Motivo: " + motivoRejeicao + ".\n" +
                 "Por favor, entre em contato com o RH para maiores esclarecimentos ou para fornecer um novo documento.\n\n" +
                 "Atenciosamente,\nRH Colégio Atilla Curumim";
    }
    
    // Envia o e-mail somente se a mensagem foi preenchida (status válido).
    if (mensagem !== "") {
      MailApp.sendEmail(email, assunto, mensagem);
    }
  }
  
  // Função que é acionada automaticamente sempre que há uma edição na planilha.
  function onEdit(e) {
    enviarNotificacaoAtestado(e); // Chama a função para enviar a notificação com base na edição feita.
  }
  