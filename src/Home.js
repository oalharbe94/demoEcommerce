import "./Home.css";
import Product from "./Product";
import image from "./blueShoppingImage.jpg";
// import carPhoto from "./img/cartPhoto.jpg";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image landing-img"
          // src="https://image.freepik.com/free-photo/shopping-cart-moves-speed-light-backdrop-with-balloons-gift-boxes-all-live-futuristic-atmosphere-3d-render_172660-11.jpg" 
          src={image} 
          alt="our landing page"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 12 Pro, 128GB 6GB RAM, Silver, IP68 dust/water resistant,15.49 cm (6.1 inch) Super Retina XDR Display,12MP + 12MP + 12MP | 12MP Front Camera"
            price={116250}
            rating={5}
            image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-r1.jpg"
          />
          <Product
            id="49538094"
            title="Samsung Galaxy S21 Ultra 5G, 128GB 12GB RAM, skyblue, IP68 dust/water resistant"
            price={110000.0}
            rating={5}
            image="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Oppo Reno6 Pro+ 5G ilver, IP68 dust/water resistant .Android 11, ColorOS 11.3 ,128GB 8GB RAM, 256GB 12GB RAM ,UFS 3.1"
            price={85250}
            rating={4}
            image="https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno6-5g-1.jpg"
          />
          <Product
            id="49538094"
            title="ZTE nubia Red Magic 6R, Android 11, Redmagic 4.0 ,Dark Blue, Silver, Light Blue ,Glass front, aluminum frame, plastic back "
            price={55286.0}
            rating={4}
            image="https://fdn2.gsmarena.com/vv/pics/zte/zte-nubia-red-magic-6r-1.jpg"
          />
        </div>
        

        <div className="home__row">
          <Product
            id="4903850"
            title="Xiaomi Redmi Note 10 Pro , Android 11, MIUI 12,AMOLED, 120Hz, HDR10, 450 nits (typ), 1200 nits (peak),64GB 6GB RAM, 128GB 6GB RAM, 128GB 8GB RAM"
            price={48367.99}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/kf4ajrk0/mobile/t/4/4/mi-redmi-note-9-pro-mzb9586in-original-imafvnfgtacmgwu7.jpeg?q=70"
          />
          <Product
            id="23445930"
            title="APPLE Airpods Pro With Wireless Charging Case Active noise cancellation enabled Bluetooth Headset  (White, True Wireless)"
            price={21999.99}
            rating={5}
            image="https://rukminim1.flixcart.com/image/416/416/k5cs87k0/headphone/h/8/8/apple-earphone-1a-original-imafmyz2ufupkvxr.jpeg?q=70"
          />
          <Product
            id="3254354345"
            title="Mi Notebook 14 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 10 Home) JYU4243IN Thin and Light Laptop  (14 inch, Silver, 1.5 kg)"
            price={42999.99}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/koixwnk0/computer/9/p/x/na-thin-and-light-laptop-mi-original-imag2ygskfu3zew5.jpeg?q=70"
          />
        </div>
        

        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 198 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer  (Camellia Blue, RR21T2H2WCU/HL) ,198 L : Good for couples and small families,Digital Inverter Compressor ,5 Star : For Energy savings up to 55%"
            price={16888.98}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/k4ss2a80/refrigerator-new/j/w/v/rr21t2h2wcu-hl-5-samsung-original-imafnmkbyzev8szv.jpeg?q=70"
          />
          <Product
            id="3254354345"
            title="Godrej 19 L Convection Microwave Oven  (GMX 519 CP1 PZ, White Rose),Bring home this 19 L microwave and enjoy safe usage with its Child Lock function that prevents its use by a child. The digital display adds to the ease of use of this appliance. Choose from the 125 recipes that the Instacook function offers and easily cook your favourite food with its preset settings."
            price={7888.99}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/klzhq4w0/microwave-new/v/r/w/gmx-519-cp1-pz-godrej-original-imagyzexsnbkug24.jpeg?q=70"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 6 kg 5 star Inverter Fully Automatic Front Load with In-built Heater White  (WW60R20GLMA/TL) ,Fully Automatic Front Load Washing Machines have Great Wash Quality with very less running cost ,1000 rpm : Higher the spin speed, lower the drying time"
            price={20999.98}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70"
          />
          <Product
            id="3254354345"
            title="Bharat Lifestyle Nano Fabric 6 Seater Sofa  (Finish Color - Black Grey),Upholestry: Polycotton,Filling Material: Foam,W x H x D: 261 cm x 76 cm x 185 cm (8 ft 6 in x 2 ft 5 in x 6 ft)"
            price={18999.99}
            rating={4}
            image="https://rukminim1.flixcart.com/image/416/416/jmp79u80/sofa-sectional/t/a/r/black-polycotton-nano-bharat-lifestyle-black-grey-original-imaf9jnxsemqtmgk.jpeg?q=70"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;