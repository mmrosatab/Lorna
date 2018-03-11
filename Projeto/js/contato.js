function gerarPdf() 
{		
	                       

	var doc = new jsPDF();

	var form = document.getElementById("form_contato"); 


	var name = form.name.value; 
	var phone = form.phone.value;
	var email = form.email.value;
	var comment	= form.comment.value;
	
	doc.text(20, 20, "Nome: "+String(name)); // algum texto
	doc.text(20, 30, "Telefone: "+String(phone));
	doc.text(20, 40, "E-mail: "+String(email));
	doc.text(20, 50, "Mensagem: "+String(comment));
	doc.save('Relatorio.pdf');

	alert("Pdf gerado com sucesso");	


} 


function formData()
{

	var form = document.getElementById("form_contato"); 


	var name = form.name.value; 
	var phone = form.phone.value;
	var email = form.email.value;
	var comment	= form.comment.value;

	alert("Sua mensagem foi enviada com sucesso!");
}