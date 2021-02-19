import { NavLink } from "react-router-dom";
import archDeskImg from "../../assets/img/arch-main-desk.jpg";
import archMobileImg from "../../assets/img/arch-main-mobile.jpg";
import "./Brands.css";

const Brands = (props) => {
  return (
    <div>
      <div className="brands-container-arch">
        <img
          className="brands-image-arch-desk"
          src={archDeskImg}
          alt="arch"
        />
        <img
          className="brands-image-arch-mobile"
          src={archMobileImg}
          alt="arch"
        />
        <div className="brands-name-arch">Arch</div>
        <NavLink className="brands-shop" to="/brand/Arch"> SHOP </NavLink>
        <NavLink className="brands-sell" to="/sell"> SELL</NavLink>
      </div>

      <div className="brands-container-harley">
        <div className="brands-name">Harley Davidson</div>
        <img
          className="brands-image-harley"
          src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-road-glide/2021-road-glide-f16/360/2021-road-glide-f16-motorcycle-01.jpg?impolicy=myresize&rw=1600"
          alt="2021 Road Glide"
        />
        <NavLink className="brands-shop" to="/brand/Harley Davidson"> SHOP </NavLink>
        <NavLink className="brands-sell" to="/sell"> SELL</NavLink>
      </div>
      <div className="brands-container-yamaha">
        <div className="brands-name">Yamaha</div>
        <img
          className="brands-image-yamaha"
          src="https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5f4be31b2a0ab63a745a4beb&w=1920"
          alt="YZF R1M"
        />
        <NavLink className="brands-shop" to="/brand/Yamaha"> SHOP </NavLink>
        <NavLink className="brands-sell" to="/sell"> SELL</NavLink>
      </div>
      <div className="brands-container-bmw">
        <div className="brands-name">BMW</div>
        <img
          className="brands-image-bmw"
          src="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/2021-BMW-R-nineT-lineup-First-look-Pure-GS-Scrambler-retro-motorcycles-9.jpg"
          alt="2021 R nineT Scrambler"
        />
        <NavLink className="brands-shop" to="/brand/BMW"> SHOP </NavLink>
        <NavLink className="brands-sell" to="/sell"> SELL</NavLink>
      </div>
      <div className="brands-container-ducati">
        <div className="brands-name">Ducati</div>
        <img
          className="brands-image-ducati"
          src="https://images.ctfassets.net/x7j9qwvpvr5s/7pNrWMaSWtvv3H6aHqhEL6/09116590a18c241ed5c863ecc72add26/DVL-1260-Bl-MY21-Model-Preview-1050x650-v02.png"
          alt="DIAVEL 1260"
        />
        <NavLink className="brands-shop" to="/brand/Ducati"> SHOP </NavLink>
        <NavLink className="brands-sell" to="/sell"> SELL</NavLink>
      </div>
    </div>
  );
};

export default Brands;
