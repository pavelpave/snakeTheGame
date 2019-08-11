import React from "react";
import Menu  from './app/base-menu'
import "./assets/css/style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction : null,
      x : 0,
      y : 0,
      sBody : [2],
      apple :  [],
      speed : 1,
      size : 5,
    };
  }
  randomPosition = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
  }
 
  componentDidMount(){
    window.onkeydown = (e) =>{
      console.log(e);
      var k = e.keyCode;
      if ([38, 39, 40, 37].indexOf(k) >= 0) e.preventDefault();
      if (k === 39 ) this.setState({ direction: 1 }); //Вправо
      if (k === 40 ) this.setState({ direction: 2 }); //Вниз
      if (k === 37 ) this.setState({ direction: 3 }); //Влево
      if (k === 38 ) this.setState({ direction: 4 }); //Вверх
    }
    let snake = document.querySelector('#canvas');
    let gtx   = snake.getContext('2d')
   



    setInterval(() => {
      gtx.clearRect( 0 , 0 , snake.width , snake.height);
      gtx.fillStyle = '#fff';
      // цикл открисовывающий масив тела 
      // 	sBody.forEach(function(el, i){
// 		if (el.x == sBody[sBody.length - 1].x 
//    && el.y == sBody[sBody.length - 1].y 
//    && i < sBody.length - 1) 
//    sBody.splice(0,sBody.length-1), sBody = [{x:0,y:0}], d = 1; //Проверка на столкновение
// 	});

      if(snake.height <= this.state.y){
        this.setState({ y :  0 })
      }
      if(snake.width <= this.state.x){
        this.setState({ x :  0 })
      }
      if(this.state.x < 0){
        this.setState({ x :  snake.width })
      }   
       if(this.state.y  <  0){
        this.setState({ y :  snake.height })
      }
      switch(this.state.direction){
        case 1:
            this.setState({ x : (this.state.x  + this.state.speed) , y :  this.state.y })
            break
        case 2:
            this.setState({ x : this.state.x , y : (this.state.y  + this.state.speed) })
            break
        case 3:
            this.setState({ x : (this.state.x  - this.state.speed) , y : this.state.y })
            break
        case 4:
            this.setState({ x : this.state.x , y : (this.state.y  - this.state.speed) })
            break
        default:
          break 
      }

      gtx.fillRect(this.state.x, this.state.y, this.state.size , this.state.size );	
     this.state.sBody.map(( el , i  ) => {
       gtx.fillRect( el.x -  (this.state.x - (i * this.state.size)), el.y -  (this.state.x - (i * this.state.size)), this.state.size , this.state.size );
     })
    } , 1000 / 30 )

                            //     var rand = function (min, max) {k = Math.floor(Math.random() * (max - min) + min); return (Math.round( k / s) * s);}
                            // var newA = function () {a = [rand(0, innerWidth),rand(0, innerHeight)];},
                            // 	newB = function () {sBody = [{x: 0,y: 0}];}
                            // var gP = document.getElementById('canvas'), //Достаем canvas
                            // 	g = gP.getContext('2d'), //Получаем "контакс" (методы для рисования в canvas) //Сохраняем для удобства
                            // 	sBody = null, //Начально тело змейки - два элемента
                            // 	d = 1, //Направление змейки 1 - dправо, 2 - вниз 3 - влево, 4 - вверх
                            // 	a = null, //Яблоко, массив, 0 элемент - x, 1 элемнт - y
                            // 	s = 25; newB(); newA(); //Создаем змейку
                            // gP.width = innerWidth; //Сохранем четкость изображения, выставив полную ширину экрана
                            // gP.height = innerHeight; //То же самое, но только с высотой
// setInterval(function(){
// 	if (a[0] + s >= gP.width || a[1] + s >= gP.height) newA(); 
// 	g.clearRect(0,0,gP.width,gP.height); //Очищаем старое
// 	g.fillStyle = "red";
// 	g.fillRect(...a, s, s);
// 	g.fillStyle = "#000";
// 	sBody.forEach(function(el, i){
// 		if (el.x == sBody[sBody.length - 1].x 
//    && el.y == sBody[sBody.length - 1].y 
//    && i < sBody.length - 1) 
//    sBody.splice(0,sBody.length-1), sBody = [{x:0,y:0}], d = 1; //Проверка на столкновение
// 	});
// 	var m = sBody[0],
//   f = {x: m.x,y: m.y}, l = sBody[sBody.length - 1]; // сохраняем хвост и голову змейки
// 	if (d == 1)  f.x = l.x + s, f.y = Math.round(l.y / s) * s; //Если направление вправо, то тогда сохраняем Y, но меняем X на + s
// 	if (d == 2) f.y = l.y + s, f.x = Math.round(l.x / s) * s; // Если направление вниз, то сохраняем X, но меняем Y на + s
// 	if (d == 3) f.x = l.x - s, f.y = Math.round(l.y / s) * s; //Если направление влево, то сохраняем Y, но меняем X на -s
// 	if (d == 4) f.y = l.y - s, f.x = Math.round(l.x / s) * s; //Если направление вверх, то сохраняем X, Но меняем Y на -ss
// 	sBody.push(f); //Добавляем хвост после головы с новыми координатами
// 	sBody.splice(0,1); //Удаляем хвост
// 	//Отрисовываем каждый элемент змейки
// 	sBody.forEach(function(pob, i){
// 		if (d == 1) if (pob.x > Math.round(gP.width / s) * s) pob.x = 0; //Если мы двигаемся вправо, то если позиция эемента по X больше, чем ширина экрана, то ее надо обнулить
// 		if (d == 2) if (pob.y > Math.round(gP.height / s) * s) pob.y = 0; //Если мы двигаемся внизу, то если позиция элемента по X больше, чем высота экрана, то ее надо обнулить
// 		if (d == 3) if (pob.x < 0) pob.x = Math.round(gP.width / s) * s; //Если мы двигаемся влево, и позиция по X меньше нуля, то мы ставим элемент в самый конец экрана (его ширина)
// 		if (d == 4) if (pob.y < 0) pob.y = Math.round(gP.height / s) * s; //Если мы двигаемся вверх, и позиция по Y меньше нуля, то мы ставим элемент в самый низ экрана (его высоту)
// 		if (pob.x == a[0] && pob.y == a[1]) newA(), sBody.unshift({x: f.x - s, y:l.y})
// 		g.fillRect(pob.x, pob.y, s, s);		
// 		// s - это ширина и высота нашего "квадрата"
// 	});
// }, 1000/30);

  }
  render() {
    console.log(this.state.x , this.state.y);
    
    return (
      <div>
        <div className="wrap_project">
          <div className="navigations_wrap" >
            <Menu />
          </div>
          <div className="canvas_wrap">      
            <canvas id="canvas" >            
            </canvas>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
