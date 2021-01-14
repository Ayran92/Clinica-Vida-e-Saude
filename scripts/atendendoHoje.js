const diasDaSemana = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"]
const hoje = 2;
const dia = new Date()



var elements = document.getElementById("tabela-agenda-semanal").getElementsByTagName('td');
const atendendoHoje = document.getElementById("lista-atendendo-hj")


switch (dia.getDay()) {
  case 1:
    for (var i = 0; i < 3;i++) {
        const td = elements[i].cloneNode(true)
        const img = td.getElementsByTagName("img")[0]
        const nome =td.getElementsByTagName("p")[0]
        
        td.style.width = "17em"
        td.style.height = "22em"

        img.style.width = "12em"

        nome.style.fontSize = "1.6em"
        


        atendendoHoje.appendChild(td)
    }
    break;
  case 2:
    for (var i = 3; i < 5;i++) {
        const td = elements[i].cloneNode(true)
        const img = td.getElementsByTagName("img")[0]
        const nome =td.getElementsByTagName("p")[0]
        
        td.style.width = "17em"
        td.style.height = "22em"

        img.style.width = "12em"

        nome.style.fontSize = "1.6em"
        


        atendendoHoje.appendChild(td)
    }
      break;
  case 3:
    for (var i = 5; i < 8;i++) {
        const td = elements[i].cloneNode(true)
        const img = td.getElementsByTagName("img")[0]
        const nome =td.getElementsByTagName("p")[0]
        
        td.style.width = "17em"
        td.style.height = "22em"

        img.style.width = "12em"

        nome.style.fontSize = "1.5em"
        


        atendendoHoje.appendChild(td)
    }
    break;
  case 4:
    for (var i = 8; i < 9;i++) {
        const td = elements[i].cloneNode(true)
        const img = td.getElementsByTagName("img")[0]
        const nome =td.getElementsByTagName("p")[0]
        
        td.style.width = "15em"
        td.style.height = "20em"

        img.style.width = "12em"

        nome.style.fontSize = "1.6em"
        


        atendendoHoje.appendChild(td)
    }
    break;
  case 5:
    for (var i = 9; i < 16;i++) {
        const td = elements[i].cloneNode(true)
        const img = td.getElementsByTagName("img")[0]
        const nome =td.getElementsByTagName("p")[0]
        
        td.style.width = "13em"
        td.style.height = "18em"

        img.style.width = "8em"

        nome.style.fontSize = "1.4em"
        


        atendendoHoje.appendChild(td)
    }
    break;
}


