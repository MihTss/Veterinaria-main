var url = 'http://localhost:5031/'


// #######################################################  CADASTRAR PESSOAS #######################################################

function cadastrarPessoa(event)
{	

	event.preventDefault();

		
	if (document.getElementById('isvet').value == 'true')
	{
		var valorvet = true;
	}else{
		valorvet = false;
	}
	
	let body =
	{
		'nome':          document.getElementById('nome-completo').value,
		'telefone':      document.getElementById('telefone').value,
		'email':         document.getElementById('email').value,
		'isVeterinario': valorvet,
	};
	
	fetch(url + "pessoa",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro efetuado!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro!')
	})
	
}


// #######################################################  ATUALIZAR PESSOAS #######################################################

function atualizarPessoa(event)
{
	event.preventDefault();

	if (document.getElementById('isvet').value == 'true')
	{
		var valorvet = true;
	}else{
		valorvet = false;
	}
	var id = document.getElementById('idPessoa').value;
	let body =
	{	
		'id': id,
		'nome':        document.getElementById('nome-completo').value,
		'telefone':    document.getElementById('telefone').value,
		'email':       document.getElementById('email').value,
		'isVeterinario': valorvet,
	};
	console.log(body);
	
	fetch(url + "pessoa/" + id,
	{
		'method': 'PUT',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro atualizado!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar!')
	})
	
}

// #######################################################  REMOVER PESSOAS #######################################################


function removerPessoa()
{
	var id = document.getElementById('idPessoa').value; 

	fetch(url + 'pessoa/' + id,
	{
		'method': 'DELETE',
		'redirect': 'follow',
	})

	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro removido!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível remover!')
	})
}

// #######################################################  LISTAR PESSOAS #######################################################

function listarPessoas(event)
{
	event.preventDefault();

	fetch(url + 'pessoas',
	{
		'method': 'GET',
		'redirect': 'follow'
	})
	.then(response => response.json())
	.then((usuarios) =>
	{
		console.log(usuarios);
		let listaUsuarios = document.getElementById('lista-pessoas')
		
		//preenche div com usuarios recebidos do GET
		for(let usuario of usuarios)
		{
			//cria div para as informacoes de um usuario
			let divUsuario = document.createElement('div')
			divUsuario.setAttribute('class', 'form')
			
			//pega o nome do usuario
			let divNome = document.createElement('input')
			divNome.placeholder = 'Nome Completo'
			divNome.value = usuario.nome
			divUsuario.appendChild(divNome)
			
			//pega o email do usuario
			let divEmail = document.createElement('input')
			divEmail.placeholder = 'Email'
			divEmail.value = usuario.email
			divUsuario.appendChild(divEmail)

			//pega o telefone do usuario
			let divTelefone = document.createElement('input')
			divTelefone.placeholder = 'Telefone'
			divTelefone.value = usuario.telefone
			divUsuario.appendChild(divTelefone)
			
			//se o usuario é dono ou veterinario 
			let divTipo = document.createElement('input')
			divTipo.placeholder = 'isvet'
			divTipo.value =  usuario.isVeterinario ? "VETERINARIO" : "DONO"
			divUsuario.appendChild(divTipo)
			
			//insere a div do usuario na div com a lista de usuarios
			listaUsuarios.appendChild(divUsuario)
		}
	})
	.catch((error) => {
		console.log(error);
	})
}



// #######################################################  CADASTRAR PACIENTES #######################################################


function cadastrarPaciente(event)
{		
	event.preventDefault();

	let body =
	{  
		'nome':         document.getElementById('nome-completo').value,
		'especie':      document.getElementById('especie').value,
		'raca':         document.getElementById('raca').value,
		'sexo':         document.getElementById('sexo').value,
		'idDono':       document.getElementById('idDono').value,

	};
	
	
	fetch(url + "cadastrarPaciente",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro efetuado!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro!')
	})
	
}



// ####################################################### ATUALIZAR PACIENTES #######################################################

function atualizarPacientes()
{
	var id = document.getElementById('idPaciente').value;
	let body =
	{	
		'nome':         document.getElementById('nome-completo').value,
		'especie':      document.getElementById('especie').value,
		'raca':         document.getElementById('raca').value,
		'sexo':         document.getElementById('sexo').value,
		'idDono':       document.getElementById('idDono').value,
	};
	
	fetch(url + "paciente/" + id,
	{
		'method': 'put',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro atualizado!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar!')
	})
	
}

// ####################################################### DELETAR PACIENTES #######################################################

function removerPacientes()
{
	var id = document.getElementById('idPaciente').value; 

	fetch(url + 'paciente/' + id,
	{
		'method': 'DELETE',
		'redirect': 'follow'
	})
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro removido!')
	})
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível remover!')
	})
}


// ####################################################### LISTAR PACIENTES #######################################################


function listarPacientes(event)
{
	event.preventDefault();

	fetch(url + 'pacientes',
	{
		'method': 'GET',
		'redirect': 'follow'
	})
	.then(response => response.json())
	.then((usuarios) =>
	{
		console.log(usuarios);
		//pega div que vai conter a lista de usuarios
		let listaUsuarios = document.getElementById('lista-pacientes')
		
		//preenche div com usuarios recebidos do GET
		for(let usuario of usuarios)
		{
			//cria div para as informacoes de um usuario
			let divUsuario = document.createElement('div')
			divUsuario.setAttribute('class', 'form')
			
			//pega o nome do usuario
			let divNome = document.createElement('input')
			divNome.placeholder = 'Nome'
			divNome.value = usuario.nome
			divUsuario.appendChild(divNome)
			
			//pega o email do usuario
			let divEspecie = document.createElement('input')
			divEspecie.placeholder = 'Especie'
			divEspecie.value = usuario.especie
			divUsuario.appendChild(divEspecie)

			//dono do animal
			let divIdDono = document.createElement('input')
			fetch(url + 'pessoa/' + usuario.idDono,
			{
				'method': 'GET',
				'redirect': 'follow'
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					divIdDono.placeholder = 'idDono'
					divIdDono.value = 'Dono: ' + data.nome + '  ' + 'Cód: ' + data.id
					divUsuario.appendChild(divIdDono)
				});
			
			//insere a div do usuario na div com a lista de usuarios
			listaUsuarios.appendChild(divUsuario)
		}
	})
	.catch((error) => {
		console.log(error);
	})
}


// ####################################################### CADASTRAR AGENDAMENTO #######################################################

function cadastrarAgendamento(event)
{		
	event.preventDefault();
	
	let body =
	{  
		'idPaciente':         document.getElementById('idPaciente').value,
		'idVeterinario':      document.getElementById('idVeterinario').value,
		'dataHora':           document.getElementById('dataHora').value,
	};
	
	fetch(url + "agendamento",
	{
		'method': 'POST',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	//checa se requisicao deu certo
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Agendamento cadastrado!')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível efetuar o cadastro!')
	})
	
}


// ####################################################### ATUALIZAR AGENDAMENTO #######################################################

function atualizarAgendamento(event)
{
	event.preventDefault();

	var id = document.getElementById('idAgenda').value;

	let body =
	{	
		'idPaciente':      document.getElementById('idPaciente').value,
		'idVeterinario':   document.getElementById('idVeterinario').value,
		'dataHora':        document.getElementById('dataHora').value,
	};
	
	fetch(url + "agendamento/" + id,
	{
		'method': 'put',
		'redirect': 'follow',
		'headers':
		{
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		'body': JSON.stringify(body)
	})
	//checa se requisicao deu certo
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro atualizado!')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível atualizar!')
	})
	
}

// ####################################################### DELETAR AGENDAMENTO #######################################################

function removerAgendamento(event)
{

	event.preventDefault();

	var id = document.getElementById('idAgendamento').value; 

	fetch(url + 'agendamento/' + id,
	{
		'method': 'DELETE',
		'redirect': 'follow'
	})
	//checa se requisicao deu certo
	.then((response) =>
	{
		if(response.ok)
		{
			return response.text()
		}
		else
		{
			return response.text().then((text) =>
			{
				throw new Error(text)
			})
		}
	})
	//trata resposta
	.then((output) =>
	{
		console.log(output)
		alert('Cadastro removido!')
	})
	//trata erro
	.catch((error) =>
	{
		console.log(error)
		alert('Não foi possível remover!')
	})
}


// ####################################################### LISTAR AGENDAMENTOS #######################################################

function listarAgendamentos(event)
{
	event.preventDefault();

	fetch(url + 'agendamentos',
	{
		'method': 'GET',
		'redirect': 'follow'
	})
	.then(response => response.json())
	.then((agendamentos) =>
	{
		console.log(agendamentos);
		//pega div que vai conter a lista de agendamentos
		let listaAgendamentos = document.getElementById('lista-agendamentos')
		
		//preenche div com usuarios recebidos do GET
		for(let agendamento of agendamentos)
		{
			//cria div para as informacoes de um usuario
			let divAgendamento = document.createElement('div')
			divAgendamento.setAttribute('class', 'form')
			
			let divIdPaciente = document.createElement('input')
			fetch(url + 'paciente/' + agendamento.idPaciente,
			{
				'method': 'GET',
				'redirect': 'follow'
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					divIdPaciente.placeholder = 'idPaciente'
					divIdPaciente.value = 'Paciente: ' + data.nome + '  ' + 'Cód: ' + data.id
					divAgendamento.appendChild(divIdPaciente)
				});
			
			let divIdVeterinario = document.createElement('input')
			fetch(url + 'pessoa/' + agendamento.idVeterinario,
			{
				'method': 'GET',
				'redirect': 'follow'
			})
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					divIdVeterinario.placeholder = 'idVeterinario'
					divIdVeterinario.value = 'Veterinário ' + data.nome
					divAgendamento.appendChild(divIdVeterinario)
				});

			let divDataHora = document.createElement('input')
			divDataHora.placeholder = 'dataHora'
			divDataHora.value = agendamento.dataHora
			divAgendamento.appendChild(divDataHora)
			
			listaAgendamentos.appendChild(divAgendamento)
		}
	})
	.catch((error) => {
		console.log(error);
	})
}
