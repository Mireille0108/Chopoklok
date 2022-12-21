import menu1 from '../../assets/images/menu-1.jpg';
import menu2 from '../../assets/images/menu-2.jpg';
import menu3 from '../../assets/images/menu-3.jpg';
import menu4 from '../../assets/images/menu-4.jpg';
import menu5 from '../../assets/images/menu-5.jpg';
import menu6 from '../../assets/images/menu-6.jpg';

const Menu = () => {
    return (
        <section className="menu-container">
            <header className="header-container flex flex-col justify-center w-1/2">
                <h1 className="text-orange-600 text-3xl font-extrabold">Today's Menu</h1>
                <p className="h-5 w-1/2 bg-teal-700 relative"></p>
            </header>
            <div className="menu-items-container
             w-full
            flex justify-center
             items-center 
             gap-2
            flex-wrap
           ">
                <div className="menu-item">
                    <span>menu 1</span>
                    <img src={menu1} />
                </div>
                <div className="menu-item">
                    <span>menu 2</span>
                    <img src={menu2} />
                </div>
                <div className="menu-item">
                    <span>menu 3</span>
                    <img src={menu3} />
                </div>
                <div className="menu-item">
                    <span>menu 4</span>
                    <img src={menu4} />
                </div>
                <div className="menu-item">
                    <span>menu 5</span>
                    <img src={menu5} />
                </div>
                <div className="menu-item">
                    <span>menu 6</span>
                    <img src={menu6} />
                </div>
            </div>
        </section>
    )
}

export default Menu;
