import { Card } from '../Card/Card'
import style from './Katalog.module.css'


export function Katalog(){
    return(
        
        
           <div className={style.katalog}>
            <h5>Каталог товаров</h5>

            <div className={style.kateg}>
                <p>Категории</p>
                <button className={style.kk}>Все товары</button>
                <button className={style.k}>Шины\колеса</button>
                <button className={style.k}>Масла</button>
                <button className={style.k}>Ароматизаторы</button>
            </div>

            <div className={style.list}>

               
                <Card  image=' https://img.freepik.com/free-photo/3d-fox-cartoon-illustration_23-2151395236.jpg?size=338&ext=jpg&ga=GA1.1.1768026875.1728259200&semt=ais_hybrid' name='Лисичка' price='3000'/>
                <Card  image='https://shutok.ru/uploads/posts/2024-06/1717513345_shutok.ru.1.jpg ' name='Пчелокот' price='100000'/>
                <Card image='https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.1297763733.1728172800&semt=ais_hybrid' name='Котик' price='1000' />
                <Card  image=' https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg' name='Зайчик' price='5000'/>
                <Card  image=' https://sun9-9.userapi.com/s/v1/ig2/lxOx12NEk10epcWlSuPuujr0oqC9v5b2JsbriXnwTf9aCwYOB8UZalAyRlZe7BjBHidBbk_bVe_VVMtYF16eXiJg.jpg?quality=96&as=32x30,48x45,72x67,108x100,160x149,240x223,360x335,480x447,540x502,640x596,720x670,1008x938&from=bu&u=Fxz1kjRdwdaJNWKrSWpvvSHcRJW_XQJFSTVyNy31Tjw&cs=604x562 ' name='Шмелокот' price='72000'/>
                <Card  image='https://img.freepik.com/premium-photo/cute-tiny-hyperrealistic-anime-cat-from-pokemon-generate-ai_863021-4.jpg ' name='Милый кот' price='3000'/>

               


            </div>

            <div className={style.qq}>
             
             <button className={style.more}>Загрузить еще товары</button></div>

           </div>



      
       
    )
}