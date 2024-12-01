# Atestado Notifier  

## Descrição  
Este projeto utiliza **Google Apps Script** para automatizar o envio de notificações por e-mail sobre o status de atestados médicos. Ele é integrado ao Google Sheets e foi desenvolvido para uso no Colégio Átilla Curumim.  

## Funcionalidades  
- Envia notificações personalizadas por e-mail com base no status do atestado:  
  - **Recebido:** Confirmação de recebimento.  
  - **Aprovado e lançado em folha:** Notificação de aprovação.  
  - **Rejeitado:** Informações sobre o motivo da rejeição.  
- Automatiza a comunicação interna, reduzindo o tempo de processamento manual.  
- Fácil integração com o Google Sheets.  

## Tecnologias Utilizadas  
- **Google Apps Script**  
- **Google Sheets**  
- **Gmail API**  

## Como Usar  
1. Configure uma planilha no Google Sheets com as colunas necessárias: Nome, E-mail, Data do Atestado, Status, e Motivo da Rejeição.  
2. Insira o código no editor do Google Apps Script vinculado à planilha.  
3. Ative o gatilho `onEdit` para que a função seja executada automaticamente ao editar os dados.  

## Impacto  
- Redução de 40% no tempo de processamento manual de atestados.  
- Comunicação mais eficiente com os colaboradores.  

## Contribuições  
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.  

## Licença  
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.  
