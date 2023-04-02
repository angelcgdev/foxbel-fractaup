import { SidebarItem } from "./components/SidebarItem";
import Logo from "./../../../assets/images/foxbel-music@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './sidebar.css';
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useSideBarViewModel from "./ViewModel";

export const Sidebar = () => {

  const { sectionMenu, isMobile, handleMenu, isMenuOpen, pathSelected } = useSideBarViewModel();

  return (
    <aside className={`${isMobile?'sidebarMobile':'sidebar'} ${isMenuOpen?'open':''}`}>
      <div className="sticky top-0">
        <div className=" m-10 flex justify-between">
          <img className="w-full max-w-[250px]" src={Logo} alt="Logo"/>        
          <button role="menu" className="md:hidden h-9 w-9 outline-white outline-1 outline" onClick={handleMenu}>
                <FontAwesomeIcon icon={faClose} className="text-xs md:text-base lg:text-lg text-white"/>
            </button>
        </div>
        <nav className="text-white flex flex-col gap-[30px]">
            {
              sectionMenu.map(({title, paths: path}) =>(
                <div key={title} className="flex flex-col gap-1">
                  <h2 className="navigation-title px-10">{title}</h2>
                  <ul className="flex flex-col gap-2">
                  {
                    path.map(({href, name}, i)=>(
                      <li key={`${title}_${name}_${i}`}>
                        <SidebarItem href={href} active={pathSelected===href}>{name}</SidebarItem>
                      </li>
                    ))
                  }
                  </ul>
                </div>
              ))
            }
        </nav>
      </div>
    </aside>
  )
}
