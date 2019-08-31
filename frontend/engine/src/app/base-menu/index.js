import  React  from  'react'
import './assets/style.css'


export default class BaseMenu extends  React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="menu">
                <div className="page-one">
                    <div className="bg-logo">
                        <div className="logo"></div>
                    </div>
                    <div className="wrapper-modes">
                        <div className="modes-control">
                            <button type='submit'></button>
                        </div>
                        <div className="modes">
                            <a href="#"><span className="usually"></span>Обычная игра(N x N)</a>
                            <a href="#"><span className="duel"></span>Дуэль(1 х 1)</a>
                            <a href="#"><span className="regulation"></span>Правила и режимы</a>
                            <a href="#"><span className="options"></span>Настроить змейку</a>
                            <a href="#"><span className="report"></span>Жалобы и предложения</a>
                        </div>
                    </div>
                    <div className="check-menu">
                        <div className="cricle active"></div>
                        <div className="cricle"></div>
                    </div>
                </div>
                <div className="page-two">
                    <div className="bg-logo">
                        <div className="logo"></div>
                    </div>
                    <div className="chat">
                        <div className="wrapper-chat">
                            <div className="hidden-chat">
                                <button type="submit"></button>
                            </div>
                            <div className="communication">
                            <div className="window-chat"></div>
                                <input type="text" placeholder="Напишите что нибудь"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>











        )
    }

}