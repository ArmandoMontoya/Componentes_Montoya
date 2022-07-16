import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  destinos = [
    {nombre: 'BACALAR, QUINATA ROO', descripcion: 'El clima y los colores de su laguna son sus atractivos principales, además del Fuerte de San Felipe y el Museo de la Guerra de Castas. Basta con visitar la Laguna de los siete colores para enamorarte de este lugar. Belleza natural e historia combinados.  ', costo: '$13,200.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-bacalar-2.jpg'},
    {nombre: 'CASCADAS HIERVE EL AGUA, OAXACA', descripcion: 'Estas cascadas están petrificadas. Su formación surgió de la misma manera que las estalactitas y estalagmitas en las cavernas a lo largo de miles de años. Además de ser una plaza arqueológica de interés por su sistema de irrigación y terrazas, es el spot perfecto para increíbles fotografías.', costo: '$10,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-hierve-el-agua-1.jpg'},
    {nombre: 'PLAYA DEL CARMEN, QUINTANA ROO', descripcion: 'El corazón de la Riviera Maya es Playa del Carmen, otro de los destinos caribeños favoritos. Playas paradisiacas, una gran cantidad de opciones de lujo o económicas para hospedarte y bonitos bares y restaurantes para disfrutar en una de sus principales avenidas.', costo: '$15,600.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-playa-del-carmen-3.jpg'},
    {nombre: 'LA HUASTECA POTOSINA, SAN LUIS POTOSÍ (Y ALREDEDORES)', descripcion: 'El Estado de San Luis se luce con la Huasteca Potosina, un hermoso lugar que reúne diversas atracciones que te hacen sentir como si estuvieras en una tierra encantada. ', costo: '$13,650.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-huasteca-postosina.jpg'},
    {nombre: 'XOCHIMILCO, CIUDAD DE MÉXICO', descripcion: 'Las pintorescas trajineras en los canales de Xochimilco convierten a este lugar en uno de los más populares de la Ciudad de México. Circulan por la Isla de las Muñecas y la Llorona, la Laguna de Teshuilo y el Museo del Ajolote.', costo: '$6,800.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-xochimilco-1.jpg'},
    {nombre: 'ISLA MARIETAS, NAYARIT', descripcion: 'La Isla Redonda e Isla Larga son las dos islas deshabitadas que forman este hermoso destino. Aquí puedes practicar snorkel, buceo y observar aves poco comunes.', costo: '$14,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-islas-marietas-2.png'},
    {nombre: 'CASCADAS DE AGUA AZUL, CHIAPAS', descripcion: 'Las bellas cascadas blanquiazules de Agua Azul, son protagonizadas por los Ríos Otulún, Shumuljá y Tulijá, en el municipio de Tumbalá en Chiapas.', costo: '$10,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-cascadas-de-agua-azul-1-1.jpg'},
    {nombre: 'SANTUARIOS DE LA MARIPOSA MONARCA, MICHOACÁN', descripcion: 'La montaña de El Rosario y Sierra Chincua son los dos grandes santuarios de la Mariposa Monarca en Michoacán. Para los amantes de la vida silvestre, este fenómeno está entre los más espectaculares que podrán disfrutar.  ', costo: '$8,700.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-santuario-mariposa-monarca-1-1.jpg'},
    {nombre: 'TEOTIHUACÁN, ESTADO DE MÉXICO', descripcion: 'Ascender a la Pirámide del Sol o la Pirámide de la Luna es de las actividades favoritas de Teotihuacán, por su nombre en náhuatl “el lugar donde los hombres se convierten en dioses” ', costo: '$7,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-teotihuacan-2.jpg'},
    {nombre: 'TEQUILA, JALISCO', descripcion: 'Uno de los estados que mejor representa a México a nivel mundial es Jalisco, con su tequila, charros y mariachi. Aquí se junta el folclor mexicano y la legítima bebida nacional.', costo: '15,000.00 MXN', foto: 'https://th.bing.com/th/id/R.39c20120656de45d207b8c776110218e?rik=Udo8ayodGCSGEQ&pid=ImgRaw&r=0'},
    {nombre: 'CALLEJÓN DEL BESO, GUANAJUATO', descripcion: 'Todos sabemos que este lugar no se visita con cualquier persona. El Callejón del Beso en Guanajuato es el lugar ideal para ir con tu persona amada y disfrutar de una tarde romántica. La icónica foto no puede faltar.', costo: '$20,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-callejon-del-beso.jpg'},
    {nombre: 'TAXCO, GUERRERO ', descripcion: 'Taxco de Alarcón es conocido por su joyería de plata. Sus artesanos y orfebres son conocidos mundialmente por esta labor. El Templo de Santa Prisca y el Cristo Monumental son de sus edificios y monumentos más emblemáticos.', costo: '$9,000.00 MXN', foto: 'https://blog.xcaret.com/es/wp-content/uploads/2021/11/lugares-turisticos-mas-visitados-de-mexico-taxco.jpg'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
