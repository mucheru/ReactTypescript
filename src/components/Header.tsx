import React,{FC} from "react";
interface HeaderProps {
    name:string;
}
const Header:FC<HeaderProps> = ({name})=> {

    return (
        <div>Welcome {name}</div>
    )

}
export default Header;