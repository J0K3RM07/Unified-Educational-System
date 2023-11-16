import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

import style from "./style.module.scss";
import Heading from "../../UI/Heading/Heading";

const Event = () => {
  return (
    <div className='container'>
      <Header />

      <div className={style.event}>
        <Heading text={"Мероприятие"} className={style.heading} />
        <div className={style.content}>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ipsum nam sapiente mollitia aut labore magni quia temporibus
            consequatur soluta libero expedita facilis, esse nostrum fugit
            veniam. Recusandae animi qui fugit. Fuga nulla labore at suscipit ad
            veritatis, neque corrupti aliquam esse, eveniet autem quae amet quia
            quasi animi beatae id repellendus quos, magni inventore repellat
            dolorum cum. Adipisci temporibus illum fugiat fugit libero dicta,
            repellat obcaecati sit voluptate! Quidem corrupti, nemo eligendi
            exercitationem ut incidunt quam maiores minus, tempore at similique
            suscipit fuga odit, molestias nulla eaque voluptates consequatur
            autem doloribus. Architecto totam eveniet earum sint, beatae, porro
            libero possimus delectus, impedit incidunt molestias vitae numquam
            voluptatibus unde expedita perferendis nostrum nam cum eaque?
            Cupiditate iure quas nisi consequatur eos, maiores temporibus
            corporis ullam, illo minus possimus esse tenetur! Eveniet pariatur
            expedita, vel veniam molestias quas veritatis soluta debitis eum
            quae maiores, inventore, consectetur esse rem temporibus laborum
            fugiat eius? Laboriosam ipsa, hic similique velit sunt nemo mollitia
            quidem fugiat! Distinctio reiciendis quae quidem harum pariatur
            provident illo optio modi commodi inventore, repudiandae sapiente
            voluptatibus quis laborum est iusto facere error? Repellat, sint.
            Asperiores natus aliquid nemo tempore obcaecati dignissimos officia
            labore rem quis. Enim assumenda odit error blanditiis.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
